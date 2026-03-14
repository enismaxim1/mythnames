import type { NameCategory } from "./categories";

export const categoriesPart1: NameCategory[] = [
  // ─────────────────────────────────────────────
  // D&D Races (1–15)
  // ─────────────────────────────────────────────
  {
    slug: "elf-name-generator",
    title: "Elf Name Generator",
    tagline: "Create elegant elven names steeped in ancient magic and starlight.",
    metaDescription:
      "Generate beautiful elf names for D&D, Tolkien-inspired worlds, and fantasy fiction. Get authentic elven names with meanings instantly.",
    nameType: "Elf",
    description:
      "Elven names carry the weight of millennia, each syllable a whisper of starlight and ancient forests. In Dungeons & Dragons, elves are among the longest-lived races, and their names reflect that deep connection to time, nature, and the arcane. High elves favor melodic, polysyllabic names drawn from Elvish linguistic traditions, while wood elves lean toward names that echo the rhythms of the wild.\n\nThe naming conventions for elves owe much to J.R.R. Tolkien, who constructed entire languages — Quenya and Sindarin — for his Eldar. Those linguistic roots have permeated modern fantasy, giving elven names their characteristic flowing vowels and soft consonants. A typical elf name might combine elements meaning 'star,' 'moon,' 'silver,' or 'leaf,' producing combinations that feel both musical and meaningful.\n\nWhether you are building a character for a tabletop campaign, writing fantasy fiction, or designing a game world, an elf name should feel timeless. Family names often reference ancestral deeds, celestial events, or sacred groves, reinforcing the idea that every elf is a living thread in a tapestry stretching back to the dawn of creation.",
    systemPrompt:
      "Generate elegant elven names using flowing vowel combinations and soft consonants (l, r, n, th, s). Draw from Tolkien's Sindarin and Quenya phonetics — prefixes like Ael-, Gal-, Thal-, Cel- and suffixes like -riel, -wen, -dor, -ion, -as. Include both a given name and a family/clan name. Each family name should evoke nature, starlight, or ancient history (e.g., Moonwhisper, Starweaver, Dawnpetal). Provide a brief meaning or etymology for each name.",
    group: "D&D Races",
    faqs: [
      {
        question: "How are elf names structured in D&D?",
        answer:
          "Elves typically have a personal name given in childhood and a family name. Some elves also carry a 'child name' used before they come of age around 100 years old, at which point they choose an adult name. Family names are usually Elvish words describing their lineage's history or homeland.",
      },
      {
        question: "What languages inspire elven names?",
        answer:
          "Most elven naming conventions trace back to Tolkien's constructed languages, Quenya and Sindarin. D&D's official Elvish draws on similar phonetic patterns — long vowels, liquid consonants (l, r), and soft fricatives (th, s). Finnish and Welsh also influenced Tolkien's languages and, by extension, modern elven names.",
      },
      {
        question: "Can I use the same elven names for high elves and wood elves?",
        answer:
          "While both subraces share Elvish roots, high elf names tend to be more ornate and polysyllabic (e.g., Aelindra, Thalionor), whereas wood elf names are often shorter and earthier (e.g., Fenra, Ashwyn). Matching name style to subrace adds authenticity to your character.",
      },
    ],
    related: [
      "half-orc-name-generator",
      "fairy-name-generator",
      "human-dnd-name-generator",
      "celtic-name-generator",
      "dragonborn-name-generator",
    ],
  },
  {
    slug: "dwarf-name-generator",
    title: "Dwarf Name Generator",
    tagline: "Forge sturdy dwarven names worthy of the mountain halls.",
    metaDescription:
      "Generate authentic dwarf names for D&D and fantasy settings. Get strong, resonant dwarven names with clan meanings instantly.",
    nameType: "Dwarf",
    description:
      "Dwarven names ring like hammer strikes on an anvil — short, hard, and resonant. In D&D lore, dwarves guard their true names closely, and every syllable reflects the stone and steel of their mountain kingdoms. A dwarf's clan name carries even more weight than the personal name, tying the individual to generations of miners, warriors, and craftsmen.\n\nTolkien's dwarves drew their names from the Dvergatal, a catalog of dwarf names in the Old Norse poem Voluspa. That Norse influence persists: hard consonants (k, g, d, t), rolling r's, and short vowels dominate. Names like Thorin, Gimli, and Balin feel immediately dwarven because they follow these phonetic rules.\n\nIn a campaign setting, a dwarf name should communicate resilience and tradition. Clan names often reference the family's craft or ancestral stronghold — Ironforge, Stonehammer, Deepdelver. Choosing the right name grounds your character in a culture that values loyalty, craftsmanship, and the unyielding strength of the deep earth.",
    systemPrompt:
      "Generate dwarven names using hard consonants (k, g, d, t, b), short vowels, and rolling r sounds. Draw inspiration from Old Norse and the Tolkien tradition. Given names should be 1-3 syllables — punchy and strong (e.g., Thord, Balgrim, Durak). Clan names should reference stonework, metalcraft, mining, or mountain geography (e.g., Ironfist, Deepforge, Cragborn). Always include both a given name and a clan name. Provide a brief note on meaning or origin.",
    group: "D&D Races",
    faqs: [
      {
        question: "How do dwarf clan names work in D&D?",
        answer:
          "A dwarf's clan name is granted at birth and reflects the family's ancestral trade or homeland. Losing one's clan name — through exile or disgrace — is the gravest dishonor a dwarf can suffer. Some dwarves also earn epithets based on personal deeds, such as 'Trollbane' or 'Gemcutter.'",
      },
      {
        question: "What makes a name sound distinctly dwarven?",
        answer:
          "Hard plosive consonants (b, d, g, k, t), short vowels (a, o, u), and consonant clusters (gr, dr, th, br) give dwarven names their trademark weight. Avoid long flowing vowels or soft sibilants, which skew elven. Think 'Brok' not 'Briellion.'",
      },
      {
        question: "Are D&D dwarf names different from Tolkien dwarf names?",
        answer:
          "They share the same Old Norse phonetic DNA, but D&D dwarves have more varied clan-name conventions. Tolkien's dwarves kept their true Khuzdul names secret and used outer names from the Dvergatal. D&D dwarves use their clan names openly and tie them to craft or geography.",
      },
    ],
    related: [
      "gnome-name-generator",
      "goliath-name-generator",
      "halfling-name-generator",
      "viking-name-generator",
      "norse-name-generator",
    ],
  },
  {
    slug: "halfling-name-generator",
    title: "Halfling Name Generator",
    tagline: "Discover cheerful halfling names fit for hearth and adventure.",
    metaDescription:
      "Generate charming halfling names for D&D campaigns and fantasy writing. Find warm, rustic names with family meanings instantly.",
    nameType: "Halfling",
    description:
      "Halfling names are warm, homely, and deceptively simple — much like the small folk themselves. In D&D, halflings value community, comfort, and quiet courage, and their names echo those priorities. Given names tend to be short and friendly, easy to call across a bustling kitchen or a village green.\n\nTolkien's hobbits set the template: names like Frodo, Bilbo, Samwise, and Pippin feel cozy and approachable, blending Old English roots with a pastoral sensibility. D&D halflings follow a similar pattern, favoring names that sound like they belong in a countryside hamlet rather than a wizard's tower. Lightfoot halflings lean into that rustic charm, while stout halflings sometimes borrow heavier, more grounded sounds.\n\nFamily names are equally important to halflings, often referencing the landscape, a trade, or a family quirk. Names like Goodbarrel, Underbough, or Thistletop paint an immediate picture of a lineage rooted in simple pleasures and close-knit communities. A well-chosen halfling name instantly signals a character who is brave without being brash, clever without being cunning.",
    systemPrompt:
      "Generate halfling names with a warm, rustic, English-countryside feel. Given names should be short (1-2 syllables), friendly, and approachable — think soft consonants, open vowels, and diminutive endings (e.g., Milo, Cora, Pippa, Bramble, Rosey). Family names should reference pastoral life, food, nature, or geography (e.g., Goodbarrel, Underbough, Thistletop, Hearthstone). Draw inspiration from Tolkien's hobbit naming conventions and English rural traditions. Provide both a given name and a family name with a brief flavor note.",
    group: "D&D Races",
    faqs: [
      {
        question: "What naming conventions do halflings follow in D&D?",
        answer:
          "Halflings have a given name and a family name. Given names are typically short and cheerful, while family names often describe a geographic feature near the family home, a trade, or a notable ancestor's trait. Nicknames are extremely common among halflings.",
      },
      {
        question: "How are halfling names different from hobbit names?",
        answer:
          "D&D halflings and Tolkien's hobbits share the same pastoral naming style, but D&D halflings have slightly more variety. Tolkien drew heavily from Old English and Gothic roots, while D&D halfling names can also echo rural French or Dutch influences. The overall feel, though, remains cozy and down-to-earth.",
      },
      {
        question: "Do lightfoot and stout halflings have different names?",
        answer:
          "There is no strict mechanical difference, but lightfoot halflings tend toward lighter, breezier names (Lidda, Cade), while stout halflings — with their dwarven connections — sometimes adopt slightly harder sounds (Garret, Bree). Family names remain pastoral for both subraces.",
      },
    ],
    related: [
      "gnome-name-generator",
      "human-dnd-name-generator",
      "elf-name-generator",
      "medieval-name-generator",
      "fairy-name-generator",
    ],
  },
  {
    slug: "tiefling-name-generator",
    title: "Tiefling Name Generator",
    tagline: "Unleash dark, infernal tiefling names that echo the Hells.",
    metaDescription:
      "Generate powerful tiefling names for D&D with infernal flair. Get unique names with dark meanings for your fiendish characters.",
    nameType: "Tiefling",
    description:
      "Tiefling names carry the smoldering embers of infernal heritage. Descendants of humans who struck pacts with devils, tieflings in D&D straddle two worlds — mortal society and the legacy of the Nine Hells. Their names reflect that tension, drawing from Infernal linguistic traditions with harsh, sibilant sounds that set them apart from their human neighbors.\n\nMany tieflings are named by their non-tiefling parents and receive names common to the local culture. Others, however, choose 'virtue names' — abstract concepts that define the ideals they strive toward or rebel against. Names like Torment, Carrion, Hope, or Glory turn a single word into a declaration of identity, a practice unique among D&D races.\n\nInfernal-influenced tiefling names tend to feature sharp consonants, rolling r's, and dark vowel sounds. Prefixes like Mor-, Raz-, Kri-, and suffixes like -ius, -ara, -oth give these names their distinctive bite. Whether your tiefling embraces their devilish ancestry or fights against it, the name should crackle with the tension of a soul caught between damnation and redemption.",
    systemPrompt:
      "Generate tiefling names in two styles: Infernal names and Virtue names. For Infernal names, use sharp consonants (z, k, r, x), dark vowels, and Latin/Infernal-sounding constructions — prefixes like Mor-, Raz-, Kri-, Zar- with suffixes like -ius, -ara, -oth, -ek (e.g., Morzaeth, Krivara, Razekius). For Virtue names, use a single evocative English word representing an ideal or concept (e.g., Torment, Glory, Sorrow, Creed, Penance). Alternate between both styles. Tieflings do not use family names. Include a brief note on the name's tone or meaning.",
    group: "D&D Races",
    faqs: [
      {
        question: "Do tieflings have last names?",
        answer:
          "Tieflings typically do not use family names, since many are outcasts or orphans disconnected from family lineages. Some adopt the surname of an adoptive family, while others go by a single name. Virtue names function as a complete identity on their own.",
      },
      {
        question: "What are tiefling virtue names?",
        answer:
          "Virtue names are single-word names that tieflings choose to represent an ideal, emotion, or concept central to their identity. Examples include Creed, Torment, Hope, Weary, and Glory. They are a deliberate act of self-definition, chosen in young adulthood.",
      },
      {
        question: "Can tieflings have human names?",
        answer:
          "Absolutely. Many tieflings are raised by human parents and given culturally appropriate human names. Some keep these names their entire lives; others abandon them for Infernal or Virtue names as they come into their own identity. Both approaches are equally valid in D&D lore.",
      },
    ],
    related: [
      "demon-name-generator",
      "aasimar-name-generator",
      "human-dnd-name-generator",
      "dragonborn-name-generator",
      "warforged-name-generator",
    ],
  },
  {
    slug: "dragonborn-name-generator",
    title: "Dragonborn Name Generator",
    tagline: "Claim a dragonborn name that thunders with draconic pride.",
    metaDescription:
      "Generate mighty dragonborn names for D&D with draconic heritage. Get clan names and personal names with powerful meanings.",
    nameType: "Dragonborn",
    description:
      "Dragonborn names rumble with the power of their draconic ancestry. In D&D, dragonborn are proud, honorable beings whose culture revolves around clan loyalty and personal honor. Their names reflect this — they are bold, multi-syllabic, and carry the guttural weight of the Draconic language.\n\nA dragonborn's clan name comes first, always, because the clan is more important than the individual. Personal names are given at birth by the clan elder and often invoke qualities the clan hopes the child will embody: strength, wisdom, ferocity, or cunning. The Draconic language favors hard consonants, aspirated sounds, and resonant vowels, giving dragonborn names their characteristic power.\n\nDragonborn naming traditions vary by chromatic and metallic lineage, though this is more cultural flavor than mechanical rule. A gold dragonborn clan might favor regal, flowing names, while a red dragonborn clan leans into fierce, aggressive sounds. Regardless of lineage, every dragonborn name is spoken with the weight of ancestral pride, a verbal banner proclaiming who they are and where they come from.",
    systemPrompt:
      "Generate dragonborn names with the Draconic naming convention: clan name first, personal name second. Use hard consonants (k, g, d, th), aspirated sounds (kh, sh), and strong vowels (a, o, u). Clan names should be compound and imposing (e.g., Kerrhylon, Drachedandion, Verthisathurgiesh). Personal names should be 2-3 syllables with a powerful sound (e.g., Balasar, Kriv, Torinn, Nala, Surina). Reference draconic virtues — honor, strength, fire, storms — in the name's flavor. Provide both clan and personal name with a brief meaning.",
    group: "D&D Races",
    faqs: [
      {
        question: "Do dragonborn put their clan name first or last?",
        answer:
          "Clan name comes first in dragonborn culture. When introducing themselves, a dragonborn leads with their clan identity — 'I am Kerrhylon Balasar' means 'I am Balasar of Clan Kerrhylon.' This reflects the dragonborn belief that the clan's honor supersedes individual glory.",
      },
      {
        question: "Do dragonborn names differ by dragon color?",
        answer:
          "There are no strict mechanical rules, but players often match name tone to lineage. Metallic dragonborn (gold, silver, bronze) might favor noble, flowing names, while chromatic dragonborn (red, black, green) might lean toward harsher, more aggressive sounds. It is a great roleplaying tool.",
      },
      {
        question: "What language are dragonborn names based on?",
        answer:
          "Dragonborn names derive from Draconic, D&D's dragon language. Draconic uses hard stops, guttural sounds, and sibilants. Real-world influences include Sumerian and ancient Semitic languages, which share the heavy consonant clusters and resonant vowel patterns.",
      },
    ],
    related: [
      "dragon-name-generator",
      "half-orc-name-generator",
      "tiefling-name-generator",
      "goliath-name-generator",
      "elf-name-generator",
    ],
  },
  {
    slug: "half-orc-name-generator",
    title: "Half-Orc Name Generator",
    tagline: "Earn a half-orc name forged in battle and born of two worlds.",
    metaDescription:
      "Generate fierce half-orc names for D&D that blend orcish strength with human grit. Get battle-ready names with meanings.",
    nameType: "Half-Orc",
    description:
      "Half-orc names sit at the collision point of two cultures — the brutal simplicity of orcish tradition and the varied complexity of human naming. In D&D, half-orcs often struggle for acceptance in both worlds, and their names tell that story. Some carry proud orcish names that snarl and bite; others adopt human names to fit into civilized society.\n\nOrcish names in D&D are guttural, short, and aggressive. They favor hard consonants and clipped vowels: Grok, Shump, Dench, Thokk. There is a raw, percussive beauty to them — names meant to be shouted across a battlefield. Orcish culture values strength above all, and names often reflect martial prowess or ferocious natural forces.\n\nHalf-orcs who grow up among humans might bear common human names but carry an orcish epithet earned through deeds. Others blend both traditions, creating names that are recognizably orcish but softened by human phonetics. This duality makes half-orc names uniquely expressive — every name is a statement about where the character stands between two worlds.",
    systemPrompt:
      "Generate half-orc names in two styles. For orcish-leaning names, use harsh guttural sounds — hard consonants (g, k, d, z), short vowels, and clipped syllables (e.g., Grokk, Thokk, Sharn, Durgat, Brula). For human-leaning names, use common human names with a rough edge or pair a human given name with an orcish epithet (e.g., Kord Bonesnapper, Mara Irontusk). Names should be 1-3 syllables. Half-orcs often earn battle-names or deed-names (e.g., Skullcrusher, Bloodfist). Provide the name with its cultural leaning and a brief note.",
    group: "D&D Races",
    faqs: [
      {
        question: "Do half-orcs use orcish or human names?",
        answer:
          "It depends on upbringing. Half-orcs raised among orcs carry orcish names. Those raised in human society often have human names. Many half-orcs adopt a second name or epithet later in life that reflects their mixed heritage or personal accomplishments.",
      },
      {
        question: "What do orcish names sound like?",
        answer:
          "Orcish names are short, guttural, and percussive. They use hard consonants (g, k, d, z), minimal vowels, and rarely exceed two syllables. Think of sounds you might shout in a war cry — that aggressive, clipped energy is the essence of orcish naming.",
      },
      {
        question: "Can half-orcs have elegant or soft-sounding names?",
        answer:
          "Absolutely. A half-orc raised in elven or human high society might have a refined name that contrasts sharply with their appearance. This dissonance can be a rich source of roleplaying — the name itself tells a story about the character's upbringing and identity.",
      },
    ],
    related: [
      "goliath-name-generator",
      "dragonborn-name-generator",
      "human-dnd-name-generator",
      "viking-name-generator",
      "dwarf-name-generator",
    ],
  },
  {
    slug: "gnome-name-generator",
    title: "Gnome Name Generator",
    tagline: "Invent whimsical gnome names brimming with curiosity and charm.",
    metaDescription:
      "Generate delightful gnome names for D&D full of whimsy and invention. Get creative gnome names with nicknames and meanings.",
    nameType: "Gnome",
    description:
      "Gnome names are a joyful cascade of syllables, reflecting the boundless curiosity and inventive spirit of D&D's smallest tinkerers. A gnome might accumulate half a dozen names over a lifetime — birth names, clan names, nicknames, self-chosen names, and honorary titles — wearing each one like a badge of some adventure or discovery.\n\nIn D&D lore, gnomes adore complexity and wordplay. Their given names often have a musical, polysyllabic quality: Boddynock, Dimble, Ellywick, Zook. These names feel playful and slightly absurd, which matches the gnomish personality perfectly. Rock gnomes favor names tied to invention and craft, while forest gnomes lean toward nature-inspired sounds.\n\nNicknames are perhaps the most important part of gnomish identity. A gnome's nickname — often given by friends and companions — is what they use in daily life. These can be descriptive (Sparklegear), punny (Nyx Tumblebolt), or utterly nonsensical. Collecting names is a gnomish passion, and a gnome with only one name is considered pitifully dull.",
    systemPrompt:
      "Generate gnome names with a whimsical, polysyllabic, playful quality. Given names should be 2-4 syllables with bouncy consonants and bright vowels (e.g., Boddynock, Ellyjobell, Fizzwidget, Roondar). Clan names should sound inventive or nature-linked (e.g., Beren, Nackle, Scheppen, Timbers). Always include a nickname — something fun, descriptive, or punny (e.g., Sparklegear, Wobblesprocket, Puddlejump). Forest gnome names should feel earthier; rock gnome names should feel more mechanical. Provide given name, clan name, and nickname with a brief personality hint.",
    group: "D&D Races",
    faqs: [
      {
        question: "Why do gnomes have so many names?",
        answer:
          "Gnomes are collectors by nature, and that extends to names. A typical gnome has a birth name, a clan name, several nicknames from friends, and possibly self-chosen names marking important life events. Using all of them in formal introductions is a beloved gnomish tradition.",
      },
      {
        question: "What are gnome nicknames like?",
        answer:
          "Gnome nicknames are casual, descriptive, and often humorous. They might reference a gnome's appearance (Stumbleduck), a habit (Nosetwitch), a profession (Gearspark), or an inside joke. Nicknames are given by friends and companions, and a gnome treasures each one.",
      },
      {
        question: "How are rock gnome and forest gnome names different?",
        answer:
          "Rock gnome names tend toward mechanical and inventive themes — lots of clicks and pops in the syllables, with nicknames referencing gadgets or crafts. Forest gnome names are softer, more nature-inspired, with nicknames tied to animals, plants, or woodland phenomena.",
      },
    ],
    related: [
      "halfling-name-generator",
      "dwarf-name-generator",
      "fairy-name-generator",
      "steampunk-name-generator",
      "firbolg-name-generator",
    ],
  },
  {
    slug: "human-dnd-name-generator",
    title: "Human D&D Name Generator",
    tagline: "Find the perfect human name for any D&D setting or culture.",
    metaDescription:
      "Generate diverse human names for D&D campaigns across every cultural tradition. Get setting-appropriate names with backstory hooks.",
    nameType: "Human D&D",
    description:
      "Human names in D&D are as varied as humanity itself. Unlike elves or dwarves, whose naming conventions follow tight cultural rules, human names span an enormous range — from the Calishite deserts to the Sword Coast cities to the frozen reaches of Icewind Dale. This diversity is both a strength and a challenge for players building human characters.\n\nThe Forgotten Realms alone contains over a dozen distinct human ethnic groups, each with its own naming traditions. Chondathan names echo medieval English and French. Mulan names draw from Egyptian and Mesopotamian roots. Shou names mirror East Asian conventions. Rashemi names have a Slavic flavor. Understanding which cultural tradition fits your character's homeland makes the name feel authentic.\n\nBeyond ethnic origins, human names in D&D reflect class, religion, and ambition. A noble might carry a grandiose family name, while a street urchin goes by a single nickname. Clerics might take devotional names honoring their god. This flexibility means human names can tell a rich backstory in just a few syllables, grounding even the most fantastical adventures in something recognizably real.",
    systemPrompt:
      "Generate human names for D&D's Forgotten Realms setting across diverse cultural traditions. Vary the cultural origin with each name: Chondathan (medieval English/French feel), Mulan (Egyptian/Mesopotamian feel), Shou (East Asian feel), Rashemi (Slavic feel), Calishite (Arabic/Persian feel), Illuskan (Scandinavian feel), Tethyrian (Mediterranean feel). Include both a given name and a surname appropriate to the cultural tradition. Note which culture or region the name fits, and include a brief backstory hook or meaning. Aim for variety across cultures rather than defaulting to Western European names.",
    group: "D&D Races",
    faqs: [
      {
        question: "What human cultures exist in D&D's Forgotten Realms?",
        answer:
          "The Forgotten Realms has many human ethnic groups, including Chondathan (common in the Western Heartlands), Mulan (Thay and Mulhorand), Shou (Kara-Tur), Rashemi (Rashemen), Calishite (Calimshan), Illuskan (the North), and Tethyrian (the Sword Coast). Each has distinct naming conventions inspired by real-world cultures.",
      },
      {
        question: "Can I just use real-world names for human D&D characters?",
        answer:
          "Yes, and many players do. D&D human names are intentionally inspired by real-world cultures, so a name like 'Marcus' or 'Yuki' or 'Khalid' can work perfectly. The key is matching the name to the in-world cultural group your character belongs to for consistency.",
      },
      {
        question: "Do human names in D&D have meanings?",
        answer:
          "They can. While D&D does not provide official etymologies for most human names, building meaning into your character's name — whether it references a virtue, an ancestor, or a place — adds depth. Many DMs and players enjoy names that hint at the character's destiny or personality.",
      },
    ],
    related: [
      "medieval-name-generator",
      "viking-name-generator",
      "celtic-name-generator",
      "halfling-name-generator",
      "pirate-name-generator",
    ],
  },
  {
    slug: "aasimar-name-generator",
    title: "Aasimar Name Generator",
    tagline: "Receive a celestial aasimar name touched by divine radiance.",
    metaDescription:
      "Generate celestial aasimar names for D&D inspired by angelic heritage. Get divine names with heavenly meanings for your character.",
    nameType: "Aasimar",
    description:
      "Aasimar names shimmer with celestial resonance, reflecting the divine spark that burns within these blessed beings. In D&D, aasimar are mortals with a celestial ancestor — often a deva or angel — and their names frequently bridge the gap between the mortal and the divine. Some carry names common to their human culture, while others bear names whispered to their parents in prophetic dreams.\n\nThe celestial influence in aasimar naming draws from real-world angelic traditions. Hebrew, Latin, and Greek roots dominate: suffixes like -iel, -ael, -ius, and -ara evoke the language of heaven. Names often contain references to light, grace, mercy, or dawn, reinforcing the aasimar's connection to the Upper Planes. Protector aasimar might bear names suggesting guardianship, while fallen aasimar carry names tinged with sorrow or defiance.\n\nBecause aasimar are raised among other races — usually humans — their names often blend celestial elements with local naming customs. An aasimar from a Calishite family might bear a name that mixes Arabic-inspired phonetics with angelic suffixes. This cultural layering makes aasimar names some of the most interesting to create in all of D&D.",
    systemPrompt:
      "Generate aasimar names blending celestial and mortal naming traditions. Use angelic phonetics — soft vowels, liquid consonants (l, r), and divine suffixes like -iel, -ael, -ius, -ara, -iel (e.g., Zariel, Luthiel, Seraphius, Anarael). Names should evoke light, grace, dawn, or mercy. Vary the mortal cultural influence: some names should feel Latin/Mediterranean, others Hebrew/Semitic, others broadly human-fantastical. Include both a given name and optionally a celestial epithet or title (e.g., 'Dawnbringer,' 'Voice of the Silver Flame'). Provide a brief note on meaning and whether the name suits a protector, scourge, or fallen aasimar.",
    group: "D&D Races",
    faqs: [
      {
        question: "How do aasimar get their names?",
        answer:
          "Aasimar are usually raised by mortal parents, so they often receive culturally appropriate human names. However, many aasimar parents report receiving the name in a divine vision or dream sent by the child's celestial guide. Some aasimar later adopt a celestial name that reflects their divine mission.",
      },
      {
        question: "Do aasimar names differ by subrace?",
        answer:
          "While there is no strict rule, protector aasimar names often evoke guardianship and light, scourge aasimar names carry intensity and purifying fire imagery, and fallen aasimar might bear names with melancholic or defiant overtones. The name can signal which path the character walks.",
      },
      {
        question: "What languages inspire aasimar names?",
        answer:
          "Celestial naming in D&D draws from Hebrew (angelic -iel and -ael suffixes), Latin (divine and ecclesiastical vocabulary), and Greek (philosophical and cosmic terms). These combine to produce names that feel otherworldly yet recognizable, like echoes of a language spoken in heaven.",
      },
    ],
    related: [
      "angel-name-generator",
      "tiefling-name-generator",
      "human-dnd-name-generator",
      "elf-name-generator",
      "fairy-name-generator",
    ],
  },
  {
    slug: "genasi-name-generator",
    title: "Genasi Name Generator",
    tagline: "Channel the elements with a genasi name of primal power.",
    metaDescription:
      "Generate elemental genasi names for D&D — fire, water, earth, and air. Get names that embody primal elemental power.",
    nameType: "Genasi",
    description:
      "Genasi names crackle, flow, rumble, or whisper — depending on which element courses through their veins. In D&D, genasi are mortals touched by the elemental planes, and their names often reflect the raw power of fire, water, earth, or air. Like tieflings, genasi navigate a world that sees them as outsiders, and their names become declarations of elemental identity.\n\nMany genasi are raised among humans and carry human names from their local culture. Others adopt or are given names that explicitly reference their element: a fire genasi might go by Ember or Cinder, while a water genasi might choose Ripple or Tempest. These elemental names function similarly to tiefling virtue names — they are chosen identities that proclaim the genasi's nature.\n\nThe most evocative genasi names blend elemental concepts with exotic phonetics. Fire genasi names might sizzle with sharp sibilants and hard consonants. Water genasi names flow with liquid sounds. Earth genasi names land with solid, grounded syllables. Air genasi names drift with breathy consonants and open vowels. Matching the name's sound to the element creates instant, visceral character identity.",
    systemPrompt:
      "Generate genasi names matched to all four elements. For fire genasi, use sharp, crackling sounds — sibilants, hard consonants, and hot imagery (e.g., Sizzara, Cindrex, Ashvane). For water genasi, use flowing, liquid sounds — l, r, w, and aquatic imagery (e.g., Rilavae, Tideon, Corallis). For earth genasi, use grounded, heavy sounds — d, g, b, and geological imagery (e.g., Brondor, Slatewick, Terragrim). For air genasi, use breathy, light sounds — h, wh, and sky imagery (e.g., Zephyrine, Aethon, Mistral). Label each name with its element. Include both elemental names and human-culture names adapted with elemental twists. Provide a brief note on each.",
    group: "D&D Races",
    faqs: [
      {
        question: "Do genasi names change based on their element?",
        answer:
          "They can. While many genasi have ordinary human names from their upbringing, those who embrace their elemental nature often choose or earn names tied to their element — Ember for fire, Torrent for water, Basalt for earth, Gale for air. Some genasi carry both a birth name and an elemental name.",
      },
      {
        question: "What are the four genasi subraces?",
        answer:
          "The four genasi subraces correspond to the four classical elements: fire genasi (burning skin, flame-like hair), water genasi (blue-tinged skin, aquatic features), earth genasi (stone-like skin, crystalline growths), and air genasi (light blue skin, breezy presence). Each has distinct visual traits and abilities.",
      },
      {
        question: "Can genasi have normal human names?",
        answer:
          "Yes. Most genasi are born to human parents and raised in human communities, so human names are common. Some genasi keep their human name throughout life, while others adopt an elemental name during a pivotal moment of self-discovery. Both approaches are valid.",
      },
    ],
    related: [
      "tiefling-name-generator",
      "dragonborn-name-generator",
      "aasimar-name-generator",
      "dragon-name-generator",
      "human-dnd-name-generator",
    ],
  },
  {
    slug: "goliath-name-generator",
    title: "Goliath Name Generator",
    tagline: "Stand tall with a goliath name earned on the mountain peaks.",
    metaDescription:
      "Generate powerful goliath names for D&D with birth names, nicknames, and clan names. Get mountain-worthy names instantly.",
    nameType: "Goliath",
    description:
      "Goliath names are a three-part declaration of identity, and every part is earned rather than inherited in the traditional sense. In D&D, goliaths live in harsh mountain environments where survival demands cooperation and merit, and their naming system reflects that ruthless practicality.\n\nEvery goliath carries a birth name assigned by the mother or father, a nickname assigned by the tribal chief, and a clan name. The nickname is the most important — it is a living descriptor that changes whenever the goliath accomplishes (or fails at) something notable. A goliath called 'Steadyhand' after a great climb might become 'Twicefallen' after a humiliating defeat. This system means goliaths are never allowed to rest on past glory.\n\nGoliath birth names are short and gender-neutral, with a slightly Slavic or Central Asian flavor. Clan names reference geography — always beginning with a core element tied to the mountain landscape. The entire naming system reinforces goliath culture: achievement matters more than bloodline, today matters more than yesterday, and the tribe matters more than the individual.",
    systemPrompt:
      "Generate goliath names in the D&D three-part format: birth name, nickname, clan name. Birth names should be short (2 syllables), gender-neutral, with a Slavic/Central Asian feel (e.g., Aukan, Keothi, Vimak, Ilikan, Manneo). Nicknames should be descriptive compound words reflecting a recent deed or trait — they can be positive or negative (e.g., Steadyhand, Lonehunter, Twicefallen, Horncarver, Dawncaller). Clan names should start with a natural prefix and reference mountain geography (e.g., Thuliaga, Katho-Olavi, Elanithino, Ogolakanu). Present all three parts and explain what the nickname references.",
    group: "D&D Races",
    faqs: [
      {
        question: "What are the three parts of a goliath name?",
        answer:
          "Every goliath has a birth name (given by parents, short and gender-neutral), a nickname (given by the tribal chief based on a notable deed or trait), and a clan name (shared by the whole tribe). When meeting strangers, goliaths typically use their nickname, as they consider it the truest reflection of who they are right now.",
      },
      {
        question: "Do goliath nicknames change?",
        answer:
          "Yes, frequently. A goliath's nickname is updated by the tribal chief whenever the goliath does something particularly noteworthy — good or bad. This means a goliath's nickname is always current, reflecting their most recent major accomplishment or failure. Past nicknames are forgotten.",
      },
      {
        question: "Are goliath names gendered?",
        answer:
          "Goliath birth names are largely gender-neutral. Goliath culture emphasizes capability over gender, and their names reflect this egalitarian approach. Nicknames are based entirely on deeds and traits, making them inherently ungendered as well.",
      },
    ],
    related: [
      "dwarf-name-generator",
      "half-orc-name-generator",
      "dragonborn-name-generator",
      "viking-name-generator",
      "firbolg-name-generator",
    ],
  },
  {
    slug: "tabaxi-name-generator",
    title: "Tabaxi Name Generator",
    tagline: "Pounce into adventure with a curious tabaxi name.",
    metaDescription:
      "Generate exotic tabaxi names for D&D inspired by feline grace and wanderlust. Get unique cat-folk names with clan meanings.",
    nameType: "Tabaxi",
    description:
      "Tabaxi names are poetic fragments — evocative phrases drawn from prophecy, nature, and wanderlust. In D&D, these feline humanoids hail from the jungles of Maztica, and their naming conventions are unlike any other race. Each tabaxi has a full name that reads like a short poem and a clan name borrowed from a geographic feature of their homeland.\n\nA tabaxi's full name might be 'Cloud on the Mountaintop' or 'Jade Shoe' or 'River of Hungry Flames' — vivid, imagistic phrases that capture a moment, sensation, or omen. In practice, tabaxi shorten these to a single-word moniker for everyday use: Cloud, Jade, River. The full name is reserved for formal occasions and carries deep personal significance.\n\nClan names reference the local geography of the tabaxi's jungle homeland — 'Distant Rain,' 'Snoring Mountain,' 'Whispering Canopy.' This naming system means every tabaxi name is inherently atmospheric, painting a picture of the world they come from and the restless curiosity that drives them to explore beyond it.",
    systemPrompt:
      "Generate tabaxi names following the D&D convention: a full poetic name (a short evocative phrase, 2-5 words, like 'Cloud on the Mountaintop,' 'Seven Thunders,' or 'Mirror of Stars'), a shortened everyday name (one word extracted from the full name, e.g., Cloud, Seven, Mirror), and a clan name (a poetic geographical reference like 'Distant Rain,' 'Snoring Mountain,' 'Whispering Canopy'). Names should evoke nature, weather, sensory experiences, and wanderlust. Be creative and varied — mix celestial, animal, plant, and elemental imagery. Provide all three parts with a brief note on the name's imagery.",
    group: "D&D Races",
    faqs: [
      {
        question: "How do tabaxi names work?",
        answer:
          "Tabaxi have a full name that is a short evocative phrase (like 'Jade Shoe' or 'Five Timber'), a shortened version used daily (Jade or Timber), and a clan name referencing a geographic feature of their homeland. The full name is personal and poetic, while the short name is casual and practical.",
      },
      {
        question: "What do tabaxi clan names represent?",
        answer:
          "Tabaxi clan names describe a geographic or atmospheric feature near the clan's homeland in the jungles of Maztica — things like 'Snoring Mountain,' 'Distant Rain,' or 'Bright Cliffs.' They anchor the tabaxi's identity to a specific place, even as the tabaxi wanders far from home.",
      },
      {
        question: "Can tabaxi change their names?",
        answer:
          "A tabaxi's full name is typically given at birth based on omens or visions, and it stays with them for life. However, the shortened everyday name can shift based on which part of the full name the tabaxi or their companions gravitate toward. Some tabaxi accumulate multiple short names over time.",
      },
    ],
    related: [
      "kenku-name-generator",
      "fairy-name-generator",
      "elf-name-generator",
      "firbolg-name-generator",
      "pirate-name-generator",
    ],
  },
  {
    slug: "kenku-name-generator",
    title: "Kenku Name Generator",
    tagline: "Echo a kenku name made of stolen sounds and mimicry.",
    metaDescription:
      "Generate unique kenku names for D&D — sounds, noises, and mimicked phrases. Get creative names for your corvid character.",
    nameType: "Kenku",
    description:
      "Kenku names are not names at all, in the traditional sense. They are sounds. In D&D, kenku lost the ability to speak creatively — they can only mimic sounds they have heard. This curse extends to their names: a kenku is known by a sound that defines them, a snippet of noise that other creatures use as an identifier.\n\nA kenku who works as a blacksmith might be called 'Clang.' One who lurks near waterfalls might answer to 'Splash.' A kenku thief could be known as 'the sound of coins jingling' — written colloquially as Jingle or Clink. These names are inherently onomatopoeic, and they shift and evolve as the kenku's life circumstances change.\n\nPlaying a kenku is an exercise in creative constraint, and naming one is the first test. The best kenku names are specific, evocative sounds that immediately paint a picture of who this bird-person is and what they do. A kenku name should make you hear the sound in your mind — the screech of a rusted hinge, the whisper of turning pages, the crack of a whip. The name is the character, distilled into a single auditory moment.",
    systemPrompt:
      "Generate kenku names that are environmental sounds, noises, or mimicked fragments. Each name should be a single evocative sound rendered as a word or short phrase: onomatopoeia (e.g., Clang, Splash, Creak, Whistle), abbreviated sound descriptions (e.g., Rusty Hinge, Snapping Twig, Dripping Tap), or mimicked fragments of speech or music (e.g., Lullaby, Last Call, Coin Drop). Include a brief description of what the sound actually is and what it implies about the kenku's life or profession. Be creative and varied — mix urban, natural, musical, and industrial sounds. Avoid generic names; each should paint a vivid auditory picture.",
    group: "D&D Races",
    faqs: [
      {
        question: "Why are kenku names just sounds?",
        answer:
          "Kenku were cursed by a mysterious entity to lose their creative voice and their ability to fly. They can only mimic sounds they have heard, never producing original speech. Their names follow this rule — a kenku is identified by a characteristic sound rather than a traditional name.",
      },
      {
        question: "How do you write a kenku name on a character sheet?",
        answer:
          "Most players render kenku names as the closest English approximation of the sound — 'Clang,' 'Whisper,' 'Creak,' 'Drip.' Some write a brief description in parentheses: 'Creak (sound of a door opening).' At the table, you can make the actual sound when introducing your character.",
      },
      {
        question: "Can kenku names change?",
        answer:
          "Yes, kenku names naturally evolve as the kenku's environment and activities change. A kenku thief known as 'Coin Clink' who becomes a sailor might gradually be renamed 'Rigging Snap' or 'Hull Creak.' The fluidity of kenku names reflects their adaptive, mimicry-driven culture.",
      },
    ],
    related: [
      "tabaxi-name-generator",
      "warforged-name-generator",
      "gnome-name-generator",
      "firbolg-name-generator",
      "halfling-name-generator",
    ],
  },
  {
    slug: "firbolg-name-generator",
    title: "Firbolg Name Generator",
    tagline: "Whisper a firbolg name rooted in the ancient forest.",
    metaDescription:
      "Generate gentle firbolg names for D&D connected to nature and the Feywild. Get forest-inspired names with deep meanings.",
    nameType: "Firbolg",
    description:
      "Firbolg names are secrets, shared only with the closest of kin. In D&D, firbolgs believe that names hold power and that sharing one's true name with outsiders invites vulnerability. Among other races, firbolgs go by Elvish names, nicknames, or simply decline to offer a name at all — a habit that baffles and sometimes frustrates their adventuring companions.\n\nThe firbolg concept of identity is deeply communal. They see themselves as part of the forest, not separate from it, and their true names reflect this — often tied to natural phenomena, seasons, or the Feywild's shifting beauty. A firbolg's true name might translate to something like 'the first frost on still water' or 'the shadow beneath the oldest oak.' These are not practical names for a tavern introduction, which is why firbolgs adopt simpler handles when dealing with the outside world.\n\nThe Elvish names firbolgs use among outsiders tend to be gentle and nature-connected, reflecting the deep friendship between firbolgs and the elven peoples. These names serve as a kind of social mask — functional and pleasant, but not the real thing. Playing a firbolg means engaging with this mystery: the name the world knows is never the whole truth.",
    systemPrompt:
      "Generate firbolg names in two layers. For the Elvish 'public' name, use soft, nature-connected Elvish-sounding names (e.g., Thalion, Miriel, Adanessa, Fennoval). For the secret 'true' name, provide a poetic nature phrase — something a firbolg might consider their deepest identity (e.g., 'Morning Dew on Spider Silk,' 'Roots Drinking Deep,' 'The Hush Before Snowfall'). Some firbolgs among outsiders may also go by simple descriptive nicknames (e.g., 'the tall one,' 'Green,' 'Keeper'). Present both the public and true name for each, and include a brief note about the firbolg's connection to nature or the Feywild.",
    group: "D&D Races",
    faqs: [
      {
        question: "Why do firbolgs keep their names secret?",
        answer:
          "Firbolgs believe that true names carry spiritual power and that revealing them creates vulnerability. Sharing your true name with someone is an act of profound trust in firbolg culture. Among outsiders, firbolgs use Elvish names or nicknames as a protective layer over their real identity.",
      },
      {
        question: "What do firbolg true names sound like?",
        answer:
          "Firbolg true names are more like nature poetry than conventional names — evocative phrases describing natural phenomena or Feywild imagery. Something like 'Moss Growing Over Forgotten Stones' or 'The Way Light Bends Through Rain.' They are beautiful, unwieldy, and deeply personal.",
      },
      {
        question: "Are firbolgs related to Irish mythology?",
        answer:
          "The name comes from the Fir Bolg, a mythological people in Irish legends. However, D&D firbolgs have evolved far from their mythological roots — they are giant-kin who live in forests and have a deep connection to the Feywild, blending Celtic myth with D&D's own cosmology.",
      },
    ],
    related: [
      "elf-name-generator",
      "fairy-name-generator",
      "gnome-name-generator",
      "goliath-name-generator",
      "celtic-name-generator",
    ],
  },
  {
    slug: "warforged-name-generator",
    title: "Warforged Name Generator",
    tagline: "Designate a warforged name that bridges machine and soul.",
    metaDescription:
      "Generate unique warforged names for D&D — from military designations to chosen identities. Get names for your living construct.",
    nameType: "Warforged",
    description:
      "Warforged names trace a journey from object to person. In D&D's Eberron setting, warforged were built as weapons — living constructs mass-produced for the Last War. Their original designations were military serial numbers and unit codes: things like 'Unit 7,' 'Titan-3,' or 'Scout Model IV.' These were labels, not names, assigned by creators who saw them as tools.\n\nAs warforged developed sentience and the war ended, many began choosing their own names — a profound act of self-determination. Some adopted names given by comrades-in-arms: 'Bulwark,' 'Cutter,' 'Pierce.' Others chose names that expressed their emerging identity: 'Book' for one who loved reading, 'Anchor' for one seeking stability. Still others took humanoid names, trying to fit into a world that was not built for them.\n\nThe naming of a warforged is inherently a story about identity, freedom, and what it means to be a person. A warforged character's name choice — whether it is a cold designation, a soldier's nickname, or a hopeful humanoid name — immediately tells you where they are on that journey from weapon to individual.",
    systemPrompt:
      "Generate warforged names in three styles. Military designations: functional codes and unit numbers (e.g., Titan-7, Scout IV, Unit 23-Baker). Earned nicknames: single-word names given by comrades based on function or personality (e.g., Bulwark, Cutter, Anchor, Book, Piston, Gauge). Chosen humanoid names: names the warforged selected for themselves from other cultures, sometimes slightly unusual choices (e.g., Rose, Thursday, Oak, Hymn, Candle). For each name, note which style it represents and include a brief line about what the name choice reveals about the warforged's self-identity. Mix all three styles in the output.",
    group: "D&D Races",
    faqs: [
      {
        question: "Do warforged have real names?",
        answer:
          "Warforged start with military designations — serial numbers assigned by their creators. Over time, many adopt names given by companions or choose names for themselves. The act of naming oneself is considered a milestone in warforged self-awareness and is a deeply significant personal moment.",
      },
      {
        question: "What setting are warforged from?",
        answer:
          "Warforged originate from D&D's Eberron setting, created by House Cannith as soldiers for the Last War. They have since been adopted into many campaign settings. In Eberron, the Treaty of Thronehold granted them legal personhood, making their name choices a symbol of newfound freedom.",
      },
      {
        question: "Can warforged have human or elven names?",
        answer:
          "Absolutely. Many warforged adopt names from the cultures they live among or admire. A warforged who spent time with elves might choose an Elvish name; one living in a human city might pick a common human name. These choices are deeply personal statements about belonging and aspiration.",
      },
    ],
    related: [
      "steampunk-name-generator",
      "kenku-name-generator",
      "human-dnd-name-generator",
      "gnome-name-generator",
      "goliath-name-generator",
    ],
  },

  // ─────────────────────────────────────────────
  // Fantasy & Mythology (16–25)
  // ─────────────────────────────────────────────
  {
    slug: "viking-name-generator",
    title: "Viking Name Generator",
    tagline: "Claim a Viking name worthy of the sagas and the sea.",
    metaDescription:
      "Generate authentic Viking names rooted in Old Norse history and mythology. Get warrior names with patronymic surnames and meanings.",
    nameType: "Viking",
    description:
      "Viking names ring with the clang of iron and the crash of northern seas. These are the names of the Norsemen — the raiders, traders, explorers, and settlers who shaped medieval Europe from the 8th to 11th centuries. Authentic Viking names draw directly from Old Norse, a language as rugged and precise as the people who spoke it.\n\nViking naming followed a strict patronymic system: a child's surname was their father's (or sometimes mother's) given name plus -son or -dottir. Erik, son of Ragnar, became Erik Ragnarsson. Astrid, daughter of Bjorn, became Astrid Bjornsdottir. There were no family surnames in the modern sense — each generation's name was freshly constructed. Beyond patronymics, Vikings earned bynames or kennings based on deeds, traits, or appearance: 'Bluetooth,' 'Ironside,' 'the Boneless,' 'the Red.'\n\nViking given names often contained elements with powerful meanings — 'Thor' (thunder), 'Ulf' (wolf), 'Bjorn' (bear), 'Hild' (battle), 'Sig' (victory), 'Frey' (lord). These compound elements could be mixed and matched, creating names that were both unique and semantically rich. A well-chosen Viking name carries the weight of real history and mythology in every syllable.",
    systemPrompt:
      "Generate historically authentic Viking names using Old Norse elements. Given names should combine meaningful Norse roots: Thor- (thunder), Sig- (victory), Ulf- (wolf), Bjorn- (bear), Stein- (stone), -hild (battle), -run (secret/rune), -frid (peace), -mund (protection). Always include a patronymic surname (-son or -dottir based on a Norse parent name). Optionally include a byname or kenning based on a deed or trait (e.g., 'the Bold,' 'Ironfist,' 'Storm-Born'). Provide the name, its Old Norse roots and meanings, and whether it is male or female. Keep names historically plausible.",
    group: "Fantasy & Mythology",
    faqs: [
      {
        question: "How did Viking names work?",
        answer:
          "Vikings used a given name plus a patronymic surname — their father's name with -son or -dottir appended. So Leif, son of Erik, was Leif Eriksson. They did not have hereditary family names. Many Vikings also earned bynames based on deeds, appearance, or personality traits.",
      },
      {
        question: "What do Viking name elements mean?",
        answer:
          "Most Viking names are compound words with specific meanings. Common elements include Thor (thunder), Ulf (wolf), Bjorn (bear), Sig (victory), Stein (stone), Hild (battle), Run (rune/secret), and Frid (peace). Combining these elements created names like Thorstein (thunder-stone) or Sigrun (victory-rune).",
      },
      {
        question: "Did female Vikings have different naming conventions?",
        answer:
          "Female Vikings used the same patronymic system but with -dottir (daughter) instead of -son. Their given names used many of the same root elements but often incorporated feminine-associated ones like -hild (battle), -dis (goddess), -run (secret), and -frid (peace). Women's names were just as strong and meaningful.",
      },
    ],
    related: [
      "norse-name-generator",
      "dwarf-name-generator",
      "medieval-name-generator",
      "celtic-name-generator",
      "pirate-name-generator",
    ],
  },
  {
    slug: "celtic-name-generator",
    title: "Celtic Name Generator",
    tagline: "Speak a Celtic name woven from myth, mist, and ancient tongue.",
    metaDescription:
      "Generate authentic Celtic names from Irish, Welsh, Scottish, and Breton traditions. Get mythological names with Gaelic meanings.",
    nameType: "Celtic",
    description:
      "Celtic names are spells made of sound — lyrical, complex, and deeply rooted in the myths of Ireland, Wales, Scotland, and Brittany. The Celtic linguistic tradition stretches back over two thousand years, and its names carry echoes of druids, warrior queens, and the Otherworld. These are names that feel ancient because they are ancient.\n\nThe Celtic language family splits into two branches: Goidelic (Irish, Scottish Gaelic, Manx) and Brythonic (Welsh, Cornish, Breton). Each branch has its own naming conventions and orthography. Irish names like Niamh, Caoilinn, and Oisin use spellings that baffle non-Gaelic speakers but follow strict phonetic rules. Welsh names like Rhiannon, Gwydion, and Branwen have a different music — more consonant clusters and a rolling, rhythmic quality.\n\nCeltic names almost always carry meaning. They reference natural features (Morrigan — 'phantom queen'), virtues (Bran — 'raven,' associated with wisdom), or mythological events. Using a Celtic name anchors a character in one of the richest storytelling traditions in human history, from the Ulster Cycle to the Mabinogion.",
    systemPrompt:
      "Generate Celtic names from across the Celtic language family. Include Irish Gaelic names (e.g., Niamh, Caoilinn, Fionn, Oisin), Welsh names (e.g., Rhiannon, Branwen, Gwydion, Taliesin), and Scottish Gaelic names (e.g., Ailsa, Callum, Morag, Lachlan). For each name, provide the correct Celtic spelling, a pronunciation guide in parentheses, the language of origin, and the meaning or mythological reference. Mix male and female names. Prioritize names with rich mythological connections — heroes, deities, and figures from the Ulster Cycle, the Mabinogion, and Fenian Cycle.",
    group: "Fantasy & Mythology",
    faqs: [
      {
        question: "How do you pronounce Celtic names?",
        answer:
          "Celtic languages have pronunciation rules quite different from English. Irish Gaelic uses combinations like 'bh' (pronounced 'v'), 'mh' (pronounced 'v' or 'w'), and 'aoi' (pronounced like 'ee'). Welsh uses 'll' (a voiceless lateral fricative), 'dd' (a voiced 'th'), and 'w' as a vowel. A pronunciation guide is essential.",
      },
      {
        question: "What is the difference between Irish and Welsh Celtic names?",
        answer:
          "Irish Celtic names come from the Goidelic branch and feature soft, vowel-rich sounds (Niamh, Saoirse, Oisin). Welsh names come from the Brythonic branch and tend toward harder consonant clusters and distinctive sounds (Gwydion, Llywelyn, Blodeuwedd). Both are Celtic but sound quite different.",
      },
      {
        question: "Are Celtic names appropriate for fantasy characters?",
        answer:
          "Celtic names are among the most popular choices for fantasy characters because they sound both exotic and grounded. Tolkien drew heavily from Welsh for his Elvish languages. Many D&D settings, particularly those with fey or druidic themes, map beautifully onto Celtic naming traditions.",
      },
    ],
    related: [
      "elf-name-generator",
      "fairy-name-generator",
      "norse-name-generator",
      "viking-name-generator",
      "firbolg-name-generator",
    ],
  },
  {
    slug: "norse-name-generator",
    title: "Norse Name Generator",
    tagline: "Invoke a Norse name drawn from the roots of Yggdrasil.",
    metaDescription:
      "Generate powerful Norse names inspired by mythology, the Eddas, and Old Norse language. Get names of gods, heroes, and legends.",
    nameType: "Norse",
    description:
      "Norse names echo from the halls of Valhalla and the branches of Yggdrasil. While Viking names refer specifically to the historical Norsemen of the 8th-11th centuries, Norse names cast a wider net — encompassing the full mythological tradition of Scandinavia, from the creation of the world to Ragnarok. These are the names of gods, giants, valkyries, and cosmic forces.\n\nThe Norse mythological corpus — the Prose Edda, the Poetic Edda, and the sagas — is a treasure trove of powerful names. Odin, Freya, Loki, Baldur, Skadi, Heimdall, Tyr — each name carries layers of narrative meaning accumulated over centuries of storytelling. Beyond the well-known deities, the Eddas contain hundreds of lesser-known names for dwarves, elves, giants, and mythic heroes that feel fresh and distinctive.\n\nNorse names work exceptionally well in fantasy settings because the mythology itself feels fantastical. A character named Hrothgar or Sigrdrifva immediately evokes a world of frost giants, enchanted weapons, and fate-woven destinies. The Old Norse language gives these names their power — compact, consonant-rich, and laden with meaning.",
    systemPrompt:
      "Generate names from the Norse mythological tradition, drawing from the Eddas, sagas, and Old Norse language. Include names of mythological figures (gods, valkyries, giants, elves, dwarves), saga heroes, and original names built from authentic Old Norse elements. Use mythological name elements: As- (god), Alf- (elf), Rag- (counsel), Sig- (victory), -heim (home/world), -gard (enclosure), -nir, -ir. For each name, provide the Old Norse form, meaning, and mythological context or reference. Mix well-known names (Freya, Baldur) with obscure ones from deep in the Eddas. Note pronunciation where it differs significantly from English spelling.",
    group: "Fantasy & Mythology",
    faqs: [
      {
        question: "What is the difference between Norse names and Viking names?",
        answer:
          "Viking names are historically attested names used by real Norsemen during the Viking Age (793-1066 CE). Norse names encompass the broader mythological tradition — including gods, supernatural beings, and legendary heroes from the Eddas and sagas. All Viking names are Norse, but not all Norse names are historically Viking.",
      },
      {
        question: "Where do Norse names come from?",
        answer:
          "The primary sources are the Prose Edda (written by Snorri Sturluson around 1220), the Poetic Edda (a collection of Old Norse poems), and the Icelandic sagas. The Dvergatal alone — a list of dwarf names in the Voluspa — provided Tolkien with most of his dwarf and wizard names.",
      },
      {
        question: "Can Norse names be used in D&D?",
        answer:
          "Absolutely. Norse mythology is one of the foundational influences on D&D. The game's dwarves, elves, and cosmology all draw from Norse sources. Norse names work perfectly for human characters from cold, northern regions, as well as for dwarves, barbarians, and any character with a mythic, fate-driven backstory.",
      },
    ],
    related: [
      "viking-name-generator",
      "dwarf-name-generator",
      "celtic-name-generator",
      "goliath-name-generator",
      "medieval-name-generator",
    ],
  },
  {
    slug: "medieval-name-generator",
    title: "Medieval Name Generator",
    tagline: "Bear a medieval name straight from the annals of history.",
    metaDescription:
      "Generate historically authentic medieval names from across Europe. Get noble, peasant, and knightly names with period accuracy.",
    nameType: "Medieval",
    description:
      "Medieval names transport you to a world of stone castles, feudal lords, and crusading knights. Spanning roughly the 5th to 15th centuries, the medieval period produced a rich tapestry of naming traditions across Europe — from Anglo-Saxon England to the courts of France, from the Italian city-states to the kingdoms of Iberia.\n\nMedieval naming conventions changed dramatically over the period. Early medieval names were often single names of Germanic origin — Aldric, Wulfstan, Godefroy. As the centuries progressed, hereditary surnames emerged, often based on occupation (Smith, Cooper, Thatcher), geography (Hill, Brook, Lancaster), patronymics (Johnson, Fitzpatrick, O'Brien), or personal characteristics (Strong, Swift, Little). The Norman Conquest of 1066 transformed English naming, flooding the language with French-origin names like William, Robert, and Alice.\n\nFor fantasy worldbuilding, medieval names provide an instant sense of grounded realism. They feel historical without being alien, familiar without being modern. A character named Aldric of Dunmere or Elowen Thatcher immediately belongs to a feudal world of lords, guilds, and village greens. Medieval names are the backbone of traditional fantasy naming.",
    systemPrompt:
      "Generate historically authentic medieval names from across Europe, spanning the 5th to 15th centuries. Include names from multiple traditions: Anglo-Saxon (Aldric, Wulfstan, Aethelflaed), Norman French (Guillaume, Elowen, Reynaud), Germanic (Hildegard, Gunther, Brunhild), Iberian (Alfonso, Ximena, Rodrigo), and Italian (Ginevra, Cosimo, Beatrice). Pair given names with period-appropriate surnames — occupational (Smith, Thatcher), geographic (of Dunmere, de Montfort), patronymic (Fitzwilliam, O'Brien), or descriptive (the Bold, Longshanks). Note the century and region each name fits, and include a brief historical or cultural note. Mix social classes: nobles, knights, merchants, and common folk.",
    group: "Fantasy & Mythology",
    faqs: [
      {
        question: "Did medieval people have last names?",
        answer:
          "Not at first. Early medieval people used single names, sometimes with a byname for distinction (Erik the Red, John of Gaunt). Hereditary surnames developed gradually from the 11th century onward, becoming standard by the 14th century in most of Europe. Surnames derived from occupations, places, fathers' names, or personal traits.",
      },
      {
        question: "What were the most common medieval names?",
        answer:
          "In medieval England after the Norman Conquest, William, John, Robert, and Richard dominated male names, while Alice, Matilda, Agnes, and Joan were common for women. Earlier Anglo-Saxon names like Aethelred, Godwin, and Hild were largely displaced by Norman French names after 1066.",
      },
      {
        question: "How are medieval names different from modern fantasy names?",
        answer:
          "Medieval names are grounded in real linguistic history — they evolved from Germanic, Latin, Celtic, and French roots following documented patterns. Modern fantasy names are often invented to sound exotic. Using authentic medieval names gives your worldbuilding a sense of weight and historical texture that invented names sometimes lack.",
      },
    ],
    related: [
      "human-dnd-name-generator",
      "viking-name-generator",
      "celtic-name-generator",
      "pirate-name-generator",
      "knight-name-generator",
    ],
  },
  {
    slug: "pirate-name-generator",
    title: "Pirate Name Generator",
    tagline: "Hoist the colors with a pirate name feared on every sea.",
    metaDescription:
      "Generate swashbuckling pirate names for games, stories, and fun. Get fearsome captain names with epithets and backstories.",
    nameType: "Pirate",
    description:
      "Pirate names swagger off the tongue like a shanty in a gale. The golden age of piracy (roughly 1650-1730) produced some of history's most colorful characters, and their naming conventions — part real identity, part theatrical invention — have become the stuff of legend. Blackbeard, Calico Jack, Anne Bonny, Black Bart: these names are as much brand as identity.\n\nReal pirate names often combined a common given name with a fearsome or descriptive epithet. Edward Teach became Blackbeard. Bartholomew Roberts became Black Bart. Jack Rackham became Calico Jack for his flamboyant clothing. These epithets were marketing tools as much as nicknames — a terrifying reputation was a pirate's greatest weapon, and a memorable name was the foundation of that reputation.\n\nFor fantasy and gaming purposes, pirate names can draw from this historical tradition while adding fantastical elements. A pirate in a D&D campaign might combine a salt-worn common name with an epithet referencing sea monsters, cursed treasure, or supernatural abilities. The key is that a pirate name should be memorable, slightly dangerous, and fun to say aloud — preferably while slamming a tankard on a tavern table.",
    systemPrompt:
      "Generate pirate names combining a real-sounding given name with a colorful epithet or nickname. Given names should sound historically plausible for the 17th-18th century Caribbean — English, Spanish, French, Dutch, or Portuguese origins (e.g., Edward, Josiah, Catalina, Jacques, Isabella). Epithets should reference the sea, violence, treasure, appearance, or reputation (e.g., Blacktide, One-Eye, Goldtooth, Storm-Singer, the Viper). Format as '[Given Name] \"[Epithet]\" [Surname]' or just '[Epithet] [Name]' (e.g., Josiah 'Blacktide' Marsh, One-Eye Catalina). Include a one-line backstory hook explaining how the pirate earned their epithet. Mix fearsome and roguish tones.",
    group: "Fantasy & Mythology",
    faqs: [
      {
        question: "How did real pirates get their names?",
        answer:
          "Most pirates used their real names combined with an earned epithet. Edward Teach became 'Blackbeard' for his famous facial hair. Bartholomew Roberts became 'Black Bart.' Some pirates adopted entirely false identities to protect their families from reprisal. Epithets were often based on appearance, behavior, or a notorious deed.",
      },
      {
        question: "Were there female pirates?",
        answer:
          "Yes. Anne Bonny and Mary Read are the most famous, serving under Calico Jack Rackham. Ching Shih commanded one of the largest pirate fleets in history in the South China Sea. Grace O'Malley was an Irish pirate queen. Female pirates existed across all eras and regions of piracy.",
      },
      {
        question: "Can pirate names work in fantasy settings?",
        answer:
          "Pirate names are perfect for fantasy — they already have a larger-than-life quality. In a D&D or fantasy context, you can add supernatural elements to the epithets: 'Ghosttide,' 'Kraken's Fist,' 'the Siren.' Pirate characters appear in countless fantasy settings, from the Sword Coast to Skull and Shackles.",
      },
    ],
    related: [
      "viking-name-generator",
      "human-dnd-name-generator",
      "medieval-name-generator",
      "steampunk-name-generator",
      "halfling-name-generator",
    ],
  },
  {
    slug: "steampunk-name-generator",
    title: "Steampunk Name Generator",
    tagline: "Craft a steampunk name of brass, gears, and Victorian grandeur.",
    metaDescription:
      "Generate elegant steampunk names blending Victorian style with industrial flair. Get inventive character names for any setting.",
    nameType: "Steampunk",
    description:
      "Steampunk names whir and click with the precision of a finely tuned clockwork mechanism. The steampunk genre blends Victorian aesthetics with fantastical technology, and its names follow suit — grounded in 19th-century naming conventions but ornamented with industrial, scientific, and mechanical flair.\n\nAuthentic steampunk names typically start with a genuine Victorian-era given name. The Victorian period produced wonderfully ornate names: Bartholomew, Cornelius, Genevieve, Millicent, Percival, Theodora. These names already carry a sense of formality and grandeur that fits the steampunk aesthetic. The key is in the surname, where steampunk names depart from pure history and embrace the fantastical.\n\nSteampunk surnames often reference technology, engineering, or natural philosophy: Cogsworth, Brasswick, Steamhaven, Clockwell, Ironveil. The best steampunk names blend the plausible with the impossible — they sound like they could belong to a real Victorian inventor who just happens to have built a difference engine that runs on aether. Titles and honorifics add further flavor: Professor, Captain, Lady, the Right Honourable. A good steampunk name should make you hear the hiss of steam and the tick of clockwork.",
    systemPrompt:
      "Generate steampunk names combining Victorian-era given names with inventive, industrial-themed surnames. Given names should be authentically Victorian — ornate and formal (e.g., Bartholomew, Cornelius, Genevieve, Millicent, Percival, Adelaide, Reginald, Cordelia). Surnames should reference steam technology, clockwork, metallurgy, or Victorian science (e.g., Cogsworth, Brasswick, Steamhaven, Ironveil, Gearhart, Clockwell, Ashboiler). Optionally include a title or honorific (Professor, Captain, Lady, Sir, Dr., the Right Honourable). Provide each name with a brief character concept — their role in a steampunk world (e.g., airship captain, mad inventor, clockwork engineer, aether researcher). Mix genders and social classes.",
    group: "Fantasy & Mythology",
    faqs: [
      {
        question: "What makes a name sound steampunk?",
        answer:
          "Steampunk names combine authentic Victorian given names (Cornelius, Adelaide, Percival) with surnames that reference industrial or mechanical themes (Cogsworth, Brasswick, Steamhaven). The contrast between period formality and fantastical technology creates the distinctive steampunk flavor. Titles like Professor or Captain enhance the effect.",
      },
      {
        question: "Are steampunk names based on real Victorian names?",
        answer:
          "The given names should be. Victorian naming conventions favored ornate, classical names — many drawn from Greek, Latin, or Germanic roots. The surnames are where creative license comes in, blending real Victorian occupational surnames (Smith, Cooper) with fantastical industrial elements (Cogsworth, Gearhart).",
      },
      {
        question: "Can steampunk names work in D&D?",
        answer:
          "Absolutely. D&D settings like Eberron have strong steampunk elements, and artificer characters are a natural fit for steampunk naming conventions. Even in traditional fantasy settings, a gnome or human inventor might carry a name with steampunk flair — it matches the tinkering, inventive character archetype perfectly.",
      },
    ],
    related: [
      "gnome-name-generator",
      "warforged-name-generator",
      "medieval-name-generator",
      "pirate-name-generator",
      "human-dnd-name-generator",
    ],
  },
  {
    slug: "fairy-name-generator",
    title: "Fairy Name Generator",
    tagline: "Discover an enchanting fairy name from the twilight realm.",
    metaDescription:
      "Generate magical fairy names inspired by folklore, flowers, and the Feywild. Get enchanting fae names with whimsical meanings.",
    nameType: "Fairy",
    description:
      "Fairy names flutter at the edge of hearing, delicate as moth wings and sharp as thorns. The tradition of fairy naming draws from centuries of European folklore, where the fae were not the cute, glittering creatures of modern pop culture but powerful, capricious beings who demanded respect — and whose true names held dangerous power.\n\nIn folklore, fairies often bear names connected to nature — flowers, trees, seasons, celestial bodies, and weather. Titania and Oberon from Shakespeare, Peaseblossom and Cobweb from A Midsummer Night's Dream, Tinker Bell from Barrie — each reflects a different facet of the fairy naming tradition. Some names are delicate and musical; others are wild and strange, reflecting the unpredictable nature of the fae.\n\nFor D&D and fantasy settings, fairy names can draw from this rich folklore while adding the otherworldly flavor of the Feywild. The best fairy names have a musical quality — lots of liquid consonants, open vowels, and a rhythm that feels like a half-remembered song. They should sound beautiful but slightly uncanny, as if the name itself might enchant you if you say it three times at twilight.",
    systemPrompt:
      "Generate fairy names with an ethereal, nature-connected, folkloric quality. Draw from multiple traditions: Shakespearean fae (Peaseblossom, Cobweb, Mustardseed), Celtic fairy lore (Seelie/Unseelie court names), Victorian flower fairies, and D&D Feywild conventions. Names should reference flowers, moonlight, seasons, dew, mist, starlight, thorns, or other natural phenomena. Use musical, flowing phonetics — liquid consonants (l, r), soft fricatives (s, sh), open vowels. Mix sweet, gentle names (Dewdrop, Primrose, Lunabell) with wilder, more dangerous fae names (Thornwhistle, Nightbloom, Ashenmere). Include a brief note on the fairy's court or nature (Seelie, Unseelie, solitary, seasonal).",
    group: "Fantasy & Mythology",
    faqs: [
      {
        question: "What are traditional fairy names from folklore?",
        answer:
          "Folklore fairies include Titania and Oberon (Shakespeare's fairy monarchs), Puck (also called Robin Goodfellow), Queen Mab (from Romeo and Juliet), and the Seelie and Unseelie courts of Scottish tradition. Many folkloric fairy names reference nature — Peaseblossom, Cobweb, Moth — reflecting the fae connection to the natural world.",
      },
      {
        question: "Are fairy names and elf names the same?",
        answer:
          "They overlap but differ in tone. Elven names tend toward the regal and melodic, drawing from Tolkien's constructed languages. Fairy names lean more whimsical and nature-connected, drawing from European folklore. An elf might be Galadriel; a fairy might be Briarrose. The fairy tradition is wilder and more capricious.",
      },
      {
        question: "Do fairies in D&D have their own naming conventions?",
        answer:
          "D&D fairies, introduced as a playable race in The Wild Beyond the Witchlight, use names drawn from the Feywild — nature words, sensory experiences, and whimsical concepts. They share naming energy with other Feywild creatures like sprites and pixies. The Seelie and Unseelie courts may have more formal naming traditions.",
      },
    ],
    related: [
      "elf-name-generator",
      "celtic-name-generator",
      "firbolg-name-generator",
      "gnome-name-generator",
      "angel-name-generator",
    ],
  },
  {
    slug: "dragon-name-generator",
    title: "Dragon Name Generator",
    tagline: "Name a dragon whose very syllables shake the earth.",
    metaDescription:
      "Generate epic dragon names for D&D, fantasy fiction, and worldbuilding. Get ancient, powerful names with draconic meanings.",
    nameType: "Dragon",
    description:
      "Dragon names should feel like the rumble before an earthquake — ancient, powerful, and slightly terrifying. Across mythology and fantasy, dragons are the ultimate apex creatures, and their names reflect that primal authority. A dragon's name is not given; it is claimed, earned, or simply is, as immutable as the dragon itself.\n\nIn D&D, dragon naming conventions vary by type. Chromatic dragons (red, black, blue, green, white) tend toward harsher, more aggressive names — guttural consonants, sharp vowels, and sibilant endings. Metallic dragons (gold, silver, bronze, copper, brass) often have more regal, melodic names reflecting their greater wisdom and nobility. Ancient dragons may have names so old they predate mortal languages entirely.\n\nThe best dragon names follow a rough phonetic rule: they should be difficult to say quickly. A dragon's name demands that you slow down, open your mouth wide, and give each syllable its full weight. Names like Klauth, Iymrith, Themberchaud, and Bahamut do not trip lightly off the tongue — they rumble. Real-world dragon names from mythology (Fafnir, Tiamat, Jormungandr, Smaug) follow the same principle: weight, depth, and an echo of something vast.",
    systemPrompt:
      "Generate dragon names that feel ancient, powerful, and resonant. Use heavy consonants (kh, th, dr, gr), dark vowels (au, ou, aa), and sibilant or rumbling endings (-ith, -ax, -or, -aur, -yth). Names should be 2-4 syllables and feel weighty when spoken aloud. Vary by dragon type: chromatic dragon names should sound fierce and aggressive (e.g., Vrakmorath, Szartharix, Kharyndrex); metallic dragon names should sound regal and wise (e.g., Aurelionax, Silvaranth, Thaldraxis). Include a dragon color/metal type, an age category (wyrmling, young, adult, ancient, greatwyrm), and a brief note on the dragon's personality or domain. Draw from D&D draconic lore, Tolkien, and world mythology.",
    group: "Fantasy & Mythology",
    faqs: [
      {
        question: "How are dragon names structured in D&D?",
        answer:
          "D&D dragons typically have a single powerful name, sometimes followed by an epithet earned over centuries (e.g., Klauth the Old Snarl, Iymrith the Doom of the Desert). Dragons do not use family names — each dragon's name is unique and personal. Ancient dragons may have names in the Draconic language with specific meanings.",
      },
      {
        question: "What makes a dragon name sound authentic?",
        answer:
          "Weight and depth. Dragon names should use heavy consonants (th, kh, dr), dark vowels (au, ou), and be difficult to rush through. Avoid light, airy sounds — nothing with soft 'ee' or 'la' sounds. The name should feel like it belongs to a creature measured in tons and centuries.",
      },
      {
        question: "Are there famous dragon names from mythology?",
        answer:
          "Many. Tiamat (Babylonian/D&D), Fafnir (Norse), Jormungandr (Norse, technically a serpent), Smaug (Tolkien), Nidhogg (Norse, gnaws at Yggdrasil's roots), and Ryujin (Japanese). Each culture's dragon names reflect its linguistic patterns, but they share that sense of primal, ancient power.",
      },
    ],
    related: [
      "dragonborn-name-generator",
      "demon-name-generator",
      "norse-name-generator",
      "genasi-name-generator",
      "medieval-name-generator",
    ],
  },
  {
    slug: "demon-name-generator",
    title: "Demon Name Generator",
    tagline: "Summon a demon name that echoes from the abyss.",
    metaDescription:
      "Generate terrifying demon names for D&D, horror, and dark fantasy. Get infernal names with occult meanings and dark power.",
    nameType: "Demon",
    description:
      "Demon names writhe on the tongue like something trying to escape. Across religious traditions, occult literature, and fantasy fiction, demon names carry a specific phonetic signature — harsh, discordant, and vaguely forbidden. They are names that sound like they were never meant to be spoken by mortal mouths.\n\nThe Western demonological tradition provides a rich catalog of names. The Ars Goetia lists 72 demons, each with a name, rank, and domain: Asmodeus, Belphegor, Astaroth, Malphas, Baal. These names draw from Hebrew, Sumerian, Greek, and Latin roots, often corruptions of pagan deity names absorbed into Christian demonology. In D&D, the distinction between demons (chaotic evil, from the Abyss) and devils (lawful evil, from the Nine Hells) produces different naming styles — demon names tend to be rawer and more chaotic.\n\nCreating an original demon name means embracing dissonance. Harsh consonant clusters (zr, kth, ghr), guttural vowels, and unexpected syllable breaks create that sense of wrongness that a good demon name needs. The name should be uncomfortable — not just evil-sounding, but subtly difficult to say, as if language itself resists giving shape to the entity.",
    systemPrompt:
      "Generate demon names that sound ancient, forbidden, and discordant. Use harsh consonant clusters (zr, kth, ghr, xv), guttural vowels (a, o, u), sibilants (s, z, sh), and unexpected syllable breaks. Names should feel like corrupted versions of real language — almost pronounceable but uncomfortable. Draw from demonological traditions: the Ars Goetia, Sumerian underworld mythology, Hebrew apocrypha, and D&D's Abyss. Include a mix of well-known demon names with original creations. For each name, note the demon's rank or type (demon lord, balor, marilith, lesser demon), domain or aspect (e.g., 'lord of desolation,' 'keeper of broken oaths'), and a brief description of their nature. Make the names viscerally unsettling.",
    group: "Fantasy & Mythology",
    faqs: [
      {
        question: "What is the difference between demon and devil names in D&D?",
        answer:
          "In D&D, demons are chaotic evil beings from the Abyss, and their names tend to be more guttural, chaotic, and raw (e.g., Demogorgon, Orcus, Graz'zt). Devils are lawful evil beings from the Nine Hells, with more structured, almost regal names (e.g., Asmodeus, Zariel, Dispater). The naming distinction reflects their opposing philosophies of chaos versus order.",
      },
      {
        question: "Where do real demon names come from?",
        answer:
          "Many well-known demon names originate from the Ars Goetia, a 17th-century grimoire listing 72 demons. Others come from Hebrew apocrypha (Lilith, Azazel), Sumerian mythology (Pazuzu), Zoroastrian tradition (Aeshma), or Christian theological texts. Many are corrupted names of pre-Christian deities that were demonized during religious transitions.",
      },
      {
        question: "How do I make an original demon name?",
        answer:
          "Start with harsh, guttural sounds — consonant clusters like 'zr,' 'kth,' or 'ghr.' Add dark vowels (a, o, u) and avoid light, pleasant sounds. Introduce an apostrophe or unexpected syllable break for alien feel. Test the name aloud — it should feel slightly uncomfortable to pronounce, as if the word resists being formed by human speech.",
      },
    ],
    related: [
      "tiefling-name-generator",
      "angel-name-generator",
      "dragon-name-generator",
      "dark-elf-name-generator",
      "warforged-name-generator",
    ],
  },
  {
    slug: "angel-name-generator",
    title: "Angel Name Generator",
    tagline: "Receive an angelic name resonating with celestial authority.",
    metaDescription:
      "Generate heavenly angel names rooted in religious tradition and fantasy lore. Get celestial names with divine meanings and power.",
    nameType: "Angel",
    description:
      "Angel names ring with the clarity of a bell struck in an empty cathedral — pure, resonant, and touched by the divine. The tradition of angelic naming spans Judaism, Christianity, and Islam, with names that have echoed through sacred texts for millennia. These names carry an inherent weight of authority and holiness that makes them powerful tools in fantasy worldbuilding.\n\nThe most recognizable angelic naming convention is the Hebrew suffix -el, meaning 'of God.' Michael ('who is like God'), Gabriel ('strength of God'), Raphael ('healing of God'), Uriel ('light of God') — these names encode divine purpose into their very structure. Beyond the well-known archangels, Jewish and Christian angelology catalogs hundreds of angels, each with a specific name, rank, and function: Metatron, Sandalphon, Raziel, Cassiel, Azrael.\n\nIn fantasy and D&D, angel names can draw from these traditions while expanding into new territory. The key phonetic markers are liquid consonants (l, r), clean vowels, and that characteristic -el or -iel suffix. Angel names should sound like light made audible — clear, bright, and impossible to ignore. Whether your angel is a benevolent guardian or a terrifying instrument of divine wrath, the name should convey absolute, unwavering purpose.",
    systemPrompt:
      "Generate angelic names drawing from Judeo-Christian-Islamic angelology and fantasy traditions. Use the characteristic Hebrew -el ('of God') and -iel suffixes (e.g., Azariel, Thamriel, Selaphiel), as well as other angelic phonetic patterns — clean vowels, liquid consonants (l, r), and a luminous quality. Include traditional angel names (Michael, Raphael, Uriel, Metatron) alongside original creations. For each name, provide: the name itself, a meaning or etymology (real or constructed), a celestial rank or function (seraph, cherub, throne, dominion, messenger, guardian, warrior), and a brief description of the angel's domain or purpose. Mix gentle guardian angels with terrifying, awe-inspiring ones — biblical angels were fearsome beings, not gentle figures.",
    group: "Fantasy & Mythology",
    faqs: [
      {
        question: "Why do so many angel names end in -el?",
        answer:
          "The suffix -el comes from Hebrew and means 'of God' or 'God.' It appears in angel names because each angel's name encodes their divine purpose: Micha-el ('who is like God'), Gabri-el ('strength of God'), Rapha-el ('healing of God'). This suffix is the most recognizable marker of angelic naming across religious traditions.",
      },
      {
        question: "How many angels are named in religious texts?",
        answer:
          "The canonical Bible names relatively few angels — Michael, Gabriel, and Raphael are the most prominent. However, apocryphal texts, the Talmud, the Book of Enoch, and Kabbalistic literature name hundreds: Metatron, Sandalphon, Raziel, Cassiel, Azrael, Haniel, Jophiel, and many more. Islamic tradition adds Israfil and Azrael as major angels.",
      },
      {
        question: "Were biblical angels really terrifying?",
        answer:
          "Yes. Biblical descriptions of angels are often frightening — Ezekiel's angels have four faces and are covered in eyes, Isaiah's seraphim have six wings, and nearly every angelic appearance in the Bible begins with the angel saying 'Do not be afraid.' The gentle, winged humanoid image is a much later artistic convention.",
      },
    ],
    related: [
      "aasimar-name-generator",
      "demon-name-generator",
      "fairy-name-generator",
      "celestial-name-generator",
      "elf-name-generator",
    ],
  },
];
