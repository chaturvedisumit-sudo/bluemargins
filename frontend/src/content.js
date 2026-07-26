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

// PLACEHOLDER: replace titles, excerpts, categories, and links
// with real poems once available. Do NOT invent poetry.
export const poems = [
  {
    id: "poem-1",
    title: "[Poem Title One]",
    excerpt: "[Add a short three-to-five-line excerpt from the poem here.]",
    category: "[Poetry category]",
    href: "#poems",
    art: "branch",
  },
  {
    id: "poem-2",
    title: "[Poem Title Two]",
    excerpt: "[Add a short three-to-five-line excerpt from the poem here.]",
    category: "[Poetry category]",
    href: "#poems",
    art: "moon",
  },
  {
    id: "poem-3",
    title: "[Poem Title Three]",
    excerpt: "[Add a short three-to-five-line excerpt from the poem here.]",
    category: "[Poetry category]",
    href: "#poems",
    art: "page",
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
      // PLACEHOLDER: replace with a real description of the book
      description: "[Add a short description of the book here.]",
      links: [
        { label: "Amazon", href: "https://www.amazon.in/dp/B0H9LYMYY5Z" },
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
