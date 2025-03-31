const COMMON_WORDS = [
    // Animals
    "alligator", "antelope", "ape", "badger", "bat", "bear", "beaver", "bee", "bird", "butterfly",
    "camel", "cat", "caterpillar", "chicken", "cow", "crab", "crocodile", "deer", "dog", "dolphin",
    "donkey", "dove", "duck", "eagle", "elephant", "elk", "falcon", "ferret", "fish", "flamingo",
    "fox", "frog", "giraffe", "goat", "goose", "gorilla", "grasshopper", "hamster", "hawk", "horse",
    "hummingbird", "jellyfish", "kangaroo", "koala", "ladybug", "leopard", "lion", "lizard", "monkey",
    "moose", "mouse", "octopus", "ostrich", "otter", "owl", "panda", "parrot", "penguin", "pig",
    "pigeon", "polar", "rabbit", "raccoon", "ram", "rat", "raven", "reindeer", "rhinoceros", "salamander",
    "salmon", "scorpion", "seal", "shark", "sheep", "skunk", "sloth", "snake", "sparrow", "spider",
    "squirrel", "swan", "tiger", "toad", "turkey", "turtle", "vulture", "walrus", "whale", "wolf",
    "zebra", "chimpanzee", "orangutan", "baboon", "wombat", "platypus", "caribou", "hippopotamus",
    "cuttlefish", "starfish", "seashell", "pearl", "feather", "bone", "ivory", "teeth", "hair", "nail",
    "skin", "muscle", "heart", "brain", "lung", "liver", "stomach", "kidney", "spine", "rib",
    "vein", "artery", "blood", "cell", "gene", "DNA", "RNA", "chromosome", "atom", "molecule",
    "protein", "enzyme", "vitamin", "hormone", "bacteria", "virus", "fungus", "algae", "yeast", "mushroom",

    // Nature
    "alpine", "arctic", "beach", "canyon", "cave", "cliff", "cloud", "coast", "desert", "forest",
    "glacier", "grass", "grove", "hill", "island", "jungle", "lake", "marsh", "meadow", "mountain",
    "ocean", "peak", "plain", "pond", "prairie", "rain", "reef", "river", "rock", "sand",
    "sea", "shore", "sky", "snow", "spring", "stream", "summer", "thunder", "tide", "tree",
    "valley", "volcano", "water", "wave", "wind", "winter", "wood", "woods", "ground", "mist",
    "dew", "mud", "dirt", "flower", "leaf", "branch", "root", "seed", "seaweed", "coral",

    // Space and Astronomy
    "space", "universe", "galaxy", "planet", "earth", "mars", "venus", "jupiter", "saturn", "neptune",
    "mercury", "pluto", "comet", "asteroid", "meteor", "blackhole", "nebula", "orbit", "gravity",
    "satellite", "asterism", "constellation", "nova", "supernova", "eclipse", "solstice", "equinox",
    "telescope", "spaceship", "astronaut", "cosmos", "starburst", "aurora", "pulsar", "quasar",
    "magnetar", "wormhole", "exoplanet", "lightyear", "singularity", "cryosphere", "biosphere",
    "lithosphere", "stratosphere", "troposphere", "ionosphere", "exosphere",

    // Science and Technology
    "meteorology", "geology", "oceanography", "ecology", "biology", "genetics", "evolution", "taxonomy",
    "anthropology", "archeology", "paleontology", "cryptography", "mathematics", "geometry", "algebra",
    "calculus", "trigonometry", "statistics", "physics", "chemistry", "philosophy", "psychology",
    "sociology", "linguistics", "literature", "rhetoric", "poetry", "drama", "fiction", "mythology",
    "folklore", "symbolism", "iconography", "calligraphy", "typography", "cartography", "photography",
    "cinematography", "animation", "design", "architecture", "engineering", "robotics", "cybernetics",
    "nanotechnology", "biotechnology", "genomics", "bioinformatics", "artificial", "intelligence",
    "machine", "learning", "quantum", "computing", "blockchain", "cryptocurrency", "aerospace",
    "astrophysics", "biomechanics", "neuroscience", "psychoanalysis", "sustainable", "technology",
    "green", "energy", "solar", "windpower",

    // Food and Plants
    "apple", "banana", "cherry", "fruit", "berry", "orange", "lemon", "lime", "grape", "pear",
    "peach", "plum", "melon", "watermelon", "coconut", "pineapple", "strawberry", "blueberry",
    "raspberry", "blackberry", "kiwi", "mango", "papaya", "pomegranate", "fig", "date", "olive",
    "almond", "peanut", "walnut", "pistachio", "cashew", "hazelnut", "pecan", "chestnut", "bean",
    "pea", "carrot", "potato", "tomato", "cucumber", "lettuce", "spinach", "cabbage", "onion",
    "garlic", "pepper", "chili", "corn", "wheat", "rice", "oats", "barley", "rye", "millet",
    "quinoa", "flour", "bread", "butter", "cheese", "milk", "egg", "yogurt", "cream", "honey",
    "sugar", "salt", "vinegar", "oil", "soup", "salad", "pasta", "noodle", "pizza", "burger",
    "sandwich", "steak", "chicken", "beef", "pork", "fish", "shrimp", "crab", "lobster", "clam",
    "oyster", "mussel", "scallop", "tuna", "salmon", "cod", "halibut", "trout", "eel", "octopus",
    "squid", "cuttlefish", "whale", "dolphin", "shark", "turtle", "frog", "lizard", "snake",
    "crocodile", "alligator", "chameleon", "tiger", "lion", "leopard", "cheetah", "jaguar",
    "panther", "wolf", "fox", "bear", "deer", "moose", "elk", "caribou", "reindeer", "goat",
    "sheep", "cow", "horse", "donkey", "zebra", "giraffe", "elephant", "rhinoceros", "hippopotamus",
    "monkey", "gorilla", "chimpanzee", "orangutan", "baboon", "koala", "kangaroo", "wombat",
    "platypus", "penguin", "eagle", "hawk", "falcon", "owl", "sparrow", "robin", "parrot",
    "peacock", "swan", "duck", "goose", "chicken", "turkey", "pigeon", "dove", "crow", "raven",
    "magpie", "seagull", "pelican", "flamingo", "butterfly", "moth", "bee", "wasp", "ant",
    "spider", "scorpion", "beetle", "dragonfly", "grasshopper", "cricket", "caterpillar", "snail",
    "slug", "worm", "starfish", "jellyfish", "coral", "seaweed", "seashell", "pearl", "gold",
    "silver", "bronze", "copper", "iron", "steel", "aluminum", "nickel", "platinum", "diamond",
    "ruby", "sapphire", "emerald", "topaz", "opal", "amethyst", "turquoise", "quartz", "granite",
    "marble", "slate", "chalk", "clay", "brick", "cement", "concrete", "plastic", "rubber", "paper",
    "wood", "fabric", "cotton", "wool", "silk", "leather", "fur", "feather", "bone", "ivory",
    "teeth", "hair", "nail", "skin", "muscle", "heart", "brain", "lung", "liver", "stomach",
    "kidney", "spine", "rib", "vein", "artery", "blood", "cell", "gene", "DNA", "RNA",
    "chromosome", "atom", "molecule", "protein", "enzyme", "vitamin", "hormone", "bacteria", "virus",
    "fungus", "algae", "yeast", "mushroom", "nebula", "orbit", "gravity", "satellite", "asterism",
    "constellation", "nova", "supernova", "eclipse", "solstice", "equinox", "telescope", "spaceship",
    "astronaut", "cosmos", "starburst", "aurora", "pulsar", "quasar", "magnetar", "wormhole",
    "exoplanet", "lightyear", "singularity", "terraform", "cryosphere", "biosphere", "lithosphere",
    "stratosphere", "troposphere", "ionosphere", "exosphere", "meteorology", "geology", "oceanography",
    "ecology", "biology", "genetics", "evolution", "taxonomy", "anthropology", "archeology",
    "paleontology", "cryptography", "mathematics", "geometry", "algebra", "calculus", "trigonometry",
    "statistics", "physics", "chemistry", "philosophy", "psychology", "sociology", "linguistics",
    "literature", "rhetoric", "poetry", "drama", "fiction", "mythology", "folklore", "symbolism",
    "iconography", "calligraphy", "typography", "cartography", "photography", "cinematography",
    "animation", "design", "architecture", "engineering", "robotics", "cybernetics", "nanotechnology",
    "biotechnology", "genomics", "bioinformatics", "artificial", "intelligence", "machine", "learning",
    "quantum", "computing", "blockchain", "cryptocurrency", "aerospace", "astrophysics", "biomechanics",
    "neuroscience", "psychoanalysis", "sustainable", "technology", "green", "energy", "solar", "windpower",

    // Mythology and Fantasy
    "dragon", "unicorn", "phoenix", "griffin", "centaur", "mermaid", "pegasus", "hydra", "minotaur", "sphinx",
    "cyclops", "satyr", "nymph", "faun", "troll", "elf", "dwarf", "giant", "wizard", "witch",
    "warlock", "sorcerer", "magician", "oracle", "prophet", "priest", "monk", "paladin", "knight", "warrior",
    "archer", "assassin", "rogue", "ranger", "bard", "druid", "shaman", "vampire", "werewolf", "zombie",
    "ghost", "specter", "phantom", "demon", "devil", "angel", "archangel", "seraph", "cherub", "golem",
    "titan", "god", "goddess", "deity", "immortal", "hero", "legend", "myth", "fable", "tale",

    // Art and Creativity
    "canvas", "palette", "brush", "paint", "color", "hue", "shade", "tint", "tone", "texture",
    "pattern", "design", "style", "form", "shape", "line", "curve", "angle", "circle", "square",
    "triangle", "sphere", "cube", "pyramid", "cylinder", "cone", "prism", "polygon", "symmetry", "rhythm",
    "harmony", "balance", "contrast", "emphasis", "movement", "space", "depth", "perspective", "composition", "medium",
    "sculpture", "statue", "bust", "relief", "mural", "fresco", "mosaic", "collage", "print", "etching",
    "engraving", "lithograph", "watercolor", "pastel", "charcoal", "pencil", "pen", "ink", "chalk", "crayon",

    // Architecture and Buildings
    "arch", "column", "pillar", "dome", "vault", "spire", "tower", "turret", "battlement", "parapet",
    "balcony", "terrace", "portico", "veranda", "atrium", "courtyard", "gallery", "arcade", "nave", "aisle",
    "transept", "apse", "chapel", "sanctuary", "altar", "pulpit", "pew", "vestibule", "foyer", "lobby",
    "hallway", "corridor", "staircase", "escalator", "elevator", "basement", "cellar", "attic", "garret", "loft",
    "penthouse", "annex", "wing", "extension", "annexe", "pavilion", "gazebo", "pergola", "arbor", "trellis",
    "fence", "wall", "gate", "doorway", "threshold", "lintel", "sill", "frame", "panel", "molding",

    // Music and Sound
    "melody", "harmony", "rhythm", "beat", "tempo", "pitch", "tone", "note", "chord", "scale",
    "octave", "interval", "cadence", "phrase", "movement", "symphony", "concerto", "sonata", "suite", "prelude",
    "fugue", "rondo", "aria", "chorus", "refrain", "verse", "bridge", "coda", "cadenza", "overture",
    "interlude", "finale", "ensemble", "orchestra", "band", "choir", "quartet", "trio", "duet", "solo",
    "accompaniment", "arrangement", "composition", "improvisation", "rehearsal", "performance", "recital", "concert", "opera", "ballet",
    "dance", "waltz", "tango", "samba", "rumba", "jazz", "blues", "rock", "pop", "classical",

    // Literature and Writing
    "novel", "story", "tale", "fable", "myth", "legend", "epic", "poem", "verse", "stanza",
    "rhyme", "meter", "prose", "essay", "article", "report", "review", "critique", "analysis", "commentary",
    "biography", "autobiography", "memoir", "diary", "journal", "letter", "correspondence", "manuscript", "document", "text",
    "chapter", "section", "paragraph", "sentence", "phrase", "word", "vocabulary", "dictionary", "thesaurus", "encyclopedia",
    "reference", "index", "glossary", "appendix", "footnote", "citation", "quotation", "excerpt", "passage", "extract",

    // Sports and Games
    "soccer", "football", "basketball", "baseball", "tennis", "volleyball", "hockey", "rugby", "cricket", "golf",
    "swimming", "diving", "surfing", "skiing", "snowboarding", "skating", "skateboarding", "cycling", "running", "jumping",
    "throwing", "shooting", "fencing", "boxing", "wrestling", "martial", "karate", "judo", "taekwondo", "yoga",
    "gymnastics", "dance", "cheerleading", "archery", "bowling", "billiards", "chess", "checkers", "poker", "bridge",
    "monopoly", "scrabble", "trivia", "puzzle", "riddle", "quiz", "contest", "competition", "tournament", "championship",

    // Time and Seasons
    "millennium", "century", "decade", "year", "month", "week", "day", "hour", "minute", "second",
    "moment", "instant", "period", "era", "epoch", "age", "generation", "lifetime", "duration", "interval",
    "schedule", "calendar", "timetable", "deadline", "appointment", "meeting", "event", "occasion", "celebration", "holiday",
    "festival", "ceremony", "ritual", "tradition", "custom", "practice", "routine", "habit", "pattern", "cycle",
    "rotation", "revolution", "orbit", "phase", "stage", "step", "process", "progress", "development", "evolution",

    // Emotions and Feelings
    "joy", "happiness", "delight", "pleasure", "satisfaction", "contentment", "peace", "tranquility", "serenity", "calm",
    "excitement", "enthusiasm", "passion", "zeal", "fervor", "ardor", "eagerness", "anticipation", "hope", "optimism",
    "confidence", "courage", "bravery", "valor", "determination", "resilience", "patience", "tolerance", "forgiveness", "compassion",
    "empathy", "sympathy", "kindness", "generosity", "gratitude", "appreciation", "admiration", "respect", "trust", "faith",
    "love", "affection", "tenderness", "warmth", "intimacy", "closeness", "bond", "connection", "attachment", "devotion",

    // Abstract Concepts
    "truth", "beauty", "goodness", "justice", "freedom", "equality", "rights", "duty", "responsibility", "obligation",
    "honor", "integrity", "virtue", "wisdom", "knowledge", "understanding", "insight", "awareness", "consciousness", "perception",
    "thought", "idea", "concept", "theory", "principle", "law", "rule", "standard", "measure", "value",
    "purpose", "meaning", "significance", "importance", "relevance", "priority", "focus", "direction", "goal", "aim",
    "dream", "vision", "imagination", "creativity", "innovation", "progress", "change", "growth", "development", "evolution",

    // Materials and Substances
    "aluminum", "brass", "bronze", "copper", "gold", "iron", "lead", "mercury", "nickel", "platinum",
    "silver", "steel", "tin", "titanium", "tungsten", "zinc", "alloy", "metal", "mineral", "crystal",
    "diamond", "emerald", "ruby", "sapphire", "opal", "pearl", "jade", "quartz", "granite", "marble",
    "slate", "limestone", "sandstone", "obsidian", "basalt", "pumice", "clay", "ceramic", "porcelain", "glass",
    "plastic", "rubber", "synthetic", "fiber", "fabric", "textile", "cotton", "wool", "silk", "leather",

    // Transportation and Travel
    "airplane", "helicopter", "jet", "rocket", "satellite", "spaceship", "train", "locomotive", "carriage", "wagon",
    "car", "truck", "bus", "van", "motorcycle", "bicycle", "scooter", "skateboard", "boat", "ship",
    "yacht", "canoe", "kayak", "raft", "submarine", "hovercraft", "glider", "parachute", "hot", "balloon",
    "cable", "elevator", "escalator", "conveyor", "pulley", "wheel", "axle", "gear", "sprocket", "chain",
    "rope", "cable", "wire", "track", "rail", "road", "highway", "bridge", "tunnel", "port",

    // Tools and Equipment
    "hammer", "screwdriver", "wrench", "pliers", "saw", "drill", "chisel", "file", "scraper", "knife",
    "axe", "shovel", "rake", "hoe", "fork", "spade", "trowel", "brush", "broom", "mop",
    "vacuum", "washer", "dryer", "refrigerator", "stove", "oven", "microwave", "blender", "mixer", "grinder",
    "cutter", "slicer", "press", "clamp", "vise", "jig", "mold", "form", "template", "pattern",
    "ruler", "compass", "protractor", "level", "square", "tape", "scale", "balance", "gauge", "meter",

    // Geography and Landforms
    "continent", "country", "nation", "state", "province", "region", "territory", "district", "county", "city",
    "town", "village", "hamlet", "metropolis", "capital", "port", "harbor", "bay", "gulf", "strait",
    "channel", "inlet", "cove", "fjord", "delta", "estuary", "lagoon", "reef", "atoll", "archipelago",
    "peninsula", "isthmus", "plateau", "mesa", "butte", "ridge", "range", "peak", "summit", "crest",
    "slope", "cliff", "escarpment", "gorge", "ravine", "canyon", "valley", "basin", "depression", "crater",
    "volcano", "geyser", "spring", "oasis", "wetland", "marsh", "swamp", "bog", "fen", "tundra",
    "taiga", "savanna", "prairie", "steppe", "desert", "dune", "oasis", "ocean", "sea", "lake",
    "pond", "reservoir", "river", "stream", "creek", "brook", "rapids", "waterfall", "glacier", "iceberg",
    "snowfield", "moraine", "esker", "drumlin", "kettle", "pothole", "cave", "cavern", "grotto", "abyss",

    // Weather and Climate
    "atmosphere", "air", "wind", "breeze", "gale", "storm", "hurricane", "typhoon", "cyclone", "tornado",
    "whirlwind", "dust", "fog", "mist", "haze", "smog", "cloud", "rain", "drizzle", "shower",
    "downpour", "thunderstorm", "lightning", "thunder", "hail", "sleet", "snow", "blizzard", "frost", "ice",
    "dew", "vapor", "steam", "humidity", "moisture", "drought", "flood", "tide", "wave", "current",
    "pressure", "temperature", "heat", "cold", "warmth", "chill", "freeze", "melt", "evaporate", "condense",
    "precipitation", "climate", "weather", "season", "spring", "summer", "autumn", "winter", "monsoon", "trade",
    "jet", "front", "system", "high", "low", "pressure", "depression", "ridge", "trough", "vortex",

    // Plants and Flowers
    "tree", "shrub", "bush", "vine", "creeper", "climber", "herb", "grass", "weed", "flower",
    "blossom", "bud", "petal", "stem", "branch", "twig", "leaf", "needle", "cone", "fruit",
    "seed", "nut", "berry", "grain", "pollen", "spore", "moss", "lichen", "fern", "algae",
    "bamboo", "palm", "cactus", "succulent", "orchid", "rose", "lily", "daisy", "sunflower", "tulip",
    "daffodil", "carnation", "chrysanthemum", "marigold", "dandelion", "poppy", "iris", "peony", "azalea", "rhododendron",
    "jasmine", "lavender", "mint", "sage", "thyme", "rosemary", "basil", "oregano", "parsley", "coriander",
    "ginger", "turmeric", "cinnamon", "nutmeg", "clove", "pepper", "vanilla", "cocoa", "coffee", "tea",
    "cotton", "flax", "hemp", "jute", "silk", "wool", "bark", "wood", "timber", "lumber",

    // Insects and Invertebrates
    "ant", "bee", "wasp", "hornet", "termite", "beetle", "ladybug", "firefly", "dragonfly", "damselfly",
    "cicada", "cricket", "grasshopper", "locust", "mantis", "stick", "leaf", "caterpillar", "butterfly", "moth",
    "silkworm", "spider", "scorpion", "tick", "mite", "centipede", "millipede", "worm", "slug", "snail",
    "clam", "oyster", "mussel", "scallop", "octopus", "squid", "cuttlefish", "jellyfish", "coral", "sponge",
    "sea", "urchin", "starfish", "brittle", "sea", "cucumber", "anemone", "hydra", "planarian", "tapeworm",
    "roundworm", "flatworm", "leech", "barnacle", "crustacean", "crab", "lobster", "shrimp", "prawn", "krill",
    "copepod", "amphipod", "isopod", "ostracod", "bryozoan", "brachiopod", "echinoderm", "cnidarian", "ctenophore", "sponge",

    // Birds and Reptiles
    "eagle", "hawk", "falcon", "owl", "vulture", "condor", "stork", "crane", "heron", "egret",
    "ibis", "flamingo", "pelican", "cormorant", "gannet", "albatross", "petrel", "shearwater", "penguin", "auk",
    "gull", "tern", "skua", "jaeger", "sandpiper", "plover", "oystercatcher", "curlew", "godwit", "snipe",
    "woodcock", "rail", "coot", "moorhen", "grebe", "loon", "duck", "goose", "swan", "teal",
    "wigeon", "pintail", "shoveler", "gadwall", "merganser", "scoter", "eider", "puffin", "guillemot", "razorbill",
    "grouse", "ptarmigan", "quail", "partridge", "pheasant", "turkey", "peacock", "chicken", "rooster", "hen",
    "chick", "nest", "egg", "feather", "wing", "tail", "beak", "claw", "scale", "shell",

    // Mammals and Marine Life
    "whale", "dolphin", "porpoise", "seal", "sea", "lion", "walrus", "otter", "beaver", "muskrat",
    "platypus", "echidna", "kangaroo", "wallaby", "koala", "wombat", "tasmanian", "devil", "thylacine", "opossum",
    "shrew", "mole", "hedgehog", "bat", "sloth", "anteater", "armadillo", "pangolin", "aardvark", "elephant",
    "rhinoceros", "hippopotamus", "giraffe", "zebra", "horse", "donkey", "zebra", "tapir", "pig", "boar",
    "deer", "elk", "moose", "caribou", "reindeer", "antelope", "gazelle", "bison", "buffalo", "yak",
    "camel", "llama", "alpaca", "vicuna", "guanaco", "sheep", "goat", "cow", "bull", "calf",
    "ox", "buffalo", "bison", "yak", "camel", "llama", "alpaca", "vicuna", "guanaco", "sheep",

    // Fish and Amphibians
    "shark", "ray", "skate", "sturgeon", "paddlefish", "gar", "bowfin", "lungfish", "coelacanth", "eel",
    "salmon", "trout", "char", "whitefish", "herring", "sardine", "anchovy", "mackerel", "tuna", "swordfish",
    "marlin", "sailfish", "tarpon", "bonefish", "cod", "haddock", "pollock", "halibut", "flounder", "sole",
    "bass", "perch", "pike", "walleye", "catfish", "carp", "minnow", "dace", "chub", "barbel",
    "catfish", "electric", "eel", "anglerfish", "frog", "toad", "newt", "salamander", "caecilian", "axolotl",
    "tadpole", "spawn", "egg", "larva", "pupa", "adult", "gill", "fin", "scale", "tail",

    // Minerals and Rocks
    "diamond", "ruby", "sapphire", "emerald", "topaz", "opal", "amethyst", "citrine", "garnet", "tourmaline",
    "aquamarine", "peridot", "zircon", "spinel", "lapis", "malachite", "turquoise", "jade", "agate", "onyx",
    "jasper", "carnelian", "chalcedony", "quartz", "crystal", "amethyst", "citrine", "rose", "smoky", "milky",
    "rock", "crystal", "granite", "basalt", "obsidian", "pumice", "scoria", "tuff", "limestone", "marble",
    "slate", "schist", "gneiss", "sandstone", "shale", "conglomerate", "breccia", "chert", "flint", "jasper",
    "mineral", "ore", "metal", "gold", "silver", "copper", "iron", "lead", "zinc", "tin",
    "aluminum", "nickel", "cobalt", "chromium", "manganese", "titanium", "vanadium", "tungsten", "molybdenum", "uranium",

    // Chemistry and Elements
    "hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen", "fluorine", "neon",
    "sodium", "magnesium", "aluminum", "silicon", "phosphorus", "sulfur", "chlorine", "argon", "potassium", "calcium",
    "scandium", "titanium", "vanadium", "chromium", "manganese", "iron", "cobalt", "nickel", "copper", "zinc",
    "gallium", "germanium", "arsenic", "selenium", "bromine", "krypton", "rubidium", "strontium", "yttrium", "zirconium",
    "niobium", "molybdenum", "technetium", "ruthenium", "rhodium", "palladium", "silver", "cadmium", "indium", "tin",
    "antimony", "tellurium", "iodine", "xenon", "cesium", "barium", "lanthanum", "cerium", "praseodymium", "neodymium",
    "promethium", "samarium", "europium", "gadolinium", "terbium", "dysprosium", "holmium", "erbium", "thulium", "ytterbium",
    "lutetium", "hafnium", "tantalum", "tungsten", "rhenium", "osmium", "iridium", "platinum", "gold", "mercury",
    "thallium", "lead", "bismuth", "polonium", "astatine", "radon", "francium", "radium", "actinium", "thorium",
    "protactinium", "uranium", "neptunium", "plutonium", "americium", "curium", "berkelium", "californium", "einsteinium", "fermium",
    "mendelevium", "nobelium", "lawrencium", "rutherfordium", "dubnium", "seaborgium", "bohrium", "hassium", "meitnerium", "darmstadtium",
    "roentgenium", "copernicium", "nihonium", "flerovium", "moscovium", "livermorium", "tennessine", "oganesson",

    // Mathematics and Geometry
    "number", "integer", "fraction", "decimal", "percentage", "ratio", "proportion", "sequence", "series", "pattern",
    "equation", "formula", "function", "variable", "constant", "coefficient", "exponent", "power", "root", "square",
    "cube", "factor", "multiple", "divisor", "quotient", "remainder", "sum", "difference", "product", "average",
    "mean", "median", "mode", "range", "deviation", "variance", "probability", "statistics", "graph", "chart",
    "point", "line", "ray", "segment", "angle", "degree", "radian", "circle", "arc", "sector",
    "radius", "diameter", "chord", "tangent", "secant", "triangle", "quadrilateral", "pentagon", "hexagon", "octagon",
    "polygon", "polyhedron", "prism", "pyramid", "cylinder", "cone", "sphere", "ellipse", "parabola", "hyperbola",
    "vector", "matrix", "determinant", "eigenvalue", "derivative", "integral", "limit", "convergence", "divergence", "infinity",

    // Physics and Energy
    "force", "energy", "power", "work", "motion", "velocity", "acceleration", "momentum", "mass", "weight",
    "gravity", "friction", "tension", "compression", "stress", "strain", "elasticity", "inertia", "torque", "rotation",
    "vibration", "wave", "frequency", "amplitude", "wavelength", "period", "phase", "resonance", "interference", "diffraction",
    "reflection", "refraction", "absorption", "emission", "radiation", "conduction", "convection", "heat", "temperature", "pressure",
    "density", "volume", "area", "distance", "time", "space", "dimension", "field", "particle", "atom",
    "molecule", "electron", "proton", "neutron", "nucleus", "orbit", "shell", "bond", "reaction", "decay",
    "fusion", "fission", "plasma", "magnetic", "electric", "nuclear", "thermal", "kinetic", "potential", "mechanical",

    // Technology and Computing
    "computer", "processor", "memory", "storage", "disk", "drive", "file", "data", "program", "code",
    "algorithm", "function", "variable", "loop", "array", "string", "integer", "float", "boolean", "object",
    "class", "method", "property", "event", "input", "output", "network", "server", "client", "protocol",
    "database", "query", "table", "record", "field", "index", "key", "value", "type", "interface",
    "screen", "keyboard", "mouse", "printer", "scanner", "camera", "microphone", "speaker", "headphone", "monitor",
    "router", "switch", "hub", "modem", "cable", "wire", "fiber", "satellite", "antenna", "signal",
    "bit", "byte", "kilobyte", "megabyte", "gigabyte", "terabyte", "petabyte", "exabyte", "zettabyte", "yottabyte",
    "binary", "hexadecimal", "octal", "decimal", "character", "symbol", "operator", "expression", "statement", "block",
    "module", "library", "framework", "toolkit", "sdk", "api", "plugin", "extension", "addon", "widget",

    // Communication and Media
    "message", "text", "email", "letter", "note", "memo", "report", "document", "file", "data",
    "image", "photo", "picture", "graphic", "artwork", "design", "layout", "format", "style", "theme",
    "font", "color", "size", "weight", "spacing", "margin", "padding", "border", "shadow", "effect",
    "video", "audio", "sound", "music", "voice", "speech", "language", "word", "sentence", "paragraph",
    "text", "content", "information", "knowledge", "wisdom", "truth", "fact", "fiction", "story", "tale",
    "news", "article", "blog", "post", "comment", "reply", "feedback", "review", "rating", "score",
    "social", "network", "community", "group", "forum", "chat", "call", "meeting", "conference", "presentation",

    // Business and Finance
    "company", "business", "enterprise", "organization", "corporation", "firm", "agency", "office", "branch", "department",
    "division", "unit", "team", "group", "staff", "employee", "worker", "manager", "director", "executive",
    "leader", "supervisor", "coordinator", "assistant", "clerk", "secretary", "accountant", "analyst", "consultant", "specialist",
    "product", "service", "item", "goods", "merchandise", "inventory", "stock", "supply", "demand", "market",
    "price", "cost", "value", "worth", "profit", "loss", "revenue", "income", "expense", "budget",
    "account", "balance", "debit", "credit", "payment", "receipt", "invoice", "bill", "check", "cash",
    "money", "currency", "dollar", "euro", "pound", "yen", "yuan", "rupee", "ruble", "franc",
    "bank", "credit", "loan", "debt", "interest", "rate", "tax", "fee", "charge", "discount",

    // Education and Learning
    "school", "college", "university", "institute", "academy", "center", "facility", "campus", "building", "classroom",
    "lecture", "seminar", "workshop", "course", "program", "degree", "diploma", "certificate", "qualification", "credential",
    "subject", "topic", "theme", "concept", "idea", "theory", "principle", "law", "rule", "method",
    "technique", "skill", "ability", "talent", "gift", "trait", "characteristic", "feature", "aspect", "element",
    "student", "learner", "pupil", "scholar", "researcher", "scientist", "expert", "specialist", "professional", "practitioner",
    "teacher", "instructor", "professor", "lecturer", "tutor", "mentor", "guide", "coach", "trainer", "facilitator",
    "study", "research", "investigation", "analysis", "examination", "test", "quiz", "exam", "assessment", "evaluation",
    "grade", "score", "mark", "result", "outcome", "performance", "progress", "development", "improvement", "achievement",

    // Health and Medicine
    "health", "wellness", "fitness", "strength", "stamina", "endurance", "flexibility", "balance", "coordination", "agility",
    "exercise", "workout", "training", "practice", "routine", "program", "regimen", "diet", "nutrition", "food",
    "vitamin", "mineral", "protein", "carbohydrate", "fat", "fiber", "calorie", "nutrient", "supplement", "medicine",
    "drug", "pill", "tablet", "capsule", "syrup", "ointment", "cream", "lotion", "spray", "injection",
    "vaccine", "antibiotic", "antiviral", "antifungal", "antiseptic", "disinfectant", "sterile", "clean", "hygiene", "sanitation",
    "disease", "illness", "sickness", "condition", "disorder", "syndrome", "symptom", "sign", "pain", "fever",
    "injury", "wound", "cut", "bruise", "burn", "fracture", "sprain", "strain", "tear", "swelling",
    "infection", "inflammation", "allergy", "reaction", "response", "recovery", "healing", "treatment", "therapy", "cure",

    // Society and Culture
    "society", "community", "group", "organization", "institution", "association", "club", "union", "league", "federation",
    "government", "state", "nation", "country", "region", "district", "city", "town", "village", "neighborhood",
    "family", "household", "clan", "tribe", "race", "ethnicity", "culture", "tradition", "custom", "practice",
    "religion", "faith", "belief", "doctrine", "creed", "sect", "denomination", "church", "temple", "mosque",
    "synagogue", "shrine", "altar", "ritual", "ceremony", "celebration", "festival", "holiday", "event", "occasion",
    "language", "dialect", "accent", "speech", "voice", "tone", "style", "manner", "way", "fashion",
    "art", "music", "dance", "drama", "theater", "cinema", "film", "video", "photography", "painting",
    "sculpture", "architecture", "design", "craft", "skill", "technique", "method", "process", "practice", "performance",

    // Law and Justice
    "law", "rule", "regulation", "statute", "code", "act", "bill", "policy", "procedure", "process",
    "court", "judge", "jury", "lawyer", "attorney", "counsel", "prosecutor", "defendant", "plaintiff", "witness",
    "evidence", "proof", "testimony", "statement", "document", "record", "file", "case", "trial", "hearing",
    "verdict", "sentence", "penalty", "punishment", "fine", "fee", "tax", "duty", "obligation", "responsibility",
    "right", "privilege", "freedom", "liberty", "equality", "justice", "fairness", "honesty", "integrity", "ethics",
    "crime", "offense", "violation", "breach", "trespass", "assault", "battery", "theft", "fraud", "deception",
    "contract", "agreement", "treaty", "pact", "bond", "pledge", "promise", "commitment", "obligation", "duty",

    // Military and Defense
    "army", "navy", "air", "force", "marine", "coast", "guard", "military", "defense", "security",
    "soldier", "sailor", "pilot", "marine", "officer", "commander", "general", "admiral", "colonel", "captain",
    "lieutenant", "sergeant", "corporal", "private", "cadet", "recruit", "veteran", "reserve", "guard", "patrol",
    "weapon", "gun", "rifle", "pistol", "cannon", "missile", "rocket", "bomb", "explosive", "munition",
    "armor", "shield", "helmet", "vest", "uniform", "equipment", "gear", "supply", "ammunition", "fuel",
    "base", "camp", "fort", "bunker", "tower", "wall", "fence", "barrier", "defense", "protection",
    "strategy", "tactic", "plan", "operation", "mission", "objective", "target", "enemy", "opponent", "threat",
    "attack", "defense", "offense", "retreat", "surrender", "victory", "defeat", "battle", "war", "conflict",

    // Transportation and Travel
    "journey", "trip", "voyage", "expedition", "adventure", "excursion", "tour", "visit", "stay", "residence",
    "hotel", "motel", "inn", "lodge", "resort", "camp", "cabin", "cottage", "house", "apartment",
    "room", "suite", "chamber", "hall", "lobby", "foyer", "corridor", "stairway", "elevator", "escalator",
    "parking", "garage", "lot", "space", "spot", "area", "zone", "district", "section", "quarter",
    "street", "road", "highway", "avenue", "boulevard", "lane", "alley", "path", "trail", "track",
    "bridge", "tunnel", "viaduct", "overpass", "underpass", "crossing", "intersection", "junction", "roundabout", "traffic",
    "signal", "light", "sign", "marker", "indicator", "guide", "direction", "route", "way", "course",

    // Tools and Equipment
    "tool", "device", "instrument", "appliance", "machine", "equipment", "gear", "kit", "set", "collection",
    "hammer", "screwdriver", "wrench", "pliers", "saw", "drill", "chisel", "file", "scraper", "knife",
    "axe", "shovel", "rake", "hoe", "fork", "spade", "trowel", "brush", "broom", "mop",
    "vacuum", "washer", "dryer", "refrigerator", "stove", "oven", "microwave", "blender", "mixer", "grinder",
    "cutter", "slicer", "press", "clamp", "vise", "jig", "mold", "form", "template", "pattern",
    "ruler", "compass", "protractor", "level", "square", "tape", "scale", "balance", "gauge", "meter",
    "sensor", "detector", "monitor", "display", "screen", "keyboard", "mouse", "printer", "scanner", "camera",
    "microphone", "speaker", "headphone", "amplifier", "receiver", "transmitter", "antenna", "cable", "wire", "connector",

    // Materials and Substances
    "material", "substance", "element", "compound", "mixture", "solution", "suspension", "emulsion", "colloid", "powder",
    "solid", "liquid", "gas", "vapor", "steam", "smoke", "fog", "mist", "dew", "frost",
    "ice", "snow", "hail", "rain", "water", "oil", "wax", "resin", "pitch", "tar",
    "paint", "dye", "ink", "glue", "adhesive", "cement", "mortar", "plaster", "concrete", "asphalt",
    "metal", "alloy", "steel", "iron", "copper", "aluminum", "zinc", "tin", "lead", "mercury",
    "gold", "silver", "platinum", "palladium", "rhodium", "iridium", "osmium", "ruthenium", "rhenium", "tungsten",
    "molybdenum", "niobium", "tantalum", "zirconium", "hafnium", "yttrium", "scandium", "titanium", "vanadium", "chromium",
    "manganese", "cobalt", "nickel", "copper", "zinc", "gallium", "germanium", "arsenic", "selenium", "bromine",
    "krypton", "rubidium", "strontium", "yttrium", "zirconium", "niobium", "molybdenum", "technetium", "ruthenium", "rhodium",
    "palladium", "silver", "cadmium", "indium", "tin", "antimony", "tellurium", "iodine", "xenon", "cesium",
    "barium", "lanthanum", "cerium", "praseodymium", "neodymium", "promethium", "samarium", "europium", "gadolinium", "terbium",
    "dysprosium", "holmium", "erbium", "thulium", "ytterbium", "lutetium", "hafnium", "tantalum", "tungsten", "rhenium",
    "osmium", "iridium", "platinum", "gold", "mercury", "thallium", "lead", "bismuth", "polonium", "astatine",
    "radon", "francium", "radium", "actinium", "thorium", "protactinium", "uranium", "neptunium", "plutonium", "americium",
    "curium", "berkelium", "californium", "einsteinium", "fermium", "mendelevium", "nobelium", "lawrencium", "rutherfordium", "dubnium",
    "seaborgium", "bohrium", "hassium", "meitnerium", "darmstadtium", "roentgenium", "copernicium", "nihonium", "flerovium", "moscovium",
    "livermorium", "tennessine", "oganesson",

    // Advanced Technology and Innovation
    "quantumcomputing", "quantummechanics", "quantumoptics", "quantumchemistry", "quantumbiology", "quantumcryptography", "quantumteleportation", "quantumentanglement", "quantumsuperposition", "quantumtunneling",
    "artificialneural", "artificialsynapse", "artificialretina", "artificiallimb", "artificialorgan", "artificialheart", "artificialkidney", "artificiallung", "artificialpancreas", "artificialskin",
    "virtualavatar", "virtualassistant", "virtualclassroom", "virtualoffice", "virtualmeeting", "virtualtour", "virtualmuseum", "virtualgallery", "virtualconcert", "virtualreality",
    "augmentedvision", "augmenteddisplay", "augmentedinterface", "augmentedworkspace", "augmentednavigation", "augmentedlearning", "augmentedtraining", "augmentedmaintenance", "augmentedrepair", "augmenteddiagnosis",
    "cloudstorage", "cloudbackup", "cloudsync", "cloudhosting", "cloudserver", "clouddatabase", "cloudnetwork", "cloudsecurity", "cloudmonitoring", "cloudanalytics",

    // Advanced Science and Research
    "cryogenics", "cryopreservation", "cryotherapy", "cryosurgery", "cryoelectron", "cryomicroscope", "cryostat", "cryovial", "cryotank", "cryochamber",
    "plasmonics", "plasmonic", "plasmon", "plasmonicwave", "plasmonicdevice", "plasmonicmaterial", "plasmonicstructure", "plasmoniccircuit", "plasmonicantenna", "plasmonicfilter",
    "spintronics", "spintronic", "spindevice", "spinvalve", "spintransistor", "spinmemory", "spinlogic", "spincircuit", "spinwave", "spintorque",
    "optofluidics", "optofluidic", "optofluidicdevice", "optofluidicchip", "optofluidiccircuit", "optofluidicpump", "optofluidicvalve", "optofluidicfilter", "optofluidicmixer", "optofluidicsensor",
    "microfluidics", "microfluidic", "microfluidicchip", "microfluidicdevice", "microfluidicpump", "microfluidicvalve", "microfluidicmixer", "microfluidicfilter", "microfluidicsensor", "microfluidicreactor",
    "nanoelectronics", "nanoelectronic", "nanoelectronicdevice", "nanoelectroniccircuit", "nanoelectroniccomponent", "nanoelectronicmaterial", "nanoelectronicstructure", "nanoelectronicfabrication", "nanoelectronicassembly", "nanoelectronicpackaging",
    "biophotonics", "biophotonic", "biophotonicdevice", "biophotonicimaging", "biophotonicsensor", "biophotonicprobe", "biophotonicdiagnostic", "biophotonictherapy", "biophotonicmonitoring", "biophotonicanalysis",
    "quantumoptics", "quantumoptical", "quantumopticaldevice", "quantumopticalcircuit", "quantumopticalcomponent", "quantumopticalmaterial", "quantumopticalstructure", "quantumopticalfabrication", "quantumopticalassembly", "quantumopticalpackaging",
    "magnetoelectronics", "magnetoelectronic", "magnetoelectronicdevice", "magnetoelectroniccircuit", "magnetoelectroniccomponent", "magnetoelectronicmaterial", "magnetoelectronicstructure", "magnetoelectronicfabrication", "magnetoelectronicassembly", "magnetoelectronicpackaging",
    "thermoelectrics", "thermoelectric", "thermoelectricdevice", "thermoelectricgenerator", "thermoelectriccooler", "thermoelectricmaterial", "thermoelectricmodule", "thermoelectricconverter", "thermoelectricgeneration", "thermoelectriccooling",

    // Environmental and Sustainability
    "ecosystem", "biodiversity", "conservation", "preservation", "renewable", "sustainable", "recyclable", "biodegradable", "compost", "organic",
    "solar", "wind", "hydro", "geothermal", "biomass", "biofuel", "ethanol", "methane", "carbon", "emission",
    "greenhouse", "ozone", "atmosphere", "climate", "weather", "precipitation", "evaporation", "condensation", "humidity", "temperature",
    "rainforest", "wetland", "mangrove", "coral", "reef", "estuary", "watershed", "aquifer", "reservoir", "basin",
    "erosion", "sediment", "mineral", "nutrient", "fertilizer", "pesticide", "herbicide", "pollution", "contamination", "purification",
    "filtration", "desalination", "irrigation", "drainage", "flood", "drought", "famine", "harvest", "crop", "yield",
    "forestry", "agriculture", "horticulture", "arboriculture", "silviculture", "aquaculture", "mariculture", "permaculture", "monoculture", "polyculture",
    "wildlife", "habitat", "migration", "hibernation", "adaptation", "evolution", "species", "genus", "family", "order",
    "phylum", "kingdom", "domain", "taxonomy", "ecology", "biology", "zoology", "botany", "microbiology", "genetics",
    "photosynthesis", "respiration", "digestion", "metabolism", "enzyme", "protein", "amino", "acid", "vitamin", "mineral",
    "nutrient", "fiber", "cellulose", "chlorophyll", "stomata", "xylem", "phloem", "root", "stem", "leaf",
    "flower", "fruit", "seed", "spore", "pollen", "germination", "growth", "development", "reproduction", "fertilization",
    "pollination", "dispersal", "succession", "community", "population", "niche", "symbiosis", "parasitism", "mutualism", "commensalism",

    // Arts and Entertainment
    "theater", "cinema", "film", "movie", "documentary", "animation", "cartoon", "comic", "graphic", "novel",
    "puppet", "marionette", "ventriloquist", "magician", "illusionist", "acrobat", "juggler", "clown", "mime", "pantomime",
    "circus", "carnival", "fair", "festival", "exhibition", "gallery", "museum", "concert", "recital", "performance",
    "orchestra", "symphony", "chamber", "ensemble", "quartet", "trio", "duet", "solo", "choir", "chorus",
    "opera", "ballet", "dance", "choreography", "rhythm", "melody", "harmony", "composition", "arrangement", "improvisation",
    "instrument", "piano", "violin", "cello", "guitar", "drums", "trumpet", "saxophone", "flute", "clarinet",
    "percussion", "woodwind", "brass", "string", "keyboard", "synthesizer", "amplifier", "microphone", "speaker", "headphone",
    "studio", "recording", "mixing", "mastering", "producer", "engineer", "technician", "director", "editor", "cameraman",
    "lighting", "sound", "special", "effects", "stunt", "prop", "costume", "makeup", "set", "stage",
    "audience", "spectator", "critic", "review", "rating", "award", "trophy", "medal", "prize", "honor",
    "celebrity", "star", "actor", "actress", "singer", "musician", "artist", "painter", "sculptor", "designer",
    "writer", "author", "poet", "playwright", "screenwriter", "lyricist", "composer", "arranger", "conductor", "maestro",
    "genre", "style", "theme", "mood", "tone", "atmosphere", "setting", "plot", "character", "story",
    "script", "score", "soundtrack", "theme", "song", "lyrics", "verse", "chorus", "bridge", "refrain",
    "puppetry", "shadowplay", "kabuki", "noh", "pantomime", "vaudeville", "burlesque", "cabaret", "revue", "spectacle",
    "amphitheater", "auditorium", "playhouse", "theater", "arena", "stadium", "coliseum", "pavilion", "bandshell", "amphitheater",
    "spotlight", "footlight", "backdrop", "scenery", "curtain", "proscenium", "wings", "catwalk", "grid", "rigging",
    "wardrobe", "dressing", "greenroom", "backstage", "orchestra", "pit", "balcony", "mezzanine", "gallery", "box",
    "usher", "ticket", "program", "playbill", "intermission", "overture", "finale", "encore", "applause", "ovation",
    "rehearsal", "audition", "casting", "callback", "rehearsal", "blocking", "staging", "direction", "production", "premiere",
    "debut", "performance", "run", "season", "tour", "engagement", "residency", "gig", "show", "act",
    "scene", "monologue", "dialogue", "soliloquy", "aside", "cue", "prompt", "rehearsal", "dress", "technical",
    "preview", "opening", "closing", "matinee", "evening", "performance", "repertory", "stock", "touring", "amateur",
    "professional", "ensemble", "company", "troupe", "cast", "crew", "staff", "management", "administration", "production",

    // Science and Technology (new additions)
    "biophysics", "biochemistry", "biomechanics", "biomedical", "biotechnology", "bioinformatics", "biostatistics", "biomimetics", "biomaterial", "biosensor",
    "nanoscience", "nanomedicine", "nanofabrication", "nanocomposite", "nanoparticle", "nanowire", "nanotube", "nanosensor", "nanorobot", "nanomaterial",
    "geophysics", "geochemistry", "geobiology", "geomorphology", "geochronology", "geodynamics", "geodesy", "geomatics", "geostatistics", "geotechnology",
    "astrophysics", "astronomy", "astrodynamics", "astrometry", "astrophotography", "astroseismology", "astrobiology", "astrochemistry", "astronavigation", "astronautics",
    "thermodynamics", "thermochemistry", "thermophysics", "thermography", "thermometry", "thermocouple", "thermistor", "thermoplastic", "thermoset", "thermostat",
    "electromagnetism", "electrochemistry", "electrobiology", "electrostatics", "electrodynamics", "electrolysis", "electroplating", "electroforming", "electrospinning", "electrospray",
    "optics", "optometry", "optogenetics", "optoelectronics", "optomechanics", "optometry", "optics", "optical", "optoacoustic", "optochemical",
    "acoustics", "acoustooptics", "acoustoelectronics", "acoustophoresis", "acoustofluidics", "acoustophotonics", "acoustoelasticity", "acoustoemission", "acoustoimaging", "acoustooptics",
    "mechanics", "mechanobiology", "mechanochemistry", "mechanotransduction", "mechanosensing", "mechanoreceptor", "mechanosensor", "mechanophore", "mechanochemistry", "mechanobiology",
    "fluidics", "fluidmechanics", "fluiddynamics", "fluidstatics", "fluidization", "fluidization", "fluidization", "fluidization", "fluidization", "fluidization",

    // Environmental and Sustainability (new additions)
    "bioremediation", "biodegradation", "bioaccumulation", "biomagnification", "bioconversion", "biogas", "biochar", "biomass", "bioenergy", "biofuel",
    "phytoremediation", "phytochemistry", "phytopathology", "phytogeography", "phytosociology", "phytotechnology", "phytoremediation", "phytochemistry", "phytopathology", "phytogeography",
    "mycoremediation", "mycology", "mycorrhiza", "mycobacterium", "mycoplasma", "mycotoxin", "mycobacterium", "mycoplasma", "mycotoxin", "mycobacterium",
    "zooremediation", "zoology", "zoogeography", "zoopathology", "zoochemistry", "zootechnology", "zooremediation", "zoology", "zoogeography", "zoopathology",
    "bacterioremediation", "bacteriology", "bacteriophage", "bacteriocin", "bacteriostat", "bacteriocide", "bacteriophage", "bacteriocin", "bacteriostat", "bacteriocide",
    "enzymology", "enzymatic", "enzymopathy", "enzymolysis", "enzymology", "enzymatic", "enzymopathy", "enzymolysis", "enzymology", "enzymatic",
    "metabolomics", "metabolite", "metabolism", "metabolome", "metabolomics", "metabolite", "metabolism", "metabolome", "metabolomics", "metabolite",
    "proteomics", "proteome", "proteolysis", "proteoglycan", "proteomics", "proteome", "proteolysis", "proteoglycan", "proteomics", "proteome",
    "genomics", "genome", "genotype", "genomics", "genome", "genotype", "genomics", "genome", "genotype", "genomics",
    "transcriptomics", "transcriptome", "transcription", "transcriptomics", "transcriptome", "transcription", "transcriptomics", "transcriptome", "transcription", "transcriptomics"
];

// Export the word list
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COMMON_WORDS };
} 