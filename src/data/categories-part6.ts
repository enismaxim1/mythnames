import type { NameCategory } from "./categories";

export const categoriesPart6: NameCategory[] = [
  // ─────────────────────────────────────────────
  // World Building (1–20)
  // ─────────────────────────────────────────────
  {
    slug: "village-name-generator",
    title: "Village Name Generator",
    tagline: "Name quaint hamlets and rustic settlements for your world.",
    metaDescription:
      "Generate charming village names for fantasy RPGs, novels, and world-building. Get rustic settlement names with atmosphere and history instantly.",
    nameType: "Village",
    description:
      "Villages are the heartbeat of any fantasy world -- the places where adventurers resupply, rumors spread, and quests begin. A good village name should feel lived-in and specific, conjuring images of thatched rooftops, muddy lanes, and a single tavern that serves as the social center for miles around. The best village names hint at geography, local industry, or founding legend without overexplaining.\n\nEnglish place-name conventions offer a masterclass in village naming. Suffixes like -stead, -wick, -ham, -thorpe, -ford, and -bury each carry distinct meanings rooted in Old English and Norse settlement patterns. A name like Ashford tells you there is a river crossing near ash trees. Thornwick suggests a fortified place near thorny hedges. These real-world patterns lend instant credibility to fictional settlements.\n\nFor tabletop campaigns and fiction, the village name often sets the tone for an entire adventure arc. A place called Millhaven feels safe and pastoral. Gallowsreach does not. Matching the name to the mood you want your players or readers to feel is one of the simplest and most powerful world-building tools available to any storyteller.",
    systemPrompt:
      "Generate fantasy village names that feel rustic, lived-in, and geographically specific. Use Old English and Norse place-name conventions: combine nature words (ash, thorn, elm, brook, stone, moss, fern, oak) with settlement suffixes (-stead, -wick, -ham, -thorpe, -ford, -bury, -hollow, -vale, -haven, -mead). Vary between pastoral names (Willowmead, Barleyhaven), ominous names (Gallowsreach, Blightwick), and neutral names (Stonefold, Ashford). For each name, provide a one-sentence description of the village's character or notable feature.",
    group: "World Building",
    faqs: [
      {
        question: "What makes a fantasy village name sound believable?",
        answer:
          "The most convincing village names follow real linguistic patterns. English place names combine a descriptive element (a plant, animal, or terrain feature) with a suffix indicating the type of settlement (-ham for homestead, -ford for river crossing, -bury for fortified place). Following these patterns makes fictional names feel organic rather than invented.",
      },
      {
        question: "How do I match a village name to its tone?",
        answer:
          "Soft consonants and pastoral words (meadow, willow, haven) create a safe, welcoming feel. Hard consonants and darker words (crag, gallows, blight, mire) signal danger. The suffix matters too -- -hollow and -moor feel more isolated than -haven or -stead.",
      },
      {
        question: "Should I name every village in my campaign world?",
        answer:
          "Name the ones your players will visit or hear about. For the rest, keep a short list of generated names ready to deploy when players go off-script. Having five or six unused village names on hand prevents awkward pauses when someone asks 'what's this place called?'",
      },
    ],
    related: [
      "city-name-generator",
      "tavern-name-generator",
      "kingdom-name-generator",
      "forest-name-generator",
    ],
  },
  {
    slug: "castle-name-generator",
    title: "Castle Name Generator",
    tagline: "Christen mighty fortresses and ancient strongholds for your realm.",
    metaDescription:
      "Generate imposing castle names for fantasy RPGs, fiction, and world-building. Get fortress names with history and grandeur instantly.",
    nameType: "Castle",
    description:
      "Castles are the power centers of any fantasy kingdom -- seats of noble houses, last lines of defense, and stages for courtly intrigue. A castle's name carries the weight of centuries, evoking the dynasty that built it, the siege that tested it, or the landscape that shaped it. The right name transforms a generic fortress into a place with presence and story.\n\nReal-world castles offer rich naming patterns. Many are named for their geography: Edinburgh means 'Edwin's fortress,' Dunsinane derives from the Gaelic for 'fort of the fairy mound,' and Rocafort is simply 'strong rock.' Others take their names from builders or legendary events. Fantasy castles can follow the same logic -- a fortress named Stormveil tells you about the weather; one named Drakenhall tells you about its history.\n\nThe phonetics of a castle name matter as much as its meaning. Names with hard consonants and strong syllable stress -- Ironhold, Blackmere Keep, Kragspire -- sound imposing and defensible. Softer names like Goldenreach or Silvershade suggest a palace more than a fortress. Matching the sound to the castle's purpose helps players and readers immediately understand what kind of place they are approaching.",
    systemPrompt:
      "Generate fantasy castle and fortress names that sound imposing and historically grounded. Combine strong nouns (iron, storm, drake, shadow, crown, raven, wolf, stone, frost, blood) with architectural suffixes (-keep, -hold, -spire, -hall, -gate, -watch, -guard, -haven, -fell, -mount). Include both single-word compounds (Stormveil, Ironhold, Drakenhall) and two-word names (Blackmere Keep, Falcon's Perch, The Crimson Bastion). For each name, provide a one-sentence note about the castle's character -- its builder, its purpose, or its most famous event.",
    group: "World Building",
    faqs: [
      {
        question: "How are real castles typically named?",
        answer:
          "Most real castles are named for their location (Edinburgh, Rocafort), their builder (Windsor from the Winding Shore, or a family name), or a distinctive feature (Redwall, Whitehall). Fantasy castle names that follow these patterns feel more authentic than purely invented ones.",
      },
      {
        question: "What suffixes work best for castle names?",
        answer:
          "Keep, Hold, Spire, Hall, and Gate are the most recognizable fortress suffixes in English fantasy. Each carries a slightly different connotation: Keep suggests a fortified core, Hold implies a self-sufficient stronghold, Spire evokes height, Hall suggests a seat of governance, and Gate implies a defensive chokepoint.",
      },
      {
        question: "Should a castle name reflect its current owner or its history?",
        answer:
          "Usually its history. Castles outlast dynasties, and a name tied to the original builder or a legendary event gives the place a sense of permanence. If ownership changes, the old name persists -- which can create interesting narrative tension when a new lord inherits a castle whose name honors their enemy.",
      },
    ],
    related: [
      "kingdom-name-generator",
      "city-name-generator",
      "village-name-generator",
      "mountain-name-generator",
    ],
  },
  {
    slug: "dungeon-name-generator",
    title: "Dungeon Name Generator",
    tagline: "Name treacherous labyrinths and forgotten crypts for daring adventurers.",
    metaDescription:
      "Generate ominous dungeon names for D&D, RPGs, and fantasy writing. Get evocative names for crypts, catacombs, and underground lairs instantly.",
    nameType: "Dungeon",
    description:
      "Dungeons are the crucibles where adventurers are forged -- the dark, dangerous places that turn cautious travelers into legendary heroes. A dungeon name is often the first thing a party hears about their next challenge, and it needs to do heavy lifting: establish mood, hint at danger, and spark curiosity all at once. A dungeon called 'The Whispering Vaults' tells a very different story than one called 'Gorefang Pit.'\n\nThe naming conventions for dungeons draw from a blend of architectural and emotional language. Real-world underground places -- catacombs, oubliettes, crypts, warrens, and mines -- each carry distinct connotations. Combining these structural words with evocative descriptors creates names that feel both physical and atmospheric. The Shattered Crypts suggests collapsed architecture and undead. The Ember Mines implies fire hazards and dwarven history.\n\nFor game masters, a well-named dungeon does half the prep work. Players who hear the name 'The Howling Labyrinth' arrive at the table with expectations and theories, already engaged before the first room is described. The name becomes a promise -- and the dungeon itself must deliver on that promise or cleverly subvert it.",
    systemPrompt:
      "Generate ominous and evocative dungeon names for fantasy RPGs. Use a structure of [Adjective/Descriptor] + [Underground Location]: combine mood words (forgotten, howling, shattered, bleeding, silent, cursed, sunken, hollow, burning, withered) with dungeon-type nouns (crypts, vaults, labyrinth, depths, pit, catacombs, warren, mines, sanctum, tomb, oubliette, halls). Also create possessive names (Gorefang's Lair, The Lich-King's Sanctum) and title-style names (The Screaming Dark, Bones Below). For each name, provide a one-sentence hook describing what adventurers might find there.",
    group: "World Building",
    faqs: [
      {
        question: "What makes a dungeon name memorable?",
        answer:
          "The best dungeon names pair a sensory or emotional word with a concrete architectural term. 'The Whispering Vaults' works because 'whispering' engages the senses and 'vaults' grounds it in physical space. Avoid generic names like 'Dark Cave' -- specificity is what makes a name stick in players' minds.",
      },
      {
        question: "Should a dungeon name hint at what's inside?",
        answer:
          "Usually, yes. A name like 'The Ember Mines' signals fire hazards and possibly dwarven connections. A name like 'The Drowned Sanctum' warns of water and corrupted holy ground. This helps players prepare thematically without spoiling specific encounters.",
      },
      {
        question: "How many dungeons does a typical D&D campaign need?",
        answer:
          "A standard campaign might feature five to fifteen major dungeons across its arc, plus smaller encounters. Having a bank of evocative names ready means you can improvise side dungeons when players explore unexpected directions without breaking narrative immersion.",
      },
    ],
    related: [
      "castle-name-generator",
      "city-name-generator",
      "tavern-name-generator",
      "necromancer-name-generator",
    ],
  },
  {
    slug: "island-name-generator",
    title: "Island Name Generator",
    tagline: "Chart mysterious islands and uncharted archipelagos for your world.",
    metaDescription:
      "Generate evocative island names for fantasy maps, RPGs, and fiction. Get mysterious and beautiful island names with character instantly.",
    nameType: "Island",
    description:
      "Islands occupy a unique place in the storytelling imagination -- isolated, self-contained worlds where different rules apply. From Homer's Ithaca to Treasure Island to the mysterious LOST archipelago, islands promise adventure, secrets, and escape from the mainland's order. An island name should capture that sense of separation and possibility in just a word or two.\n\nReal island names follow several distinct patterns. Many describe physical features: Greenland, Iceland, Long Island, Corsica (from the Greek for 'forest'). Others honor explorers, saints, or monarchs: the Galápagos were named for their giant tortoises, and the Canary Islands for the dogs found there, not the birds. Polynesian island names often carry poetic meanings rooted in navigation and nature -- Hawai'i may mean 'place of the gods.'\n\nFor fantasy cartographers, island names establish whether a place is a tropical paradise, a storm-lashed outpost, or a forbidden shore. The sounds matter: soft vowels and liquid consonants (Luminara, Veloria) suggest beauty and warmth, while hard consonants and short syllables (Kragrock, Skullspit) signal danger. A well-named island makes the reader want to unfurl a sail and find it on the map.",
    systemPrompt:
      "Generate fantasy island names that evoke mystery, beauty, or danger. Create several styles: nature-descriptive names (Ashenveil Isle, Coralspine, Thornhaven), explorer/founder names (Aldric's Refuge, Port Selenna), poetic/mythic names (Isle of Whispered Tides, Moonsaddle, The Gilded Reach), and ominous names (Bonewrack Isle, The Drowning Sisters, Serpent's Maw). Use real island-naming conventions from Polynesian, Celtic, Mediterranean, and Norse traditions. For each name, provide a one-sentence description of the island's character, terrain, or legend.",
    group: "World Building",
    faqs: [
      {
        question: "What naming conventions do real islands follow?",
        answer:
          "Most real island names describe a physical feature (Greenland, Long Island), honor a person (Cook Islands, Victoria Island), reference local wildlife (Galápagos, Canary Islands), or carry indigenous meanings tied to navigation and nature. Fantasy island names feel most authentic when they follow one of these patterns.",
      },
      {
        question: "How do I name a fantasy archipelago?",
        answer:
          "Give the archipelago a collective name that describes the group's shared trait (The Shattered Isles, The Jade Chain, The Storm Teeth), then name individual islands within it. Each island name should feel like it belongs to the same linguistic family while highlighting what makes that specific island distinct.",
      },
      {
        question: "Should island names reflect the culture that lives there?",
        answer:
          "Ideally, yes. An island settled by a Norse-inspired culture should have a Norse-sounding name, while a tropical island inhabited by a Polynesian-inspired people should draw from those phonetic traditions. This linguistic consistency strengthens your world-building significantly.",
      },
    ],
    related: [
      "continent-name-generator",
      "ship-name-generator",
      "pirate-name-generator",
      "kingdom-name-generator",
    ],
  },
  {
    slug: "river-name-generator",
    title: "River Name Generator",
    tagline: "Name the lifeblood waterways that carve through your world's landscape.",
    metaDescription:
      "Generate evocative river names for fantasy maps, RPGs, and fiction. Get natural-sounding waterway names with history and character instantly.",
    nameType: "River",
    description:
      "Rivers are the arteries of civilization -- the lines along which cities grow, borders form, and trade flows. In fantasy world-building, naming a river is one of the most consequential cartographic decisions you will make, because rivers shape everything around them. A river's name often becomes the name of the valley, the kingdom, and the people who depend on its waters.\n\nReal river names reveal deep linguistic history. The Thames, Rhine, and Danube all derive from pre-Celtic root words meaning simply 'river' or 'flowing water' -- names so old that their original language is lost. Younger river names tend to be more descriptive: the Colorado is 'red,' the Missouri means 'people of the big canoes,' and the Amazon was named for the warrior women early explorers claimed to have encountered. This layering of languages and legends gives rivers a sense of deep time.\n\nFor fantasy cartographers, a river name anchors an entire region. The Silvervein suggests a mountain source rich in ore. The Rotwater tells you something has gone very wrong upstream. Whether your river is a gentle pastoral stream or a raging torrent carving through a canyon, the name should capture the character of the water and the land it shapes.",
    systemPrompt:
      "Generate fantasy river names that feel geographically authentic. Create several styles: descriptive names based on water character (Silvervein, Whiterun, The Mudflow, Clearbrook), cultural/historical names that sound like they have been worn smooth by centuries of use (the Ilderan, the Thalass, the Vorn), ominous names (Rotwater, the Bloodchannel, Serpent's Run), and compound names mixing terrain with water words (Ironbrook, Stonefall River, Ashwater). Use real river-naming conventions: many ancient rivers have names meaning simply 'water' or 'flow' in dead languages. For each name, note what the river is known for -- its source, behavior, or the settlements along its banks.",
    group: "World Building",
    faqs: [
      {
        question: "How are real rivers typically named?",
        answer:
          "The oldest rivers often have names meaning simply 'river' or 'water' in extinct languages (Thames, Danube, Rhine). Younger names tend to be descriptive: the Colorado means 'red,' the Yellowstone references its canyon walls. Indigenous names frequently reference the river's behavior, wildlife, or spiritual significance.",
      },
      {
        question: "Should I name rivers before or after the settlements along them?",
        answer:
          "Name the rivers first. In real history, rivers existed long before cities, and settlements are often named after the rivers they sit on (London on the Thames, Paris on the Seine). Starting with your rivers and working outward creates a more naturalistic world.",
      },
      {
        question: "How many rivers should a fantasy continent have?",
        answer:
          "A realistic continent needs major river systems draining each mountain range toward the sea, plus tributaries. You only need to name the ones relevant to your story, but sketching a basic drainage pattern first ensures your geography makes sense. Most rivers flow from high ground to ocean.",
      },
    ],
    related: [
      "forest-name-generator",
      "mountain-name-generator",
      "village-name-generator",
      "city-name-generator",
    ],
  },
  {
    slug: "desert-name-generator",
    title: "Desert Name Generator",
    tagline: "Name scorching wastelands and endless dune seas for your world.",
    metaDescription:
      "Generate evocative desert names for fantasy maps, RPGs, and fiction. Get atmospheric names for wastelands, dune seas, and arid expanses instantly.",
    nameType: "Desert",
    description:
      "Deserts are the blank spaces on the map where civilization falters and the land itself becomes the adversary. In fantasy world-building, deserts serve as barriers between kingdoms, homes to nomadic cultures, and repositories of buried ruins and ancient secrets. A desert name should convey vastness, hostility, and the strange beauty that exists in desolation.\n\nReal desert names fall into revealing patterns. The Sahara simply means 'desert' in Arabic -- a tautology that speaks to the overwhelming singularity of the place. The Gobi means 'waterless place' in Mongolian. The Atacama may derive from a word meaning 'dark place.' Others are named for their visual character: the Painted Desert, the White Sands, the Rub' al Khali or 'Empty Quarter.' These names prioritize the sensory experience of the landscape over any human claim to it.\n\nFor fantasy settings, desert names should establish whether the wasteland is a natural barrier, a cursed blight, or a sacred expanse. The Sea of Burning Glass implies volcanic or magical devastation. The Amber Reach suggests beauty despite the danger. The Wailing Flats tells you the wind never stops. Each name is a weather report, a warning, and an invitation to adventure all at once.",
    systemPrompt:
      "Generate fantasy desert names that convey vastness, danger, and desolate beauty. Create several styles: sensory-descriptive names (the Burning Reach, the White Waste, Amber Dunes), culturally influenced names evoking Arabic, Mongolian, or Berber phonetics (the Kharash, Tehirim Expanse, Zuul'fari), mythic/cursed names (the Godscorched Flats, Sea of Burning Glass, the Hollow), and practical frontier names (the Drymouth, Sundeath Plains, the Long Thirst). For each name, provide a one-sentence description of the desert's character -- its terrain, its dangers, or the legends surrounding it.",
    group: "World Building",
    faqs: [
      {
        question: "What do real desert names mean?",
        answer:
          "Many real desert names are simply the local word for 'desert' or 'empty' -- Sahara means 'desert' in Arabic, Gobi means 'waterless place' in Mongolian. Others describe the terrain: the Painted Desert, the Black Rock Desert. This pattern of stark, descriptive naming works well for fantasy settings.",
      },
      {
        question: "How do I make a fantasy desert feel culturally distinct?",
        answer:
          "Name it using phonetic patterns from the culture that inhabits it. A desert home to Arabic-inspired nomads should have a name with Arabic sounds. A desert in a Norse-inspired region might be called the Ashenwaste or Surtheim. The name immediately tells readers which culture claims or fears this land.",
      },
      {
        question: "What role do deserts play in fantasy world-building?",
        answer:
          "Deserts serve as natural barriers between civilizations, homes to unique nomadic cultures, sites for ancient ruins and buried cities, and testing grounds for characters. They also create resource scarcity that drives trade routes, conflict, and political dynamics across your world.",
      },
    ],
    related: [
      "continent-name-generator",
      "kingdom-name-generator",
      "mountain-name-generator",
      "city-name-generator",
    ],
  },
  {
    slug: "swamp-name-generator",
    title: "Swamp Name Generator",
    tagline: "Name fog-choked bogs and treacherous marshlands for your world.",
    metaDescription:
      "Generate atmospheric swamp and marshland names for fantasy RPGs, maps, and fiction. Get eerie wetland names with character and menace instantly.",
    nameType: "Swamp",
    description:
      "Swamps are the liminal spaces of fantasy cartography -- neither land nor water, neither safe nor entirely lethal, but perpetually unsettling. In RPGs and fiction, swamps serve as homes for witches, lairs for lurking monsters, and natural fortresses for communities that prefer to be left alone. A swamp name should feel damp, heavy, and slightly threatening, like the air itself is hostile.\n\nReal wetland names lean heavily on sensory language. The Everglades evokes endless water-meadows. The Pripet Marshes sound primordial and Eastern European. The Great Dismal Swamp is so bluntly named it loops back around to evocative. English place-names use suffixes like -mere (standing water), -moor (upland bog), -fen (low-lying wetland), and -mire (soft, sucking ground) to distinguish between types of wet terrain.\n\nFor world-builders, the swamp name tells players what kind of danger to expect. Mistfen sounds like a place where visibility is the problem. Blackmire suggests sinking ground. Rothollow implies decay and undead. The best swamp names make you feel like your boots are already wet and something just moved beneath the surface ahead of you.",
    systemPrompt:
      "Generate eerie, atmospheric swamp and wetland names for fantasy settings. Combine sensory words (mist, rot, murk, black, dead, weeping, grey, hollow, sour) with wetland terrain types (-fen, -mere, -mire, -moor, -bog, -marsh, -hollow, -reach, -wash). Create several styles: English-tradition names (Mistfen, Blackmire, Rothollow, the Grey Wash), possessive/legendary names (Hag's Reach, the Witch-Mother's Garden, Serpent's Cradle), and blunt frontier names (the Drownlands, Dead Man's Bog, the Sinkfields). For each name, provide a one-sentence description of the swamp's atmosphere, inhabitants, or dangers.",
    group: "World Building",
    faqs: [
      {
        question: "What is the difference between a swamp, marsh, fen, and bog?",
        answer:
          "In real geography, these terms describe different wetland types. Swamps have trees, marshes have grasses, fens are fed by groundwater and tend to be alkaline, and bogs are fed by rain and tend to be acidic. In fantasy naming, these distinctions create useful tonal variety -- a fen sounds eerier than a marsh, and a mire sounds more dangerous than a bog.",
      },
      {
        question: "What creatures typically inhabit fantasy swamps?",
        answer:
          "Fantasy swamps host hags, lizardfolk, black dragons, will-o'-wisps, hydras, shambling mounds, bullywugs, and various undead. The swamp name can hint at its primary inhabitants -- Dragonmire for a black dragon's territory, Hagfen for a coven's domain, or the Rotmarsh for an undead-infested wetland.",
      },
      {
        question: "How do swamps affect travel and combat in RPGs?",
        answer:
          "Swamps typically impose difficult terrain, reduce visibility with fog and dense vegetation, limit long rests due to insects and damp, and create hazards like quicksand, disease, and drowning. A well-named swamp sets these expectations before the party even arrives.",
      },
    ],
    related: [
      "forest-name-generator",
      "village-name-generator",
      "island-name-generator",
      "witch-name-generator",
    ],
  },
  {
    slug: "continent-name-generator",
    title: "Continent Name Generator",
    tagline: "Name the great landmasses that anchor your world's geography.",
    metaDescription:
      "Generate grand continent names for fantasy maps, RPGs, and world-building. Get epic landmass names with weight and history instantly.",
    nameType: "Continent",
    description:
      "Continents are the foundational building blocks of a fantasy world -- the vast landmasses that determine climate, culture, and the scope of civilization. A continent name carries more weight than almost any other name on the map because it will be spoken thousands of times by characters across your entire narrative. It needs to feel ancient, significant, and easy to say.\n\nReal continent names have surprisingly obscure origins. Europe may derive from a Phoenician word for 'sunset' or 'west.' Asia possibly comes from the Assyrian word for 'sunrise.' Africa might mean 'land of the Afri people' or come from a Phoenician word for 'dust.' What these names share is simplicity and a sense of deep antiquity -- they sound like words that have been spoken for so long that their original meaning has been worn away, leaving only the sound.\n\nFor fantasy world-builders, continent names should feel like the oldest words in your world's vocabulary. Three to four syllables tends to be the sweet spot -- long enough to feel grand, short enough to remember. Names like Khorvaire, Tamriel, and Westeros have become iconic because they hit this balance perfectly, sounding like real places despite being entirely invented.",
    systemPrompt:
      "Generate fantasy continent names that sound ancient, grand, and easy to pronounce. Create names of 2-4 syllables that feel like they have been spoken for millennia. Draw from diverse phonetic traditions: Latinate names (Valdoria, Aethermere), Asiatic-inspired names (Kharsis, Taishan), Norse-influenced names (Nordhelm, Wyrmgard), and wholly original names (Erathune, Cespara, Velorith). Avoid names that sound too modern or too close to existing fantasy IPs. For each name, provide a one-sentence description of the continent's defining geographic or cultural character.",
    group: "World Building",
    faqs: [
      {
        question: "How long should a fantasy continent name be?",
        answer:
          "Two to four syllables is the sweet spot. One syllable feels too small for something so vast, while five or more becomes cumbersome in dialogue. Iconic fantasy continents -- Tamriel, Khorvaire, Westeros -- all fall in this range. The name should feel grand but remain easy to say and remember.",
      },
      {
        question: "Should continents be named by their inhabitants or by outsiders?",
        answer:
          "Both approaches work. A continent named by its dominant civilization will reflect that culture's language and values. A continent named by distant explorers might have a name that describes how outsiders perceived it -- as real continents like America (named for Amerigo Vespucci) demonstrate.",
      },
      {
        question: "How many continents should a fantasy world have?",
        answer:
          "Most fantasy worlds feature two to seven continents. You need at least two to create meaningful geographic separation and cultural contrast. More than seven becomes difficult for readers to track. Focus detail on the continent where your story takes place, and leave others as mysterious horizons.",
      },
    ],
    related: [
      "island-name-generator",
      "kingdom-name-generator",
      "planet-name-generator",
      "mountain-name-generator",
    ],
  },
  {
    slug: "planet-name-generator",
    title: "Planet Name Generator",
    tagline: "Christen alien worlds and distant spheres across the cosmos.",
    metaDescription:
      "Generate unique planet names for sci-fi, fantasy, and RPG settings. Get astronomical names with character for your universe instantly.",
    nameType: "Planet",
    description:
      "Planets are the ultimate canvas for world-builders -- entire spheres waiting to be filled with continents, oceans, civilizations, and mysteries. Whether you are running a spacefaring RPG, writing science fiction, or designing a fantasy cosmology, a planet name needs to feel both alien and speakable, hinting at the world's character without requiring a pronunciation guide.\n\nOur solar system's naming convention -- Roman gods and goddesses -- set the template that science fiction has both followed and subverted for over a century. Mars, Venus, Jupiter, and Saturn all carry mythological weight that colors how we imagine them. Science fiction planets often aim for a similar blend of the familiar and the strange: Arrakis, Coruscant, Pandora, and Solaris all feel like real places because their names balance exotic sounds with intuitive phonetics.\n\nFor sci-fi settings, planet names can follow several conventions: catalog designations (Kepler-442b), descriptive names given by settlers (New Eden, Frosthold), indigenous names from alien languages (Qo'noS, Ryloth), or mythological names continuing the classical tradition (Elysium, Tartarus). Mixing these conventions across your setting implies that different planets were discovered and named by different cultures at different times, adding depth to your universe's history.",
    systemPrompt:
      "Generate planet names for science fiction and fantasy settings. Create several naming styles: classical/mythological names (Elysium, Tartarus, Aethon, Thalassa), sci-fi phonetic names that feel alien but pronounceable (Velyria, Kesthra, Novaxis, Zurath), catalog-style designations (Sigma Eridani IV, HD-7790b, Kepler-1142), settler/colonial names (New Caledonia, Frosthold, Verdance), and descriptive names (Ashworld, The Glass Sphere, Tidallocked). For each name, provide a one-sentence description of the planet's defining characteristic -- its environment, civilization, or significance.",
    group: "World Building",
    faqs: [
      {
        question: "What naming conventions do real planets follow?",
        answer:
          "In our solar system, planets are named after Roman deities. Exoplanets use catalog designations based on the discovering instrument or star (Kepler-442b, TRAPPIST-1e). Moons often follow thematic schemes -- Jupiter's moons are named for lovers of Zeus, Saturn's for Titans. Science fiction draws from all these traditions.",
      },
      {
        question: "How do I make an alien planet name feel pronounceable?",
        answer:
          "Stick to phonetic patterns that exist in human languages. Alternate consonants and vowels, keep names to two to four syllables, and avoid consonant clusters that are genuinely unpronounceable. Names like Arrakis and Coruscant work because they follow recognizable phonetic rules despite being invented.",
      },
      {
        question: "Should all planets in a system follow the same naming style?",
        answer:
          "Not necessarily. In a universe with multiple spacefaring civilizations, different planets might have been named by different cultures at different times. A system might have one planet with a catalog name, another with a colonial name, and a third with an indigenous alien name -- and this inconsistency adds realism.",
      },
    ],
    related: [
      "continent-name-generator",
      "island-name-generator",
      "realm-name-generator",
      "kingdom-name-generator",
    ],
  },
  {
    slug: "realm-name-generator",
    title: "Realm Name Generator",
    tagline: "Name ethereal planes and otherworldly domains beyond mortal reach.",
    metaDescription:
      "Generate mystical realm names for fantasy RPGs, fiction, and world-building. Get otherworldly names for planes, dimensions, and magical domains instantly.",
    nameType: "Realm",
    description:
      "Realms transcend mere geography -- they are planes of existence, dimensions of reality, and domains of power that exist beyond the physical map. From the Nine Realms of Norse mythology to D&D's Great Wheel cosmology to the parallel dimensions of modern fantasy, realms represent fundamental aspects of a universe's metaphysical architecture. Naming them is an exercise in distilling vast cosmic concepts into evocative words.\n\nMythological realms set the standard. Asgard, Midgard, and Niflheim divide the Norse cosmos into domains of gods, mortals, and primordial ice. The Greek underworld's subdivisions -- Elysium, Tartarus, Asphodel -- each name a different quality of the afterlife. D&D's Outer Planes follow this model: Mount Celestia radiates divine order, the Abyss embodies infinite chaos, and Mechanus is a clockwork plane of pure law. Each name immediately communicates the realm's essential nature.\n\nFor world-builders creating their own cosmology, realm names should feel grander and more abstract than ordinary place names. While a city might be named Ironhaven, the plane of death might be called the Pallid Eternity or Ashenveil. The shift in register -- from concrete to conceptual -- signals to readers and players that they have crossed a threshold from the mundane world into something fundamentally other.",
    systemPrompt:
      "Generate names for mystical realms, planes of existence, and otherworldly dimensions. Create several styles: mythological-register names (Ashenveil, the Pallid Eternity, Sunhollow, Duskreach), conceptual names that embody abstract ideas (the Weave of Echoes, the Still, Untime, the Fracture), D&D-style plane names (the Emerald Dream, the Iron Hells, the Prismatic Expanse), and short iconic names (Elsewhere, the Drift, Shadowmere, the Pale). For each name, provide a one-sentence description of the realm's nature, inhabitants, or cosmic role.",
    group: "World Building",
    faqs: [
      {
        question: "What is the difference between a realm and a kingdom?",
        answer:
          "In fantasy usage, a kingdom is a political territory on a physical map, while a realm is a plane of existence or a metaphysical domain. The Shadowfell is a realm. Gondor is a kingdom. Some settings blur this line -- 'the Feywild' functions as both a parallel dimension and a territory ruled by archfey courts.",
      },
      {
        question: "How many realms should a fantasy cosmology have?",
        answer:
          "Classical models use between three (upper, middle, lower) and a few dozen (D&D's Great Wheel has over fifteen Outer Planes). For most stories, three to seven realms is manageable. Each realm should represent a distinct concept or force -- death, dreams, elements, chaos, order -- and play a role in your narrative.",
      },
      {
        question: "How do realm names differ from regular place names?",
        answer:
          "Realm names tend toward the abstract and conceptual rather than the geographic. A city might be Stonehaven, but a realm might be the Pale Drift or the Infinite Stair. This shift in register signals that the place operates on different rules than the physical world and helps readers adjust their expectations accordingly.",
      },
    ],
    related: [
      "planet-name-generator",
      "kingdom-name-generator",
      "continent-name-generator",
      "angel-name-generator",
    ],
  },
  {
    slug: "empire-name-generator",
    title: "Empire Name Generator",
    tagline: "Name vast dominions and powerful hegemonies that span continents.",
    metaDescription:
      "Generate imposing empire names for fantasy RPGs, fiction, and world-building. Get authoritative names for vast dominions and hegemonies instantly.",
    nameType: "Empire",
    description:
      "Empires are the heavyweights of political world-building -- vast, multi-ethnic states that project power across continents and leave indelible marks on history. An empire's name must convey authority, scale, and a sense of destiny. It should sound like something worth conquering for and dying to defend, a word that carries the weight of legions, taxes, roads, and conquered peoples.\n\nReal empires offer distinct naming patterns. Some are named for a founding people or homeland: the Roman Empire, the Ottoman Empire, the Mongol Empire. Others take descriptive or aspirational titles: the Holy Roman Empire, the Celestial Empire (China), the Empire on Which the Sun Never Sets. A few are named for dynasties: the Umayyad Caliphate, the Habsburg Empire. Each convention tells you something about how the empire sees itself -- through ethnicity, ideology, or lineage.\n\nFor fantasy settings, empire names signal the scope of your story's political landscape. An empire called the Aurelian Dominion sounds Romanesque and administratively sophisticated. The Iron Khanate sounds Mongol-inspired and militaristic. The Radiant Imperium suggests theocratic ambitions. The name becomes shorthand for the empire's culture, military doctrine, and self-image, coloring every interaction before a single scene is written.",
    systemPrompt:
      "Generate fantasy empire names that project authority, scale, and cultural identity. Create several styles: Latinate/classical empires (the Aurelian Dominion, the Valcorian Imperium, the Solaran Republic-turned-Empire), Eastern-inspired empires (the Iron Khanate, the Jade Throne, the Eternal Dynasty of Tashir), theocratic empires (the Radiant Imperium, the Holy Domain of Astra, the Covenant of the Burning Sun), and ominous/fallen empires (the Ashen Sovereignty, the Dominion of the Black Crown, the Shattered Hegemony). For each name, provide a one-sentence description of the empire's character, governance style, or historical trajectory.",
    group: "World Building",
    faqs: [
      {
        question: "How are real empires typically named?",
        answer:
          "Real empires are named for their founding people (Roman, Mongol), a ruling dynasty (Ottoman, Hapsburg), a geographic origin (Babylonian, Byzantine), or an ideological claim (Holy Roman Empire, Celestial Empire). The naming convention reveals how the empire defines itself and legitimizes its power.",
      },
      {
        question: "What is the difference between an empire and a kingdom in fantasy?",
        answer:
          "A kingdom is typically a single ethnic or cultural state ruled by a monarch. An empire encompasses multiple kingdoms, peoples, and cultures under a centralized authority. Empires imply conquest, administration of diverse populations, and projection of power far beyond the original homeland.",
      },
      {
        question: "How do I show an empire's culture through its name?",
        answer:
          "Use phonetic patterns that match the real-world culture you are drawing inspiration from. Latinate sounds (ending in -ium, -ian, -us) suggest Rome. Turkic or Mongol sounds suggest steppe empires. Theocratic titles (Holy, Radiant, Divine) suggest religious authority. The name sets cultural expectations instantly.",
      },
    ],
    related: [
      "kingdom-name-generator",
      "continent-name-generator",
      "army-name-generator",
      "city-name-generator",
    ],
  },
  {
    slug: "religion-name-generator",
    title: "Religion Name Generator",
    tagline: "Name faiths, cults, and spiritual orders that shape your world's soul.",
    metaDescription:
      "Generate compelling religion and faith names for fantasy RPGs, fiction, and world-building. Get names for churches, cults, and spiritual orders instantly.",
    nameType: "Religion",
    description:
      "Religions are the invisible architecture of a fantasy world -- the belief systems that explain creation, justify power, motivate wars, and give ordinary people hope. Naming a fantasy religion is a delicate craft because the name must feel reverent to its followers, comprehensible to outsiders, and distinctive enough to stand apart from the other faiths in your setting.\n\nReal religions are named through several conventions. Some take the name of their founder (Christianity, Buddhism, Zoroastrianism). Others reference a central concept (Islam means 'submission,' Shinto means 'way of the gods'). Some are named by outsiders rather than adherents -- 'Hinduism' is a geographic label imposed by foreigners on an incredibly diverse set of traditions. Cults and sects often adopt names that signal their specific focus: the Eleusinian Mysteries, the Order of the Golden Dawn.\n\nFor world-builders, the naming convention you choose reveals how the religion operates in your world. A faith called 'The Way of Ashen Light' sounds mystical and poetic, likely appealing to seekers. 'The Church of the Iron Covenant' sounds institutional and dogmatic. 'Voranthi' -- a single invented word -- suggests an ancient tradition whose name predates the current language. Each approach builds different expectations about worship, hierarchy, and doctrine.",
    systemPrompt:
      "Generate fantasy religion, faith, and cult names. Create several styles: institutional church names (the Church of the Radiant Throne, the Iron Covenant, the Synod of Eternal Flame), mystical path names (the Way of Ashen Light, the Path of Still Waters, the Dreaming Communion), single-word ancient names suggesting pre-linguistic origins (Voranthi, Seluri, Ashketh, Thal'mori), cult and sect names (the Eyes of the Void, the Children of the Last Star, the Twice-Born), and philosophical traditions (the Doctrine of the Spiral, the Accord of Balance). For each, provide a one-sentence description of the faith's core belief, deity, or practice.",
    group: "World Building",
    faqs: [
      {
        question: "How do I name a fantasy religion without being disrespectful?",
        answer:
          "Draw inspiration from naming conventions rather than specific real doctrines. Study how religions are structured and named -- founder-based, concept-based, institution-based -- and apply those patterns to original content. Avoid directly copying sacred terms, symbols, or narratives from living faiths.",
      },
      {
        question: "Should a fantasy religion be named by its followers or by outsiders?",
        answer:
          "Both approaches add realism. A faith might call itself 'the True Path' while outsiders call it 'the Thornwalker Heresy.' Having multiple names for the same religion -- the internal name and the external label -- mirrors how real religions operate and creates rich narrative texture.",
      },
      {
        question: "How many religions should a fantasy world have?",
        answer:
          "A realistic world has many faiths, but your story only needs to detail the ones that matter to the plot. Two to five well-developed religions with distinct identities serve most campaigns. You can imply dozens more exist without fleshing them out, just as characters mention places they never visit.",
      },
    ],
    related: [
      "cleric-name-generator",
      "paladin-name-generator",
      "kingdom-name-generator",
      "angel-name-generator",
    ],
  },
  {
    slug: "magic-spell-name-generator",
    title: "Magic Spell Name Generator",
    tagline: "Conjure evocative spell names that crackle with arcane power.",
    metaDescription:
      "Generate creative magic spell names for D&D, RPGs, and fantasy fiction. Get evocative incantation names with mystical weight and character instantly.",
    nameType: "Magic Spell",
    description:
      "Spell names are the poetry of magic systems -- the words that transform abstract mechanics into memorable moments at the table or on the page. A well-named spell does more than describe its effect; it establishes tone, implies history, and makes the caster feel powerful just by speaking it aloud. There is a reason players remember Eldritch Blast and Fireball decades after their first campaign.\n\nD&D's spell-naming tradition follows several patterns. Some spells are purely descriptive: Lightning Bolt, Hold Person, Detect Magic. Others carry the name of their fictional inventor: Mordenkainen's Magnificent Mansion, Tasha's Hideous Laughter, Bigby's Hand. Still others use evocative poetic language: Power Word Kill, Prismatic Spray, Phantasmal Force. The most memorable spells tend to combine a vivid image with rhythmic language that is satisfying to say.\n\nFor homebrew creators and fiction writers, spell names are an opportunity to reinforce your magic system's identity. A scholarly tradition might name spells in pseudo-Latin. A primal system might use blunt, visceral names. A bardic tradition might name spells after songs. The naming convention tells players and readers how magic feels in your world -- whether it is academic, instinctive, divine, or something stranger.",
    systemPrompt:
      "Generate creative magic spell names across different schools and traditions. Create several styles: D&D-traditional descriptive spells (Searing Arc, Frozen Grasp, Veil of Silence), named-inventor spells (Aldric's Temporal Snare, Thessaly's Iron Rebuke, Vorn's Devouring Shadow), poetic/evocative spells (Whisper of the Dying Star, Cascade of Echoes, The Thirsting Dark), primal/elemental spells (Stoneshatter, Wildfire Crown, Tidecall), and single-word power spells (Unmake, Soulbind, Shatterpoint). For each, note the spell's likely effect, school of magic, and power level (cantrip, mid-level, high-level).",
    group: "World Building",
    faqs: [
      {
        question: "What makes a spell name memorable?",
        answer:
          "The best spell names combine a vivid sensory image with satisfying rhythm. 'Eldritch Blast' works because both words are punchy and the hard consonants mirror the spell's force. Alliteration, strong verbs, and specific imagery all help. Avoid generic names like 'Magic Attack' in favor of names that paint a picture.",
      },
      {
        question: "Should I name spells after their effects or their history?",
        answer:
          "Both conventions are valid and can coexist. A common spell might have a descriptive name everyone knows (Fireball), while a rare spell might carry its creator's name (Mordenkainen's Sword). Using both styles implies that your magic system has both standardized education and individual innovation.",
      },
      {
        question: "How do spell-naming conventions vary between magic systems?",
        answer:
          "Academic magic traditions tend toward Latinate or formal names. Druidic or primal magic uses nature imagery and blunt, visceral language. Divine magic often references the granting deity. Bardic magic might use musical or poetic terms. Matching your naming style to the magic's source adds coherence to your world.",
      },
    ],
    related: [
      "wizard-name-generator",
      "sorcerer-name-generator",
      "warlock-name-generator",
      "potion-name-generator",
    ],
  },
  {
    slug: "potion-name-generator",
    title: "Potion Name Generator",
    tagline: "Brew fantastical potions with names as vivid as their effects.",
    metaDescription:
      "Generate creative potion names for D&D, RPGs, and fantasy writing. Get evocative elixir and brew names with alchemical flavor instantly.",
    nameType: "Potion",
    description:
      "Potions sit at the crossroads of magic and craftsmanship -- bottled miracles brewed by alchemists, herbalists, and hedge witches. A potion name should sound like something you would find on a dusty shelf in an apothecary, labeled in a careful hand with just enough information to intrigue and just enough ambiguity to worry. The best potion names make you want to drink them and fear drinking them in equal measure.\n\nNaming conventions for potions borrow from real-world apothecary traditions. Historical remedies often had evocative names: Elixir of Life, Aqua Vitae, Oil of Vitriol, Tincture of Laudanum. These names combine a preparation type (elixir, tincture, draught, oil, philtre) with an active ingredient or effect. Fantasy potions follow the same pattern: Draught of Invisibility, Elixir of Giant Strength, Philtre of Love. The preparation word sets expectations about form, while the second element describes the effect.\n\nFor game masters and writers, potion names are a chance to add flavor to loot and shopping scenes. A 'Potion of Healing' is functional but forgettable. 'Moonpetal Restorative' or 'Sister Agatha's Red Cure' tells a story about where the potion came from and who made it. Naming potions with personality transforms a mechanical transaction into a moment of world-building.",
    systemPrompt:
      "Generate creative potion and elixir names for fantasy settings. Create several styles: traditional formula names pairing a preparation type with an effect (Draught of Iron Will, Elixir of Shadowwalking, Philtre of Serpent's Tongue, Tincture of Moonfire), alchemist/brewer names (Old Marga's Boneset, Therion's Liquid Courage, the Crimson Apothecary's Pride), ingredient-forward names (Nightbloom Extract, Wyrmsblood Tonic, Ghostcap Distillate), and evocative/mysterious names (Liquid Starlight, the Dreamer's Sip, Bottled Oblivion). For each, note the potion's effect, rarity, and any notable side effects or warnings.",
    group: "World Building",
    faqs: [
      {
        question: "What are the traditional potion-naming conventions?",
        answer:
          "Real apothecary tradition uses a preparation type plus an active element: Elixir of [X], Tincture of [Y], Oil of [Z]. Fantasy potions follow this pattern. The preparation word (draught, philtre, elixir, tonic, extract) implies the form and method, while the second element describes the magical effect or key ingredient.",
      },
      {
        question: "How can potion names add flavor to an RPG session?",
        answer:
          "Instead of generic labels like 'Potion of Healing,' use names that imply an origin story: 'Sister Agatha's Red Cure' suggests a temple healer, 'Wyrmsblood Tonic' implies a dragon-derived ingredient. These names turn loot into world-building and make shopping at the apothecary a memorable scene.",
      },
      {
        question: "Should potions have side effects reflected in their names?",
        answer:
          "Implying side effects through naming adds realism and drama. A potion called 'The Berserker's Draught' implies both power and loss of control. 'Dreamwalker's Bane' suggests the potion works but at a cost. These evocative names encourage players to ask questions rather than blindly consume every bottle they find.",
      },
    ],
    related: [
      "magic-spell-name-generator",
      "wizard-name-generator",
      "witch-name-generator",
      "tavern-name-generator",
    ],
  },
  {
    slug: "weapon-name-generator",
    title: "Weapon Name Generator",
    tagline: "Forge legendary weapon names worthy of heroes and history.",
    metaDescription:
      "Generate legendary weapon names for D&D, RPGs, and fantasy fiction. Get iconic sword, axe, and magical weapon names with lore instantly.",
    nameType: "Weapon",
    description:
      "Named weapons are the rock stars of fantasy lore -- Excalibur, Mjolnir, Sting, Glamdring, Stormbringer. A weapon important enough to have a name is a weapon with a story, and that story transforms a piece of equipment into a character in its own right. The name is the first chapter of that story, the word that makes a fighter's eyes widen when the blade is drawn and someone whispers its title.\n\nWeapon-naming conventions span several traditions. Some weapons are named for their effects: Frostmourne (brings icy death), Stormbringer (calls lightning), Lifedrinker (drains vitality). Others carry the name of their maker or wielder: Aegis-fang (Wulfgar's hammer in Forgotten Realms), Andúril (Flame of the West, reforged for Aragorn). Still others have poetic epithets: Orcrist the Goblin-cleaver, Narsil the Red and White Flame. The most iconic weapons combine a striking image with a sense of history.\n\nFor RPG campaigns, a named weapon elevates a character's identity. Players who wield 'Oathkeeper' or 'The Widowmaker' feel a deeper connection to their gear than those carrying a generic +1 longsword. The weapon name becomes a story hook -- who forged it, who wielded it before, and what oath or tragedy gave it that name?",
    systemPrompt:
      "Generate legendary fantasy weapon names across weapon types (swords, axes, bows, hammers, daggers, staves, spears). Create several styles: single-word evocative names (Dawnbreaker, Soulreaver, Frostfang, Nightwhisper), epithet-style names (Orcrist the Goblin-Cleaver pattern — [Name], the [Title]: Valdris, the Ember King's Ruin; Aethon, Light of the Last Dawn), maker/wielder names (Duran's Folly, the Widow Kaelin's Edge), and descriptive names (the Black Blade of Sorrow, the Thirsting Spear, Winter's Last Tooth). For each, note the weapon type, magical properties, and a one-sentence origin story.",
    group: "World Building",
    faqs: [
      {
        question: "What makes a fantasy weapon name iconic?",
        answer:
          "The most iconic weapon names combine a vivid image with implied history. Excalibur, Mjolnir, and Sting all work because they are short, distinctive, and carry narrative weight. A name should sound like something a bard would sing about -- rhythmic, memorable, and tied to a story worth telling.",
      },
      {
        question: "Should named weapons have epithets or titles?",
        answer:
          "Epithets add tremendous flavor. Tolkien's weapons often had both a name and a title: Glamdring, the Foe-hammer; Orcrist, the Goblin-cleaver. This dual naming suggests the weapon is famous enough to have earned a reputation, which makes it feel more legendary than a name alone.",
      },
      {
        question: "When should a weapon receive a name in a campaign?",
        answer:
          "A weapon earns a name when it becomes narratively significant -- through a legendary forging, a pivotal battle, or a character's personal bond with it. Some weapons arrive already named (ancient artifacts), while others gain names through play. Both approaches create memorable moments.",
      },
    ],
    related: [
      "armor-name-generator",
      "warrior-name-generator",
      "fighter-name-generator",
      "barbarian-name-generator",
    ],
  },
  {
    slug: "armor-name-generator",
    title: "Armor Name Generator",
    tagline: "Name legendary armor sets that have turned blades and saved kingdoms.",
    metaDescription:
      "Generate legendary armor names for D&D, RPGs, and fantasy fiction. Get iconic shield, plate, and magical armor names with lore instantly.",
    nameType: "Armor",
    description:
      "Named armor occupies a special place in fantasy lore -- it is the difference between a soldier and a legend. When a knight dons the Aegis of the Dawn or a rogue buckles on the Shadowskin, the armor becomes part of their identity. Unlike weapons, which are instruments of aggression, named armor tells a story of survival, protection, and the will to endure what would destroy lesser warriors.\n\nHistorical and mythological armor sets a high bar. The Greek hero Achilles wore armor forged by Hephaestus himself, described in loving detail across eighteen lines of the Iliad. Norse mythology gives us the dwarf-forged mail Gram and various enchanted byrnies. In Arthurian legend, magical armor was as prized as magical swords. D&D continues this tradition with iconic items like Plate Armor of Etherealness and the Shield of Missile Attraction.\n\nFor world-builders, named armor conveys both the wearer's status and the smith's artistry. A suit called the Iron Requiem sounds like it was forged in grief after a devastating war. The Mantle of Thorns implies a defensive philosophy that punishes attackers. Gilded Bulwark suggests a wealthy patron and ceremonial purpose. Each name implies a story about who commissioned the armor, who forged it, and what it was built to withstand.",
    systemPrompt:
      "Generate legendary fantasy armor names across armor types (plate, chain, leather, shields, helms, gauntlets, cloaks). Create several styles: single-word compound names (Dawnplate, Ironveil, Stormshield, Nightmantle), title-style names (the Aegis of the Dawn, the Bulwark of Fallen Kings, the Warden's Last Stand), maker names (Durgan's Masterwork, the Thornsmith's Opus), material-forward names (Dragonskin Vestments, Mithral Duskplate, Starforged Cuirass), and evocative names (the Iron Requiem, Mantle of Thorns, the Unbroken). For each, note the armor type, magical properties, and a one-sentence origin story.",
    group: "World Building",
    faqs: [
      {
        question: "What makes a fantasy armor name compelling?",
        answer:
          "The best armor names suggest resilience and history. Unlike weapon names which imply aggression, armor names should evoke endurance and protection. Names like 'the Unbroken' or 'Aegis of the Dawn' imply the armor has been tested and survived, which makes the wearer feel protected by something with a proven track record.",
      },
      {
        question: "Should armor sets share a naming theme?",
        answer:
          "Matching armor pieces with a shared naming convention (the Dawn set: Dawnplate, Dawnhelm, Dawnguard Shield) creates a satisfying sense of completeness. It also gives players a collection goal. Alternatively, each piece can have an independent name if they were assembled from different sources over time.",
      },
      {
        question: "How does named armor differ from named weapons narratively?",
        answer:
          "Named weapons are about what you can do to others; named armor is about what you can endure. A character wielding Stormbringer is defined by power and destruction. A character wearing the Aegis of the Dawn is defined by resilience and duty. This distinction shapes how each item contributes to character identity.",
      },
    ],
    related: [
      "weapon-name-generator",
      "warrior-name-generator",
      "paladin-name-generator",
      "fighter-name-generator",
    ],
  },
  {
    slug: "clan-name-generator",
    title: "Clan Name Generator",
    tagline: "Name fierce clans bound by blood, honor, and ancient tradition.",
    metaDescription:
      "Generate powerful clan names for fantasy RPGs, fiction, and world-building. Get names for warrior clans, noble houses, and tribal families instantly.",
    nameType: "Clan",
    description:
      "Clans are the fundamental unit of loyalty in countless fantasy settings -- tight-knit kinship groups bound by blood, tradition, and mutual obligation. A clan name carries the honor of every ancestor and the expectations of every future generation. It is a badge worn with fierce pride, a war cry bellowed across battlefields, and a promise that you will never stand alone.\n\nReal-world clan naming conventions vary richly across cultures. Scottish Highland clans took their names from founding ancestors: Clan MacDonald (son of Donald), Clan Campbell (crooked mouth). Japanese clans used geographic or honorific names: Tokugawa, Shimazu, Minamoto. Norse clans referenced animals or legendary figures. Each system reflects what the culture valued most -- ancestry, territory, or mythic connection.\n\nFor fantasy world-builders, a clan name immediately establishes the group's cultural flavor and values. The Ironjaw Clan sounds orcish and martial. Clan Silverbrook sounds elven and refined. The Blackthorn suggests secretive humans or dark fey. The name is the first thing outsiders learn about the clan, so it should communicate identity as efficiently as a banner flying from a castle wall -- bold, distinctive, and unmistakable even from a distance.",
    systemPrompt:
      "Generate fantasy clan names across various cultural inspirations. Create several styles: Scottish/Celtic-style clans (Clan MacTavish, Clan Dunmore, the Ashfords), orcish/martial clans (the Ironjaw, Clan Skullsplitter, the Bloodfangs), elven/refined clans (House Silverbrook, Clan Dawnweaver, the Starhollow), Norse/barbarian clans (the Frostwolf, Clan Stormborn, the Wyrmkin), and Eastern-inspired clans (Clan Hirogane, the Jade Serpents, House Tashimori). For each, provide a one-sentence description of the clan's reputation, specialty, or defining tradition.",
    group: "World Building",
    faqs: [
      {
        question: "What is the difference between a clan and a house?",
        answer:
          "In most fantasy usage, a clan is a kinship group bound by blood and tradition, often with a tribal or martial character. A house is typically a noble family operating within a feudal political system. Clans tend to be more egalitarian and tradition-bound, while houses are more hierarchical and politically active. The terms overlap significantly.",
      },
      {
        question: "How do real-world clan names work?",
        answer:
          "Scottish clans use 'Mac' or 'Mc' (son of) plus an ancestor's name. Japanese clans often reference geography or imperial connections. Norse clans used patronymics or animal totems. The naming system reflects what the culture values most in identity: lineage, land, or symbolic power.",
      },
      {
        question: "Should all members of a fantasy clan share the clan name?",
        answer:
          "Typically, yes. The clan name functions as a surname or tribal identifier. Members might add personal epithets (Ragnar Ironjaw the Unyielding) but the clan name remains constant. Marriage, adoption, and exile are the main ways clan names change, and each carries significant narrative weight.",
      },
    ],
    related: [
      "tribe-name-generator",
      "kingdom-name-generator",
      "guild-name-generator",
      "warrior-name-generator",
    ],
  },
  {
    slug: "tribe-name-generator",
    title: "Tribe Name Generator",
    tagline: "Name proud tribal peoples rooted in land, spirit, and survival.",
    metaDescription:
      "Generate authentic tribe names for fantasy RPGs, fiction, and world-building. Get evocative names for nomadic, indigenous, and warrior tribes instantly.",
    nameType: "Tribe",
    description:
      "Tribes are among the oldest forms of human organization, and in fantasy settings they represent peoples who define themselves through their relationship with the land, the spirits, and each other rather than through borders and bureaucracy. A tribe name should feel organic and earned -- not imposed by mapmakers but grown from the tribe's own story of who they are and where they belong.\n\nReal tribal names follow illuminating patterns. Many are autonyms meaning simply 'the people' or 'the real humans' in the tribe's own language -- the Inuit, the Dine (Navajo), and the Maasai all carry this connotation. Others reference a defining characteristic: the Blackfeet, the Crow, the Lakota ('allies'). Some are names given by outsiders, sometimes respectful and sometimes not. In fantasy, this layering of self-name versus outsider-name creates rich narrative opportunities.\n\nFor world-builders, tribe names should reflect the tribe's environment, spirituality, and social identity. The Ashwalkers sound like a post-apocalyptic desert people. The Spirit Talons suggest a shamanistic mountain tribe. The Tidecallers are clearly coastal. Tying the name to landscape and practice makes the tribe feel like a natural part of the world rather than an afterthought placed on the map.",
    systemPrompt:
      "Generate fantasy tribe names that feel organic and culturally grounded. Create several styles: nature-totemic names (the Spirit Talons, the Stormcrows, the Ember Wolves, the Riverclan), descriptive practice names (the Ashwalkers, the Tidecallers, the Boneweavers, the Skyherders), simple autonym-style names meaning 'the people' in a fictional language (the Valanti, the Kheshari, the Dunai, the Orath), geographic-origin names (the Highstone, the Deepwood Folk, the Thornmarsh), and outsider-given names (the Painted Ones, the Ghost Riders, the Barefoot Army). For each, provide a one-sentence description of the tribe's territory, customs, or reputation.",
    group: "World Building",
    faqs: [
      {
        question: "How do I create tribe names respectfully?",
        answer:
          "Focus on naming conventions rather than copying specific real tribal names. Study how tribes name themselves -- often through totems, geography, or words meaning 'the people' -- and apply those structural patterns to original content. Avoid stereotypes and give each tribe the same cultural complexity you would give a kingdom or empire.",
      },
      {
        question: "What is the difference between a tribe and a clan?",
        answer:
          "A tribe is a larger social group unified by shared culture, territory, and often a common origin story. A clan is a kinship subgroup within a tribe, bound by direct blood ties. A tribe might contain several clans. In practice, fantasy settings often use the terms loosely, but maintaining the distinction adds social depth.",
      },
      {
        question: "Should tribes have a different naming feel than kingdoms?",
        answer:
          "Yes. Kingdom names tend to sound administrative and formal (the Kingdom of Valdoria). Tribe names should feel organic and identity-driven (the Ashwalkers, the Storm Crows). This linguistic contrast reinforces the cultural difference between centralized states and decentralized tribal societies.",
      },
    ],
    related: [
      "clan-name-generator",
      "barbarian-name-generator",
      "village-name-generator",
      "druid-name-generator",
    ],
  },
  {
    slug: "gang-name-generator",
    title: "Gang Name Generator",
    tagline: "Name ruthless criminal outfits that rule the streets and shadows.",
    metaDescription:
      "Generate gritty gang names for RPGs, urban fantasy, and fiction. Get names for criminal organizations, street crews, and underworld factions instantly.",
    nameType: "Gang",
    description:
      "Gangs are the power structures of the underworld -- organizations built on loyalty, fear, territory, and the promise of belonging for those society has cast aside. In RPGs and fiction, gangs populate the shadowy districts of cities, run black markets, and provide morally complex quest hooks. A gang name needs to be memorable, intimidating, and street-level -- something that sounds spray-painted on an alley wall rather than inscribed on a charter.\n\nReal criminal organizations demonstrate several naming patterns. Some reference animals or predatory imagery: the Sharks, the Vipers, the Scorpions. Others claim territory: the Eastside Kings, the Docklands Crew. Some adopt ironic or darkly humorous names: the Gentlemen, the Saints, the Dead Rabbits (a historical New York gang). The most effective gang names create a brand -- a reputation that precedes the members and does half the intimidation work before anyone throws a punch.\n\nFor game masters running urban campaigns, gang names define the criminal ecosystem of a city. The Crimson Knives sound like assassins-for-hire. The Sewer Rats suggest a thieves' guild operating from the underground. The Gilded Masks imply wealthy patrons funding criminal activity behind a veneer of respectability. Each name sketches a niche in the underworld hierarchy.",
    systemPrompt:
      "Generate gritty gang and criminal organization names for fantasy and urban settings. Create several styles: animal/predatory names (the Black Vipers, the Sewer Rats, the Iron Scorpions), territorial names (the Dockside Crew, the Undercity Kings, the Ashward Boys), ironic/darkly humorous names (the Gentlemen, the Charitable, the Dead Roses, the Smiling Knives), color-coded names (the Crimson Knives, the Grey Cloaks, the Jade Syndicate), and reputation names (the Faceless, the Last Word, the Unmarked). For each, provide a one-sentence description of the gang's turf, racket, leadership style, or signature method.",
    group: "World Building",
    faqs: [
      {
        question: "What makes a gang name effective in a fantasy setting?",
        answer:
          "An effective gang name is short, memorable, and implies either danger or mystery. It should work as graffiti, as a whispered warning, and as a brand that inspires fear or respect. The best names also hint at the gang's specialty -- the Smiling Knives suggests assassination, the Grey Market implies smuggling.",
      },
      {
        question: "How do I differentiate multiple gangs in a single city?",
        answer:
          "Give each gang a distinct naming style that reflects its character. A refined syndicate might use a color (the Jade Syndicate), a street-level crew might use territory (the Dockside Boys), and an assassin guild might use an ominous title (the Last Word). Different naming conventions signal different organizational cultures.",
      },
      {
        question: "How do gangs differ from thieves' guilds in RPGs?",
        answer:
          "Thieves' guilds tend to be more organized, hierarchical, and focused on professional thievery. Gangs are broader criminal organizations that might deal in extortion, smuggling, drug trade, territory control, and violence. A single city might have one thieves' guild and several gangs, each controlling different rackets.",
      },
    ],
    related: [
      "guild-name-generator",
      "rogue-name-generator",
      "assassin-name-generator",
      "city-name-generator",
    ],
  },
  {
    slug: "army-name-generator",
    title: "Army Name Generator",
    tagline: "Name legendary armies and military orders that march into history.",
    metaDescription:
      "Generate powerful army and military force names for fantasy RPGs, fiction, and world-building. Get names for legions, companies, and war bands instantly.",
    nameType: "Army",
    description:
      "Armies are the instruments through which kingdoms project power, empires expand, and history pivots. A named army is more than a collection of soldiers -- it is an institution with traditions, a reputation, and an identity that outlasts any individual campaign. From the Roman Legions to the Companions of Alexander to the Night's Watch, named military forces become characters in their own right.\n\nMilitary naming conventions follow several patterns. Numbered designations (the 501st, the Ninth Legion) suggest bureaucratic organization and vast scale. Named companies (the Band of the Hawk, the Iron Company) imply either elite status or mercenary independence. Poetic titles (the Lions of the West, the Deathless Guard) suggest legendary reputation. Real militaries throughout history have used all these approaches, sometimes simultaneously.\n\nFor fantasy world-builders, army names communicate military culture. An army called the Radiant Legion sounds disciplined, holy, and organized -- probably an empire's elite force. The Ashborne Irregulars sound scrappy, unconventional, and possibly mercenary. The Silent Host sounds terrifying and might not be entirely alive. Each name sets expectations about doctrine, morale, equipment, and the kind of opposition adventurers will face.",
    systemPrompt:
      "Generate fantasy army and military force names across different organizational types. Create several styles: formal legion/regiment names (the Ironclad Legion, the First Crimson Regiment, the Praetorian Vanguard), named elite companies (the Deathless Guard, the Ashen Blades, the Stormbreakers), mercenary bands (the Iron Company, the Coin Wolves, the Sellsword Saints), poetic/legendary titles (the Lions of the West, the Silent Host, the Unyielding), and barbarian/tribal war bands (the Blood Tide, the Wyrmriders, the Bonecrusher Horde). For each, provide a one-sentence description of the force's size, specialty, reputation, or famous battle.",
    group: "World Building",
    faqs: [
      {
        question: "How are real military units typically named?",
        answer:
          "Real armies use numbered designations (82nd Airborne), geographic identifiers (the Scots Guards), royal patronage (the King's Own), descriptive titles (the Immortals of Persia), or historical events (the Old Contemptibles). Fantasy armies that mix these conventions feel more authentic than those using a single approach.",
      },
      {
        question: "What is the difference between a legion, a company, and a war band?",
        answer:
          "These terms imply different sizes and organization levels. A legion suggests thousands of disciplined soldiers under formal command. A company is a smaller, often elite or specialized unit. A war band implies a loosely organized tribal or barbarian force. Using the right term sets expectations about the force's discipline and scale.",
      },
      {
        question: "Should mercenary companies have different naming styles than national armies?",
        answer:
          "Absolutely. National armies tend toward formal, patriotic names (the Royal Guard, the First Legion). Mercenary companies adopt punchier, more marketable names (the Iron Company, the Black Talons) because their name is their brand. This contrast highlights the cultural difference between professional soldiers and sellswords.",
      },
    ],
    related: [
      "empire-name-generator",
      "kingdom-name-generator",
      "weapon-name-generator",
      "warrior-name-generator",
    ],
  },
  // ─────────────────────────────────────────────
  // Extra Character Types (21–24)
  // ─────────────────────────────────────────────
  {
    slug: "detective-name-generator",
    title: "Detective Name Generator",
    tagline: "Name sharp-witted investigators who unravel mysteries others cannot.",
    metaDescription:
      "Generate compelling detective names for fiction, RPGs, and creative writing. Get names for sleuths, private eyes, and investigators with character instantly.",
    nameType: "Detective",
    description:
      "Detectives are the seekers of truth in a world determined to hide it -- sharp minds wrapped in trench coats, fueled by obsession and an inability to let an unanswered question rest. A detective's name is their calling card, and in fiction it often becomes synonymous with a method, a city, or a particular brand of dogged persistence. Sherlock Holmes, Philip Marlowe, Hercule Poirot -- these names are inseparable from the mysteries they solved.\n\nDetective names follow interesting conventions shaped by genre. Hardboiled private eyes tend to have short, punchy Anglo-Saxon names: Sam Spade, Mike Hammer, Jake Gittes. The bluntness of the name mirrors their direct approach. Golden age sleuths often have more distinctive, almost eccentric names: Hercule Poirot, Lord Peter Wimsey, Miss Marple. The quirkiness signals an unconventional mind. Modern detectives might have more naturalistic names, but the best ones still carry a memorable quality.\n\nFor RPG campaigns and fiction, a detective name should match the tone of the mystery. A noir investigation calls for a name like Calloway Hale or Juno Blacke -- something that sounds good in a voiceover narration. A comedic mystery might feature Detective Fenwick Plumb. The name primes the audience for the kind of story they are about to experience.",
    systemPrompt:
      "Generate detective and investigator names across mystery sub-genres. Create several styles: hardboiled noir names -- short, punchy, Anglo-Saxon (Jack Calloway, Vera Holt, Cole Drennan, Mara Stone), golden age/eccentric names (Augustus Fenwick, Isadora Crane, Professor Cornelius Whitmore, Lady Evangeline Sharp), modern procedural names (Detective Sarah Okafor, Inspector Ravi Maren, Agent Tomás Delgado), and fantasy/RPG investigator names (Aldric the Unseeing, Thessaly Quill, Inquisitor Maren Ashvane, Truthseeker Dain). For each, provide a one-sentence note about the detective's style, specialty, or signature method.",
    group: "Character Types",
    faqs: [
      {
        question: "What makes a detective name memorable?",
        answer:
          "The best detective names have a distinctive quality that matches their genre. Hardboiled names are blunt and monosyllabic (Sam Spade). Eccentric sleuths have unusual, almost theatrical names (Hercule Poirot). The key is that the name should be easy to remember and evocative of the detective's personality and method.",
      },
      {
        question: "Should a detective name match their investigation style?",
        answer:
          "It helps. A name like 'Jack Calloway' sets up expectations of a streetwise, no-nonsense investigator. 'Professor Cornelius Whitmore' suggests an academic approach to crime-solving. Matching name energy to character energy creates coherence and helps audiences quickly understand what kind of detective they are dealing with.",
      },
      {
        question: "Can detectives work in fantasy settings?",
        answer:
          "Absolutely. Fantasy noir, magical mystery, and inquisitor archetypes all translate the detective role into fantasy contexts. A detective in a D&D setting might be a divination wizard, a knowledge cleric, or simply a sharp-witted rogue. The investigative drive remains the same regardless of whether the tools include magnifying glasses or scrying orbs.",
      },
    ],
    related: [
      "rogue-name-generator",
      "city-name-generator",
      "wizard-name-generator",
      "assassin-name-generator",
    ],
  },
  {
    slug: "healer-name-generator",
    title: "Healer Name Generator",
    tagline: "Name compassionate healers who mend wounds and restore hope.",
    metaDescription:
      "Generate meaningful healer names for fantasy RPGs, fiction, and world-building. Get names for clerics, herbalists, and miracle workers with character instantly.",
    nameType: "Healer",
    description:
      "Healers are the quiet heroes of every adventuring party and every fantasy world -- the ones who stand between their companions and death, who rush toward suffering when everyone else runs away. A healer's name should carry warmth, competence, and the particular kind of strength that comes from choosing to mend rather than destroy. These are names that wounded soldiers whisper in gratitude and plague-stricken villages speak with reverence.\n\nHealer archetypes span a wide spectrum, and naming conventions shift with them. Divine healers -- clerics, priests, and paladins -- often carry names with spiritual resonance: Sister Maren, Brother Aldric, Lightbringer Sera. Herbalists and hedge witches favor earthy, approachable names: Old Briar, Thistlewick, Sage Rowan. Military medics and field surgeons might have blunt, practical names: Doc Hale, the Stitcher, Ironhand Thera. Each tradition implies a different source of healing power and a different relationship with those they serve.\n\nFor world-builders, healer names anchor the medical and spiritual infrastructure of a setting. A city might have Sister Agatha's Hospice, the Mending House of Sage Greenhollow, and Doc Barrow's Field Clinic -- three healers serving different communities in different ways, each name painting a complete picture of their practice.",
    systemPrompt:
      "Generate healer and medical practitioner names for fantasy settings. Create several styles: divine healer names with clerical titles (Sister Maren, Brother Aldric, Lightbringer Sera, Dawnmother Kael), herbalist/hedge witch names with earthy quality (Old Briar, Thistlewick, Sage Rowan, Fernhollow), field medic/surgeon names that are practical and blunt (Doc Hale, the Stitcher, Ironhand Thera, Mender Cole), and legendary healer names (the Undying Mercy, Ashara Who Mends, the Gentle Hand of Solace). For each, provide a one-sentence note about the healer's specialty, method, or the community they serve.",
    group: "Character Types",
    faqs: [
      {
        question: "How do healer names differ from cleric names?",
        answer:
          "Cleric names emphasize divine connection and religious authority. Healer names are broader, encompassing clerics but also herbalists, surgeons, folk healers, and magical practitioners. A healer name should primarily evoke compassion and competence, while a cleric name emphasizes faith and spiritual power.",
      },
      {
        question: "What naming traditions do fantasy healers follow?",
        answer:
          "Temple healers often use religious titles (Sister, Brother, Mother, Father). Herbalists tend toward nature-inspired names or earn nicknames from their communities. Military healers adopt practical, no-nonsense names. The naming convention signals the healer's training, power source, and social role.",
      },
      {
        question: "What classes can serve as healers in D&D?",
        answer:
          "Clerics and druids are the most iconic healers, but bards, paladins, rangers, celestial warlocks, and divine soul sorcerers all have healing capabilities. Even non-magical characters can serve as healers through the Healer feat and Medicine skill. The healer archetype transcends any single class.",
      },
    ],
    related: [
      "cleric-name-generator",
      "druid-name-generator",
      "paladin-name-generator",
      "witch-name-generator",
    ],
  },
  {
    slug: "merchant-name-generator",
    title: "Merchant Name Generator",
    tagline: "Name shrewd traders and colorful shopkeepers for your world.",
    metaDescription:
      "Generate memorable merchant names for fantasy RPGs, fiction, and world-building. Get names for traders, shopkeepers, and traveling salesfolk instantly.",
    nameType: "Merchant",
    description:
      "Merchants are the connective tissue of any fantasy economy -- the people who move goods, set prices, make deals, and transform raw resources into the supplies adventurers need. A merchant's name is their brand, and in a world without corporate logos, that name must do all the work of establishing trust, quality, and specialization. When a blacksmith hammers his name into every blade, that name had better inspire confidence.\n\nMerchant naming conventions in fantasy lean on several traditions. Trade surnames are a staple: Cooper, Tanner, Fletcher, Brewer -- names that literally advertise the family business. More distinctive merchants earn epithets based on their reputation: Honest Hal, Swindler Salk, the Silk Duchess. Traveling merchants and exotic traders often carry names from distant cultures, reinforcing their role as bridges between civilizations and sources of rare goods.\n\nFor game masters, merchant names transform shopping scenes from mechanical transactions into memorable roleplaying encounters. Players who buy from 'a weapon shop' will forget the scene immediately. Players who haggle with Gerta Ironprice at the Rusted Anvil will remember her for the entire campaign. The merchant's name is the first step in making commerce feel like storytelling.",
    systemPrompt:
      "Generate fantasy merchant and trader names that feel commercial and characterful. Create several styles: trade-surname merchants (Aldric Cooper, Maren Fletcher, Theron Brewer, Elda Tanner), epithet merchants (Honest Hal, Swindler Salk, the Silk Duchess, Lucky Lena, Fairprice Fenn), exotic/traveling traders (Zafir al-Rashid, Mei Goldroute, Djembe the Wandering Merchant, Cassia of the Jade Road), and shop-name merchants where the name implies the business (Old Copperkettle, Needlewise, Gemma Brightscale). For each, note what they sell, their reputation, and a one-sentence personality sketch.",
    group: "Character Types",
    faqs: [
      {
        question: "How can merchant names enhance RPG shopping scenes?",
        answer:
          "A named merchant with personality transforms a price list into a scene. 'Honest Hal's Surplus Arms' tells players this merchant is friendly, deals in secondhand goods, and will give a fair price. The name does world-building, sets expectations, and invites roleplaying all at once.",
      },
      {
        question: "What naming conventions do fantasy merchants follow?",
        answer:
          "Common patterns include trade surnames (Cooper, Tanner, Smith), earned epithets (Honest, Lucky, the Golden), geographic origins for traveling merchants (of the Jade Road, al-Rashid), and shop-name identities where the merchant becomes synonymous with their store (Old Copperkettle, Needlewise).",
      },
      {
        question: "How do I create a memorable NPC merchant quickly?",
        answer:
          "Give them a name that implies personality and trade specialty, then add one distinctive quirk. 'Fairprice Fenn, the halfling potion seller who always offers a free sample' is enough to run a full shopping scene. The name does most of the characterization work.",
      },
    ],
    related: [
      "tavern-name-generator",
      "guild-name-generator",
      "city-name-generator",
      "pirate-name-generator",
    ],
  },
  {
    slug: "pirate-captain-name-generator",
    title: "Pirate Captain Name Generator",
    tagline: "Name fearsome captains who command the seas and strike terror in port.",
    metaDescription:
      "Generate legendary pirate captain names for RPGs, fiction, and creative projects. Get fearsome names for sea raiders, corsairs, and buccaneers instantly.",
    nameType: "Pirate Captain",
    description:
      "Pirate captains are the monarchs of lawlessness -- charismatic, ruthless, and defined by the legends they cultivate as much as the ships they command. A pirate captain's name is their most valuable possession, because on the open sea, reputation is currency. A feared name can force a merchant ship to surrender without a single cannon shot. A name that inspires loyalty keeps a crew together through storms and lean seasons alike.\n\nHistory's most infamous pirate captains understood the power of a name. Blackbeard cultivated his terrifying image deliberately, weaving slow-burning fuses into his beard during battle. Calico Jack earned his name from the colorful clothing he favored. Anne Bonny and Mary Read proved that pirate captaincy transcended gender. Each name was a brand, carefully maintained and fiercely defended.\n\nFor fantasy and RPG settings, pirate captain names follow a reliable formula: a colorful epithet or distinguishing feature plus a surname that sounds appropriately roguish. Captain Crimson, Saltblood Maren, Ironhook Vex, the Tempest Queen -- these names paint immediate portraits. The best pirate captain names work as both a character introduction and a warning, the kind of name tavern patrons lower their voices to speak.",
    systemPrompt:
      "Generate pirate captain names that command fear and respect on the high seas. Create several styles: epithet-plus-name (Blackjaw Morgan, Ironhook Vex, Saltblood Maren, Crimson Calloway), title-style names (the Tempest Queen, the Dread Commodore, the Siren of the Black Reef), historical-flavor names (Captain Elara Vane, Santiago the Red, Bartholomew Ashgrove, Nkemdi of the Gold Coast), and fearsome single-name legends (Stormrend, Deadeye, the Leviathan). For each, provide a one-sentence description including their ship's name, fearsome reputation, or signature tactic.",
    group: "Character Types",
    faqs: [
      {
        question: "What makes a pirate captain name fearsome?",
        answer:
          "The most effective pirate names combine a vivid physical or behavioral descriptor with a strong surname. Blackbeard, Calico Jack, and Long John Silver all follow this pattern. The descriptor creates an instant mental image, while the name grounds the character as a real person. Fantasy pirate names work best when they follow the same formula.",
      },
      {
        question: "How are pirate captain names different from regular pirate names?",
        answer:
          "A captain's name carries more authority and legend. Regular pirates might be known by a simple nickname, but a captain's name precedes their ship: 'Captain Ironhook's vessel the Crimson Fang.' The captain's name becomes synonymous with their ship, crew, and reputation, functioning as a brand for the entire operation.",
      },
      {
        question: "Should a pirate captain's ship have a matching name?",
        answer:
          "It often helps thematically. Captain Stormrend commanding the Tempest's Fury creates a cohesive image. But a deliberate mismatch can be characterful too -- a terrifying pirate commanding a ship ironically named the Gentle Breeze adds dark humor and personality. Both approaches work when done intentionally.",
      },
    ],
    related: [
      "pirate-name-generator",
      "ship-name-generator",
      "island-name-generator",
      "rogue-name-generator",
    ],
  },
];
