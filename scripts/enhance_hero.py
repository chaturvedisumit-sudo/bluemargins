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
    "Re-render THIS image as a polished editorial PORTRAIT POSTCARD of the "
    "same woman. Keep her identity, hair, dress, necklace, current soft "
    "smile, and lantern-lit face EXACTLY the same. Apply these creative "
    "treatments:\n\n"
    "1) TIGHTER CROP: Re-frame the photo as a vertical portrait — the woman "
    "should occupy the central two-thirds of the image, head near the top "
    "third, waist or hip near the bottom. Crop out most of the foreground "
    "pool floor and the messy red towel on the lounger. Keep some sea, "
    "palms, and the warm city lights visible behind her shoulder so the "
    "coastal setting still reads.\n\n"
    "2) CINEMATIC TEAL & ORANGE COLOR GRADE: Push the shadows, sea and sky "
    "toward a deep cool teal/cyan. Push her skin, the lantern flame, the "
    "pool deck lights and the city lights toward a warm amber/orange. The "
    "contrast between cool background and warm subject should feel like a "
    "modern editorial cover — tasteful and rich, not garish or oversaturated.\n\n"
    "3) SOFT VIGNETTE: Apply a gentle dark vignette around the edges so the "
    "eye is drawn to her face.\n\n"
    "4) HANDWRITTEN CAPTION OVERLAY: At the bottom-right of the image, "
    "overlay a SMALL handwritten cursive ink caption in light cream/ivory "
    "color, slightly translucent (about 65% opacity), as if written with a "
    "fountain pen on the photo. Caption text exactly: \"from somewhere by "
    "the sea — S.\" Keep the handwriting elegant, small, and unobtrusive — "
    "no more than ~5%% of the image width. Do NOT add any other text, "
    "stamps, logos, or watermarks.\n\n"
    "5) Maintain crisp editorial sharpness on her face, hair, dress, and "
    "necklace. Realistic skin texture, no airbrushing. Output a single "
    "magazine-cover-quality vertical portrait."
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
