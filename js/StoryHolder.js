var StoryHolder = {} || StoryHolder;

StoryHolder.story1 = {
	/*/ ———————————————————————— TEMPLATE
	template: {
		title: "Template",
		textnodes: [
			"", 
			"",
			""
		],
		guidebook: "",
		choices: [
			{
				pointsTo: "",
				type: "arrow-right"
			},
			{
				pointsTo: "",
				type: "arrow-left"
			},
			{
				pointsTo: "",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "cloudvalley.jpg"
	},
	// ———————————————————————— /TEMPLATE*/
	characterIntro1: {
		title: "Who are you?",
		textnodes: [],	
		choices: [],
		backgroundImage: "tooltips1.jpg"
	},
	characterIntro2: {
		title: "Who are you?",
		textnodes: [],
		choices: [],
		backgroundImage: "tooltips.jpg"
	},
	introQuote: {
		title: "",
		textnodes: [
			"&#8220;Kailas is not a Mountain to climb physically in this life; it is a holy mountain to climb metaphorically for spiritual transformation&#8221;", 
			"– Tshewang Lama",
			"&nbsp;",
			"(tap anywhere to continue)"
		],
		choices: [],
		backgroundImage: "PrologueImage_sm.jpg"
	},
	INTRODUCTION: {
		title: "Kathmandu",
		textnodes: [
			"Your journey begins.",
			"You never thought you would actually get this grant, and with it a unique opportunity to come study this region in person. You&rsquo;re glad your professor insisted you apply!",
			"Kathmandu is a city where traditions and modernity coexist. If you look closely, you might even see what appear to be Gods walking the streets. Since this is your first time in Nepal, you are bound to experience the unexpected.",
			"You have no doubts about finding rich natural environments to study, but you aren&rsquo;t so sure about all the spirituality you see. You’re not the religious type, but you tell yourself to keep an open mind. Now you have to decide, do you explore the city more, or begin your mountain trek?"
		],
		choices: [
			{
				pointsTo: "exploreKathmandu",
				type: "arrow-right"
			},
			{
				pointsTo: "leaveKathmandu",
				type: "arrow-left"
			},
			{
				pointsTo: "simikot",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 90, y: 80 },
			found: false
		},
		backgroundImage: "Kathmandu.jpg"
	},
	leaveKathmandu: {
		title: "Visit a Temple",
		textnodes: [
			"Kathmandu is an ancient capital with a rich cultural history, especially its many elaborate temples and shrines. You are amazed and overwhelmed by the liveliness of this ancient metropolis.",
			"You thought that you would hate to be here with so many people, but there&rsquo;s a chaotic calm to the city that surprises you. Wandering around the temple and exploring the narrow alleyways somehow feel strangely familiar.", 
		],
		choices: [
			{
				pointsTo: "exploreKathmandu",
				type: "arrow-right"
			},
			{
				pointsTo: "simikot",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 90, y: 83 },
			found: false
		},
		backgroundImage: "Kathmandu2.jpg"
	},
	exploreKathmandu: {
		title: "Explore Kathmandu",
		textnodes: [
			"While exploring the city you overhear a story about the city’s origins. According to local lore, Kathmandu Valley was once a deep lake full of precious jewels and serpents (nagas) known as Nagarhada. One day Buddha Vipassī placed a lotus seed in the center of the lake, and later a thousand-petalled lotus sprung up with a Buddha incarnation inside, shining countless rays of light known as Svayambhu or &ldquo;Self-Arisen One&rdquo;. Later Manjushri, the Bodhisattva of Great Wisdom, cut open a hill and drained the lake. The Swayambhu temple honors these events", 
			"...or so the story goes."
		],
		choices: [
			{
				pointsTo: "moreKathmandu",
				type: "arrow-right"
			},
			{
				pointsTo: "simikot",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 90, y: 86 },
			found: false
		},
		backgroundImage: "Kathmandu3.jpg"
	},
	moreKathmandu: {
		title: "Continue Exploring Kathmandu",
		textnodes: [
			"Kathmandu is a city where tradition and modernity coexist, making it a vibrant first destination. But you aren&rsquo;t a very social person. All this hustle and bustle makes you anxious.",
			"Truth be told, you&rsquo;re ready for a trip to a quieter place in the mountains.", 
		],
		choices: [
			{
				pointsTo: "simikot",
				type: "arrow-up"
			}
		],
		map: {
			position: {  x: 90, y: 89 },
			found: false
		},
		backgroundImage: "Kathmandu4.jpg"
	},
	simikot: {
		title: "Simikot",
		textnodes: [
			"You fly into Simikot, which is an experience in itself. The small propeller plane flies over mountain ridges, and then banks and swoops down to land on the flattened ridge of one of the many mountains. Surely we&rsquo;re not going to land here, you think to yourself...",
			"You feel your stomach turning and you close your eyes. You start reciting a prayer your grandmother taught you when you were a child. You catch yourself with surprise as you are not religious. You remind yourself that you are a scientist."
		],
		guidebook: "Simikot: Translates to Swampy Fort, and gets it&rsquo;s name from a swamp just below the airport, with a ruined fort (Kot) of the Malla Kings. Simikot runs on a market economy, unlike the rest of the region which follows a traditional barter system.",
		choices: [
			{
				pointsTo: "theheVillage",
				type: "arrow-right"
			},
			{
				pointsTo: "trailhead",
				type: "arrow-up"
			},
			{
				pointsTo: "simikot2",
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 68, y: 85 },
			found: false
		},
		backgroundImage: "simikot.jpg"
	},
	simikot2: {
		title: "Exploring Simikot",
		textnodes: [
			"Simikot is the district capital of Humla. Although dominated by the airport, the town is split into four parts. South of the airport are the main government buildings, schools, post office and guest houses. To the east and northwest are two large settlements of Chhetris and Dalits.",
			"Any research in this region begins here, since Simikot is connected directly to Hilsa by road. Hilsa is the last village in Nepal, and the entry point into the Tibetan Autonomous Region, making it an important transit location. This is the main route taken by pilgrims and tourists. You really hope you can avoid it."
		],
		guidebook: "Simikot is the administrative headquarters of Humla District of Karnali Zone in the mountain region of northwestern Nepal. Remember, this is a very remote part of Nepal, so be prepared for solitude and not a lot of tourists!",
		choices: [
			{
				pointsTo: "talkToTraveller",
				type: "arrow-right"
			},
			{
				pointsTo: "herderCairns",
				type: "arrow-up"
			},
			{
				pointsTo: "ralingGompa",
				type: "arrow-left"
			}
			
		],
		map: {
			position: { x: 68, y: 82 },
			found: false
		},
		backgroundImage: "SimikotTown.jpg"
	},
	talkToTraveller: {
		title: "Talk to Traveller",
		textnodes: [
			"You meet a traveller at your guesthouse. She just returned from hiking around upper Limi Valley. While on this ancient footpath she saw some villages that made her feel like she had travelled back in time. She also insists that there is an enchanted meadow in Talung Valley, she just couldn't find it this time...", 
			"This remote trail just be what you are looking for!"
		],
		choices: [
			{
				pointsTo: "theheVillage",
				type: "arrow-right"
			},
			{
				pointsTo: "twoFish",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 68, y: 79 },
			found: false
		},
		backgroundImage: "TravellerSimikot.jpg"
	},
	ralingGompa: {
		title: "Raling Gompa",
		textnodes: [
			"Raling Gompa is a monastery perched high in the mountains of Nyimba Valley. Walking up a rocky trail, you see a wooden gate in the distance.", 
			"The gate appears to mark the outer boundary of the monastery, and you can see an impressive monastery behind it. After walking through the gate, the main building and the secondary structures making up Rawling Gompa loom ahead.",
			"Scrambling up a large boulder field immediately behind the gompa, the view opens up to the roof of the monastery and the beautiful valley below."
		],
		guidebook: "Raling Gompa is one of the oldest and most revered Buddhist religious sites in the immediate area around Simikot, serving the many nearby Buddhist lama communities. ",
		choices: [
			{
				pointsTo: "simikot2",
				type: "arrow-left"
			},
			{
				pointsTo: "talkToMonk",
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 78.7, y: 83.2 },
			found: false
		},
		backgroundImage: "Rawling-Gompa-first-view.jpg"
	},
	talkToMonk: {
		title: "Talk to Monk",
		textnodes: [
			"Walking around Raling Gompa, you lose track of time. A young monk sees you and asks if you are a tourist. You tell him you are here to learn about this region&rsquo;s unique natural features.", 
			"He tells you to look for two large rocks by the village of Dharapuri on the Karnali River. There is something mysterious about them, and no one agrees on their story. Some think those rocks were once fish that brought rice to this valley, but he&rsquo;s not sure. He hopes you get to see them!"
		],
		choices: [
			{
				pointsTo: "twoFish",
				type: "arrow-left"
			},
			{
				pointsTo: "trailhead",
				type: "arrow-up"
			}
		],
		map: {
			position: {  x: 78.7, y: 86.2 },
			found: false
		},
		backgroundImage: "Rawling-Gompa-Gate.jpg"
	},
	twoFish: {
		id: 3,
		title: "The Two Fish",
		textnodes: [
			"Looking down from the trail you see two large rocks across the Karnali River in a field. They seem ordinary enough, but there is something about them that makes you want to look closer. Are they glittering in the sunlight? Are these boulders covered with chunks of Lepidolite?",
			"Should you explore the rocks more or keep going?"
		],
		choices: [
			{
				pointsTo: "checkBoulder",
				type: "arrow-up"
			},
			{
				pointsTo: "trailhead",
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 58.4, y: 73 },
			found: false
		},
		backgroundImage: "Two-Fish-from-Trail.jpg"
	},
	checkBoulder: {
		title: "Myth of the Two Fish",
		textnodes: [
			"You scramble down the trail to the bank of the river. As you near the rocks you start to feel faint and everything gets brighter around you...",
			"A long time ago, two fish from the lowlands wished to travel to Mount Kailas, so one night they began to swim north up the the Karnali River. They swam and swam all night long. When they finally reached the village of Dharapori, day broke. As the first rays of light touched the valley the two fish turned into rocks. They can still be seen in Dharapori standing tall and waiting for the day they can visit Mount Kailas. ",
			"Locals believe that the fish brought rice cultivation with them to this area. Ancestors of the village had built a temple on each of the fish rocks so they could worship during the Janai Purnima festival in Shrawan (July-August). Locals offer puri (fried dough), doop (incense), Manasarovar jaal (holy water), and some of their first grain harvest to the fishes during these rituals."
		],
		choices: [
			{
				pointsTo: "yaYipPhukMeditationCaves",
				type: "arrow-left"
			},
			{
				pointsTo: "trailhead",
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 58.4, y: 76 },
			found: false
		},
		backgroundImage: "ricepaddies.jpg"
	},
	trailhead: {
		title: "Tshongsa Valley",
		textnodes: [
			"You are in Tshongsa Valley, onward lies Limi Valley, and with it, a wealth of villages and natural sights. Before you, alpine meadow meets a sub-alpine forest. Suffice to say, it is breathtaking.", 
			"The path lies before you at Salli Khola, the trailhead. It will can go north into Upper Limi Valley."
		],
		guidebook: "West Nepal has a strong belief of a variety of demi gods who protect the rich pasture lands, and even influence local social governance. All resources goverened by these demigods need to be paid for, and it is common for hunters to pacify them. This system maintained law and order and even controlled border crossings for many years. ",
		choices: [
			{
				pointsTo: "stoneCairnsField",
				type: "arrow-up"
			},
			{
				pointsTo: "hilsa",
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 45.1, y: 66.2 },
			found: false
		},
		backgroundImage: "Trailhead.jpg"
	},
	herderCairns: {
		title: "Stone Cairns",
		textnodes: [
			"After a long hike through the valley and over the mountains, the trail opens onto a large, flat, rocky area with many piles of stones called cairns. You catch a glimpse of the sparkling Selima Tso (lake) just beyond the ridge.",
			"Neatly piled rocks are scattered around the field, and in this mist they look like a small army of stone deities guarding the pass.",
			"The stillness here is striking. Something compels you to pay your respects with a moment of silence for the prayers of others, if not your own."
		],
		choices: [
			{
				pointsTo: "exploreLake",
				type: "arrow-right"
			},
			{
				pointsTo: "herderCamp",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 50.5, y: 53},
			found: false
		},
		backgroundImage: "stones2.jpg"
	},
	herderCamp: {
		title: "Herder Village",
		textnodes: [
			"You see some more stone structures up ahead, but they look too big to be cairns. They are make-shift stone huts! Looking around, you notice a wary herder looking at you from a nearby hill. You tentatively wave a greeting to him.",
			"The herder comes down from the hill and greets you. He asks why you were looking into his house. You apologize and ask him if this is a temporary settlement? Your curiosity about this region is evident, and he seems satisfied you are friendly. There are several temporary stone houses around here, built by local herders who use the area during seasonal grazing. Once upon a time, these used to be sacred grazing lands protected by fierce mountain spirits..." 
		],
		choices: [
		{
			pointsTo: "exploreLake",
			type: "arrow-up"
		},
		{
			pointsTo: "nyaluLa",
			type: "arrow-right"
		}],

		map: {
			position: { x: 51.5, y: 50},
			found: false
		},

		backgroundImage: "HerderCamp.jpg"
	},
	exploreLake: {
		title: "Explore the Lake",
		textnodes: [
			"You walk with the herder and his animals to a small mountain lake south of the herder camp which makes an ideal spot for grazing livestock.", 
			"The herder tells you about a meadow which used to be an ancient trading place between Tibet and Nepal. As the legend goes, this meadow has nine corners and beautiful waterfalls, all under the protection of the mercurial Jowo Changtsen Chhenpo, the lord of the northern demigods. Venerated by all the dhamis (shamans) of Humla, until recently his wrath was appeased by sheep sacrifices. Now, dough effigies are used instead.",
			"Limi Valley is changing with the times, but for this herder, time stands still in this meadow."
		],
		guidebook: "The people of Limi Valley used to traditionally be semi-nomadic. Although citizens of Nepal, they had winter grazing rights in Tibet. Following the boundary demarcation between China and Nepal, these rights were retracted in 1961.",
		choices: [
			{
				pointsTo: "nyaluLa",
				type: "arrow-up"
			},
			{
				pointsTo: "stoneCairnsField",
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 53.5, y: 47},
			found: false
		},
		backgroundImage: "MountainLake.jpg"
	},
	nyaluLa: {
		title: "Nyalu La",
		textnodes: [
			"Your breath is short and comes out in erratic bursts. You have arrived at Nyalu La (pass), the highest point in the upper Limi Valley trail. Your GPS reading says 4,990 meters. Your body isn’t used to such elevations. You decide to rest a few minutes.", 
			"You hear a rustling behind you. You turn in fear, only to catch a fleeting glimpse of a large white cat. It’s a snow leopard! An endangered and slowly disappearing animal indigenous to this region, it is unheard of to have seen one during the daytime."
		],
		guidebook: "The view from the 4940 meter (16,300 ft) Nyalu pass, which cuts the Limi Valley off from the rest of Humla and thus the rest of Nepal for six months of the year. This region is famed for its wildlife and plants. There are many kinds of exotic animal: Himalayan bears, wild horses, blue sheep, musk deer, mountain eagles and many more. Although rare, snow leopards may be seen in this region.",
		choices: [
			{
				pointsTo: "stoneCairnsField",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 53, y: 35.5},
			found: false
		},
		backgroundImage: "stones3.jpg"
	},
	stoneCairnsField: {
		title: "Stone Cairns Field",
		textnodes: [
			"Climbing down the trail from Nyalu La, you breathe in all the air your lungs can hold! High elevations take a little getting used to...", 
			"Rising from the mist, you see the tops of a field full of stone cairns. If you weren't a scientist, you’d be swept away by the magic of this region and believe you were in a magical realm. Or perhaps you already are?",
			"Just after this area the trail slowly winds down a rocky hillside to the lush river valley below."
		],
		guidebook: "Cairns and a prostration site can be found near Nyalu pass. Cairns, variously called la btsas or rdo phung, are common sites along pilgrimage paths as well as at mountain passes. They are ways of propitiating mountain deities. Some also say that these are places one's soul can rest after death. They are also seen as mandalas. Here, each one forms a mandala in and of itself as well as forming a mandala around Mt. Kailas.",
		choices: [
			{
				pointsTo: "talungValley",
				type: "arrow-up"
			},
			{
				pointsTo: "LaptaSharRoad",
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 50.5, y: 33},
			found: false
		},
		backgroundImage: "StoneCairnsHerderField.jpg"
	},
	talungValley: {
		title: "Talung Valley",
		textnodes: [
			"After climbing down through the rocky trail from Nyalu La, you come to an abrupt stop at a grassy knoll before dropping down to the valley below.", 
			"The view of the valley below is nothing short of breathtaking. Just for a moment, you are awestruck by the deep spirituality that others speak of. Suddenly it strikes you! You can&rsquo;t research nature by ignoring the spirit, not here. You are starting to see why spirituality and nature are two sides of the same coin for many Himalayan communities."
		],
		choices: [
			{
				pointsTo: "exploreTalung",
				type: "arrow-right"
			},
			{
				pointsTo: "talungCampsite",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 50.75, y: 29.5},
			found: false
		},
		backgroundImage: "TalungValley.jpg"
	},
	exploreTalung: {
		title: "Explore Valley",
		textnodes: [
			"It is a beautiful walk along the waterfalls and lakes with views of Api Saipal Himal (7025m). You realize with a start that you just got your first distant glimpse of the holy mountain, Mt. Kailas! It's barely a speck from here, but there is a magnetism about it that you can't ignore."	
		],
		choices: [
			{
				pointsTo: "stayInTalung",
				type: "arrow-right"
			},
			{
				pointsTo: "talungCampsite",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 51, y: 27},
			found: false
		},
		backgroundImage: "ExploreTalung.jpg"
	},
	talungCampsite: {
		title: "Talung Campsite",
		textnodes: [
			"Hiking along the river valley you emerge at a large flat area surrounded by stones and raised earthen mounds. A sign says &ldquo;Talung Riverside Campsite 2016.&rdquo; This large flat area is situated between a series of small river channels that split and join again all through the valley.", 
			"Talung Camp, spread out over a grassy meadow, is an island of calm. Hopefully it will provide some respite from the cold and windy weather that began suddenly.",
			"You wonder if you accidentally upset one of the mountain spirits protecting the valley..."
		],
		choices: [
			{
				pointsTo: "tshomtsoLake",
				type: "arrow-up"
			},
			{
				pointsTo: "abandonedVillage",
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 51, y: 23},
			found: false
		},
		backgroundImage: "Talung-Riverside-Camp.jpg"
	},
	tshomtsoLake: {
		title: "Tshom Tso Lake",
		textnodes: [
			"As the trail winds down further towards the end of the Talung valley, streams from Limi and Takche river slowly converge into a large marshy lake called Tshom Tso (lake). A plethora of birds and other wildlife live here, and you spy some temporary herder camps across the lake.",
			"Tshom Tso feels like a lake from the epic Panchatantra, where magical talking birds and animals have adventures in the wilderness. You wonder what the animals and birds might be saying about you right now..."
			],
		choices: [
			{
				pointsTo: "LaptaSharRoad",
				type: "arrow-right"
			},
			{
				pointsTo: "whiteSandDunes",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 50.65, y: 20.5},
			found: false
		},
		backgroundImage: "Tshom_Tsho_Lake.jpg"
	},
	stayInTalung: {
		title: "Explore Lake",
		textnodes: [
			"You see a goat herder on the road in front of you. You greet the man, and he hails back. He tells you that one of his goats just gave birth, so he and his herd are taking a break on the roadside. He lets you hold the tiny baby goat, and tells you about grazing in Talung Valley.",
			"He and other grazers are allowed to stay for three months of the year without payment to Limi residents as long as they stay within the Talung Valley. This land belongs to the Jang village in Limi, which used to have far more livestock. However, changing border policies and migration of local labour have reduced their livestock numbers. Now he and his friends are the primary grazers in the valley."
		],
		choices: [{
				pointsTo: "talungCampsite",
				type: "arrow-up"
		}],
		map: {
			position: { x: 50.5, y: 18},
			found: false
		},
		backgroundImage: "StayInTalung.jpg"
	},
	
	theheVillage: {
		title: "Thehe Village",
		textnodes: [
			"The is a small village east of Simikot, with a large Dalit community, a marginalized Hindu social caste across South Asia. Thehe village has a unique design, consisting of very tightly built houses perched on the side of the hills. The everyday ingenuity of this little village's construction is amazing.", 
			"You ask around and find out that Raling Gampa is up north, while Simikot is further west.",
			"Do you want to explore more or leave?"
		],
		guidebook: "Dalits are a historically undersevered and oppresed social caste across religions in South Asia. Despite constitutional ammendments and wide sweeping social changes, the discrimination towards Dalits remains alive and well in present times. Efforts continue to improve the situation globally.",
		choices: [
			{
				pointsTo: "talkToTheVillagers",
				type: "arrow-right"
			},
			{
				pointsTo: "simikot2",
				type: "arrow-left"
			},
			{
				pointsTo: "ralingGompa",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 72, y: 88 },
			found: false
		},
		backgroundImage: "Te-Village.jpg"
	},
	talkToTheVillagers: {
		title: "Talk to Thehe Villagers",
		textnodes: [
			"You find a group of villagers standing around a tea shop. They seem a bit wary, but once they realize you want to learn more, they open up. An old man in the group asks you to sit next to him. You tell him you are doing research here, and ask him about this village. The old man says that although caste practices are illegal, they are rampant even today. Thehe village still has different water taps for Dalit and high-caste Hindus. The old man sighs, &ldquo;If only someone could teach the gods not to discriminate against us...&rdquo;", 
			"He asks where you are going. You were heading towards Upper Limi Valley, but you might be a little lost...",
			"The old man laughs, you are really off track! &ldquo;You need to go West past Simikot! But since you are here already, why not trek up to Raling Gompa?&rdquo;"
		],
		guidebook: "Dalit is the Sanskrit word for oppressed, and is the name chosen by members of this social caste to describe their caste-based oppression. Dalit groups exist across countries and religious practices in South Asia.",
		choices: [
			{
				pointsTo: "ralingGompa",
				type: "arrow-right"
			},
			{
				pointsTo: "simikot2",
				type: "arrow-left"
			},
			{
				pointsTo: "trailhead",
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 72, y: 91},
			found: false
		},
		backgroundImage: "TalkToTheheVillagers.jpg"
	},
	LaptaSharRoad: {
		title: "Lapche La Road",
		textnodes: [
			"Across the valley lies an old caravan trade and pilgrimage route from Limi to Tibet over the Lapche La. You see an old woman sitting taking a break by the roadside. She has a huge cloth bundle next to her. You greet her and ask about her bundle. She is a trader coming down the new road to Jang to sell her goods. You can't see a road where she points.", 
			"The old woman laughs, and points at a rough road that you can barely glimpse. Back in the day, the Limi people used this path to reach seasonal trade fairs and trading centers in Tibet. It was also used to take their livestock to graze in winter. This border was closed in 1962 except to local Limi residents who are allowed to cross the border to buy goods. A few years ago a local leader organized the building of this rough road where the caravan trail was. After borrowing an excavator in Kathmandu, driving it up the Friendship Highway into Tibet and across Shigatse to the west, and back down through Laptsa Shar, now they have a road! You think having a road must be a good thing for this remote area, but you also wonder how things will begin to change."
		],
		choices: [
			{
				pointsTo: "fordingRiver",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 49.75, y: 15.5},
			found: false
		},
		backgroundImage: "LaptaSharRoad.jpg"
	},
	fordingRiver: {
		title: "Fording the River",
		textnodes: [
			"At the mouth of the river you are surprised to see another traveller! She warns you about fording the river. Due to the mountain snows melting, the level of water in this area can change quite rapidly and the water is very cold. But since this is the summer, the stream can be waded across easily, with the water about 2 feet (~0.5 m) high. &ldquo;Just be careful!&rdquo; she yells your way."
		],
		choices: [
			{
				pointsTo: "LaptaSharRoad",
				type: "arrow-right"
			},
			{
				pointsTo: "whiteSandDunes",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 49.5, y: 13},
			found: false
		},
		backgroundImage: "FordingRiver.jpg"
	},
	whiteSandDunes: {
		title: "White Sand Dunes",
		textnodes: [
			"Just over the ridge an unusual sight greets you. After passing Tshom Tso and crossing the river, and thanks to centuries of erosion and flooding, finely ground sand has accumulated at the base of the valley. This has unexpectedly turned the end of the trail into a massive white sand dune. You reach the end of the Talung Valley, and with it the merging of the Limi and Takche rivers.", 
			"The white of the sand is in stark contrast to the green of the valley, and it's fine texture makes a welcome change from the rocky trail. Stepping into it, you forget you're in the mountains..."
			],
		guidebook: "As you get further from the beaten trail, your guidebook is becoming less reliable. You&rsquo;ll just have to figure this out yourself!",
		choices: [
			{
				pointsTo: "abandonedVillage",
				type: "arrow-up"
			},
			{
				pointsTo: "jangVillage",
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 49.5, y: 10.5},
			found: false
		},
		backgroundImage: "WhiteSandBank.jpg"
	},
	abandonedVillage: {
		title: "Abandoned Village",
		textnodes: [
			"You wonder if that is Takyon Karpo mountain in the distance. Stopping to drink some water and take a break, and notice some ruins nearby.", 
			"A child is playing near them, and she hides the second you turn towards her.",
			"The child is shy at first, but then warms up when you offer her a piece of candy. In this valley between the white dunes and this road up to Lapche La are the ruins of Chamdo, an old village that her grandmother tells her stories about it. Before you can ask her any more, she runs off."
		],
		choices: [
			{
				pointsTo: "moreVillageInfo",
				type: "arrow-right"
			},
			{
				pointsTo: "suspensionBridge",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 49.5, y: 8},
			found: false
		},
		backgroundImage: "AbandonedVillage.jpg"
	},
	moreVillageInfo: {
		title: "Explore the Village",
		textnodes: [
			"You find a small village, perhaps just a temporary rest stop for herders and travelling traders. Looking around, you find the child from the ruins sitting with a group of women in the shade of a large boulder. She recognizes you and comes running towards you. Pulling your hand, she takes you to an old woman sitting in the corner. This is her grandmother.", 
			"You greet the old woman and sit nearby. On asking about the ruined village, she tells you that it was abandoned in the distant past when Hindu Khas communities invaded and drove the Tibetan Lama communities out. Now all that remains are the stone outlines of a former settlement."
		],
		guidebook: "There doesn&rsquo;t seem to be anything in the guidebook about how to deal with ghosts...",
		choices: [
			{
				pointsTo: "suspensionBridge",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 48.75, y: 5.5},
			found: false
		},
		backgroundImage: "MoreVillageInfo.jpg"
	},
	suspensionBridge: {
		title: "Suspension Bridge",
		textnodes: [
			"Travelers leaving Talung Valley can cross the river here, either on the old wooden foot bridge or a new metal suspension bridge. On the footbridge, a fellow traveller greets you, asking if you are heading to Kailas or just hiking around Limi Valley? He was heading towards Kailas, but went west instead of worth, and ended up taking a long detour in Limi... He reminds you that this bridge marks the end of Talung Valley and the start of Takche Valley."
		],
		choices: [
			{
				pointsTo: "jangHotSprings",
				type: "arrow-left"
			},
			{
				pointsTo: "haljiVillage",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 47, y: 3},
			found: false
		},
		backgroundImage: "SuspensionBridge.jpg"
	},
	jangHotSprings: {
		title: "Jang Hot Springs",
		textnodes: [
			"You arrive at a small hot springs and camping site. As you greet the campers, you realize your anxiety has completely left you. You don&rsquo;t feel out of place at all. Or maybe facing the snow leopard just made you braver! Either way, you feel like you belong here on this trail, in this region.", 
			"Walking up to them, you ask what brings them here? An older tourist washing out her utensils tells you that this camp is just west of the village of Jang. A beautiful old village that she just returned from. This campsite was recently upgraded by the Limi Valley Youth Club, who adding some stone outhouses near the campsite and hot springs. It makes for a welcome break for the solitary traveller."
		],
		choices: [{
				pointsTo: "jangVillage",
				type: "arrow-left"
			},
			{
				pointsTo: "nepalPoliceCheckPoint",
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 41.5, y: 12},
			found: false
		},
		backgroundImage: "JangHotSprings2.jpg"
	},
	jangVillage: {
		title: "Jang Village",
		textnodes: [
			"Of all the villages in the upper Limi Valley, Jang still has the strongest look and feel of old Tibetan culture. Walking into Jang, it feels like you travelled back centuries in time!", 
			"Thanks to its location inside Nepal, Chinese cultural and political policies have not forced local change in this region, allowing nature to preserve the old Tibetan lifestyle. Here people sell maple wood phuru (cups), soup bowls, and other wooden artisan products."
		],
		choices: [
			{
				pointsTo: "moreJangVillage",
				type: "arrow-right"
			},
			{
				pointsTo: "nepalPoliceCheckPoint",
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 36.5, y: 13.8},
			found: false
		},
		backgroundImage: "JangVillage_new.jpg"
	},
	moreJangVillage: {
		title: "Explore Jang Village",
		textnodes: [
			"Walking around the village, you see a tea-seller. You ask for a tea and enquire about the village. ", 
			"Jang is one of the largest villages in the upper Limi Valley, including two main levels of houses, a monastery and a school. The monastery is on the northern slopes of Jang. A large community hall serves as a communal gathering space for the village, as well as traveling groups. He asks if you have been to the famed hot springs, east of the village. When you tell him you have he beams with joy. He is very proud of Jang village, and makes sure you know it!"
		],
		choices: [{
			pointsTo: "nepalPoliceCheckPoint",
			type: "arrow-left"
		}],
		map: {
			position: { x: 36.5, y: 16.8},
			found: false
		},
		backgroundImage: "JangMonastry.jpg"
	},
	nepalPoliceCheckPoint: {
		title: "Nepali Police Checkpoint",
		textnodes: [
			"This is the furthest northern police check post in upper Limi Valley. Outsiders like you are required to show travel permits for Limi Valley.", 
			"Making sure all your documents are in order, you show the officer your permits and a letter from your university. The officer seems satisfied, and since there aren&rsquo;t a lot of other people at the checkpoint, you ask the officer about this area.",
			"This is a very quiet region, and nothing much happens here. During the Maoist insurgency (1996-2006) the Sunkarni checkpost was damaged, but it is being fixed now. Many officers find this post boring, but to this officer it&rsquo;s the best post. He feels more connected to nature here.",
			"You couldn&rsquo;t agree more!"
		],
		choices: [{
				pointsTo: "haljiVillage",
				type: "arrow-left"
		}],
		map: {
			position: { x: 30, y: 15.5},
			found: false
		},
		backgroundImage: "PoliceStation.jpg"
	},
	haljiVillage: {
		title: "Halji Village",
		textnodes: [
			"Stumbling into an energetic bustle of a village is huge shock from the ascetic solitude of the trail. A woman walks by you carrying a child who smiles at you. Waving at the child catches the mother&rsquo;s attention, and she comes towards you.", 
			"You ask her what the name of this village is and she starts to laugh! &ldquo;This is Halji Village, one of the largest villages in upper Limi Valley. But more importantly, it is home to Rinchen Ling Gompa, the oldest Buddhist monastery in the entire western region of Nepal.&rdquo; She walks away with her child, still smiling.",
			"You feel a little foolish, but that&rsquo;s the joy of exploring a region without a plan. You just follow the trail!"
		],
		guidebook: "Rinchen Ling Gompa is the oldest buddhist monastry in western Nepal. Dating back to the 10th or 11th century, Rinchen Ling Gompa was patronized by Lotsawa Rinchen Zangpo, a principal lotsawa or translator of Sanskrit Buddhist texts into Tibetan during the second diffusion of Buddhism in Tibet. Rinchen Ling played a crucial part in introducing Buddhism to Nepal from Tibet and Northern India.",
		choices: [
			{
				pointsTo: "rinchenLingGompa",
				type: "arrow-up"
			},
			{
				pointsTo: "hilsa",
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 25., y: 20.75},
			found: false
		},
		backgroundImage: "HaljiVillage.jpg"
	},
	rinchenLingGompa: {
		title: "Rinchen Ling Gompa",
		textnodes: [
			"You arrive at the Gompa, and it is a breathtaking site. Visible from across the valley, Rinchen Ling Gompa looks iconic. You are struck by the beautiful archways and the courtyard.", 
			"As you stare at a mandala painting on the monastery walls, a young monk comes up to you. He enquires if you need any help. You thank him for his kindness, and ask him about the Gompa. He is more than happy to tell you all about it!",
			"Rinchen Ling Gompa played a key role in introducing Buddhism to Nepal in the 10th and 11th century under the leadership of Lotsawa Zangpo, a famous translator of Buddhist texts."
		],
		choices: [
			{
				pointsTo: "ecoImpactGompa",
				type: "arrow-right"
			},
			{
				pointsTo: "prayerFlagsTilchung",
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 22, y: 23},
			found: false
		},
		backgroundImage: "RinchenLingGompa.jpg"
	},
	ecoImpactGompa: {
		title: "Ecological Imapact on Rinchen Ling Gompa",
		textnodes: [
			"You return to the monastery the next day, and seek out your friend, the young monk again. He&rsquo;s completing some chores, and you wait for him to finish. You certainly don&rsquo;t want to disturb him with your questions!", 
			"Once he&rsquo;s done, you ask him to tell you more about this beautiful monastery. He tells you that although Rinchen Ling Gompa is revered, its physical presence might not last that long. Due to global warming, this historical gompa and Halji village are constantly threatened by glacial lake outburst floods (GLOFs). Part of the village was washed away in 2011 due to one of these. If this gompa has any chance of surviving, it needs protective action immediately...",
			"Your research might be handy for something like this! You tell your friend that you are studying the changing ecology in this region, and you&rsquo;ll make a point of mentioning the impact on this gompa in your studies. You both part ways a little more at peace."
		],
		choices: [{
			pointsTo: "prayerFlagsTilchung",
			type: "arrow-left"
		}],
		map: {
			position: { x: 22, y: 28.5},
			found: false
		},
		backgroundImage: "EcoImpact.jpg"
	},
	prayerFlagsTilchung: {
		title: "Prayer Flags at Tilchung",
		textnodes: [
			"From a distance you notice prayer flags fluttering in the wind. They look beautiful, so you walk towards them. Looking down the valley, you see the confluence of two mighty rivers. You wish you knew more about them.", 
			"Just as you start walking away, an old monk comes up the road and stops near you. He looks tired. You ask if he needs some water, offering your water bottle. Thanking you, the monk politely refuses. You ask him about the rivers below you. He smiles and tells you to sit down a moment. These prayer flags mark the end of the trail at Til Village, a little further down across the valley.",
			"Tagtsi Khola, the main tributary of the Humla Karnali River, meets the stream Tilchung at Til Village, where the two merge. They cut through a mountain and proceed south through a deep and narrow ravine. You realize you must have just missed the ravine while you were in the valley! There is so much to see and learn here...",
			"You thank the old monk, who tells you to go see the Ya Yip Phuk meditation caves, since you are so close to them."
		],
		choices: [{
				pointsTo: "yaYipPhukMeditationCaves",
				type: "arrow-up"
			},
			{
				pointsTo: "jangVillage",
				type: "arrow-right"
			},
			{
				pointsTo: "hilsa",
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 15, y: 27},
			found: false
		},
		backgroundImage: "PrayerFlagsTilchung.jpg"
	},
	yaYipPhukMeditationCaves: {
		title: "Ya Yip Phuk Caves",
		textnodes: [
			"Although off the beaten trail, the Ya Yip Phuk caves are well worth the detour. A meditation complex carved into the side of the mountain, it has both natural rock overhangs and constructed rock houses.", 
			"You are dumbstruck by the design of the caves. Marvelling at their construction, you almost miss a man walking by you with a staff and a bag full of things. If you didn&rsquo;t know better, you might think it was Lord Shiva himself!",
			"You ask him if he knows anything about these caves. He laughs and tells you that he is a shaman and knows everything!",
			"He tells you that local legend says that the famous Buddhist translator Lotsawa Rinchhen Zangpo once spent time meditating here. The cave have a large stupa under the rocks, as well as slowly degrading but still quite impressive murals painted into the rocks above the caves. He suggests you might learn something about yourself if you sit quietly here, then abruptly leaves.",
			"You are amused, and curious..."
		],
		choices: [
			{
				pointsTo: "hilsa",
				type: "arrow-left"
			},
			{
				pointsTo: "stayInYaYip",
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 12, y: 33.5},
			found: false
		},
		backgroundImage: "YaYipPhuk.jpg"
	},
	stayInYaYip: {
		title: "Explore the Caves",
		textnodes: [
			"In the caves, water comes from two springs, but one appears to have dried up, and there is a root of what looks like a juniper tree in the other. There are three stupas in line, with heaps of clay tablets around.", 
			"Lotsawa Rinchen Zangpo (985-1055 CE), the noted translator of Buddhist scriptures who was crucial to the revival of Buddhist cultural exchange between Tibet and India, is said to have meditated here. He had the cave decorated with mantras of various buddhist deities and there are paintings by Kashmiri artists who he had bought here.",
			"Maybe your shaman friend was right. Hidden stories are everywhere! Perhaps there is more to learn here, but you barely have any time left..."
		],
		choices: [
			{
				pointsTo: "shamansBuddhists",
				type: "arrow-right"
			},
			{
				pointsTo: "jangVillage",
				type: "arrow-left"
			},
			{
				pointsTo: "hilsa",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 12, y: 36.5},
			found: false
		},
		backgroundImage: "YaYipPhuk2.jpg"
	},
	shamansBuddhists: {
		title: "Shamans and Buddhists",
		textnodes: [
			"The next day, you see your mystical friend again. You recognize his serpentine coils of hair anywhere! He waves back at you to come over.", 
			"You ask him what he is doing at a Buddhist meditation cave. He laughs at you, “All the religions here belong together. Don’t the Buddhists need us shamans?” You have no idea, so he tells you.",
			"He is a Dangri, a translator for the spirit medium known as a dhami. This is a pre-Buddhist practice, and he is not only the holy man, but a man of justice for his village. He comes to these caves to meditate and return better prepared to continue his work. He works with a dhami, or a spirit medium, who channels spirits and local deities. The dangri and dhami help their villages solve both spiritual and legal troubles, and they are highly respected. Some people even think that dhami are Lord Mahadev, the Hindu god Shiva manifest on earth.",
			"Just as the environment and spiritual practices of this region are deeply intertwined, so are the different spiritual and religious beliefs."
		],
		choices: [
			{
				pointsTo: "hilsa",
				type: "arrow-left"
			},
			{
				pointsTo: "jangVillage",
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 12, y: 39.5},
			found: false
		},
		backgroundImage: "Shamans_Buddhists.jpg"
	},
	hilsa: {
		title: "Hilsa",
		textnodes: [
			"In Hilsa, there are many tourists and pilgrims waiting to continue on to Taklakot to begin their pilgrimage to Lake Mansarovar and Mount Kailas.", 
			"However, you didn’t plan to make the Hilsa crossing this time. Crossing into T.A.R. is a time consuming process requiring liaison officers at the border and special visas. You continue exploring the Kailas sacred landscape for now, and plan to return to Hilsa next time."
		],
		guidebook: "Hilsa is an important border town in the Kailas Sacred Region, as it borders Tibet Autonomous Region (T.A.R.), and is a customs check point on the Nepal side, and a border point into T.A.R. The Humla-Karnali river crosses the Tibetian Plateau into the mountain regions on its descent to the Ganges. ",
		choices: [
			{
				pointsTo: "yaYipPhukMeditationCaves",
				type: "arrow-up"
			},
			{
				pointsTo: "trailhead",
				type: "arrow-right"
			},
			{
				pointsTo: "haljiVillage",
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 2.9, y: 37},
			found: false
		},
		backgroundImage: "hilsa.jpg"
	},
	
	finalNode: {
		title: "Final",
		textnodes: [
			"Your time is up for this trip! You’ll have to come back again to see more.", 
			"A pilgrim on their way back from Kailas shows you a short clip they took while hiking around the mountain.",
			"You gathered enough research materials to write a short paper. You may not ever fully understand the Kailas sacred landscape, but you have been profoundly changed by it."
		],
		choices: [{
			pointsTo: "reset",
			type: "arrow-up"
		}],
		
		backgroundImage: "flagLoop.gif"
	},
	reset: {
		title: "Play Again?",
		textnodes: [],
		choices: [],
		backgroundImage: "black.gif"
	}
}

/*
Notes: 
	Animation from left=>right
	Interactive Elements: Cairns
	Map:
		Position
		Unlockable pieces
		Overlay
		player position on map
		navigational
*/
