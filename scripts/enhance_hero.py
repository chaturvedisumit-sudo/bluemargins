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

SRC_URL = "https://customer-assets.emergentagent.com/job_5518da31-3818-4830-8b4a-5491945b0483/artifacts/q983tzlw_20260426_205838.jpg"
LOCAL_SRC = Path("/app/frontend/public/poet-hero.jpg")
DEST_DIR = Path("/app/frontend/public")
DEST_PATH = DEST_DIR / "poet-hero.jpg"

PROMPT = (
    "Refine THIS portrait. Keep the SAME woman, same face, same identity, same "
    "dress, same setting (rooftop balcony at night by the sea). Make two subtle "
    "adjustments only:\n"
    "1) Brighten her FACE gently and naturally, as if it were lit by a soft "
    "lantern or warm ambient light — NOT a camera flash. No harsh white "
    "highlights, no washed-out skin, no over-exposed cheeks. Lift the shadows "
    "on her face just enough to make it visible and warm; keep the rest of the "
    "image (sky, sea, palms, pool) at its current brightness so the mood stays "
    "evening/twilight.\n"
    "2) Make her smile a touch warmer and more relaxed — a softly happy, "
    "genuine smile. Do NOT widen the mouth or show more teeth dramatically; "
    "just a gentle, natural improvement. Preserve her exact facial features, "
    "eye shape, nose, jawline and hair.\n"
    "Keep skin texture realistic — not airbrushed. Maintain editorial portrait "
    "quality. Output one image."
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
