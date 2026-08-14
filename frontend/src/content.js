// =============================================================
// Blue Margins — Central Content Configuration
// -------------------------------------------------------------
// Edit site copy here. Anything in [square brackets] or marked
// PLACEHOLDER is intended to be replaced with real content.
// =============================================================

export const site = {
  name: "Blue Margins",
  author: "Shalini",
  tagline: "Poetry and Writing by Shalini",
  seal: "Words Leave Echoes · Poems Leave Room",
  // PLACEHOLDER: replace with a real public email address
  email: "[Add public email address]",
  socials: [
    // PLACEHOLDER: replace href + handle with real profiles
    { label: "Instagram", handle: "[Add Instagram profile]", href: "#" },
    { label: "Substack", handle: "[Add profile or publication link]", href: "#" },
  ],
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "poems", label: "Poems" },
  { id: "books", label: "Books" },
  { id: "journal", label: "Journal" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  heading: "If I were a verb, I’d be ruminate.",
  question: "Who are you when nobody’s watching?",
  support:
    "Poems, fragments, essays, and thoughts from the quiet spaces before language fully knows what they are.",
  primaryCta: { label: "Read the poems", href: "#poems" },
  secondaryCta: { label: "Meet Shalini", href: "#about" },
  marginNote: "In the space beside the words, I listen.",
};

// The About introduction is supplied verbatim and must not be
// edited, shortened, or embellished.
export const about = {
  // PLACEHOLDER: replace with Shalini's photograph
  portraitAlt: "Author portrait placeholder — replace with Shalini’s photograph",
  intro: [
    { type: "lead", text: "If I were a verb, I’d be ruminate." },
    { type: "lead", text: "Who are you when nobody’s watching?" },
    {
      type: "p",
      text:
        "If an alien looked down at me from somewhere beyond the atmosphere, it would probably think the screen had frozen. There I’d be, staring out of a window, pausing halfway through making tea, sitting on a park bench a little longer than necessary. It would never know that, inside, entire worlds were rearranging themselves.",
    },
    { type: "emphasis", text: "Hi, I’m Shalini." },
    {
      type: "p",
      text:
        "I’ve been writing for as long as I can remember—first in backyard journals and the margins of school notebooks, later on napkins, receipts, and the Notes app at two in the morning. Somewhere between childhood and adulthood, I stopped thinking of writing as something I did and realized it was the way I moved through the world.",
    },
    { type: "p", text: "These days, that movement mostly takes the shape of poetry." },
    {
      type: "p",
      text:
        "Blue Margins is a home for poems, fragments, essays, and the thoughts that arrive before language fully knows what they are. I write about love, loss, longing, family, the beautiful absurdity of being human, and the quiet moments that most people walk past.",
    },
    {
      type: "p",
      text:
        "If something here feels like it already belonged to you, then it has found the right reader.",
    },
    { type: "p", text: "Welcome." },
  ],
};

// Real poems by Shalini Chaturvedi. `excerpt` is what shows on the card;
// `full` is the complete poem for future detail pages. Categories/awards
// only appear when non-empty.
export const poems = [
  {
    id: "wallflowers",
    title: "Wallflowers",
    award: "Winner — MyStory Tata Literature Live! 2023",
    excerpt:
      "They find mirth in the strangest places\ntendrils twined to the outskirts of wind's frenzy\ngrowing in the bramble of stiff recluse\nbrimming in dust of unworn dancing shoes.",
    href: "#poems",
    art: "branch",
    full: `Wallflowers don't know where to bloom
so they sprout within shade of bowers
camouflaged in dense foliage of leaves
their petaled laughs within green rustles sieged

They find mirth in the strangest places
tendrils twined to outskirts of wind's frenzy
growing in the bramble of stiff recluse
brimming in dust of unworn dancing shoes

A yellow bee may momentarily flit about
to unfurl their breadth of existence in sundry notes
they bleed their faint scent in ruminating stains
and curl moist and still, as after the tumult of rain

They can't be coaxed into feverish bursts of sway
underneath dark-lidded dreams, they're always tipping astray`,
  },
  {
    id: "cashmere",
    // PLACEHOLDER: title — set to "Untitled" until a final title is provided
    title: "Untitled",
    excerpt:
      "My chafed lips draw a draft of mildewed air\nWith damp embers of kisses they do gleam\nHands tucked in the raining feel of cashmere\nA matronly warmth sewn between its seams",
    href: "#poems",
    art: "moon",
    full: `A sylvan frost gently nips my ear lobes
Fluttering ghosts caressing soft and gray
Sunlight dazzles my eyes in fraying strobes
skidding, spiralling through tree-fringed walkways

My chafed lips draw a draft of mildewed air
With damp embers of kisses they do gleam
Hands tucked in the raining feel of cashmere
A matronly warmth sewn between its seams

Twilight sings purple jazz to horizons
Robins retreating with reluctant sighs
Puddles beneath ice chime in oblivion
their sinuous-flowing braid brittled dry

And when I sleep, I fade as the cold earth below me
Lofty promises tucked beneath a soft pillow crease.`,
  },
  {
    id: "breakfast-in-florence",
    title: "Breakfast in Florence",
    excerpt:
      "The barista serves\ncrystalline hearts on the house\non the side\nof a short, dark espresso",
    href: "#poems",
    art: "page",
    full: `There's this breakfast place I know
that serves great cornettos
the kind of great
a warm pastry can bring
the kind of great
a succulent peach can sing

The barista serves
crystalline hearts on the house
on the side
of a short, dark espresso
on the side
of a salt-sweet innuendo
that I wouldn't have stripped through its foreign weaves
was it not for the nude fresco sprawled in his iris

so I hang this undulating endearment in a line
separating each syllable crisp and dry
making a mental note to locate its lingual wonk
when ambling through the city's lovesick sidewalks
but for now my tongue craves honey
like a holed-up, groveling cat

We eat and drink standing
spilling crumbs of a rulebook in between loud gabs
till our feet
tingle like christmas bells
till we're two fat silos
hanging by a body's will
to save six euros

and just when we think
we're belly-up in cream
the hollow cornetto reveals its tart mystery
and we fade
melting into its liquid-brown vista
just two sun-baked snowflakes.`,
  },
];

// Published & upcoming books.
// 'Sea, Sand, Wind' details/links are REAL. The description is a placeholder —
// replace description text; add more book objects as new titles publish.
export const books = {
  heading: "Books",
  intro:
    "Collected work in print — for the shelf, the bedside, the coat pocket.",
  items: [
    {
      id: "sea-sand-wind",
      title: "Sea, Sand, Wind",
      format: "Hardcover",
      status: "Available now",
      cover: "sea-sand-wind",
      description:
        "In Sea, Sand, Wind, feel the verses shapeshift from prayer-like serenity to a stormy flux of emotions, to depict the vastness inside the crumbling, sand-crusted walls of a human body waning softly with the winds of time.",
      links: [
        { label: "Amazon", href: "https://amzn.in/d/05kE1Mft" },
        {
          label: "Notion Press",
          href: "https://direct.notionpress.com/in/read/sea-sand-wind-hardcover",
        },
      ],
    },
  ],
};


// PLACEHOLDER: replace with real fragments, essays, and notes.
// Do NOT invent essays or personal stories.
export const journal = [
  {
    id: "j-1",
    kind: "Fragment",
    title: "[Fragment or essay title]",
    description: "[A short introduction will be added here.]",
    date: "[Publication date]",
    href: "#journal",
  },
  {
    id: "j-2",
    kind: "Essay",
    title: "[Fragment or essay title]",
    description: "[A short introduction will be added here.]",
    date: "[Publication date]",
    href: "#journal",
  },
  {
    id: "j-3",
    kind: "Journal Note",
    title: "[Fragment or essay title]",
    description: "[A short introduction will be added here.]",
    date: "[Publication date]",
    href: "#journal",
  },
];

export const featuredQuote =
  "If something here feels like it already belonged to you, then it has found the right reader.";

export const newsletter = {
  heading: "Stay in the Margins",
  copy: "Receive new poems, fragments, and occasional notes from Shalini.",
  placeholder: "Your email address",
  button: "Subscribe",
};

export const footer = {
  closing: "Made with care. Written in blue.",
};
