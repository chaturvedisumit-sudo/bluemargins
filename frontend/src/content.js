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
  email: "shalini.poems@gmail.com",
  socials: [
    {
      label: "Instagram",
      handle: "@shalinismusings",
      href: "https://www.instagram.com/shalinismusings",
    },
    {
      label: "Medium",
      handle: "medium.com/@shalinic",
      href: "https://medium.com/@shalinic",
    },
    {
      label: "LinkedIn",
      handle: "linkedin.com/in/shalini-chaturvedi",
      href: "https://www.linkedin.com/in/shalini-chaturvedi-56a8a793",
    },
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
    "Poems, fragments, essays, and thoughts from a quiet introspection before they are paper-folded and poised to read.",
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
    title: "A Wintry Beckoning",
    award: "A Sonnet",
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


// Fragments, essays and stories. `full` is shown in a reading modal.
// Entries without `full` show a "Coming soon" state instead of the modal.
export const journal = [
  {
    id: "illusion-of-choice",
    kind: "Essay",
    title: "The Illusion of Choice",
    description:
      "Perhaps, we measure freedom by our ability to make independent choices. To decide what we want and follow that matrix of decisions. In theory, it's wonderful. Who wouldn't want to be the architect of their own life? But even if nobody were standing in our way, would we necessarily make free choices?",
    // PLACEHOLDER: publication date
    date: "[Publication date]",
    full: `You know when you have one of those moods? When you really want to spend an inordinate amount of time doing… nothing. When you're so exhausted from trying to catch up with everything, you just sit meditatively on the couch, neither asleep nor awake, letting your thoughts drift.

And then, from the clear blue sky, an uninvited thought pops into your head.

Is there really such a thing as freedom of choice?

I throw the question back at the universe. No answer. Ok then, back to Instagram reels. And there again, a woman with Chardonnay in her manicured hand, overlooking a lush pool at sunset in a red evening gown. "Success is having the choice to take off with your girlfriends when you want."

Ugh.

And thus began my weekend quest for the truth. As with philosophical questions, I found no absolute answer, only enough arguments to convince me that everybody was at least partly right and that I was probably none the wiser.

Here's what I think.

Everybody craves freedom. We celebrate it, tattoo it onto our bodies, complain about its absence and dream about lives unburdened by responsibility. Yet how do you know you're free?

Perhaps, we measure freedom by our ability to make independent choices. To decide what we want and follow that matrix of decisions. In theory, it's wonderful. Who wouldn't want to be the architect of their own life?

But even if nobody were standing in our way, would we necessarily make free choices?

That, I think, is the more interesting question.

Totally uncalled-for flashback to the thirteen-year-old me.

A gangly, amiable girl with some serious fashion blunders to her credit. I became friends with a cool, confident girl who dressed like she had been born with a copy of Vogue in her hands. Naturally, I wanted to become her.

So when Dad returned from one of his foreign trips with Milan-style mini-skirts for me, I was dizzy with excitement. I put on a white tee, the checkered skirt and my new shoes and walked to my friend's house to show off my transformation.

Except somewhere along that half-mile walk, it all started falling apart.

The skirt was too tight. Too revealing. I spent the entire journey tugging it down and hoping nobody I knew would see me. My friend loved it, of course. But deep down I knew that it was unlikely to see broad daylight again.

Nobody had forced me to wear it. My friend hadn't asked me to. My father hadn't objected. Yet I hadn't exactly made an independent choice either. I wanted to look like my friend. I wanted to become a version of myself that I thought would belong.

To a bystander, it looked like freedom of choice. Inside my head, it was peer pressure.

And that is what makes choice so complicated.

As we grow older, the choices become more consequential. Take the choice of what we want to be.

As children, the sky's the limit — astronaut, doctor, pilot, actor, artist. But as we grow up, the reality-filter kicks in through our grades, financial circumstances, family expectations, social status, geography and our understanding of what constitutes a "sensible" life.

Eventually, the decision feels entirely personal. This is what I chose.

But how much of that choice was free?

The same thing happens with money.

"What's your dream salary? Think hard. We may just make your dreams come true." A cocky interviewer flashed his best conceited smirk, a calculation crossing his slanted eyes.

I confidently said ₹10,000.

How did I arrive at that number? By asking a friend what entry-level employees were earning, adjusting the figure until it seemed ambitious without being absurd. I was technically free to ask for anything. But my cost-to-company had already been defined by what I believed people like me could reasonably ask for.

What about information? Does knowledge give us freedom to make better choices?

And this is where our modern lives make the question even more interesting.

Once, the supermarket seemed like the ultimate expression of freedom: shelves filled with dozens of varieties of cereal, ketchup, coffee and everything else imaginable. Today, the supermarket has followed us home.

Netflix recommends what we should watch. Spotify predicts what we might like to hear. Amazon anticipates what we might buy. Instagram and YouTube continuously decide what deserves our attention.

We have never had more choices.

We have also never had so many platforms helping us choose.

And there is an intriguing contradiction here. Research on choice overload suggests that too many options can actually make us less satisfied, more hesitant and more likely to defer a decision. Recommendation systems solve part of that problem by narrowing the field for us. But studies of AI-assisted shopping and streaming have also found that recommendations can reduce our sense of control over the decision.

So if an algorithm gives me three options from a thousand possibilities, am I exercising freedom or simply choosing within a framework someone else has constructed?

Perhaps the answer is both.

Interestingly, recent research suggests that people are more willing to accept algorithmic recommendations when they retain some control over the process — such as being able to choose how many recommendations they receive.

So then, freedom may not mean having infinite choices. It may mean having enough control over the process to understand that the choice is actually yours.

And even if we strip away all these external influences, there is another problem: our own minds.

We tend to trust our experiences when making decisions. Unfortunately, memory is hardly the objective archive we imagine it to be. We remember selectively. We attach emotion to events. A bad experience can colour an otherwise excellent one.

Imagine choosing a restaurant for an anniversary dinner. You mentally scroll through the places you've been before. One restaurant had wonderful food and beautiful ambience, but you also remember having a terrible argument there. Another reminds you of a disastrous date. Suddenly, neither restaurant feels right.

Your brain has made the decision before you've had a chance to examine the evidence.

Tricky, manipulative beast, that brain of yours.

So perhaps freedom of choice isn't the absence of influence. That may be impossible.

Perhaps it is awareness of influence.

It is knowing when we're responding to social pressure, when we're following an expectation we inherited, when we're being nudged by an algorithm, when we're choosing from a deliberately narrowed set of possibilities, and when our own memories and instincts are quietly making the decision for us.

That requires self-awareness. It requires questioning our first impulse. It requires being able to recognize manipulation without assuming that every influence is manipulation. And perhaps it requires enough humility to accept that other people's choices may make perfect sense within their circumstances, even when we wouldn't make the same ones.

I began this thought experiment wondering whether freedom of choice existed at all.

I don't think I found the answer.

But I did realize something while thinking about the kind of life I want for my kids.

I don't simply want her to have every possible choice. I want her to understand herself well enough to know which choices are genuinely hers.

Because perhaps freedom isn't having every door open. But it is in knowing how to choose the door you walk through.`,
  },
  {
    id: "dear-diary",
    kind: "Essay",
    title: "Dear Diary, Where Have You Gone?",
    description:
      "I have a blog. I write poetry. I have spent years writing for readers—life lessons for the next generation, love letters to a future spouse, career advice, observations about working women. Almost everything I write seems to have an audience attached to it. Perhaps that is precisely why I need a diary again.",
    // PLACEHOLDER: publication date
    date: "[Publication date]",
    full: `"I write this sitting in the kitchen sink. That is, my feet are in it; the rest of me is on the draining board, which I have padded with our dog's blanket and the tea cozy."

With these first words of I Capture the Castle, I discovered that literature could be something other than the heavy classics I had mostly read until then. I devoured Dodie Smith's novel as an adult, on bus journeys to my third job at Infosys. I read it every morning, before bed, over breakfast. I kept returning to Cassandra's private journal, to her witty observations about her peculiar family and the peculiar art with which she concealed her own feelings.

Cassandra comes of age through the act of writing. Her matter-of-fact voice brings beauty to a crumbling castle, poverty, and complicated love. There was something about Smith's decision to tell a conventional coming-of-age story through fragments of a girl's journal that stayed with me. It made me want to write one of my own.

So I did.

I began keeping a journal during my years at Infosys. I would sit outside on the vast campus and write about strangers: their restrained smiles, grey suits and forced conversations. I read those entries again recently, ten years later, and had the unsettling feeling that I was trespassing in somebody else's mind.

"What am I doing here? In this well of grey shirts casting a dark shadow on blank faces," one entry reads.

The melodrama makes me smile now. There were no great tragedies or heartbreaks to justify it. Much of the writing feels borrowed from the books I was reading — Ayn Rand, Kafka, Chopin, Emily Brontë — rather than earned from my own life. I was writing as though someone were watching.

Perhaps I had always done that.

As a teenager, I kept one of those pink electronic journals with tiny icons and a 500-character limit. I would come home, make tea, eat French fries and type furiously about my day. Crushes, friends, enemies: everything was name-coded. I was terrified someone would discover what I had written about the boy with the glasses and faded blue jeans.

The diary disappeared when I moved back to India. At the time, I was relieved. Now, I mourn it. I imagine it contained half-hearted haikus about rainy afternoons, adolescent wars with acne, and all the insignificant things that become precious once they can no longer be recovered.

Which makes me wonder: why did I stop?

I have a blog. I write poetry. I have spent years writing for readers — life lessons for the next generation, love letters to a future spouse, career advice, observations about working women. Almost everything I write seems to have an audience attached to it.

Perhaps that is precisely why I need a diary again.

Not to produce something. Not to be profound. Not even to preserve a version of myself worth presenting later.

Just to arrest a life that is otherwise constantly moving.

I want to write down the colour of rain on cobbled lanes. The things my daughter says without realizing they are funny. The ordinary observations that photographs flatten into posed memories. I want to record days that contain nothing worth posting.

Perhaps the real beauty of a diary is that it has no obligation to become literature.

It can be messy. Self-indulgent. Boring. Unfinished. It can contain thoughts that never need to be defended because nobody is supposed to read them.

And maybe, after years of writing for someone, there is something liberating about writing for nobody.

So, Dear Diary, I don't know what happened there.

But I'm going to make up for lost time.`,
  },
  {
    id: "start-from-scratch",
    kind: "Story",
    title: "Start From Scratch — With Cardamoms",
    description:
      "For Lalitha, there was hardly any time for an uninterrupted cup of hot chai in recluse. One would think that for a woman of over fifty who lived alone in her own self-imposed exile in a bungalow, it shouldn't be so difficult.",
    // PLACEHOLDER: publication date
    date: "[Publication date]",
    full: `For Lalitha, there was hardly any time for an uninterrupted cup of hot chai in recluse. One would think that for a woman of over fifty who lived alone in her own self-imposed exile in a bungalow, it shouldn't be so difficult. Surrounded with lush mango trees and mogra bushes in blooming white and yellow clusters, she rarely left her idyllic environs. Everything from dairy to vegetables to expensive silks and rare-blue china found its way to her doorstep. Lalitha was an avid buyer with an eye for details. She had learned the art of buying from her mother, a shrewd, poker-faced lady who never let an emotion surface while haggling with hawkers. It was this heirloom quality that had served Lalitha more than anything in the world — the ability to keep a calm exterior in the presence of the most turbulent tempests.

But while her power of negotiation helped her curate the choicest material possessions by merely a stretch of a hand, it came to no avail in relationships. At the age of 34, her husband had passed away prematurely to malaria. She had provided all of the hands in raising her son, Viraj, who was just nine when they were struck by this tragedy. Perhaps, it was this callous shadow cast by her partner's early demise that made her distant to the family that lived. Slowly, she had moved away from her husband's family as well as her own to find sanctity in the house she had built lovingly with her husband. But to Viraj, she clung on. He was the last relic holding her close to her husband, the memories of whom were waning, as if he had never existed in her life, not even in her bed.

Eventually, Viraj too moved on to pursue his higher studies abroad. He fell in love and married, slipping away little by little to the prolific milestones and ambitions of life. Lalitha, even though embittered by the prospect of loneliness at first, took it in a stride. Viraj urged his mother to follow, pleading that a new life awaited her with open arms.

"I may be getting too old for you to understand me, Veer. But for me, life stands where I am. Right here, in this house."

With those words, they had drifted apart, to meet every year with nostalgic warmth and presents on Christmas holidays. Every year, irrespective of whether they met or not, she knitted for Viraj a red sweater, for his wife a tasteful crocheted blouse, and with a new addition to the family, her grandson, she had gone far and beyond to include blankets, shoes, socks and everything that she could get her spectacled eyes to carve out for her flesh and blood.

She had made some close friends in the neighbourhood. They flooded her house on the weekends for an extended musical evening, blasting off Lata-Kishore duets on karaoke. Her deft hands whipped up her signature freshly-made buns, butter chicken, and caramel custard and by the end of the evening, the house was incensed with a gorgeous blend of citrusy, jasmine hints of her famous sangria. To her friends, it was a welcome haven, bare of the sound of bickering families and the noisy chuckles of kids. Her house had this impeccably clean, non-judgemental sort of aura and the only foul odours that would cross one were those that came from her pets.

"Ramshankar, you're really not yourself today! Work with me, will you? Veer is on his way from Nashik. He should be here in the next half-hour." Lalitha's voice boomed across the vacant two-story edifice that was looming with a touch of ghostliness as the podgy neighbourhood set about to retire for an hour or two for an afternoon siesta.

"Arre bhabhi. Don't worry now. Sit here and relax a bit."

Ramshankar, Lalitha's loyal man-servant and overseer of things, lightly held her hand and escorted her to her armchair resting by the white wooden porch that ran all the way across the entrance to her house. This arm-chair was Lalitha's favourite spot in the entire house. In the day, it was awash with combed sunlight that also delicately dazzled a small pond set right across the front yard of Lalitha's bungalow. The trees, with its leaves touched golden, swayed to the light breeze that made that sultry part of the day bearable. Reluctantly, Lalitha sat down to catch her breath and dry her dark, wavy hair with red tints where it should be grey. Her hair was glorious when it was drying so she never fussed about it that much.

In the pits of her stomach, she wanted to feel excited, the reason evident in the lavish fare that she'd been slaving to prepare for Veer since dawn. Taking care to tone down the spices, she knew how his metamorphosed palate could neither handle a generous hand of spices nor her favourite herb, coriander — 'cilantro', as he would now call it.

It was perhaps the predictability of solitary life that made her miss Veer less than she dared to admit. Moreover, as the years went by, she realized she couldn't permeate through the profound barriers set since his adolescence. She accepted the gulf between them as fate and let him go, replacing her swiftly-slipping youth with friends, plants and pets.

Lalitha heard the screech of tyres on gravel before she saw the taxi come to a dwindling halt at her doorstep. Her first instinct was to run to her son, bare-footed and expectant. But a sinister feeling of being a victim of fate took over and she continued to sit. With palpable breathing, she craned her head to see Viraj. She could see, even from a distance, his lion-like, slanted eyes, blazing with fire in the sun. His thin lips set into a wide smile as he waved to his mother. She couldn't help but blush as she found herself staring directly at a ghost from the past — her husband. Just as he ran towards her, the kheer that was simmering in the kitchen, sent a loving whiff of sweet cardamoms to usher him in her memories. In that moment, her hostility faded away a little at a time, forever. She was unsuspectingly sailing towards the long-abandoned shores of the past.

Veer was seven years old. It was a Sunday. Her husband and Veer sat by the family table, manipulated to be directly in front of the TV. Mahabharata was showing the episode where Bheem was going to wolf down an entire vessel of kheer made by Kunti. Just as Bheem wiped the vessel clean, Veer would also sit with his cauldron of kheer. Lalitha watched in disbelief, cheering violently, as her son downed a family portion of kheer in less than five minutes. He emerged from inside the vessel, bathed in milk and cardamoms, with a victorious smile.

She didn't know how long she sat in the gleaning arms of the past for when she pried her misty eyes open, she saw Viraj, kneeling before her, holding her hand tightly, never wanting to let go.`,
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
