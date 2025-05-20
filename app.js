const commonWords = [
    "abacus", "abdomen", "abdominal", "abide", "abiding", "ability", "ablaze", "able", "abnormal", "abrasion",
    "abrasive", "abreast", "abridge", "abroad", "abruptly", "absence", "absentee", "absently", "absinthe", "absolute",
    "absolve", "abstain", "abstract", "absurd", "accent", "acclaim", "acclimate", "accompany", "account", "accuracy",
    "accurate", "accustom", "acetone", "achiness", "aching", "acid", "acorn", "acquaint", "acquire", "acre",
    "acrobat", "acronym", "acting", "action", "activate", "activator", "active", "activism", "activist", "activity",
    "actress", "acts", "acutely", "acuteness", "aeration", "aerobics", "aerosol", "aerospace", "afar", "affair",
    "affected", "affecting", "affection", "affidavit", "affiliate", "affirm", "affix", "afflicted", "affluent", "afford",
    "affront", "aflame", "afloat", "aflutter", "afoot", "afraid", "afterglow", "afterlife", "aftermath", "aftermost",
    "afternoon", "aged", "ageless", "agency", "agenda", "agent", "aggregate", "aghast", "agile", "agility",
    "aging", "agnostic", "agonize", "agonizing", "agony", "agreeable", "agreeably", "agreed", "agreeing", "agreement",
    "aground", "ahead", "ahoy", "aide", "aids", "aim", "ajar", "alabaster", "alarm", "albatross",
    "album", "alfalfa", "algebra", "algorithm", "alias", "alibi", "alienable", "alienate", "aliens", "alike",
    "alive", "alkaline", "alkalize", "almanac", "almighty", "almost", "aloe", "aloft", "aloha", "alone",
    "alongside", "aloof", "alphabet", "alright", "although", "altitude", "alto", "aluminum", "alumni", "always",
    "amaretto", "amaze", "amazingly", "amber", "ambiance", "ambiguity", "ambiguous", "ambition", "ambitious", "ambulance",
    "ambush", "amendable", "amendment", "amends", "amenity", "amiable", "amicably", "amid", "amigo", "amino",
    "amiss", "ammonia", "ammonium", "amnesty", "amniotic", "among", "amount", "amperage", "ample", "amplifier",
    "amplify", "amply", "amuck", "amulet", "amusable", "amused", "amusement", "amuser", "amusing", "anaconda",
    "anaerobic", "anagram", "anatomist", "anatomy", "anchor", "anchovy", "ancient", "android", "anemia", "anemic",
    "aneurism", "anew", "angelfish", "angelic", "anger", "angled", "angler", "angles", "angling", "angrily",
    "angriness", "anguished", "angular", "animal", "animate", "animating", "animation", "animator", "anime", "animosity",
    "ankle", "annex", "annotate", "announcer", "annoying", "annually", "annuity", "anointer", "another", "answering",
    "antacid", "antarctic", "anteater", "antelope", "antennae", "anthem", "anthill", "anthology", "antibody", "antics",
    "antidote", "antihero", "antiquely", "antiques", "antiquity", "antirust", "antitoxic", "antitrust", "antiviral", "antivirus",
    "antler", "antonym", "antsy", "anvil", "anybody", "anyhow", "anymore", "anyone", "anyplace", "anything",
    "anytime", "anyway", "anywhere", "aorta", "apache", "apostle", "appealing", "appear", "appease", "appeasing",
    "appendage", "appendix", "appetite", "appetizer", "applaud", "applause", "apple", "appliance", "applicant", "applied",
    "apply", "appointee", "appraisal", "appraiser", "apprehend", "approach", "approval", "approve", "apricot", "april",
    "apron", "aptitude", "aptly", "aqua", "aqueduct", "arbitrary", "arbitrate", "ardently", "area", "arena",
    "arguable", "arguably", "argue", "arise", "armadillo", "armband", "armchair", "armed", "armful", "armhole",
    "arming", "armless", "armoire", "armored", "armory", "armrest", "army", "aroma", "arose", "around",
    "arousal", "arrange", "array", "arrest", "arrival", "arrive", "arrogance", "arrogant", "arson", "art",
    "ascend", "ascension", "ascent", "ascertain", "ashamed", "ashen", "ashes", "ashy", "aside", "askew",
    "asleep", "asparagus", "aspect", "aspirate", "aspire", "aspirin", "astonish", "astound", "astride", "astrology",
    "astronaut", "astronomy", "astute", "atlantic", "atlas", "atom", "atonable", "atop", "atrium", "atrocious",
    "atrophy", "attach", "attain", "attempt", "attendant", "attendee", "attention", "attentive", "attest", "attic",
    "attire", "attitude", "attractor", "attribute", "atypical", "auction", "audacious", "audacity", "audible", "audibly",
    "audience", "audio", "audition", "augmented", "august", "authentic", "author", "autism", "autistic", "autograph",
    "automaker", "automated", "automatic", "autopilot", "available", "avalanche", "avatar", "avenge", "avenging", "avenue",
    "average", "aversion", "avert", "aviation", "aviator", "avid", "avoid", "await", "awaken", "award",
    "aware", "awhile", "awkward", "awning", "awoke", "awry", "axis", "babble", "babbling", "babied",
    "baboon", "backache", "backboard", "backboned", "backdrop", "backed", "backer", "backfield", "backfire", "backhand",
    "backing", "backlands", "backlash", "backless", "backlight", "backlit", "backlog", "backpack", "backpedal", "backrest",
    "backroom", "backshift", "backside", "backslid", "backspace", "backspin", "backstab", "backstage", "backtalk", "backtrack",
    "backup", "backward", "backwash", "backwater", "backyard", "bacon", "bacteria", "bacterium", "badass", "badge",
    "badland", "badly", "badness", "baffle", "baffling", "bagel", "bagful", "baggage", "bagged", "baggie",
    "bagginess", "bagging", "baggy", "bagpipe", "baguette", "baked", "bakery", "bakeshop", "baking", "balance",
    "balancing", "balcony", "balmy", "balsamic", "bamboo", "banana", "banish", "banister", "banjo", "bankable",
    "bankbook", "banked", "banker", "banking", "banknote", "bankroll", "banner", "bannister", "banshee", "banter",
    "barbecue", "barbed", "barbell", "barber", "barcode", "barge", "bargraph", "barista", "baritone", "barley",
    "barmaid", "barman", "barn", "barometer", "barrack", "barracuda", "barrel", "barrette", "barricade", "barrier",
    "barstool", "bartender", "barterer", "bash", "basically", "basics", "basil", "basin", "basis", "basket",
    "batboy", "batch", "bath", "baton", "bats", "battalion", "battered", "battering", "battery", "batting",
    "battle", "bauble", "bazooka", "blabber", "bladder", "blade", "blah", "blame", "blaming", "blanching",
    "blandness", "blank", "blaspheme", "blasphemy", "blast", "blatancy", "blatantly", "blazer", "blazing", "bleach",
    "bleak", "bleep", "blemish", "blend", "bless", "blighted", "blimp", "bling", "blinked", "blinker",
    "blinking", "blinks", "blip", "blissful", "blitz", "blizzard", "bloated", "bloating", "blob", "blog",
    "bloomers", "blooming", "blooper", "blot", "blouse", "blubber", "bluff", "bluish", "blunderer", "blunt",
    "blurb", "blurred", "blurry", "blurt", "blush", "blustery", "boaster", "boastful", "boasting", "boat",
    "bobbed", "bobbing", "bobble", "bobcat", "bobsled", "bobtail", "bodacious", "body", "bogged", "boggle",
    "bogus", "boil", "bok", "bolster", "bolt", "bonanza", "bonded", "bonding", "bondless", "boned",
    "bonehead", "boneless", "bonelike", "boney", "bonfire", "bonnet", "bonsai", "bonus", "bony", "boogeyman",
    "boogieman", "book", "boondocks", "booted", "booth", "bootie", "booting", "bootlace", "bootleg", "boots",
    "boozy", "borax", "boring", "borough", "borrower", "borrowing", "boss", "botanical", "botanist", "botany",
    "botch", "both", "bottle", "bottling", "bottom", "bounce", "bouncing", "bouncy", "bounding", "boundless",
    "bountiful", "bovine", "boxcar", "boxer", "boxing", "boxlike", "boxy", "breach", "breath", "breeches",
    "breeching", "breeder", "breeding", "breeze", "breezy", "brethren", "brewery", "brewing", "briar", "bribe",
    "brick", "bride", "bridged", "brigade", "bright", "brilliant", "brim", "bring", "brink", "brisket",
    "briskly", "briskness", "bristle", "brittle", "broadband", "broadcast", "broaden", "broadly", "broadness", "broadside",
    "broadways", "broiler", "broiling", "broken", "broker", "bronchial", "bronco", "bronze", "bronzing", "brook",
    "broom", "brought", "browbeat", "brownnose", "browse", "browsing", "bruising", "brunch", "brunette", "brunt",
    "brush", "brussels", "brute", "brutishly", "bubble", "bubbling", "bubbly", "buccaneer", "bucked", "bucket",
    "buckle", "buckshot", "buckskin", "bucktooth", "buckwheat", "buddhism", "buddhist", "budding", "buddy", "budget",
    "buffalo", "buffed", "buffer", "buffing", "buffoon", "buggy", "bulb", "bulge", "bulginess", "bulgur",
    "bulk", "bulldog", "bulldozer", "bullfight", "bullfrog", "bullhorn", "bullion", "bullish", "bullpen", "bullring",
    "bullseye", "bullwhip", "bully", "bunch", "bundle", "bungee", "bunion", "bunkbed", "bunkhouse", "bunkmate",
    "bunny", "bunt", "busboy", "bush", "busily", "busload", "bust", "busybody", "buzz", "cabana",
    "cabbage", "cabbie", "cabdriver", "cable", "caboose", "cache", "cackle", "cacti", "cactus", "caddie",
    "caddy", "cadet", "cadillac", "cadmium", "cage", "cahoots", "cake", "calamari", "calamity", "calcium",
    "calculate", "calculus", "caliber", "calibrate", "calm", "caloric", "calorie", "calzone", "camcorder", "cameo",
    "camera", "camisole", "camper", "campfire", "camping", "campsite", "campus", "canal", "canary", "cancel",
    "candied", "candle", "candy", "cane", "canine", "canister", "cannabis", "canned", "canning", "cannon",
    "cannot", "canola", "canon", "canopener", "canopy", "canteen", "canyon", "capable", "capably", "capacity",
    "cape", "capillary", "capital", "capitol", "capped", "capricorn", "capsize", "capsule", "caption", "captivate",
    "captive", "captivity", "capture", "caramel", "carat", "caravan", "carbon", "cardboard", "carded", "cardiac",
    "cardigan", "cardinal", "cardstock", "carefully", "caregiver", "careless", "caress", "caretaker", "cargo", "caring",
    "carless", "carload", "carmaker", "carnage", "carnation", "carnival", "carnivore", "carol", "carpenter", "carpentry",
    "carpool", "carport", "carried", "carrot", "carrousel", "carry", "cartel", "cartload", "carton", "cartoon",
    "cartridge", "cartwheel", "carve", "carving", "carwash", "cascade", "case", "cash", "casing", "casino",
    "casket", "cassette", "casually", "casualty", "catacomb", "catalog", "catalyst", "catalyze", "catapult", "cataract",
    "catatonic", "catcall", "catchable", "catcher", "catching", "catchy", "caterer", "catering", "catfight", "catfish",
    "cathedral", "cathouse", "catlike", "catnap", "catnip", "catsup", "cattail", "cattishly", "cattle", "catty",
    "catwalk", "caucasian", "caucus", "causal", "causation", "cause", "causing", "cauterize", "caution", "cautious",
    "cavalier", "cavalry", "caviar", "cavity", "cedar", "celery", "celestial", "celibacy", "celibate", "celtic",
    "cement", "census", "ceramics", "ceremony", "certainly", "certainty", "certified", "certify", "cesarean", "cesspool",
    "chafe", "chaffing", "chain", "chair", "chalice", "challenge", "chamber", "chamomile", "champion", "chance",
    "change", "channel", "chant", "chaos", "chaperone", "chaplain", "chapped", "chaps", "chapter", "character",
    "charbroil", "charcoal", "charger", "charging", "chariot", "charity", "charm", "charred", "charter", "charting",
    "chase", "chasing", "chaste", "chastise", "chastity", "chatroom", "chatter", "chatting", "chatty", "cheating",
    "cheddar", "cheek", "cheer", "cheese", "cheesy", "chef", "chemicals", "chemist", "chemo", "cherisher",
    "cherub", "chess", "chest", "chevron", "chevy", "chewable", "chewer", "chewing", "chewy", "chief",
    "chihuahua", "childcare", "childhood", "childish", "childless", "childlike", "chili", "chill", "chimp", "chip",
    "chirping", "chirpy", "chitchat", "chivalry", "chive", "chloride", "chlorine", "choice", "chokehold", "choking",
    "chomp", "chooser", "choosing", "choosy", "chop", "chosen", "chowder", "chowtime", "chrome", "chubby",
    "chuck", "chug", "chummy", "chump", "chunk", "churn", "chute", "cider", "cilantro", "cinch",
    "cinema", "cinnamon", "circle", "circling", "circular", "circulate", "circus", "citable", "citadel", "citation",
    "citizen", "citric", "citrus", "city", "civic", "civil", "clad", "claim", "clambake", "clammy",
    "clamor", "clamp", "clamshell", "clang", "clanking", "clapped", "clapper", "clapping", "clarify", "clarinet",
    "clarity", "clash", "clasp", "class", "clatter", "clause", "clavicle", "claw", "clay", "clean",
    "clear", "cleat", "cleaver", "cleft", "clench", "clergyman", "clerical", "clerk", "clever", "clicker",
    "client", "climate", "climatic", "cling", "clinic", "clinking", "clip", "clique", "cloak", "clobber",
    "clock", "clone", "cloning", "closable", "closure", "clothes", "clothing", "cloud", "clover", "clubbed",
    "clubbing", "clubhouse", "clump", "clumsily", "clumsy", "clunky", "clustered", "clutch", "clutter", "coach",
    "coagulant", "coastal", "coaster", "coasting", "coastland", "coastline", "coat", "coauthor", "cobalt", "cobbler",
    "cobweb", "cocoa", "coconut", "cod", "coeditor", "coerce", "coexist", "coffee", "cofounder", "cognition",
    "cognitive", "cogwheel", "coherence", "coherent", "cohesive", "coil", "coke", "cola", "cold", "coleslaw",
    "coliseum", "collage", "collapse", "collar", "collected", "collector", "collide", "collie", "collision", "colonial",
    "colonist", "colonize", "colony", "colossal", "colt", "coma", "come", "comfort", "comfy", "comic",
    "coming", "comma", "commence", "commend", "comment", "commerce", "commode", "commodity", "commodore", "common",
    "commotion", "commute", "commuting", "compacted", "compacter", "compactly", "compactor", "companion", "company", "compare",
    "compel", "compile", "comply", "component", "composed", "composer", "composite", "compost", "composure", "compound",
    "compress", "comprised", "computer", "computing", "comrade", "concave", "conceal", "conceded", "concept", "concerned",
    "concert", "conch", "concierge", "concise", "conclude", "concrete", "concur", "condense", "condiment", "condition",
    "condone", "conducive", "conductor", "conduit", "cone", "confess", "confetti", "confidant", "confident", "confider",
    "confiding", "configure", "confined", "confining", "confirm", "conflict", "conform", "confound", "confront", "confused",
    "confusing", "confusion", "congenial", "congested", "congrats", "congress", "conical", "conjoined", "conjure", "conjuror",
    "connected", "connector", "consensus", "consent", "console", "consoling", "consonant", "constable", "constant", "constrain",
    "constrict", "construct", "consult", "consumer", "consuming", "contact", "container", "contempt", "contend", "contented",
    "contently", "contents", "contest", "context", "contort", "contour", "contrite", "control", "contusion", "convene",
    "convent", "copartner", "cope", "copied", "copier", "copilot", "coping", "copious", "copper", "copy",
    "coral", "cork", "cornball", "cornbread", "corncob", "cornea", "corned", "corner", "cornfield", "cornflake",
    "cornhusk", "cornmeal", "cornstalk", "corny", "coronary", "coroner", "corporal", "corporate", "corral", "correct",
    "corridor", "corrode", "corroding", "corrosive", "corsage", "corset", "cortex", "cosigner", "cosmetics", "cosmic",
    "cosmos", "cosponsor", "cost", "cottage", "cotton", "couch", "cough", "could", "countable", "countdown",
    "counting", "countless", "country", "county", "courier", "covenant", "cover", "coveted", "coveting", "coyness",
    "cozily", "coziness", "cozy", "crabbing", "crabgrass", "crablike", "crabmeat", "cradle", "cradling", "crafter",
    "craftily", "craftsman", "craftwork", "crafty", "cramp", "cranberry", "crane", "cranial", "cranium", "crank",
    "crate", "crave", "craving", "crawfish", "crawlers", "crawling", "crayfish", "crayon", "crazed", "crazily",
    "craziness", "crazy", "creamed", "creamer", "creamlike", "crease", "creasing", "creatable", "create", "creation",
    "creative", "creature", "credible", "credibly", "credit", "creed", "creme", "creole", "crepe", "crept",
    "crescent", "crested", "cresting", "crestless", "crevice", "crewless", "crewman", "crewmate", "crib", "cricket",
    "cried", "crier", "crimp", "crimson", "cringe", "cringing", "crinkle", "crinkly", "crisped", "crisping",
    "crisply", "crispness", "crispy", "criteria", "critter", "croak", "crock", "crook", "croon", "crop",
    "cross", "crouch", "crouton", "crowbar", "crowd", "crown", "crucial", "crudely", "crudeness", "cruelly",
    "cruelness", "cruelty", "crumb", "crummiest", "crummy", "crumpet", "crumpled", "cruncher", "crunching", "crunchy",
    "crusader", "crushable", "crushed", "crusher", "crushing", "crust", "crux", "crying", "cryptic", "crystal",
    "cubbyhole", "cube", "cubical", "cubicle", "cucumber", "cuddle", "cuddly", "cufflink", "culinary", "culminate",
    "culpable", "culprit", "cultivate", "cultural", "culture", "cupbearer", "cupcake", "cupid", "cupped", "cupping",
    "curable", "curator", "curdle", "cure", "curfew", "curing", "curled", "curler", "curliness", "curling",
    "curly", "curry", "curse", "cursive", "cursor", "curtain", "curtly", "curtsy", "curvature", "curve",
    "curvy", "cushy", "cusp", "cussed", "custard", "custodian", "custody", "customary", "customer", "customize",
    "customs", "cut", "cycle", "cyclic", "cycling", "cyclist", "cylinder", "cymbal", "cytoplasm", "cytoplast",
    "dab", "dad", "daffodil", "dagger", "daily", "daintily", "dainty", "dairy", "daisy", "dallying",
    "dance", "dancing", "dandelion", "dander", "dandruff", "dandy", "danger", "dangle", "dangling", "daredevil",
    "dares", "daringly", "darkened", "darkening", "darkish", "darkness", "darkroom", "darling", "darn", "dart",
    "darwinism", "dash", "dastardly", "data", "datebook", "dating", "daughter", "daunting", "dawdler", "dawn",
    "daybed", "daybreak", "daycare", "daydream", "daylight", "daylong", "dayroom", "daytime", "dazzler", "dazzling",
    "deacon", "deafening", "deafness", "dealer", "dealing", "dealmaker", "dealt", "dean", "debatable", "debate",
    "debating", "debit", "debrief", "debtless", "debtor", "debug", "debunk", "decade", "decaf", "decal",
    "decathlon", "decay", "deceased", "deceit", "deceiver", "deceiving", "december", "decency", "decent", "deception",
    "deceptive", "decibel", "decidable", "decimal", "decimeter", "decipher", "deck", "declared", "decline", "decode",
    "decompose", "decorated", "decorator", "decoy", "decrease", "decree", "dedicate", "dedicator", "deduce", "deduct",
    "deed", "deem", "deepen", "deeply", "deepness", "deface", "defacing", "defame", "default", "defeat",
    "defection", "defective", "defendant", "defender", "defense", "defensive", "deferral", "deferred", "defiance", "defiant",
    "defile", "defiling", "define", "definite", "deflate", "deflation", "deflator", "deflected", "deflector", "defog",
    "deforest", "defraud", "defrost", "deftly", "defuse", "defy", "degraded", "degrading", "degrease", "degree",
    "dehydrate", "deity", "dejected", "delay", "delegate", "delegator", "delete", "deletion", "delicacy", "delicate",
    "delicious", "delighted", "delirious", "delirium", "deliverer", "delivery", "delouse", "delta", "deluge", "delusion",
    "deluxe", "demanding", "demeaning", "demeanor", "demise", "democracy", "democrat", "demote", "demotion", "demystify",
    "denatured", "deniable", "denial", "denim", "denote", "dense", "density", "dental", "dentist", "denture",
    "deny", "deodorant", "deodorize", "departed", "departure", "depict", "deplete", "depletion", "deplored", "deploy",
    "deport", "depose", "depraved", "depravity", "deprecate", "depress", "deprive", "depth", "deputize", "deputy",
    "derail", "deranged", "derby", "derived", "desecrate", "deserve", "deserving", "designate", "designed", "designer",
    "designing", "deskbound", "desktop", "deskwork", "desolate", "despair", "despise", "despite", "destiny", "destitute",
    "destruct", "detached", "detail", "detection", "detective", "detector", "detention", "detergent", "detest", "detonate",
    "detonator", "detoxify", "detract", "deuce", "devalue", "deviancy", "deviant", "deviate", "deviation", "deviator",
    "device", "devious", "devotedly", "devotee", "devotion", "devourer", "devouring", "devoutly", "dexterity", "dexterous",
    "diabetes", "diabetic", "diabolic", "diagnoses", "diagnosis", "diagram", "dial", "diameter", "diaper", "diaphragm",
    "diary", "dice", "dicing", "dictate", "dictation", "dictator", "difficult", "diffused", "diffuser", "diffusion",
    "diffusive", "dig", "dilation", "diligence", "diligent", "dill", "dilute", "dime", "diminish", "dimly",
    "dimmed", "dimmer", "dimness", "dimple", "diner", "dingbat", "dinghy", "dinginess", "dingo", "dingy",
    "dining", "dinner", "diocese", "dioxide", "diploma", "dipped", "dipper", "dipping", "directed", "direction",
    "directive", "directly", "directory", "direness", "dirtiness", "disabled", "disagree", "disallow", "disarm", "disarray",
    "disaster", "disband", "disbelief", "disburse", "discard", "discern", "discharge", "disclose", "discolor", "discount",
    "discourse", "discover", "discuss", "disdain", "disengage", "disfigure", "disgrace", "dish", "disinfect", "disjoin",
    "disk", "dislike", "disliking", "dislocate", "dislodge", "disloyal", "dismantle", "dismay", "dismiss", "dismount",
    "disobey", "disorder", "disown", "disparate", "disparity", "dispatch", "dispense", "dispersal", "dispersed", "displace",
    "display", "displease", "disposal", "dispose", "disprove", "dispute", "disregard", "disrupt", "dissuade", "distance",
    "distant", "distaste", "distil", "distinct", "distort", "distract", "distress", "district", "distrust", "ditch",
    "ditto", "ditzy", "dividable", "divided", "dividend", "dividers", "dividing", "divinely", "diving", "divinity",
    "division", "divisive", "divorcee", "dizziness", "dizzy", "doable", "docile", "dock", "doctor", "document",
    "dodge", "dodging", "doer", "dogfight", "dogfish", "dogged", "doghouse", "doglike", "dogma", "dogmatic",
    "doldrums", "doll", "dolly", "dolphin", "domain", "domelike", "domestic", "dominate", "dominoes", "donate",
    "donation", "donor", "donut", "doodle", "doorbell", "doorframe", "doorknob", "doorman", "doormat", "doornail",
    "doorpost", "doorstep", "doorstop", "doorway", "dopey", "dormant", "dormitory", "dorsal", "dosage", "dose",
    "dotted", "doubling", "douche", "dove", "down", "dowry", "doze", "drab", "drag", "dragon",
    "drainage", "drained", "drainer", "drama", "dramatize", "drank", "draper", "drastic", "draw", "drawn",
    "dreadful", "dreadlock", "dreamboat", "dreamily", "dreamland", "dreamless", "dreamlike", "dreamt", "dreamy", "dreary",
    "drench", "dress", "drew", "dribble", "dried", "drier", "drift", "driller", "drilling", "drink",
    "drip", "driveway", "driving", "drizzle", "drizzly", "drone", "drool", "droop", "drop-down", "dropbox",
    "dropkick", "droplet", "dropout", "dropper", "drove", "drown", "drowsily", "drowsiness", "drowsy", "drudge",
    "drum", "dry", "dubbed", "dubbing", "dubious", "duchess", "duckbill", "ducking", "duckling", "ducktail",
    "ducky", "duct", "dude", "duffel", "dugout", "duh", "duke", "duller", "dullness", "duly",
    "dumping", "dumpling", "dumpster", "duo", "dupe", "duplex", "duplicate", "duplicity", "durable", "durably",
    "duration", "duress", "during", "dusk", "dust", "dutiful", "duty", "duvet", "dwarf", "dwarfism",
    "dwell", "dweller", "dwelling", "dwindle", "dwindling", "dynamic", "dynamite", "dynasty", "dyslexia", "dyslexic",
    "each", "eagle", "earache", "eardrum", "earflap", "earful", "earlobe", "early", "earmark", "earmuff",
    "earn", "earnest", "earplug", "earring", "earshot", "earthen", "earthlike", "earthling", "earthly", "earthworm",
    "earthy", "ease", "easel", "easiest", "easily", "easiness", "easing", "eastbound", "eastcoast", "easter",
    "eastward", "eatable", "eaten", "eatery", "eating", "eats", "ebay", "ebony", "ebook", "ecard",
    "eccentric", "echo", "eclair", "eclipse", "ecologist", "ecology", "economic", "economist", "economy", "ecosphere",
    "ecosystem", "edge", "edginess", "edging", "edgy", "edition", "editor", "educated", "education", "educator",
    "eel", "effective", "effects", "efficient", "effort", "eggbeater", "egging", "eggnog", "eggplant", "eggshell",
    "egotism", "egotistic", "either", "eject", "elaborate", "elastic", "elated", "elbow", "eldercare", "elderly",
    "eldest", "electable", "election", "elective", "elephant", "elevate", "elevating", "elevation", "elevator", "eleven",
    "elf", "eligible", "eligibly", "eliminate", "elite", "elitism", "elixir", "elk", "elliptical", "elm",
    "elongated", "elope", "eloquence", "eloquent", "elsewhere", "elude", "elusive", "elves", "email", "embargo",
    "embark", "embassy", "embattled", "embellish", "ember", "embezzle", "emblazon", "emblem", "embody", "embolism",
    "emboss", "embroider", "emcee", "emerald", "emergency", "emission", "emit", "emoticon", "emotion", "empathize",
    "empathy", "emperor", "emphases", "emphasis", "emphasize", "emphatic", "employee", "employer", "employment", "emporium",
    "empower", "emptier", "emptiness", "empty", "emu", "enable", "enactment", "enamel", "enchanted", "enchanting",
    "encircle", "enclose", "enclosure", "encode", "encore", "encounter", "encourage", "encroach", "encrust", "encrypt",
    "endanger", "endeared", "endearing", "ended", "ending", "endless", "endnote", "endorse", "endowment", "endpoint",
    "endurable", "endurance", "enduring", "energetic", "energize", "energy", "enforced", "enforcer", "engaged", "engagement",
    "engaging", "engine", "engineer", "english", "engraved", "engraver", "engraving", "engross", "engulf", "enhance",
    "enigmatic", "enjoyable", "enjoyably", "enjoyer", "enjoying", "enjoyment", "enlarged", "enlarging", "enlighten", "enlisted",
    "enlistee", "enliven", "enmeshed", "enmity", "ennoble", "enough", "enquirer", "enrage", "enrich", "enroll",
    "enslave", "ensnare", "ensure", "entail", "entangled", "entering", "entertain", "enthrall", "enthuse", "enthusiast",
    "entice", "enticing", "entire", "entirely", "entitle", "entity", "entomb", "entourage", "entrap", "entree",
    "entrench", "entrust", "entryway", "entwine", "enunciate", "envelope", "enviable", "enviably", "envious", "envision",
    "envoy", "envy", "enzyme", "epic", "epidemic", "epidermal", "epidermis", "epilepsy", "epileptic", "epilogue",
    "epiphany", "episode", "equal", "equate", "equation", "equator", "equinox", "equipment", "equity", "equivocal",
    "erase", "erased", "eraser", "erasure", "ergonomic", "errand", "errant", "erratic", "error", "erupt",
    "escalate", "escalator", "escapable", "escapade", "escapist", "escargot", "esophagus", "espionage", "espresso", "esquire",
    "essay", "essence", "essential", "establish", "estate", "esteemed", "estimate", "estimator", "estranged", "estrogen",
    "etching", "eternal", "eternity", "ethanol", "ether", "ethically", "ethics", "eulogy", "eunuch", "euphemism",
    "eureka", "euro", "evacuate", "evacuee", "evade", "evaluate", "evaluator", "evaporate", "evasion", "evasive",
    "even", "everglade", "evermore", "every", "everybody", "everyday", "everyone", "evict", "evidence", "evident",
    "evil", "evoke", "evolution", "evolve", "exact", "exalted", "example", "excavate", "excavator", "exceeding",
    "excel", "excellent", "except", "excess", "exchange", "excitable", "exciting", "exclaim", "exclude", "excluding",
    "exclusion", "exclusive", "excrement", "excrete", "excursion", "excusable", "excuse", "execute", "execution", "executive",
    "executor", "exemplary", "exemplify", "exempt", "exerciser", "exert", "exhale", "exhaust", "exhibit", "exhilarate",
    "exhume", "exile", "existing", "exit", "exodus", "exonerate", "exorcism", "exorcist", "expand", "expanse",
    "expansion", "expansive", "expect", "expedite", "expel", "expend", "expenses", "expensive", "expert", "expire",
    "expiring", "explain", "expletive", "explicit", "explode", "exploit", "explore", "exploring", "exponent", "exporter",
    "exposable", "expose", "exposure", "express", "expulsion", "exquisite", "extend", "extent", "extenuate", "exterior",
    "external", "extinct", "extortion", "extract", "extreme", "extricate", "exude", "exult", "eyeball", "eyebrow",
    "eyecatch", "eyeglass", "eyelash", "eyelid", "eyeliner", "eyesight", "eyewash", "eyewitness", "fable", "fabric",
    "fabulous", "facebook", "faceless", "facet", "facial", "facility", "facing", "facsimile", "faction", "factor",
    "factory", "factual", "faculty", "fade", "fading", "failing", "falcon", "fall", "false", "falsify",
    "fame", "familiar", "family", "famine", "famished", "fanatic", "fancied", "fanciful", "fancy", "fandom",
    "fanfare", "fang", "fanned", "fanning", "fantasize", "fantastic", "fantasy", "fascism", "fascist", "fashion",
    "fastball", "faster", "fasting", "fastness", "faucet", "favorable", "favorably", "favored", "favoring", "favorite",
    "fax", "feast", "federal", "fedora", "feeble", "feed", "feel", "feeler", "feeling", "feign",
    "feint", "feline", "felt-tip", "feminine", "feminism", "feminist", "fence", "fencing", "fender", "ferment",
    "fernlike", "ferocious", "ferocity", "ferret", "ferris", "ferry", "fervor", "fester", "festival", "festive",
    "festivity", "fetal", "fetch", "fever", "fiber", "fiction", "fiddle", "fiddling", "fidelity", "fidgeting",
    "fidgety", "fifteen", "fifth", "fiftieth", "fifty", "figment", "figure", "figurine", "filing", "filled",
    "filler", "filling", "film", "filter", "filth", "filthy", "finale", "finalist", "finalize", "finally",
    "finance", "financial", "find", "fine", "fineness", "finer", "finicky", "finished", "finisher", "finishing",
    "finite", "finless", "finlike", "fire", "firearm", "fireball", "fireboat", "firebomb", "firebrand", "firebreak",
    "firecracker", "firefight", "fireflies", "firefly", "firehouse", "fireman", "fireplace", "firepower", "fireproof", "fireside",
    "firestorm", "firetruck", "firewall", "firewood", "firework", "firm", "first", "fiscally", "fish", "fishbowl",
    "fisherman", "fishery", "fishing", "fishlike", "fishnet", "fishpond", "fishtail", "fishy", "fist", "fives",
    "fixable", "fixed", "fixer", "fixing", "fixture", "fizzle", "fjord", "flaccid", "flag", "flagged",
    "flagging", "flagman", "flagpole", "flagship", "flagstone", "flail", "flakily", "flaky", "flame", "flamenco",
    "flamingo", "flammable", "flanked", "flanking", "flannel", "flap", "flaring", "flashback", "flashbulb", "flashcard",
    "flashily", "flashing", "flashlight", "flashy", "flask", "flatbed", "flatfoot", "flatly", "flatness", "flatten",
    "flattered", "flatterer", "flattery", "flattop", "flatware", "flatworm", "flavored", "flavorful", "flavoring", "flaxseed",
    "fled", "fleshed", "fleshy", "flick", "flicker", "flight", "flinch", "fling", "flint", "flip",
    "flipper", "flipping", "flirt", "flit", "float", "flock", "flogging", "flop", "floral", "florist",
    "floss", "flounder", "flour", "flout", "flow", "flubbed", "flubber", "fluff", "fluffy", "fluke",
    "fluky", "flume", "flung", "flunk", "flush", "flute", "flutter", "flyable", "flyaway", "flyer",
    "flying", "flyover", "flypaper", "foam", "foe", "fog", "foil", "folic", "folk", "follicle",
    "follow", "fondling", "fondly", "fondness", "fondue", "font", "food", "fool", "fooled", "foolish",
    "foolproof", "footage", "football", "footbath", "footboard", "footer", "footgear", "foothill", "foothold", "footing",
    "footless", "footman", "footnote", "footpath", "footprint", "footrest", "footsie", "footsore", "footwear", "footwork",
    "fossil", "foster", "founder", "founding", "fountain", "fox", "foyer", "fraction", "fracture", "fragile",
    "fragility", "fragment", "fragrance", "fragrant", "frail", "frame", "framing", "frantic", "fraternal", "frayed",
    "fraying", "frays", "freckled", "freckles", "freebase", "freebee", "freebie", "freedom", "freefall", "freehand",
    "freeing", "freeload", "freely", "freemason", "freeness", "freestyle", "freeware", "freeway", "freewill", "freezable",
    "freezing", "freight", "french", "frenzied", "frenzy", "frequency", "frequent", "fresh", "fretful", "fretted",
    "friction", "friday", "fridge", "fried", "friend", "frighten", "frightful", "frigidity", "frigidly", "frill",
    "fringe", "frisbee", "frisk", "fritter", "frivolous", "frolic", "from", "front", "frostbite", "frosted",
    "frostily", "frosting", "frosty", "froth", "frown", "frozen", "fructose", "frugal", "fruit", "frustrate",
    "frying", "gab", "gaffe", "gaffed", "gag", "gainfully", "gaining", "gains", "gala", "galahad",
    "galaxy", "gale", "gallant", "galleria", "gallery", "galley", "gallon", "gallows", "gallstone", "galore",
    "galvanize", "gambling", "game", "gaming", "gamma", "gander", "gangland", "gangrene", "gangway", "gap",
    "garage", "garbage", "garden", "gargle", "garland", "garlic", "garment", "garnet", "garnish", "garrison",
    "gash", "gaslight", "gasoline", "gasp", "gate", "gateway", "gather", "gathering", "gator", "gauntlet",
    "gauze", "gave", "gawk", "gazing", "gear", "gecko", "geek", "geiger", "gem", "gender",
    "generic", "generous", "genetics", "genre", "gentile", "gentleman", "gently", "gents", "geography", "geologic",
    "geologist", "geology", "geometric", "geometry", "gerbil", "geriatric", "germfree", "germicide", "germinate", "germless",
    "germs", "gestate", "gestation", "gesture", "getaway", "getting", "getup", "giant", "gibberish", "gibbon",
    "giddy", "gift", "gigabyte", "gigahertz", "gigantic", "giggle", "giggling", "giggly", "gigolo", "gilded",
    "gimmick", "girdle", "giveaway", "given", "giver", "giving", "gizmo", "gizzard", "glacial", "glacier",
    "glade", "gladiator", "gladly", "glamorous", "glamour", "glance", "glancing", "glandular", "glare", "glaring",
    "glass", "glaucoma", "glazing", "gleaming", "gleeful", "glider", "gliding", "glimmer", "glimpse", "glisten",
    "glitch", "glitter", "glitzy", "gloater", "gloating", "gloomily", "gloomy", "glorified", "glorifier", "glorify",
    "glorious", "glory", "gloss", "glove", "glowing", "glowworm", "glucose", "glue", "gluten", "glutinous",
    "glutton", "gnome", "goad", "goal", "goat", "gobble", "gobbler", "goblin", "godchild", "godfather",
    "godlike", "godly", "godmother", "godsend", "godson", "goggle", "going", "goldfish", "goldmine", "goldsmith",
    "golf", "goliath", "gonad", "gondola", "gone", "gong", "good", "gooey", "goofball", "goofiness",
    "goofy", "google", "goon", "gopher", "gore", "gorged", "gorgeous", "gory", "gosling", "gossip",
    "gothic", "gout", "gown", "grab", "graceful", "graceless", "gracious", "gradation", "graded", "grader",
    "gradient", "grading", "gradually", "graduate", "graffiti", "grafted", "grafting", "grain", "granddad", "grandkid",
    "grandly", "grandma", "grandpa", "grandson", "granite", "granny", "granola", "grant", "granular", "grape",
    "graph", "grapple", "grappling", "grasp", "grass", "gratified", "gratify", "grating", "gratitude", "gratuity",
    "grave", "gravel", "graven", "graver", "graves", "graveyard", "gravitate", "gravity", "gravy", "gray",
    "grazing", "greasily", "greasy", "great", "greedily", "greedy", "green", "greeting", "grew", "greyhound",
    "grid", "grief", "grievance", "grieving", "grievous", "grill", "grimace", "grimacing", "grime", "griminess",
    "grimy", "grinch", "grinned", "grinning", "grip", "gristle", "grit", "groggily", "groggy", "groin",
    "groom", "groove", "grooving", "groovy", "grope", "ground", "grouped", "grout", "grove", "grower",
    "growing", "growl", "grub", "grudge", "grudging", "grueling", "gruffly", "grumble", "grumbling", "grumbly",
    "grumpily", "grumpy", "grunt", "guacamole", "guidable", "guidance", "guide", "guiding", "guileless", "guise",
    "gulf", "gullible", "gully", "gulp", "gumball", "gumdrop", "gumminess", "gumming", "gummy", "gurgle",
    "gurgling", "guru", "gush", "gusto", "gusty", "gutless", "guts", "gutter", "guy", "guzzler",
    "gyration", "habitable", "habitant", "habitat", "habitual", "hacked", "hacker", "hacking", "hacksaw", "had",
    "haggler", "haiku", "half", "halogen", "halt", "halved", "halves", "hamburger", "hamlet", "hammock",
    "hamper", "hamster", "hamstring", "handbag", "handball", "handbook", "handbrake", "handcart", "handclap", "handclasp",
    "handcraft", "handcuff", "handed", "handful", "handgrip", "handgun", "handheld", "handiness", "handiwork", "handlebar",
    "handled", "handler", "handling", "handmade", "handoff", "handpick", "handprint", "handrail", "handsaw", "handset",
    "handsfree", "handshake", "handstand", "handwash", "handwork", "handwoven", "handy", "handyman", "hangnail", "hangout",
    "hangover", "hangup", "hankering", "hankie", "hanky", "haphazard", "happening", "happier", "happiest", "happily",
    "happiness", "happy", "harbor", "hardcopy", "hardcover", "harddisk", "hardened", "hardener", "hardening", "hardhat",
    "hardhead", "hardiness", "hardly", "hardness", "hardship", "hardware", "hardwired", "hardwood", "hardy", "harmful",
    "harmless", "harmonica", "harmonics", "harmonize", "harmony", "harness", "harpist", "harpoon", "harrowing", "harsh",
    "harvest", "hash", "hassle", "haste", "hastily", "hastiness", "hasty", "hatbox", "hatchback", "hatchery",
    "hatchet", "hatching", "hate", "hated", "hater", "hatless", "hatred", "haunt", "haven", "hazard",
    "hazelnut", "hazily", "haziness", "hazing", "hazy", "headache", "headband", "headboard", "headcount", "headdress",
    "headed", "header", "headfirst", "headgear", "heading", "headland", "headless", "headlight", "headline", "headlock",
    "headphone", "headpiece", "headrest", "headroom", "headset", "headstone", "headway", "headwear", "heap", "heat",
    "heave", "heavily", "heaviness", "heaving", "hedge", "hedging", "heftiness", "hefty", "height", "heinous",
    "heir", "heist", "helium", "helix", "hello", "helmet", "helping", "helpless", "helpline", "hemlock",
    "hemstitch", "hence", "henchman", "henna", "herald", "herbal", "herbicide", "herbs", "heritage", "hermit",
    "heroics", "heroism", "heron", "herring", "herself", "hertz", "hesitancy", "hesitant", "hesitate", "hexagon",
    "hexagram", "hub", "hubbub", "hubcap", "huddle", "huddling", "hue", "huff", "hug", "hula",
    "hulk", "hull", "human", "humble", "humbling", "humbly", "humid", "humiliate", "humility", "humming",
    "hummus", "humongous", "humorist", "humorous", "humpback", "humped", "humus", "hunchback", "hundred", "hunger",
    "hungrily", "hungry", "hunk", "hunter", "hunting", "huntress", "hurdle", "hurled", "hurling", "hurricane",
    "hurried", "hurry", "hurt", "husband", "hush", "husked", "huskiness", "hut", "hybrid", "hydrant",
    "hydrated", "hydration", "hydrogen", "hydroxide", "hyperlink", "hypertext", "hyphen", "hypnoses", "hypnosis", "hypnotic",
    "hypnotism", "hypnotist", "hypnotize", "hypocrisy", "hypocrite", "ibuprofen", "ice", "iciness", "icing",
    "icky", "icon", "idea", "idealism", "idealist", "ideally", "idealness", "identical", "identify", "identity",
    "ideology", "idiocy", "idiom", "idly", "igloo", "ignition", "ignore", "iguana", "illicitly", "illness",
    "illogic", "illusion", "illusive", "image", "imaginary", "imagines", "imaging", "imbecile", "imitate", "imitation",
    "immature", "immerse", "immersion", "imminent", "immobile", "immodest", "immorally", "immortal", "immovable", "immovably",
    "immunity", "immunize", "impaired", "impale", "impart", "impatient", "impeach", "impeding", "impending", "imperfect",
    "imperial", "impish", "implant", "implement", "implicate", "implicit", "implode", "implosion", "imply", "impolite",
    "important", "importer", "impose", "imposing", "impotence", "impotency", "impotent", "impound", "imprecise", "imprint",
    "imprison", "impromptu", "improper", "improve", "improving", "improvise", "imprudent", "impulse", "impulsive", "impure",
    "impurity", "iodine", "iodize", "ion", "ipad", "iphone", "ipod", "irate", "irk", "iron",
    "irregular", "irrigate", "irritable", "irritant", "irritate", "islamic", "islamist", "isolated", "isolating", "isolation",
    "isotope", "issue", "issuing", "italicize", "italics", "item", "itinerary", "itunes", "ivory", "ivy",
    "jabber", "jackal", "jacket", "jackhammer", "jackknife", "jackpot", "jailbird", "jailbreak", "jailer", "jailhouse",
    "jalapeno", "jam", "janitor", "japanese", "jar", "jargon", "jarring", "jasmine", "jaundice", "jaunt",
    "java", "jawed", "jawline", "jaws", "jaybird", "jaywalker", "jazz", "jeep", "jeeringly", "jelly",
    "jellyfish", "jersey", "jester", "jet", "jiffy", "jigsaw", "jimmy", "jingle", "jingling", "jinx",
    "jitters", "jittery", "job", "jockey", "jockstrap", "jogging", "john", "joining", "jokester", "jokingly",
    "jolt", "jones", "jovial", "joyful", "joyfully", "joyless", "joyous", "joyride", "joystick", "jubilant",
    "jubilee", "judge", "judgingly", "judicial", "judiciary", "judo", "juggle", "juggling", "jugular", "juice",
    "juiciness", "juicy", "jukebox", "july", "jumble", "jumbo", "jump", "junction", "juncture", "june",
    "junior", "juniper", "junkie", "junkman", "junkyard", "jurist", "juror", "jury", "justice", "justify",
    "juttle", "juvenile", "kangaroo", "kaput", "karaoke", "karate", "karma", "kebab", "keenly", "keenness",
    "keep", "keg", "kelp", "kennel", "kept", "kerchief", "kerosene", "kettle", "kick", "kid",
    "kiddie", "kiddo", "kidney", "kilt", "kimono", "kindle", "kindling", "kindly", "kindness", "kinetic",
    "kinfolk", "king", "kingdom", "kingfisher", "kingpin", "kink", "kinky", "kinsfolk", "kinship", "kiosk",
    "kissable", "kisser", "kissing", "kitchen", "kite", "kitten", "kitty", "kiwi", "kleenex", "knack",
    "knapsack", "knee", "kneeled", "kneeling", "knees", "knickers", "knighthood", "knitting", "knives", "knob",
    "knock", "knoll", "knot", "knotty", "knowhow", "knowing", "knowledge", "known", "koala", "kooky",
    "kosher", "krypton", "kudzu", "lab", "laced", "laces", "ladder", "ladies", "ladle", "lady",
    "ladybug", "ladylike", "lagged", "lagging", "lagoon", "lair", "lake", "lance", "landed", "lander",
    "landfall", "landfill", "landing", "landlady", "landlord", "landmark", "landmass", "landmine", "landowner", "landscape",
    "landside", "landslide", "language", "lankiness", "lanky", "lantern", "lapdog", "lapel", "lapped", "lapping",
    "laptop", "lard", "large", "largely", "largeness", "lark", "lash", "lasso", "last", "latch",
    "late", "lateral", "latest", "lather", "latitude", "latrine", "latter", "latticed", "launch", "launder",
    "laundry", "laurel", "lavender", "lavish", "laxative", "layaway", "layer", "laying", "layman", "layout",
    "lazily", "laziness", "lazy", "lead", "leaf", "league", "leak", "leakage", "leaking", "leaky",
    "lean", "leapfrog", "leaping", "leapt", "learn", "learning", "lecturer", "ledger", "leech", "leek",
    "left", "legacy", "legal", "legend", "legged", "leggings", "legible", "legibly", "legion", "legislate",
    "lego", "legroom", "legume", "legwork", "lemon", "lend", "length", "lens", "lent", "leotard",
    "lesser", "letdown", "lethargic", "lethargy", "letter", "lettuce", "level", "leverage", "levers", "levitate",
    "levitator", "liability", "liable", "liberty", "librarian", "library", "licking", "licorice", "lid", "life",
    "lifter", "lifting", "liftoff", "ligament", "likely", "likeness", "likewise", "liking", "lilac", "lilly",
    "lily", "limb", "limeade", "limelight", "limes", "limit", "limping", "limpness", "line", "linen",
    "liner", "lingo", "lingual", "linguist", "lining", "linked", "linoleum", "linseed", "lint", "lion",
    "lip", "liquefy", "liqueur", "liquid", "lisp", "list", "listen", "litigate", "litigator", "litmus",
    "litter", "little", "livable", "lived", "lively", "liver", "livestock", "lividly", "living", "lizard",
    "lubricant", "lubricate", "lucid", "luckily", "luckiness", "lucky", "lucrative", "ludicrous", "luggage", "lukewarm",
    "lullaby", "lumber", "luminance", "luminous", "lumpiness", "lumping", "lumpish", "lunacy", "lunar", "lunchbox",
    "luncheon", "lunchroom", "lunchtime", "lung", "lurch", "lure", "luridness", "lurk", "lushly", "lushness",
    "luster", "lustfully", "lustily", "lustiness", "lustrous", "lusty", "luxurious", "luxury", "lying", "lyric",
    "macarena", "macaroni", "macaw", "mace", "machine", "machinist", "magazine", "magenta", "maggot", "magical",
    "magician", "magma", "magnesium", "magnetic", "magnetism", "magnetize", "magnifier", "magnify", "magnitude", "magnolia",
    "mahogany", "maimed", "majestic", "majesty", "majorette", "majority", "makeover", "maker", "makeshift", "making",
    "malformed", "malt", "mama", "mammal", "mammary", "mammogram", "manager", "managing", "manatee", "mandarin",
    "mandate", "mandatory", "mandolin", "manger", "mangle", "mango", "mangy", "manhandle", "manhole", "manhood",
    "manhunt", "manicure", "manicurist", "mankind", "manless", "manliness", "manly", "manmade", "manned", "mannish",
    "manor", "manpower", "mantis", "mantra", "manual", "many", "map", "marathon", "marauding", "marbled",
    "marbles", "marbling", "march", "mardi", "margarine", "margarita", "margin", "marigold", "marina", "marine",
    "marital", "maritime", "marlin", "marmalade", "maroon", "married", "marrow", "marry", "marshland", "marshmallow",
    "marvel", "marvelous", "marxism", "mascot", "masculine", "mashed", "mashing", "massager", "masses", "massive",
    "mast", "master", "mastering", "masterly", "mastermind", "mastiff", "matador", "matchbook", "matchbox", "matcher",
    "matching", "matchless", "material", "maternal", "maternity", "math", "mating", "matriarch", "matrimony", "matrix", "matron",
    "matted", "matter", "maturely", "maturing", "maturity", "mauve", "maverick", "maximize", "maximum", "maybe", "mayday",
    "mayflower", "moaner", "moaning", "mobile", "mobility", "mobilize", "mobster", "mocha", "mocker", "mockup", "modified", "modify",
    "modular", "modulator", "module", "moisten", "moistness", "moisture", "molar", "molasses", "mold", "molecular", "molecule", "molehill",
    "mollusk" ,"mom", "monastery", "monday", "monetary", "monetize", "moneybags", "moneyless", "moneywise", "mongoose", 
    "mongrel", "monitor", "monkhood", "monogamy", "monogram", "monologue", "monopoly", "monorail", "monotone", "monotype", 
    "monoxide", "monsieur", "monsoon", "monstrous","monthly","monument","moocher","moodiness","moody","mooing","moonbeam","mooned",
    "moonlight","moonlike","moonlit","moonrise","moonscape","moonshine","moonstone","moonwalk","mop","morale","morality","morally",
    "morbidity","morbidly","morphine","morphing","morse","mortality","mortally","mortician","mortified","mortify","mortuary","mosaic",
    "mossy","most","mothball","mothproof","motion","motivate","motivator","motive","motocross","motor","motto","mountable","mountain",
    "mounted","mounting","mourner","mournful","mouse","mousiness","moustache","mousy","mouth","movable","move","movie",
    "moving","mower","mowing","much","muck","mud","mug","mulberry","mulch","mule","mulled","mullets","multiple","multiply",
    "multitask","multitude","mumble","mumbling","mumbo","mummified","mummify","mummy","mumps","munchkin","mundane","municipal",
    "muppet","mural","murkiness","murky","murmuring","muscular","museum","mushily","mushiness","mushroom","mushy","music","musket",
    "muskiness","musky","mustang","mustard","muster","mustiness","musty","mutable","mutate","mutation","mute","mutilated",
    "mutilator","mutiny","mutt","mutual","muzzle","myself","myspace","mystified","mystify","myth","nacho","nag","nail","name",
    "naming","nanny","nanometer","nape","napkin","napped","napping","nappy","narrow","nastily","nastiness","national","native",
    "nativity","natural","nature","naturist","nautical","navigate","navigator","navy","nearby","nearest","nearly","nearness",
    "neatly","neatness","nebula","nebulizer","nectar","negate","negation","negative","neglector","negligee","negligent","negotiate",
    "nemeses","nemesis","neon","nephew","nerd","nervous","nervy","nest","net","neurology","neuron","neurosis","neurotic","neuter",
    "neutron","never","next","nibble","nickname","nicotine","niece","nifty","nimble","nimbly","nineteen","ninetieth","ninja",
    "nintendo","ninth","nuclear","nuclei","nucleus","nugget","nullify","number","numbing","numbly","numbness","numeral","numerate",
    "numerator","numeric","numerous","nuptials","nursery","nursing","nurture","nutcase","nutlike","nutmeg","nutrient","nutshell",
    "nuttiness","nutty","nuzzle","nylon","oaf","oak","oasis","oat","obedience","obedient","obituary","object","obligate",
    "obliged","oblivion","oblivious","oblong","obnoxious","oboe","obscure","obscurity","observant","observer","observing",
    "obsessed","obsession","obsessive","obsolete","obstacle","obstinate","obstruct","obtain","obtrusive","obtuse","obvious",
    "occultist","occupancy","occupant","occupier","occupy","ocean","ocelot","octagon","octane","october","octopus","ogle","oil",
    "oink","ointment","okay","old","olive","olympics","omega","omen","ominous","omission","omit","omnivore","onboard","oncoming",
    "ongoing","onion","online","onlooker","only","onscreen","onset","onshore","onslaught","onstage","onto","onward","onyx",
    "oops","ooze","oozy","opacity","opal","open","operable","operate","operating","operation","operative","operator","opium",
    "opossum","opponent","oppose","opposing","opposite","oppressed","oppressor","opt","opulently","osmosis","other","otter",
    "ouch","ought","ounce","outage","outback","outbid","outboard","outbound","outbreak","outburst","outcast","outclass","outcome",
    "outdated","outdoors","outer","outfield","outfit","outflank","outgoing","outgrow","outhouse","outing","outlast","outlet",
    "outline","outlook","outlying","outmatch","outmost","outnumber","outplayed","outpost","outpour","output","outrage","outrank",
    "outreach","outright","outscore","outsell","outshine","outshoot","outsider","outskirts","outsmart","outsource","outspoken",
    "outtakes","outthink","outward","outweigh","outwit","oval","ovary","oven","overact","overall","overarch","overbid","overbill",
    "overbite","overblown","overboard","overbook","overbuilt","overcast","overcoat","overcome","overcook","overcrowd","overdraft",
    "overdrawn","overdress","overdrive","overdue","overeager","overeater","overexert","overfed","overfeed","overfill","overflow",
    "overfull","overgrown","overhand","overhang","overhaul","overhead","overhear","overheat","overhung","overjoyed","overkill",
    "overlabor","overlaid","overlap","overlay","overload","overlook","overlord","overlying","overnight","overpass","overpay",
    "overplant","overplay","overpower","overprice","overrate","overreach","overreact","override","overripe","overrule","overrun",
    "overshoot","overshot","oversight","oversized","oversleep","oversold","overspend","overstate","overstay","overstep","overstock",
    "overstuff","oversweet","overtake","overthrow","overtime","overtly","overtone","overture","overturn","overuse","overvalue",
    "overview","overwrite","owl","oxford","oxidant","oxidation","oxidize","oxidizing","oxygen","oxymoron","oyster","ozone","paced",
    "pacemaker","pacific","pacifier","pacifism","pacifist","pacify","padded","padding","paddle","paddling","padlock","pagan","pager",
    "paging","pajamas","palace","palatable","palm","palpable","palpitate","paltry","pampered","pamperer","pampers","pamphlet","panama",
    "pancake","pancreas","panda","pandemic","pang","panhandle","panic","panning","panorama","panoramic","panther","pantomime","pantry",
    "pants","pantyhose","paparazzi","papaya","paper","paprika","papyrus","parabola","parachute","parade","paradox","paragraph","parakeet",
    "paralegal","paralyses","paralysis","paralyze","paramedic","parameter","paramount","parasail","parasite","parasitic","parcel",
    "parched","parchment","pardon","parish","parka","parking","parkway","parlor","parmesan","parole","parrot","parsley","parsnip",
    "partake","parted","parting","partition","partly","partner","partridge","party","passable","passably","passage","passcode",
    "passenger","passerby","passing","passion","passive","passivism","passover","passport","password","pasta","pasted","pastel","pastime",
    "pastor","pastrami","pasture","pasty","patchwork","patchy","paternal","paternity","path","patience","patient","patio",
    "patriarch","patriot","patrol","patronage","patronize","pauper","pavement","paver","pavestone","pavilion","paving","pawing","payable",
    "payback","paycheck","payday","payee","payer","paying","payment","payphone","payroll","pebble","pebbly","pecan","pectin","peculiar","peddling",
    "pediatric","pedicure","pedigree","pedometer","pegboard","pelican","pellet","pelt","pelvis","penalize","penalty","pencil","pendant","pending",
    "penholder","penknife","pennant","penniless","penny","penpal","pension","pentagon","pentagram","pep","perceive","percent","perch","percolate",
    "perennial","perfected","perfectly","perfume","periscope","perish","perjurer","perjury","perkiness","perky","perm","peroxide","perpetual",
    "perplexed","persecute","persevere","persuaded","persuader","pesky","peso","pessimism","pessimist","pester","pesticide","petal","petite",
    "petition","petri","petroleum","petted","petticoat","pettiness","petty","petunia","phantom","phobia","phoenix","phonebook","phoney","phonics",
    "phoniness","phony","phosphate","photo","phrase","phrasing","placard","placate","placidly","plank","planner","plant","plasma","plaster",
    "plastic","plated","platform","plating","platinum","platonic","platter","platypus","plausible","plausibly","playable","playback","player",
    "playful","playgroup","playhouse","playing","playlist","playmaker","playmate","playoff","playpen","playroom","playset","plaything","playtime",
    "plaza","pleading","pleat","pledge","plentiful","plenty","plethora","plexiglas","pliable","plod","plop","plot","plow","ploy","pluck","plug","plunder",
    "plunging","plural","plus","plutonium","plywood","poach","pod","poem","poet","pogo","pointed","pointer","pointing","pointless","pointy",
    "poise","poison","poker","poking","polar","police","policy","polio","polish","politely","polka","polo","polyester","polygon","polygraph",
    "polymer","poncho","pond","pony","popcorn","pope","poplar","popper","poppy","popsicle","populace","popular","populate","porcupine","pork",
    "porous","porridge","portable","portal","portfolio","porthole","portion","portly","portside","poser","posh","posing","possible","possibly",
    "possum","postage","postal","postbox","postcard","posted","poster","posting","postnasal","posture","postwar","pouch","pounce","pouncing",
    "pound","pouring","pout","powdered","powdering","powdery","power","powwow","pox","praising","prance","prancing","pranker","prankish","prankster",
    "prayer","praying","preacher","preaching","preachy","preamble","precinct","precise","precision","precook","precut","predator","predefine",
    "predict","preface","prefix","preflight","preformed","pregame","pregnancy","pregnant","preheated","prelaunch","prelaw","prelude","premiere",
    "premises","premium","prenatal","preoccupy","preorder","prepaid","prepay","preplan","preppy","preschool","prescribe","preseason","preset",
    "preshow","president","presoak","press","presume","presuming","preteen","pretended","pretender","pretense","pretext","pretty","pretzel",
    "prevail","prevalent","prevent","preview","previous","prewar","prewashed","prideful","pried","primal","primarily","primary","primate",
    "primer","primp","princess","print","prior","prism","prison","prissy","pristine","privacy","private","privatize","prize","proactive","probable",
    "probably","probation","probe","probing","probiotic","problem","procedure","process","proclaim","procreate","procurer","prodigal",
    "prodigy","produce","product","profane","profanity","professed","professor","profile","profound","profusely","progeny","prognosis",
    "program","progress","projector","prologue","prolonged","promenade","prominent","promoter","promotion","prompter","promptly","prone",
    "prong","pronounce","pronto","proofing","proofread","proofs","propeller","properly","property","proponent","proposal","propose","props","prorate",
    "protector","protegee","proton","prototype","protozoan","protract","protrude","proud","provable","proved","proven","provided","provider",
    "providing","province","proving","provoke","provoking","provolone","prowess","prowler","prowling","proximity","proxy","prozac","prude",
    "prudishly","prune","pruning","pry","psychic","public","publisher","pucker","pueblo","pug","pull","pulmonary","pulp","pulsate","pulse",
    "pulverize","puma","pumice","pummel","punch","punctual","punctuate","punctured","pungent","punisher","punk","pupil","puppet","puppy",
    "purchase","pureblood","purebred","purely","pureness","purgatory","purge","purging","purifier","purify","purist","puritan","purity","purple",
    "purplish","purposely","purr","purse","pursuable","pursuant","pursuit","purveyor","pushcart","pushchair","pusher","pushiness","pushing",
    "pushover","pushpin","pushup","pushy","putdown","putt","puzzle","puzzling","pyramid","pyromania","python","quack","quadrant","quail","quaintly",
    "quake","quaking","qualified","qualifier","qualify","quality","qualm","quantum","quarrel","quarry","quartered","quarterly","quarters","quartet",
    "quench","query","quicken","quickly","quickness","quicksand","quickstep","quiet","quill","quilt","quintet","quintuple","quirk","quit","quiver",
    "quizzical","quotable","quotation","quote","rabid","race","racing","racism","rack","racoon","radar","radial","radiance","radiantly","radiated",
    "radiation","radiator","radio","radish","raffle","raft","rage","ragged","raging","ragweed","raider","railcar","railing","railroad","railway",
    "raisin","rake","raking","rally","ramble","rambling","ramp","ramrod","ranch","rancidity","random","ranged","ranger","ranging","ranked","ranking",
    "ransack","ranting","rants","rare","rarity","rascal","rash","rasping","ravage","raven","ravine","raving","ravioli","ravishing","reabsorb","reach",
    "reacquire","reaction","reactive","reactor","reaffirm","ream","reanalyze","reappear","reapply","reappoint","reapprove","rearrange","rearview","reason",
    "reassign","reassure","reattach","reawake","rebalance","rebate","rebel","rebirth","reboot","reborn","rebound","rebuff","rebuild","rebuilt","reburial",
    "rebuttal","recall","recant","recapture","recast","recede","recent","recess","recharger","recipient","recital","recite","reckless","reclaim","recliner",
    "reclining","recluse","reclusive","recognize","recoil","recollect","recolor","reconcile","reconfirm","reconvene","recopy","record","recount","recoup",
    "recovery","recreate","rectal","rectangle","rectified","rectify","recycled","recycler","recycling","reemerge","reenact","reenter",
    "reentry","reexamine","referable","referee","reference","refill","refinance","refined","refinery","refining","refinish","reflected",
    "reflector","reflex","reflux","refocus","refold","reforest","reformat","reformed","reformer","reformist","refract","refrain",
    "refreeze","refresh","refried","refueling","refund","refurbish","refurnish","refusal","refuse","refusing","refutable","refute",
    "regain","regalia","regally","reggae","regime","region","register","registrar","registry","regress","regretful","regroup",
    "regular","regulate","regulator","rehab","reheat","rehire","rehydrate","reimburse","reissue","reiterate","rejoice","rejoicing",
    "rejoin","rekindle","relapse","relapsing","relatable","related","relation","relative","relax","relay","relearn","release",
    "relenting","reliable","reliably","reliance","reliant","relic","relieve","relieving","relight","relish","relive","reload",
    "relocate","relock","reluctant","rely","remake","remark","remarry","rematch","remedial","remedy","remember","reminder",
    "remindful","remission","remix","remnant","remodeler","remold","remorse","remote","removable","removal","removed","remover",
    "removing","rename","renderer","rendering","rendition","renegade","renewable","renewably","renewal","renewed","renounce","renovate",
    "renovator","rentable","rental","rented","renter","reoccupy","reoccur","reopen","reorder","repackage","repacking","repaint","repair",
    "repave","repaying","repayment","repeal","repeated","repeater","repent","rephrase","replace","replay","replica","reply","reporter",
    "repose","repossess","repost","repressed","reprimand","reprint","reprise","reproach","reprocess","reproduce","reprogram","reps",
    "reptile","reptilian","repugnant","repulsion","repulsive","repurpose","reputable","reputably","request","require","requisite","reroute",
    "rerun","resale","resample","rescuer","reseal","research","reselect","reseller","resemble","resend","resent","reset","reshape",
    "reshoot","reshuffle","residence","residency","resident","residual","residue","resigned","resilient","resistant","resisting","resize",
    "resolute","resolved","resonant","resonate","resort","resource","respect","resubmit","result","resume","resupply","resurface",
    "resurrect","retail","retainer","retaining","retake","retaliate","retention","rethink","retinal","retired","retiree","retiring",
    "retold","retool","retorted","retouch","retrace","retract","retrain","retread","retreat","retrial","retrieval","retriever","retry",
    "return","retying","retype","reunion","reunite","reusable","reuse","reveal","reveler","revenge","revenue","reverb","revered",
    "reverence","reverend","reversal","reverse","reversing","reversion","revert","revisable","revise","revision","revisit","revivable",
    "revival","reviver","reviving","revocable","revoke","revolt","revolver","revolving","reward","rewash","rewind","rewire","reword",
    "rework","rewrap","rewrite","rhyme","ribbon","ribcage","rice","riches","richly","richness","rickety","ricotta","riddance","ridden",
    "ride","riding","rifling","rift","rigging","rigid","rigor","rimless","rimmed","rind","rink","rinse","rinsing","riot","ripcord",
    "ripeness","ripening","ripping","ripple","rippling","riptide","rise","rising","risk","risotto","ritalin","ritzy","rival","riverbank",
    "riverbed","riverboat","riverside","riveter","riveting","roamer","roaming","roast","robbing","robe","robin","robotics","robust",
    "rockband","rocker","rocket","rockfish","rockiness","rocking","rocklike","rockslide","rockstar","rocky","rogue","roman","romp","rope",
    "roping","roster","rosy","rotten","rotting","rotunda","roulette","rounding","roundish","roundness","roundup","roundworm","routine",
    "routing","rover","roving","royal","rubbed","rubber","rubbing","rubble","rubdown","ruby","ruckus","rudder","rug","ruined","rule",
    "rumble","rumbling","rummage","rumor","runaround","rundown","runner","running","runny","runt","runway","rupture","rural","ruse",
    "rush","rust","rut","sabbath","sabotage","sacrament","sacred","sacrifice","sadden","saddlebag","saddled","saddling","sadly",
    "sadness","safari","safeguard","safehouse","safely","safeness","saffron","saga","sage","sagging","saggy","said","saint","sake",
    "salad","salami","salaried","salary","saline","salon","saloon","salsa","salt","salutary","salute","salvage","salvaging","salvation",
    "same","sample","sampling","sanction","sanctity","sanctuary","sandal","sandbag","sandbank","sandbar","sandblast","sandbox","sanded",
    "sandfish","sanding","sandlot","sandpaper","sandpit","sandstone","sandstorm","sandworm","sandy","sanitary","sanitizer","sank","santa",
    "sapling","sappiness","sappy","sarcasm","sarcastic","sardine","sash","sasquatch","sassy","satchel","satiable","satin","satirical","satisfied",
    "satisfy","saturate","saturday","sauciness","saucy","sauna","savage","savanna","saved","savings","savior","savor","saxophone",
    "say","scabbed","scabby","scalded","scalding","scale","scaling","scallion","scallop","scalping","scam","scandal","scanner","scanning",
    "scant","scapegoat","scarce","scarcity","scarecrow","scared","scarf","scarily","scariness","scarring","scary","scavenger","scenic",
    "schedule","schematic","scheme","scheming","schilling","schnapps","scholar","science","scientist","scion","scoff","scolding","scone",
    "scoop","scooter","scope","scorch","scorebook","scorecard","scored","scoreless","scorer","scoring","scorn","scorpion","scotch","scoundrel",
    "scoured","scouring","scouting","scouts","scowling","scrabble","scraggly","scrambled","scrambler","scrap","scratch","scrawny",
    "screen","scribble","scribe","scribing","scrimmage","script","scroll","scrooge","scrounger","scrubbed","scrubber","scruffy",
    "scrunch","scrutiny","scuba","scuff","sculptor","sculpture","scurvy","scuttle","secluded","seclusion","second","secret","section",
    "sector","secular","securely","security","sedan","sedate","sedation","sedative","sediment","seduce","seducing","seed","seeding","seedling",
    "seedpod","seek","seeker","seeking","seep","seepage","seething","segment","seismic","seize","seizing","seldom","selected","selection","selective",
    "selector","self","seltzer","semantic","semester","semicolon","semifinal","seminar","seminary","semipro","senate","senator","send","sender","sending",
    "senior","senorita","sensation","sense","sensing","sensitive","sensitize","sensory","sensual","sensuous","sepia","september","septic","sequel","sequence","sequester","series","sermon","serotonin","serpent","serrated","serve","service","serving","sesame","session","setback","setting","settle","settling","setup","sevenfold","seventeen","seventh","seventy","severity","shabby","shack","shaded","shading","shadow","shady","shaft","shakable","shakily","shakiness","shaking","shaky","shale","shallot","shallow","shame","shampoo","shamrock","shank","shanty","shape","shaping","share","shark","sharpener","sharper","sharpie","sharply","sharpness","shawl","sheath","shed","sheep","sheer","sheet","shelf","shell","shelter","shelve","shelving","sherbet","sheriff","sherry","shield","shifter","shifting","shiftless","shifty","shimmer","shimmy","shindig","shine","shingle","shininess","shining","shiny","ship","shipment","shipper","shipping","shipwreck","shipyard","shirker","shirking","shirt","shivering","shock","shoddy","shoe","shoelace","shoemaker","shoes","shoestring","shoo","shoot","shoplift","shopper","shopping","shoptalk","shore","shortage","shortcake","shortcut","shorten","shorter","shorthand","shortlist","shortly","shortness","shorts","shortwave","shorty","shout","shove","showboat","showcase","showdown","shower","showgirl","showing","showman","shown","showoff","showpiece","showplace","showroom","showy","shrank","shredder","shredding","shrewdly","shrewdness","shriek","shrift","shrill","shrimp","shrine","shrink","shrivel","shrouded","shrubbery","shrubs","shrug","shrunk","shucking","shudder","shuffle","shuffling","shun","shush","shut","shutter","shutting","shuttle","shy","shyness","sibling","sided","sideline","sidelong","sidestep","sidewalk","sideway","sidle","sieve","sift","sifter","sifting","sigh","sighting","signable","signal","signatory","signed","signer","signet","signify","signing","silenced","silencer","silent","silently","silhouette","silicon","silk","silliness","silly","silo","silt","silver","similarly","simile","simmering","simple","simplify","simply","sincere","sincerity","singer","singing","single","singular","sinister","sinless","sinner","sinuous","sip","siren","sister","sitcom","sitter","sitting","situated","situation","sixfold","sixteen","sixth","sixties","sixtieth","sixtyfold","sizable","sizably","size","sizing","sizzle","sizzling","skater","skating","skedaddle","skeletal","skeleton","skeptic","sketch","skewed","skewer","skid","skied","skier","skies","skiing","skilled","skillet","skillful","skimmed","skimmer","skimming","skimpily","skincare","skinhead","skinless","skinning","skinny","skintight","skipper","skipping","skirmish","skirt","skittle","skydiver","skylight","skyline","skype","skyrocket","skyward","slab","slacked","slacker","slacking","slackness","slacks","slain","slam","slander","slang","slapping","slapstick","slashed","slashing","slate","slather","slaw","sled","sleek","sleep","sleet","sleeve","slept","sliceable","sliced","slicer","slicing","slick","slider","slideshow","sliding","slighted","slighting","slightly","slimness","slimy","slinging","slingshot","slinky","slip","slit","sliver","slobbery","slogan","sloped","sloping","sloppily","sloppy","slot","slouching","slouchy","sludge","slug","slum","slurp","slush","sly","small","smartly","smartness","smasher","smashing","smashup","smell","smelting","smile","smilingly","smirk","smite","smith","smitten","smock","smog","smoked","smokeless","smokiness","smoking","smoky","smolder","smooth","smother","smudge","smudgy","smuggler","smuggling","smugly","smugness","snack","snagged","snaking","snap","snare","snarl","snazzy","sneak","sneer","sneeze","sneezing","snide","sniff","snippet","snipping","snitch","snooper","snooze","snore","snoring","snorkel","snort","snout","snowbird","snowboard","snowbound","snowcap","snowdrift","snowdrop","snowfall","snowfield","snowflake","snowiness","snowless","snowman","snowplow","snowshoe","snowstorm","snowsuit","snowy","snub","snuff","snuggle","snugly","snugness","speak","spearfish","spearhead","spearman","spearmint","species","specimen","specked","speckled","specks","spectacle","spectator","spectrum","speculate","speech","speed","spellbind","speller","spelling","spendable","spender","spending","spent","spew","sphere","spherical","sphinx","spider","spied","spiffy","spill","spilt","spinach","spinal","spindle","spinner","spinning","spinout","spinster","spiny","spiral","spirited","spiritism","spirits","spiritual","splashed","splashing","splashy","splatter","spleen","splendid","splendor","splice","splicing","splinter","splotchy","splurge","spoilage","spoiled","spoiler","spoiling","spoils","spoken","spokesman","sponge","spongy","sponsor","spoof","spookily","spooky","spool","spoon","spore","sporting","sports","sporty","spotless","spotlight","spotted","spotter","spotting","spotty","spousal","spouse","spout","sprain","sprang","sprawl","spray","spree","sprig","spring","sprinkled","sprinkler","sprint","sprite","sprout","spruce","sprung","spry","spud","spur","sputter","spyglass","squabble","squad","squall","squander","squash","squatted","squatter","squatting","squeak","squealer","squealing","squeamish","squeegee","squeeze","squeezing","squid","squiggle","squiggly","squint","squire","squirt","squishier","squishy","stability","stabilize","stable","stack","stadium","staff","stage","staging","stagnant","stagnate","stainable","stained","staining","stainless","stalemate","staleness","stalling","stallion","stamina","stammer","stamp","stand","stank","staple","stapling","starboard","starch","stardom","stardust","starfish","stargazer","staring","stark","starless","starlet","starlight","starlit","starring","starry","starship","starter","starting","startle","startling","startup","starved","starving","stash","state","static","statistic","statue","stature","status","statute","statutory","staunch","stays","steadfast","steadier","steadily","steadying","steam","steed","steep","steerable","steering","steersman","stegosaur","stellar","stem","stench","stencil","step","stereo","sterile","sterility","sterilize","sterling","sternness","sternum","stew","stick","stiffen","stiffly","stiffness","stifle","stifling","stillness","stilt","stimulant","stimulate","stimuli","stimulus","stinger","stingily","stinging","stingray","stingy","stinking","stinky","stipend","stipulate","stir","stitch","stock","stoic","stoke","stole","stomp","stonewall","stoneware","stonework","stoning","stony","stood","stooge","stool","stoop","stoplight","stoppable","stoppage","stopped","stopper","stopping","stopwatch","storable","storage","storeroom","storewide","storm","stout","stove","stowaway","stowing","straddle","straggler","strained","strainer","straining","strangely","stranger","strangle","strategic","strategy","stratus","straw","stray","streak","stream","street","strength","strenuous","strep","stress","stretch","strewn","stricken","strict","stride","strife","strike","striking","strive","striving","strobe","strode","stroller","strongbox","strongly","strongman","struck","structure","strudel","struggle","strum","strung","strut","stubbed","stubble","stubbly","stubborn","stucco","stuck","student","studied","studio","study","stuffed","stuffing","stuffy","stumble","stumbling","stump","stung","stunned","stunner","stunning","stunt","stupor","sturdily","sturdy","styling","stylishly","stylist","stylized","stylus","suave","subarctic","subatomic","subdivide","subdued","subduing","subfloor","subgroup","subheader","subject","sublease","sublet","sublevel","sublime","submarine","submerge","submersed","submitter","subpanel","subpar","subplot","subprime","subscribe","subscript","subsector","subside","subsiding","subsidize","subsidy","subsoil","subsonic","substance","subsystem","subtext","subtitle","subtly","subtotal","subtract","subtype","suburb","subway","subwoofer","subzero","succulent","such","suction","sudden","sudoku","suds","sufferer","suffering","suffice","suffix","suffocate","suffrage","sugar","suggest","suing","suitable","suitably","suitcase","suitor","sulfate","sulfide","sulfite","sulfur","sulk","sullen","sulphate","sulphuric","sultry","superbowl","superglue","superhero","superior","superjet","superman","supermom","supernova","supervise","supper","supplier","supply","support","supremacy","supreme","surcharge","surely","sureness","surface","surfacing","surfboard","surfer","surgery","surgical","surging","surname","surpass","surplus","surprise","surreal","surrender","surrogate","surround","survey","survival","survive","surviving","survivor","sushi","suspect","suspend","suspense","sustained","sustainer","swab","swaddling","swagger","swampland","swan","swapping","swarm","sway","swear","sweat","sweep","swell","swept","swerve","swifter","swiftly","swiftness","swimmable","swimmer","swimming","swimsuit","swimwear","swinger","swinging","swipe","swirl","switch","swivel","swizzle","swooned","swoop","swoosh","swore","sworn","swung","sycamore","sympathy","symphonic","symphony","symptom","synapse","syndrome","synergy","synopses","synopsis","synthesis","synthetic","syrup","system","t-shirt","tabasco","tabby","tableful","tables","tablet","tableware","tabloid","tackiness","tacking","tackle","tackling","tacky","taco","tactful","tactical","tactics","tactile","tactless","tadpole","taekwondo","tag","tainted","take","taking","talcum","talisman","tall","talon","tamale","tameness","tamer","tamper","tank","tanned","tannery","tanning","tantrum","tapeless","tapered","tapering","tapestry","tapioca","tapping","taps","tarantula","target","tarmac","tarnish","tarot","tartar","tartly","tartness","task","tassel","taste","tastiness","tasting","tasty","tattered","tattle","tattling","tattoo","taunt","tavern","thank","that","thaw","theater","theatrics","thee","theft","theme","theology","theorize","thermal","thermos","thesaurus","these","thesis","thespian","thicken","thicket","thickness","thieving","thievish","thigh","thimble","thing","think","thinly","thinner","thinness","thinning","thirstily","thirsting","thirsty","thirteen","thirty","thong","thorn","those","thousand","thrash","thread","threaten","threefold","thrift","thrill","thrive","thriving","throat","throbbing","throng","throttle","throwaway","throwback","thrower","throwing","thud","thumb","thumping","thursday","thus","thwarting","thyself","tiara","tibia","tidal","tidbit","tidiness","tidings","tidy","tiger","tighten","tightly","tightness","tightrope","tightwad","tigress","tile","tiling","till","tilt","timid","timing","timothy","tinderbox","tinfoil","tingle","tingling","tingly","tinker","tinkling","tinsel","tinsmith","tint","tinwork","tiny","tipoff","tipped","tipper","tipping","tiptoeing","tiptop","tiring","tissue","trace","tracing","track","traction","tractor","trade","trading","tradition","traffic","tragedy","trailing","trailside","train","traitor","trance","tranquil","transfer","transform","translate","transpire","transport","transpose","trapdoor","trapeze","trapezoid","trapped","trapper","trapping","traps","trash","travel","traverse","travesty","tray","treachery","treading","treadmill","treason","treat","treble","tree","trekker","tremble","trembling","tremor","trench","trend","trespass","triage","trial","triangle","tribesman","tribunal","tribune","tributary","tribute","triceps","trickery","trickily","tricking","trickle","trickster","tricky","tricolor","tricycle","trident","tried","trifle","trifocals","trillion","trilogy","trimester","trimmer","trimming","trimness","trinity","trio","tripod","tripping","triumph","trivial","trodden","trolling","trombone","trophy","tropical","tropics","trouble","troubling","trough","trousers","trout","trowel","truce","truck","truffle","trump","trunks","trustable","trustee","trustful","trusting","trustless","truth","try","tubby","tubeless","tubular","tucking","tuesday","tug","tuition","tulip","tumble","tumbling","tummy","turban","turbine","turbofan","turbojet","turbulent","turf","turkey","turmoil","turret","turtle","tusk","tutor","tutu","tux","tweak","tweed","tweet","tweezers","twelve","twentieth","twenty","twerp","twice","twiddle","twiddling","twig","twilight","twine","twins","twirl","twistable","twisted","twister","twisting","twisty","twitch","twitter","tycoon","tying","tyke","udder","ultimate","ultimatum","ultra","umbilical","umbrella","umpire","unabashed","unable","unadorned","unadvised","unafraid","unaired","unaligned","unaltered","unarmored","unashamed","unaudited","unawake","unaware","unbaked","unbalance","unbeaten","unbend","unbent","unbiased","unbitten","unblended","unblessed","unblock","unbolted","unbounded","unboxed","unbraided","unbridle","unbroken","unbuckled","unbundle","unburned","unbutton","uncanny","uncapped","uncaring","uncertain","unchain","unchanged","uncharted","uncheck","uncivil","unclad","unclaimed","unclamped","unclasp","uncle","unclip","uncloak","unclog","unclothed","uncoated","uncoiled","uncolored","uncombed","uncommon","uncooked","uncork","uncorrupt","uncounted","uncouple","uncouth","uncover","uncross","uncrown","uncrushed","uncured","uncurious","uncurled","uncut","undamaged","undated","undaunted","undead","undecided","undefined","underage","underarm","undercoat","undercook","undercut","underdog","underdone","underfed","underfeed","underfoot","undergo","undergrad","underhand","underline","underling","undermine","undermost","underpaid","underpass","underpay","underrate","undertake","undertone","undertook","undertow","underuse","underwear","underwent","underwire","undesired","undiluted","undivided","undocked","undoing","undone","undrafted","undress","undrilled","undusted","undying","unearned","unearth","unease","uneasily","uneasy","uneatable","uneaten","unedited","unelected","unending","unengaged","unenvied","unequal","unethical","uneven","unexpired","unexposed","unfailing","unfair","unfasten","unfazed","unfeeling","unfiled","unfilled","unfitted","unfitting","unfixable","unfixed","unflawed","unfocused","unfold","unfounded","unframed","unfreeze","unfrosted","unfrozen","unfunded","unglazed","ungloved","unglue","ungodly","ungraded","ungreased","unguarded","unguided","unhappily","unhappy","unharmed","unhealthy","unheard","unhearing","unheated","unhelpful","unhidden","unhinge","unhitched","unholy","unhook","unicorn","unicycle","unified","unifier","uniformed","uniformly","unify","unimpeded","uninjured","uninstall","uninsured","uninvited","union","uniquely","unisexual","unison","unissued","unit","universal","universe","unjustly","unkempt","unkind","unknotted","unknowing","unknown","unlaced","unlatch","unlawful","unleaded","unlearned","unleash","unless","unleveled","unlighted","unlikable","unlimited","unlined","unlinked","unlisted","unlit","unlivable","unloaded","unloader","unlocked","unlocking","unlovable","unloved","unlovely","unloving","unluckily","unlucky","unmade","unmanaged","unmanned","unmapped","unmarked","unmasked","unmasking","unmatched","unmindful","unmixable","unmixed","unmolded","unmoral","unmovable","unmoved","unmoving","unnamable","unnamed","unnatural","unneeded","unnerve","unnerving","unnoticed","unopened","unopposed","unpack","unpadded","unpaid","unpainted","unpaired","unpaved","unpeeled","unpicked","unpiloted","unpinned","unplanned","unplanted","unpleased","unpledged","unplowed","unplug","unpopular","unproven","unquote","unranked","unrated","unraveled","unreached","unread","unreal","unreeling","unrefined","unrelated","unrented","unrest","unretired","unrevised","unrigged","unripe","unrivaled","unroasted","unrobed","unroll","unruffled","unruly","unrushed","unsaddle","unsafe","unsaid","unsalted","unsaved","unsavory","unscathed","unscented","unscrew","unsealed","unseated","unsecured","unseeing","unseemly","unseen","unselect","unselfish","unsent","unsettled","unshackle","unshaken","unshaved","unshaven","unsheathe","unshipped","unsightly","unsigned","unskilled","unsliced","unsmooth","unsnap","unsocial","unsoiled","unsold","unsolved","unsorted","unspoiled","unspoken","unstable","unstaffed","unstamped","unsteady","unsterile","unstirred","unstitch","unstopped","unstuck","unstuffed","unstylish","unsubtle","unsubtly","unsuited","unsure","unsworn","untagged","untainted","untaken","untamed","untangled","untapped","untaxed","unthawed","unthread","untidy","untie","until","untimed","untimely","untitled","untoasted","untold","untouched","untracked","untrained","untreated","untried","untrimmed","untrue","untruth","unturned","untwist","untying","unusable","unused","unusual","unvalued","unvaried","unvarying","unveiled","unveiling","unvented","unviable","unvisited","unvocal","unwanted","unwarlike","unwary","unwashed","unwatched","unweave","unwed","unwelcome","unwell","unwieldy","unwilling","unwind","unwired","unwitting","unwomanly","unworldly","unworn","unworried","unworthy","unwound","unwoven","unwrapped","unwritten","unzip","upbeat","upchuck","upcoming","upcountry","update","upfront","upgrade","upheaval","upheld","uphill","uphold","uplifted","uplifting","upload","upon","upper","upright","uprising","upriver","uproar","uproot","upscale","upside","upstage","upstairs","upstart","upstate","upstream","upstroke","upswing","uptake","uptight","uptown","upturned","upward","upwind","uranium","urban","urchin","urethane","urgency","urgent","urging","urologist","urology","usable","usage","useable","used","uselessly","user","usher","usual","utensil","utility","utilize","utmost","utopia","utter","vacancy","vacant","vacate","vacation","vagabond","vagrancy","vagrantly","vaguely","vagueness","valiant","valid","valium","valley","valuables","value","vanilla","vanish","vanity","vanquish","vantage","vaporizer","variable","variably","varied","variety","various","varmint","varnish","varsity","varying","vascular","vaseline","vastly","vastness","veal","vegan","veggie","vehicular","velcro","velocity","velvet","vendetta","vending","vendor","veneering","vengeful","venomous","ventricle","venture","venue","venus","verbalize","verbally","verbose","verdict","verify","verse","version","versus","vertebrae","vertical","vertigo","very","vessel","vest","veteran","veto","vexingly","viability","viable","vibes","vice","vicinity","victory","video","viewable","viewer","viewing","viewless","viewpoint","vigorous","village","villain","vindicate","vineyard","vintage","violate","violation","violator","violet","violin","viper","viral","virtual","virtuous","virus","visa","viscosity","viscous","viselike","visible","visibly","vision","visiting","visitor","visor","vista","vitality","vitalize","vitally","vitamins","vivacious","vividly","vividness","vixen","vocalist","vocalize","vocally","vocation","voice","voicing","void","volatile","volley","voltage","volumes","voter","voting","voucher","vowed","vowel","voyage","wackiness","wad","wafer","waffle","waged","wager","wages","waggle","wagon","wake","waking","walk","walmart","walnut","walrus","waltz","wand","wannabe","wanted","wanting","wasabi","washable","washbasin","washboard","washbowl","washcloth","washday","washed","washer","washhouse","washing","washout","washroom","washstand","washtub","wasp","wasting","watch","water","waviness","waving","wavy","whacking","whacky","wham","wharf","wheat","whenever","whiff","whimsical","whinny","whiny","whisking","whoever","whole","whomever","whoopee","whooping","whoops","why","wick","widely","widen","widget","widow","width","wieldable","wielder","wife","wifi","wikipedia","wildcard","wildcat","wilder","wildfire","wildfowl","wildland","wildlife","wildly","wildness","willed","willfully","willing","willow","willpower","wilt","wimp","wince","wincing","wind","wing","winking","winner","winnings","winter","wipe","wired","wireless","wiring","wiry","wisdom","wise","wish","wisplike","wispy","wistful","wizard","wobble","wobbling","wobbly","wok","wolf","wolverine","womanhood","womankind","womanless","womanlike","womanly","womb","woof","wooing","wool","woozy","word","work","worried","worrier","worrisome","worry","worsening","worshiper","worst","wound","woven","wow","wrangle","wrath","wreath","wreckage","wrecker","wrecking","wrench","wriggle","wriggly","wrinkle","wrinkly","wrist","writing","written","wrongdoer","wronged","wrongful","wrongly","wrongness","wrought","xbox","xerox","yahoo","yam","yanking","yapping","yard","yarn","yeah","yearbook","yearling","yearly","yearning","yeast","yelling","yelp","yen","yesterday","yiddish","yield","yin","yippee","yo-yo","yodel","yoga","yogurt","yonder","yoyo","yummy","zap","zealous","zebra","zen","zeppelin","zero","zestfully","zesty","zigzagged","zipfile","zipping","zippy","zips","zit","zodiac","zombie","zone","zoning","zookeeper","zoologist","zoology","zoom"
];

// Helper function to generate cryptographically secure random integer [0, max)
function getCryptoRandomInt(max) {
    if (max <= 0) return 0;
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % max;
}

// Load zxcvbn library with promise-based approach
let zxcvbnLoaded = false;
function loadZxcvbn() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'src/zxcvbn.min.js'; // Fixed path to use .min.js version
        script.onload = () => {
            zxcvbnLoaded = true;
            resolve();
        };
        script.onerror = () => reject(new Error('Failed to load zxcvbn'));
        document.head.appendChild(script);
    });
}

// Check if DOM element exists
function checkElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with ID "${id}" not found`);
        return null;
    }
    return element;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadZxcvbn().catch(err => {
        console.error(err.message);
        const crackTime = checkElement('crack-time');
        if (crackTime) crackTime.innerText = 'Strength calculation unavailable';
    });

    // Slider event listeners
    const sliders = [
        { id: 'length', valueId: 'length-value' },
        { id: 'word-count', valueId: 'word-count-value' },
        { id: 'username-length', valueId: 'username-length-value' },
        { id: 'username-word-count', valueId: 'username-word-count-value' }
    ];

    sliders.forEach(({ id, valueId }) => {
        const slider = checkElement(id);
        const valueDisplay = checkElement(valueId);
        if (slider && valueDisplay) {
            slider.addEventListener('input', (event) => {
                valueDisplay.textContent = event.target.value;
            });
        }
    });

    // Dark mode toggle
    const darkModeToggle = checkElement('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Apply dark mode if previously set
    if (darkMode) {
        document.body.classList.add('bg-gray-800');
        document.body.classList.remove('bg-gray-100');
    }
});

// Tab switching functionality
function switchTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.add('hidden'));
    
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    const tabContent = checkElement(`${tabName}-tab`);
    const tabButton = checkElement(`tab-${tabName}`);
    const output = checkElement('output');
    
    if (tabContent) tabContent.classList.remove('hidden');
    if (tabButton) tabButton.classList.add('active');
    if (output) output.classList.add('hidden');
}

// Dark mode toggle
let darkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('bg-gray-800', darkMode);
    document.body.classList.toggle('bg-gray-100', !darkMode);
}

// Display error messages
function showError(message) {
    const errorDiv = checkElement('error');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
        setTimeout(() => errorDiv.classList.add('hidden'), 3000);
    }
}

// Input validation
function validateInput(value, minValue, maxValue = Infinity) {
    return value !== undefined && value !== null && !isNaN(value) && 
           value >= minValue && value <= maxValue;
}

// Password generation
function generatePassword() {
    const error = checkElement('error');
    if (error) error.classList.add('hidden');

    const lowercaseInput = checkElement('lowercase');
    const uppercaseInput = checkElement('uppercase');
    const numbersInput = checkElement('numbers');
    const specialInput = checkElement('special');
    const excludeAmbiguousInput = checkElement('exclude-ambiguous');
    const lengthInput = checkElement('length');

    if (!lowercaseInput || !uppercaseInput || !numbersInput || !specialInput || 
        !excludeAmbiguousInput || !lengthInput) {
        showError('Required input fields are missing.');
        return;
    }

    const lowercaseCount = parseInt(lowercaseInput.value);
    const uppercaseCount = parseInt(uppercaseInput.value);
    const numbersCount = parseInt(numbersInput.value);
    const specialCount = parseInt(specialInput.value);
    const excludeAmbiguous = excludeAmbiguousInput.checked;
    const passwordLength = parseInt(lengthInput.value);

    if (!validateInput(lowercaseCount, 0, 1000) || !validateInput(uppercaseCount, 0, 1000) ||
        !validateInput(numbersCount, 0, 1000) || !validateInput(specialCount, 0, 1000) ||
        !validateInput(passwordLength, 1, 1000)) {
        showError('Please enter valid numbers (1-1000 for length, 0-1000 for counts).');
        return;
    }

    const totalCount = lowercaseCount + uppercaseCount + numbersCount + specialCount;
    if (totalCount > passwordLength) {
        showError('Sum of character counts exceeds password length.');
        return;
    }
    if (totalCount === 0) {
        showError('Please select at least one character type.');
        return;
    }

    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let special = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    if (excludeAmbiguous) {
        lowercase = lowercase.replace(/[l]/g, '');
        uppercase = uppercase.replace(/[IO]/g, '');
        numbers = numbers.replace(/[01]/g, '');
        special = special.replace(/[(){}\[\]]/g, '');
    }

    let password = '';
    password += getRandomChars(lowercase, lowercaseCount);
    password += getRandomChars(uppercase, uppercaseCount);
    password += getRandomChars(numbers, numbersCount);
    password += getRandomChars(special, specialCount);

    if (password.length < passwordLength) {
        let remainingChars = '';
        if (lowercaseCount > 0) remainingChars += lowercase;
        if (uppercaseCount > 0) remainingChars += uppercase;
        if (numbersCount > 0) remainingChars += numbers;
        if (specialCount > 0) remainingChars += special;
        
        if (remainingChars.length === 0) {
            // Rebuild fallback with ambiguous exclusions
            remainingChars = 'abcdefghijklmnopqrstuvwxyz'.replace(/[l]/g, '') +
                            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.replace(/[IO]/g, '') +
                            '0123456789'.replace(/[01]/g, '') +
                            '!@#$%^&*()-_=+[]{}|;:,.<>?'.replace(/[(){}\[\]]/g, '');
        }
        
        password += getRandomChars(remainingChars, passwordLength - password.length);
    }

    password = shuffleString(password);
    displayResult(password);
    calculateStrength(password);
}

// Passphrase generation
function generatePassphrase() {
    const error = checkElement('error');
    if (error) error.classList.add('hidden');

    const wordCountInput = checkElement('word-count');
    const separatorInput = checkElement('separator');
    const capitalizeWordsInput = checkElement('capitalize-words');
    const includeNumberInput = checkElement('include-number');
    const includeSpecialInput = checkElement('include-special');

    if (!wordCountInput || !separatorInput || !capitalizeWordsInput || 
        !includeNumberInput || !includeSpecialInput) {
        showError('Required input fields are missing.');
        return;
    }

    const wordCount = parseInt(wordCountInput.value);
    const separator = separatorInput.value;
    const capitalizeWords = capitalizeWordsInput.checked;
    const includeNumber = includeNumberInput.checked;
    const includeSpecial = includeSpecialInput.checked;
    
    if (!validateInput(wordCount, 1, 100)) {
        showError('Word count must be between 1 and 100.');
        return;
    }
    
    let passphrase = [];
    for (let i = 0; i < wordCount; i++) {
        const wordIndex = getCryptoRandomInt(commonWords.length);
        let word = commonWords[wordIndex];
        if (capitalizeWords) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        passphrase.push(word);
    }
    
    let result = passphrase.join(separator);
    
    if (includeNumber) {
        result += getCryptoRandomInt(1000);
    }
    
    if (includeSpecial) {
        const specialChars = '!@#$%^&*()-_=+';
        const specialIndex = getCryptoRandomInt(specialChars.length);
        result += specialChars.charAt(specialIndex);
    }
    
    displayResult(result);
    calculateStrength(result);
}

// Username generation
function generateUsername() {
    const error = checkElement('error');
    if (error) error.classList.add('hidden');

    const lengthInput = checkElement('username-length');
    const wordCountInput = checkElement('username-word-count');
    const includeNumberInput = checkElement('include-number-username');
    const allLowercaseInput = checkElement('all-lowercase');

    if (!lengthInput || !wordCountInput || !includeNumberInput || !allLowercaseInput) {
        showError('Required input fields are missing.');
        return;
    }

    const targetLength = parseInt(lengthInput.value);
    const wordCount = parseInt(wordCountInput.value);
    const includeNumber = includeNumberInput.checked;
    const allLowercase = allLowercaseInput.checked;
    
    if (!validateInput(targetLength, 1, 100) || !validateInput(wordCount, 1, 50)) {
        showError('Length must be 1-100, word count must be 1-50.');
        return;
    }
    
    let selectedWords = [];
    let currentLength = 0;
    
    for (let i = 0; i < wordCount; i++) {
        const wordIndex = getCryptoRandomInt(commonWords.length);
        const word = commonWords[wordIndex];
        selectedWords.push(word);
        currentLength += word.length;
    }
    
    let username = selectedWords.join('');
    
    if (includeNumber && username.length < targetLength) {
        const numDigits = Math.min(4, targetLength - username.length);
        const maxNum = Math.pow(10, numDigits);
        username += getCryptoRandomInt(maxNum);
    }
    
    if (username.length > targetLength) {
        username = username.substring(0, targetLength);
    }
    
    if (allLowercase) {
        username = username.toLowerCase();
    } else {
        username = selectedWords.map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
        
        if (includeNumber && username.length < targetLength) {
            const numDigits = Math.min(4, targetLength - username.length);
            const maxNum = Math.pow(10, numDigits);
            username += getCryptoRandomInt(maxNum);
        }
        
        if (username.length > targetLength) {
            username = username.substring(0, targetLength);
        }
    }
    
    displayResult(username);
    
    const strengthBar = checkElement('strength-bar-fill');
    const crackTime = checkElement('crack-time');
    if (strengthBar) {
        strengthBar.style.width = '25%';
        strengthBar.style.backgroundColor = '#e53e3e';
    }
    if (crackTime) {
        crackTime.innerText = 'Note: Usernames are not meant to be secure passwords.';
    }
}

// Utility functions
function getRandomChars(charSet, count) {
    if (!charSet || count <= 0) return '';
    if (charSet.length === 0) return '';
    
    const chars = [];
    for (let i = 0; i < count; i++) {
        const index = getCryptoRandomInt(charSet.length);
        chars.push(charSet.charAt(index));
    }
    return chars.join('');
}

function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = getCryptoRandomInt(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function displayResult(value) {
    const result = checkElement('result');
    const output = checkElement('output');
    if (result && output) {
        result.textContent = value;
        output.classList.remove('hidden');
    }
}

function copyToClipboard() {
    const result = checkElement('result');
    if (!result) return;

    const text = result.textContent;
    if (!navigator.clipboard) {
        showError('Clipboard access unavailable (requires HTTPS).');
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => showError('Copied to clipboard!'))
        .catch(() => showError('Failed to copy to clipboard'));
}

function calculateStrength(password) {
    const strengthBar = checkElement('strength-bar-fill');
    const crackTime = checkElement('crack-time');
    
    if (!strengthBar || !crackTime) return;

    // Check if zxcvbn is loaded and available
    if (!zxcvbnLoaded || typeof zxcvbn !== 'function') {
        console.warn('zxcvbn not loaded yet, attempting to calculate strength without it');
        estimateCrackTime(password);
        return;
    }
    
    try {
        const result = zxcvbn(password);
        const score = result.score;
        const percentage = (score + 1) * 20;
        
        // Update progress bar width and color
        strengthBar.style.width = `${percentage}%`;
        strengthBar.setAttribute('aria-valuenow', percentage);
        
        // Set color based on score
        const colors = {
            0: '#e53e3e', // Red - Very weak
            1: '#ed8936', // Orange - Weak
            2: '#f6ad55', // Yellow - Fair
            3: '#38a169', // Green - Good
            4: '#2b6cb0'  // Blue - Excellent
        };
        
        strengthBar.style.backgroundColor = colors[score] || colors[0];
        
        // Display crack time
        const crackTimeSeconds = result.crack_times_seconds.offline_fast_hashing_1e10_per_second;
        crackTime.innerText = 
            `Approx. crack time: ${result.crack_times_display.offline_fast_hashing_1e10_per_second}`;
    } catch (error) {
        console.error('Error using zxcvbn:', error);
        // Fallback to simpler estimation if zxcvbn fails
        estimateCrackTime(password);
    }
}

// Simplified crack time estimation as a fallback
function estimateCrackTime(password) {
    const strengthBar = checkElement('strength-bar-fill');
    const crackTime = checkElement('crack-time');
    
    if (!strengthBar || !crackTime) return;
    
    // Basic character set analysis
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*()-_=+[\]{}|;:,.<>?]/.test(password);
    
    const charsetSize = 
        (hasLower ? 26 : 0) +
        (hasUpper ? 26 : 0) +
        (hasNumber ? 10 : 0) +
        (hasSpecial ? 33 : 0);
    
    const length = password.length;
    
    // Calculate combinations
    const combinations = Math.pow(charsetSize || 1, length);
    const seconds = combinations / 1e10; // 10 billion guesses per second
    
    // Determine score based on time
    let score = 0;
    if (seconds > 31536000) score = 4;
    else if (seconds > 86400) score = 3;
    else if (seconds > 3600) score = 2;
    else if (seconds > 60) score = 1;
    
    // Update progress bar
    const percentage = (score + 1) * 20;
    strengthBar.style.width = `${percentage}%`;
    strengthBar.setAttribute('aria-valuenow', percentage);
    
    // Set color based on score
    const colors = {
        0: '#e53e3e', // Red - Very weak
        1: '#ed8936', // Orange - Weak
        2: '#f6ad55', // Yellow - Fair
        3: '#38a169', // Green - Good
        4: '#2b6cb0'  // Blue - Excellent
    };
    
    strengthBar.style.backgroundColor = colors[score] || colors[0];
    
    // Format time for display
    let displayTime;
    if (seconds < 60) {
        displayTime = `${Math.round(seconds)} seconds`;
    } else if (seconds < 3600) {
        displayTime = `${Math.round(seconds / 60)} minutes`;
    } else if (seconds < 86400) {
        displayTime = `${Math.round(seconds / 3600)} hours`;
    } else if (seconds < 31536000) {
        displayTime = `${Math.round(seconds / 86400)} days`;
    } else {
        displayTime = `${Math.round(seconds / 31536000)} years`;
    }
    
    crackTime.innerText = `Estimated crack time: ${displayTime}`;
}
