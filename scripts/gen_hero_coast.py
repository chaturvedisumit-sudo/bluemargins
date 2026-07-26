"""Generate the Blue Margins hero watercolor coastal landscape via Gemini Nano Banana."""
import asyncio
import base64
import os
import sys
from pathlib import Path

from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv(Path(__file__).resolve().parent.parent / "backend" / ".env")

DEST = Path("/app/frontend/src/assets")
DEST.mkdir(parents=True, exist_ok=True)
OUT = DEST / "hero-coast.png"

PROMPT = (
    "An elegant hand-painted WATERCOLOR illustration (not a photograph) of a "
    "quiet coastal landscape, painted loosely on warm ivory textured paper. "
    "Composition: a calm blue SEA meeting a pale SANDY shoreline in the "
    "foreground, with gentle curved tide lines and soft low waves where the "
    "water meets the sand. On one side, distant soft blue CLIFFS / a headland "
    "fading into a pale, soft HORIZON. A few very small, simple birds "
    "suggested with tiny brushstrokes high in the sky. Lots of calm negative "
    "space in the upper sky area.\n\n"
    "Style: delicate, translucent watercolor washes with visible paper "
    "texture, loose organic edges that FADE GENTLY into the ivory/white "
    "background (soft bleeding edges, no hard border, no frame, no rectangle, "
    "no circle). Minimal, airy, refined, literary — like an illustration in a "
    "poetry book.\n\n"
    "Strict colour palette only: muted indigo, slate blue, powder blue, soft "
    "blue-gray, warm ivory, and pale sand/beige. No bright saturated blues, "
    "no teal, no green, no orange sunset. Monochrome-blue and sand feeling.\n\n"
    "Background must be plain warm ivory (#FBF8F1) so the artwork blends into "
    "an ivory page. Absolutely NO text, NO lettering, NO signature, NO ink "
    "bottle, NO notebook, NO people. Landscape orientation, roughly 4:3."
)


async def main():
    api_key = os.getenv("EMERGENT_LLM_KEY")
    if not api_key:
        sys.exit("EMERGENT_LLM_KEY missing")

    chat = LlmChat(
        api_key=api_key,
        session_id="bm-hero-coast",
        system_message="You are a fine-art watercolor illustrator.",
    ).with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )

    print("Generating watercolor coast…")
    _text, images = await chat.send_message_multimodal_response(
        UserMessage(text=PROMPT)
    )
    if not images:
        sys.exit("No image returned")
    OUT.write_bytes(base64.b64decode(images[0]["data"]))
    print(f"Saved -> {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    asyncio.run(main())
