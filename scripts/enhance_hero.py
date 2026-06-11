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
    "Refine THIS portrait. Same woman, same identity, same dress, same setting. "
    "Make these adjustments only:\n\n"
    "1) SMILE: Reduce the smile slightly — make it softer and more subtle, "
    "closer to a calm, content half-smile. Less teeth showing, mouth a bit "
    "more relaxed, but still warm and genuine. Eyes still softly happy. Do "
    "NOT make her look serious or sad — just dial the smile down about 25%.\n\n"
    "2) SHARPNESS: Increase the overall image sharpness and clarity. Make the "
    "details crisp — hair strands, fabric texture of the dress, the necklace, "
    "the bougainvillea petals, the palm fronds, the pool tiles, and especially "
    "the face (skin, eyes, lips) should look sharp and well-defined. Apply "
    "tasteful editorial sharpening, NOT over-sharpened or crunchy. The image "
    "should feel like a high-resolution DSLR shot, not a blurry phone photo.\n\n"
    "3) Keep face brightness exactly where it is now — soft, natural lantern "
    "light. No flash look. Preserve facial features, identity, hair, scene "
    "composition. Output one image."
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
