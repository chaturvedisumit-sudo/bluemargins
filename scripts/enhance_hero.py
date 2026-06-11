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
DEST_DIR = Path("/app/frontend/public")
DEST_PATH = DEST_DIR / "poet-hero.jpg"

PROMPT = (
    "Re-render the SAME woman in the SAME exact pose, same dress, same location "
    "(rooftop balcony at night by the sea with palm trees and pool), but transform "
    "the photo as if shot by a professional editorial portrait photographer. "
    "Specifically: brighten the overall exposure tastefully so her face and the "
    "background are clearly visible; lift the shadows; warm the highlights gently; "
    "render skin tone naturally and flattering; preserve her facial features, "
    "expression, hair and identity EXACTLY — do not alter her face. "
    "Remove the lens flare, light streaks and glare/shiny artifacts (the diagonal "
    "streaks crossing the image and any bright reflection blobs) so the scene looks "
    "clean. Keep the warm pool lights and city lights in the background, but make "
    "them feel like soft, cinematic bokeh rather than harsh glare. Maintain the "
    "same composition (subject on the right, ocean & palms on the left, pool on "
    "the lower right). Output a single sharp, color-graded, magazine-quality image."
)


async def main():
    api_key = os.getenv("EMERGENT_LLM_KEY")
    if not api_key:
        sys.exit("EMERGENT_LLM_KEY missing")

    print("Downloading source image…")
    with urllib.request.urlopen(SRC_URL) as r:
        src_bytes = r.read()
    src_b64 = base64.b64encode(src_bytes).decode("utf-8")
    print(f"  source size: {len(src_bytes)} bytes")

    chat = LlmChat(
        api_key=api_key,
        session_id="poet-hero-enhance",
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
