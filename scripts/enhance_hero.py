"""One-shot script: download poet hero image, enhance via Gemini Nano Banana, save to frontend/public."""
import asyncio
import base64
import os
import sys
from pathlib import Path
import urllib.request

from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

load_dotenv(Path(__file__).resolve().parent.parent / "backend" / ".env")

SRC_URL = "https://customer-assets.emergentagent.com/job_loveletterstothesea/artifacts/gtt9vzkg_4d397274-6555-4149-9379-d184024f6748.jpeg"
LOCAL_SRC = Path("/tmp/_unused_force_url.bin")
DEST_DIR = Path("/app/frontend/public")
DEST_PATH = DEST_DIR / "poet-hero.jpg"

PROMPT = (
    "Refine THIS portrait into a polished editorial POSTCARD of the same "
    "woman. The exposure and color are already great — keep them. Apply only "
    "these light treatments:\n\n"
    "1) GENTLE VIGNETTE: Add a very subtle dark vignette around the edges so "
    "the eye is drawn to her face. Soft, not heavy.\n\n"
    "2) HANDWRITTEN CAPTION OVERLAY: At the bottom-right of the image, "
    "overlay a SMALL handwritten cursive ink caption in a light cream/ivory "
    "color at ~70% opacity, as if written with a fountain pen across the "
    "photo. Text exactly: \"from somewhere by the sea — S.\" Keep the "
    "handwriting elegant and unobtrusive — no more than about 6% of the "
    "image width. Do NOT add any other text, stamps, logos, watermarks, "
    "borders, or frames.\n\n"
    "3) Preserve her identity, hair, dress, jewellery, smile, the bougainvillea, "
    "the palms, the sea, the pool, and the city lights exactly. Maintain "
    "sharp editorial quality and realistic skin texture. Output a single "
    "magazine-quality image."
)


async def main():
    api_key = os.getenv("EMERGENT_LLM_KEY")
    if not api_key:
        sys.exit("EMERGENT_LLM_KEY missing")

    print("Loading source image…")
    if LOCAL_SRC.exists():
        src_bytes = LOCAL_SRC.read_bytes()
        print(f"  using local: {LOCAL_SRC}")
    else:
        with urllib.request.urlopen(SRC_URL) as r:
            src_bytes = r.read()
        print("  downloaded from URL")
    src_b64 = base64.b64encode(src_bytes).decode("utf-8")
    print(f"  source size: {len(src_bytes)} bytes")

    chat = LlmChat(
        api_key=api_key,
        session_id="poet-hero-refine",
        system_message="You are a professional editorial portrait retoucher.",
    ).with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )

    msg = UserMessage(text=PROMPT, file_contents=[ImageContent(src_b64)])
    print("Calling Nano Banana…")
    text, images = await chat.send_message_multimodal_response(msg)
    print(f"  text: {(text or '')[:120]}")
    if not images:
        sys.exit("No image returned")

    DEST_DIR.mkdir(parents=True, exist_ok=True)
    img = images[0]
    out = base64.b64decode(img["data"])
    DEST_PATH.write_bytes(out)
    print(f"Saved {len(out)} bytes -> {DEST_PATH}")


if __name__ == "__main__":
    asyncio.run(main())
