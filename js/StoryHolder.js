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
	characterIntro: {
		title: "Who are you?",
		textnodes: [
			"You are a researcher working with ecological conservation. You receive a grant to study the duality of ecology and spirituality in the Kailash Sacred Region.",
			"While you are really excited about this project, you pride your scientific rationality above all else. Not being very religious, explored this region before, what if you can’t find anything spiritual…?",
			],
		guidebook: "You are about to leave on a 10 day trip to familiarise yourself with the region. Each location visited takes a day off your expedition. Navigate using the arrows at the bottom of the screen. You can see how many days you have left in the circles at the bottom of text. Return to any of the previously visited locations by tapping on any filled in circles.",
		choices: [
			{
				pointsTo: "INTRODUCTION",
				type: "arrow-up"
			},
			{
				pointsTo: "INTRODUCTION",
				type: "arrow-right"
			},
			{
				pointsTo: "INTRODUCTION",
				type: "arrow-left"
			}
		],
		backgroundImage: "tooltips.jpg"
	},
	introQuote: {
		title: "",
		textnodes: [
			"&#8220;Kailash is not a Mountain to climb physically in this life; it is a holy mountain to climb metaphorically for spiritual transformation&#8221;", 
			"– Tshewang Lama"
		],
		choices: [
			{
				pointsTo: "characterIntro",
				type: "arrow-right"
			}
		],
		backgroundImage: "PrologueImage_sm.jpg"
	},
	INTRODUCTION: {
		id: 1,
		title: "Kathmandu",
		textnodes: [
			"Your journey begins.",
			"You never thought you would actually get this grant, and with it a unique opportunity to come study this region in person. You didn't think you had a chance, but your professor insisted you apply, and you are very glad you could did!",
			"Kathmandu is a city where traditions and modernity coexist. Gods (or actors in costume) walk the same streets as humans. Remember, this is your first time in Nepal. You are bound to experience the unexpected here!",
			"You have no doubts about finding rich environments to study, but you aren't as sure about the spiritual. You have never been religious, why start now? "
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
		title: "Kathmandu Road",
		textnodes: [
			"Kathmandu is a capital city in the global south. Tradition and modernity walk hand in hand there, and you are both amazed and overwhelmed by the bustling metropolis.",
			"You thought that you would hate to be here long, but there's a chaotic calm to city that surprises you. ", 
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
			"You leaarned about the mythic history of the city–According to Swayambhu Purana, present-day Kathmandu was once a huge and deep lake named &ldquo;Nagdaha&rdquo;– as it was full of snakes. The lake was drained by Bodhisatwa Manjusri. Sometime later, a demon named Banasur closed the outlet, and the valley was a lake again. Then lord Krishna came to Nepal, killed Banasur, and again drained out the water.", 
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
			"Kathmandu is a city where tradition and modernity coexisit, making it a vibrant first destination. But you aren't a very social person, and all this hustle and bustle makes you anxious.",
			"Truth be told, you're ready for some calmer environments.", 
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
			"You fly into Simikot, which is an experience in itself. The small propeller plane flies over mountain ridges, and then banks and swoops down to land on the flattened ridge of one of the many mountains in the area. You notice that the landing strip is exceptionally small...",
			"Stomach lurching, and you close your eyes and automatically start reciting a prayer your grandmother taught you when you were a child. ",
			"You catch yourself with surprise – you are not religious. You remind yourself that you are a scientist, not a pilgrim."
		],
		guidebook: "Simikot: Translates to Swampy Fort, and gets it&rsquo;s name from a swamp just below the airport, with a ruined fort (Kot) of the Malla Kings. Simikot runs on a market economy, unlike the rest of the region which follows the traditional barter system.",
		choices: [
			{
				pointsTo: "theVillage",
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
			position: { x: 67.2, y: 81.3 },
			found: false
		},
		backgroundImage: "simikot.jpg"
	},
	simikot2: {
		title: "Exploring Simikot",
		textnodes: [
			"Simikot is an important town in the most remote district of Nepal. Although dominated by the Airport, the town is split into four parts. South of the Airport are the main government buildings, schools, post office and guest houses. To the east and northwest are two large settlements of the Chhetri and Dum community.",
			"Any research in this region begins here, since Simikot is connected directly to Hilsa by road. Hilsa is last checkpost in Nepal, and the entry point into the Tibetian Autonomous Region, making it an important transit location. This is the popular route taken by pilgrims and tourists. You really hope you can avoid it."
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
			position: { x: 67.2, y: 84.3 },
			found: false
		},
		backgroundImage: "SimikotTown.jpg"
	},
	talkToTraveller: {
		title: "Talk to Traveller",
		textnodes: [
			"You meet a traveller at your hostel. She just returned from hiking around upper Limi Valley. She took a route recently repopened by the government, allowing travellers to see the old villages of Limi Valley. On this ancient hearding path, she felt she had travelled back in time. She insists that there is an enchanted meadow in Talung Valley, she just couldn't find it this time...", 
			"This remote trail, unchanged by outside influences, might just be what you were looking for!"
		],
		choices: [
			{
				pointsTo: "theVillage",
				type: "arrow-right"
			},
			{
				pointsTo: "twoFish",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 67.2, y: 87.3 },
			found: false
		},
		backgroundImage: "TravellerSimikot.jpg"
	},
	ralingGompa: {
		title: "Raling Gompa",
		textnodes: [
			"Raling Gompa is a monastery perched high in the mountains. Walking up a rocky trail, you see a wooden gate through the trees.", 
			"The gate appears to mark the outer boundary of the monastery area, and you can see an impressive monastery behind it. After walking through the gate, the main building and the secondary structures making up Rawling Gompa loom ahead.",
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
			"Walking around Raling Gompa, you loose track of time. A young monk comes up to you and asks if you are a tourist. You tell him you are here to learn about this regions unique natural and spiritual wonders.", 
			"He tells you to check out two rocks on your way to Limi Valley. There is something mysterious about them, and no one can agree on their story. Some people think those rocks are fish that brought Malaria to this valley, but he doesn't think so. He hopes you get to see them! "
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
			"You come up to two rocks by the side of Humla River. They seem ordinary enough, but there was something about them that made him want to look closer. Were they glittering? Were these boulders made up of Lepidolite?",
			"Should you check them or keep going?"
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
			"You walk up closer and put your hand on one of the rocks. You start to feel faint, everything starts to get brighter around you. ",
			"Matsaya and Devi were an aging fish couple that left their home seeking Mount Kailash, the abode of the gods and the place where they thought they would find salvation themselves. ",
			"Matsaya was despairing at the impact his life had had on the world, so his wife Devi suggested that they make a pilgrimage to Mount Kailash, like the humans, and find salvation in the after life. Althought Matsaya agreed, he wasn't convinced. He complained and doubted their journey right from the first day. All of Devi's efforts were in vain, including the story of Lord Vishnu, a Hundu God, who was disguised as a small fish and after being rescued by Manu, the first Man, played a vital role in ensuring the fate of humanity.", 
			"Eventually, the strain of the voyage was too much on the two old fish, and they realized they wouldn't make it Mount Kailash afterall. Giving in to his despair, Matsaya asks Devi if this pointless journey was worth it, and to answer him, she asks him to turn around. Behind them lay a valley that was as green as emeralds with rice paddies. Swimming up river, they carried rice seeds with them, which grew along the river beds. Although they were just two fish, Matsaya and Devi left their mark, and blessings on the valley with their gift of Rice."
		],
		choices: [
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
			position: { x: 58.4, y: 76 },
			found: false
		},
		backgroundImage: "Two-Fish-from-Trail.jpg"
	},
	trailhead: {
		title: "Tshongsa Valley",
		textnodes: [
			"You are in Tshongsa Valley, onward lies Limi Valley, and with it, a wealth of villages and natural sights. Before you, alpine meadow meets a sub-alpine forest. Suffice to say, it is breathtaking.", 
			"A forking path lies before you at Salli Khola, the trailhead. You can either keep going East towards the Hilsa chekpoint on the Greater Himalayan Trail, or go north into Upper Limi Valley."
		],
		guidebook: "West Nepal has a strong belief of a variety of demi gods who protect the rich pasture lands, and even influence local social governance. All resources goverened by these demigods need to be paid for, and it is common for hunters to pacify them. This system maintained law and order and even controlled border crossings for many years. ",
		choices: [
			{
				pointsTo: "hilsa",
				type: "arrow-right"
			},
			{
				pointsTo: "upperLimiValley",
				type: "arrow-up"
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
			"After a long hike through the valley and up into the mountains, the trail opens onto a large, flat, rocky area with many stone prayer cairns. You catch a glimpse of a mountain lake from here as well.",
			"Neatly piled rocks are scattered around the field, and in this mist, they look like a small army of dieties manifesting on earth.",
			"The stillness here is striking. Something compels you to pay your respects with a moment of silence for the prayers of others, if not your own. "
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
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "cloudvalley.jpg"
	},
	herderCamp: {
		title: "Herder Village",
		textnodes: [
			"You see some more stone structures up ahead. Could they be more cairns? They are make-shift stone huts! Looking around, you notice a wary herder looking at you from a nearby hill. You tentatively wave a greeting to him. ",
			"The herder comes down from the hill and greets you. He asks why you were looking into his house. You apologize and ask him about this area. Is it a village? Your curiosity about this region is evident, and he seems satisfied with you intentions. There are several temporary stone houses around here, built by local herders who use the area during seasonal grazing. Once upon a time, these used to be sacred grazing lands, goverened by fierce demigods..." 
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
		backgroundImage: "HerderCamp.jpg"
	},
	exploreLake: {
		title: "Explore the Lake",
		textnodes: [
			"You walk with the herder and his animals to a small mountain lake south of the herder camp the next morning. The lake makes this part of the Tshongsa Valley an ideal spot for grazing livestock. ", 
			"The herder tells you about a meadow which used to be an ancient trading place between Tibet and Nepal. As the legend goes, this meadow has nine corners and beautiful waterfalls, all under the protection of the mercurial Jowo Changtsen Chhenpo, the lord of the northern demigods. Venerated by all the Bhod Shamans of Humla, until recently his wrath was appeased by sheep sacrifices. Now, dough effigies are used instead.",
			"Limi Valley is changing with the times, but for this herder, time seems to have stopped in this meadow."
		],
		guidebook: "The people of Limi Valley used to traditionally be semi-nomadic. Although citizens of Nepal, they had winter grazing rights in Tibet. Following the boundary demarcation between China and Nepal, these rights were retracted in 1961.",
		choices: [
			{
				pointsTo: "nyaluLa",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "MountainLake.jpg"
	},
	nyaluLa: {
		title: "Nyalu La",
		textnodes: [
			"Your breath is short, and comes out in erratic bursts. You have arrived at Nyalu La, the highest point in the upper Limi Valley trail, reaching an elevation of 4,990 m. Your body isn&rsquo;t used to such elevations and you rest a second.", 
			"You hear a rustling behind you. You turn in fear, only to catch a fleeting glimpse of a rare snow leopard! An endangered and slowly dissapearing animal indegenous to this region, you are lucky to have seen it. "
		],
		guidebook: "The view from the 4940 meter (16,300 ft) Nyalu pass, which cuts the Limi Valley off from the rest of Humla and thus the rest of Nepal for six months of the year. This region is famed for its wildlife and plants. There are many kinds of exotic animal: Himalayan bears, wild horses, blue sheep, musk deer, mountain eagles and many more. Although rare, snow leopards may be seen in this region.",
		choices: [
			{
				pointsTo: "stoneCairnsField",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "stones3.jpg"
	},
	stoneCairnsField: {
		title: "Stone Cairns",
		textnodes: [
			"Climbing down the trail from Nyalu La, you breathe in all the air your lungs can hold! High elevations take a little gettings used to...", 
			"Rising from the mist, you see the tops of a field full of stone cairns. If you weren't a scientist, you&rsquo;d be swept away by the magic of this region and believe you were in a myth. Or perhaps you already are?",
			"Just after this area the trail slowly winds down a rocky hillside to the lush river valley below."
		],
		guidebook: "Cairns and a prostration site can be found near Nyalu pass. Cairns, variously called la btsas or rdo phung, are common sites along pilgrimage paths as well as at mountain passes. They are ways of propitiating mountain deities. Some also say that these are places one's soul can rest after death.  They are also seen as mandalas. Here, each one forms a mandala in and of itself as well as forming a mandala around Mt. Kailash.",
		choices: [
			{
				pointsTo: "talungValley",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "StoneCairnsHerderField.jpg"
	},
	talungValley: {
		title: "Talung Valley",
		textnodes: [
			"After climbing down through the rocky trail from Nyalu La, you come to an abrupt stop at a grassy knoll, before dropping down to the valley below.", 
			"The view of the valley below is nothing short of breathtaking. Just for a moment, you are awestruck by the deep spirituality that others speak of. Suddenly it strikes you! You can't research nature by ignoring the spirit, not here. Spirituality and nature are two sides of the same coin in the Kailash Sacred Region."
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
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "TalungValley.jpg"
	},
	exploreTalung: {
		title: "Explore Talung",
		textnodes: [
			"A beautiful walk along the waterfalls and lakes with views of Api Saipal Himal (7025m), you realize with a start that you just got your first glimpse of the Holy mountain, Mt. Kailash! It's barely a speck from here, but there is a magnetism about ut tgat you can't ignore. "		],
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
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "ExploreTalung.jpg"
	},
	talungCampsite: {
		title: "Talung Campsite",
		textnodes: [
			"Hiking along the river valley you emerge at a large flat area surrounded by stones and raised earthen mounts. A sign says &ldquo;Talung Riverside Campsite 2016.&rdquo; This large flat area is situated between a series of small river channels that split and join again all through the valley", 
			"Talung Camp, spread out over a grassy meadow is an island of calm. Hopefully it will provide some respite from the cold and windy weather that began suddenly.",
			"You wonder if you accidentally upset one of the northern demigods..."
		],
		choices: [
			{
				pointsTo: "tshomtsoLake",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "Talung-Riverside-Camp.jpg"
	},
	tshomtsoLake: {
		title: "Tshom Tso Lake",
		textnodes: [
			"As the trail winds down further towards the end of the Talung valley, streams from Limi and Takche river slowly converge into a large marshy lake called Tshom Tso (Lake). A plethora of birds and other wildlife live here, and you spy some temporary herder camps setup across the lake.",
			"Tshom Tso feels like a lake from the epic Panchatantra, where magical talking birds and animals have adventures in the wilderness. You wonder what the animals and birds might be thinking about you..."
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
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "Tshom_Tsho_Lake.jpg"
	},
	stayInTalung: {
		title: "Stay in Talung",
		textnodes: [
			"You see a goathearder on the road in front of you. You hail the man, and he hails back. He tells you that one of his goats just gave birth, so he and his heard are taking a break on the roadside. He lets you hold the tiny baby goat, and tells you about grazing in Talung Valley.",
			"He and other grazers are allowed to stay for three months of the year without payment to Limi residents as long as they stay within the Talung Valley. This land belongs to Tsang village in Limi, which used to have far more livestock. However, changing border policies and migration of local labour have reduced their livestock numbers. Now he and his friends are the primary grazers in the valley."
		],
		choices: [{
				pointsTo: "talungCampsite",
				type: "arrow-up"
		}],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "StayInTalung.jpg"
	},
	roadToHilsa: {
		title: "Hilsa",
		textnodes: [
			"You notice that they have a measured way around the rough path by the river. They barely look at the ground, but their passage over it looks practiced. Compared to your new hiking shoes, their roughshod footwear looks shabby, but anyone looking could clearly see how you didn’t belong here. You were a tourist. Much like them, you wore your colours as blatantly as any tribal person. Only yours were bland and mass-produced.",
			"Caught in your reverie, you slip quite badly and manage to twist your ankle. You yell out in surprise and find your left ankle throbbing with pain. Some of the locals look back at you in concern."
		],
		guidebook: "Karnali River has many names; it is called Ghagra on the Indian side, Kung-chiao Ho on the Chinese side, and is one of the significant rivers of the region. It originates near the Manasarowar Lake in Tibet. Stretching for 1080 kms, Karnali is an important tributary of the Ganges. This is specifically important to India, given the spiritual significance of the Ganges, as well as a large part of Karnali is in India. Total catchment area of Karnali being 127,950 sq km of which 45% is in India. Ghagra River passes through Nepal where it is known as Karnali or Kauriala. It joins the Ganges at Chapra in Bihar. This river is the main source of water in Bara-Banki District of Uttar Pradesh. Rapti, Little Gandak, Sarda and Sarju are the major tributaries of this river.",
		choices: [
			{
				pointsTo: "karnaliRiver",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 2.9, y: 37.9 },
			found: false
		},
		backgroundImage: "stones2.jpg"
	},
	theVillage: {
		title: "The Village",
		textnodes: [
			"The is a small village east of Simikot, with a large Dalit community, a marginalized social caste from South Asia. The village has a unique design, consisting of very tightly built houses perched on the side of a hill in Nyin Valley. The everyday ingenuity of this little village's construction is amazing.", 
			"You look around you and see a sign for Raling Gampa going East, and Simikot going West. ...Or you could stay here."
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
		title: "Talk to The Villagers",
		textnodes: [
			"You find a group of villagers sitting under a tree. They seem a bit wary, but once they realize you are no threat to them, they let their guard down. The old man of the group asks you to sit next to him. You tell him you are doing research here, and ask him about this village. The old man says that although caste practices are illegal, they are rampant even today. Until recently, The Village had different taps for Dalit and Chettris. The old man sighs, &ldquo;Times change, but people don't change as fast.&rdquo;", 
			"He asks where you are going. You were heading towards Upper Limi Valley, but you might be a little lost... ",
			"The old man laughs, you are really off track! &ldquo;You need to go West, not East for Limi Valley! But since you are here already, why not stop by Raling Gompa?&rdquo;"
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
			}
		],
		map: {
			position: { x: 72, y: 91},
			found: false
		},
		backgroundImage: "TeVillager.jpg"
	},
	LaptaSharRoad: {
		title: "Lapta Shar Road",
		textnodes: [
			"Across the valley lies an old caravan trade and pilgrimage route from Limi to Tibet over the Laptsa Shar pass. You see an old woman sitting taking a break by the roadside. She has a huge cloth bundle next to her. You hail her and ask about her bundle. She is a trader, and is taking the new road to Tsang to sell her goods. You can't see a road where she points.", 
			"The old woman laughs, and points at a rough road that you can barely glimpse. Back in the day, the Limi people used this path to reach seasonal trade fairs and trading centers in Tibet. It was also used to take their livestock to graze in winter. This border was closed in 1962 except to local Limi residents who are allowed to cross the border to buy goods. A few years ago, scholar and politician Tshewang Lama organized the building of this rough road where the caravan trail was. After borrowing an excavator in Kathmandu, driving it up the Friendship Highway into Tibet and across Shigatse to the west, and back down through Laptsa Shar, now they have a road! It is easier for people in the nearest village, Tsang, to buy goods, though the road does not extend to the next village of Halzi nor across the Nyalu pass to the rest of Humla yet.",
			"Sustainable change happens gradually, and you are happy to hear about it."
		],
		choices: [
			{
				pointsTo: "fordingRiver",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "LaptaSharRoad.jpg"
	},
	fordingRiver: {
		title: "Fording the River",
		textnodes: [
			"At the mouth of the river you are surprised to see another traveller at all! She warns you about fording the river. Due to the mountain snows melting, the level of water in this area can change quite rapidly. But since this is the summer, the stream can be waded across easily, with the water about 2 feet (~0.5 m) high. &ldquo;Just be careful!&rdquo; she yells your way. "
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
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "FordingRiver.jpg"
	},
	whiteSandDunes: {
		title: "White Sand Dunes",
		textnodes: [
			"Just over the ridge an unusual sight greets you. After passing Tsom Tso lake and crossing the river, and thanks to centuries of erosion and flooding, finely ground sand has accumulated at the base of the valley. This has unexpectedly turned the end of the trail into a massive white sand dune. You reach the end of Talung Valley, and with it the merging of the Limi and Takche rivers.", 
			"The white of the sand is in stark contrast to the green of the valley, and it's fine texture makes a welcome change from the rocky trail. Stepping into it, you forget you're in a mountain valley..."
			],
		guidebook: "As you get further from the beaten trail, your guidebook is becoming less reliable. You'll just have to figure this out yourself!",
		choices: [
			{
				pointsTo: "abandonedVillage",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "WhiteSandBank.jpg"
	},
	abandonedVillage: {
		title: "Abandoned Village",
		textnodes: [
			"You wonder if that is Takyon Karpo mountain in the distance. Stopping to drink some water and take a break, and notice some ruins nearby.", 
			"A child is playing near them, and she hides the second you turn towards her.",
			"The child is shy at first, but then warms up when you offer her a piece of candy. In this valley between the white dunes and this road up to Lapcha Shar, are the ruins of Chamdo, an old village that her grandmother tells her stories about it. Before you can ask her any more, she runs off."
		],
		choices: [
			{
				pointsTo: "moreVillageInfo",
				type: "arrow-right"
			},
			{
				pointsTo: "Suspension Bridge",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 49.7, y: 9.9},
			found: false
		},
		backgroundImage: "AbandonedVillage.jpg"
	},
	moreVillageInfo: {
		title: "Explore the Village",
		textnodes: [
			"You find a small village, perhaps just a temporary rest stop for herders and travelling traders. Looking around, you find the child from the ruins sitting with a group of women in the shade of a large boulder. She recognizes you and comes running towards you. Pulling your hand, she takes you to an old woman sitting in the corner. This is her grandmother. ", 
			"You greet the old woman and sit nearby. On asking about the ruined village, she tells you that it was abandoned in the distant past, perhaps 100 years ago, when Khas communities from the north invaded and drove the local Lama communities out and further south. Now all that remains are the stone outlines of a former settlement. &ldquo;And some ghosts,&rdquo; she adds with a wink."
		],
		guidebook: "There doesn't seem to be anything in the guidebook about how to deal with ghosts...",
		choices: [
			{
				pointsTo: "suspensionBridge",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 49.7, y: 12.9},
			found: false
		},
		backgroundImage: "MoreVillageInfo.jpg"
	},
	suspensionBridge: {
		title: "Suspension Bridge",
		textnodes: [
			"Travelers leaving Talung Valley can cross the river here (Ling Chu), either on the old wooden foot bridge or the new metal suspension bridge. On the footbridge, a fellow traveller hails you, asking if you are heading to Kailash or just hiking around Limi Valley? He was heading towards Kailash, but went west instead of North, and ended up taking a long detour in Limi... He reminds you that this bridge marks the end of Talung Valley and the start of Takche Valley."
		],
		choices: [{
				pointsTo: "jangHotSprings",
				type: "arrow-left"
		}],
		map: {
			position: { x: 47, y: 4.3},
			found: false
		},
		backgroundImage: "SuspensionBridge.jpg"
	},
	jangHotSprings: {
		title: "Jang Hot Springs",
		textnodes: [
			"You arrive at a small hotsprings and camping site. As you greet the campers, you realize your anxiety has completly left you. You don't feel out of place at all. Or maybe facing the Snow Leopard just made you braver! Either way, you feel like you belong here, on this trail, in this region.", 
			"Walking up to them, you ask what brings them here? An older tourist washing out her utensils tells you that this camp is just west of the village of Jang. A beautiful old village that she just returned from. This campsite was recently upgraded by the Limi Valley Youth Club, who adding some stone outhouses near the campsite and hot springs. It makes for a welcome break for the solitary traveller. "
		],
		choices: [{
				pointsTo: "jangVillage",
				type: "arrow-left"
		}],
		map: {
			position: { x: 40, y: 17},
			found: false
		},
		backgroundImage: "cloudvalley.jpg"
	},
	jangVillage: {
		title: "Jang Village",
		textnodes: [
			"Of all the villages in the upper Limi Valley, Jang still has the strongest look and feel of old Tibetan culture. Walking into Jang, it feels like you travelled back centuries!", 
			"Thanks to its isolation inside Nepal, cultural and political policies have not forced local change in this region, allowing nature to preserve the old tibetian lifestyle here in Jang. Here people sell Maplewood tea pots, soup bowls, and other wooden artisan products."
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
			position: { x: 37, y: 6.7},
			found: false
		},
		backgroundImage: "JangVillage.jpg"
	},
	moreJangVillage: {
		title: "Explore Jang Village",
		textnodes: [
			"Walking around the village, you see a tea-seller. You ask for a tea and enquire about the village. ", 
			"Jang is one of the largest villages in the upper Limi Valley, including two main levels of houses, a monastery and a school. The monastery is on the northern slopes of Jang. A large community hall serves as a communal gathering space for the village, as well as traveling groups. He asks if you have been to the famed hot springs, east of the village. When you tell him you have he beams with joy. He is very proud of Jang Village, and makes sure you know it! "		
		],
		choices: [{
			pointsTo: "nepalPoliceCheckPoint",
			type: "arrow-left"
		}],
		map: {
			position: { x: 37, y: 9.7},
			found: false
		},
		backgroundImage: "JangMonastry.jpg"
	},
	nepalPoliceCheckPoint: {
		title: "Nepali Police Checkpoint",
		textnodes: [
			"This is the furthest northern police check post in upper Limi Valley. Outsiders like you are required to show travel permits for Limi Valley here.", 
			"Making sure all your documents are in order, you show the officer your permits and a letter from your university. The officer seems satisfied, and since there aren't a lot of other people at the checkpoint yet, you ask the officer about this area, his job. ",
			"This is a very quiet region, and nothing much happens here. But back during the Maoist insurgency, the Sunkhani check post had been damaged. But it is being fixed now. Many officers find this post to be boring, but to this officer, it's the best post. He feels more connected to nature here.",
			"You couldn&rsquo;t agree more!"
		],
		choices: [{
				pointsTo: "haljiVillage",
				type: "arrow-left"
		}],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "PoliceStation.jpg"
	},
	haljiVillage: {
		title: "Halji Village",
		textnodes: [
			"Stumbling into an energetic bustle of a village is huge shock from the ascetic solitude of the trail. A woman walks by you carrying a child who smiles at you. Waving at the child catches the mother&rsquo;s attention, and she comes towards you.", 
			"You ask her what the name of this village is and she starts to laugh! &ldquo;This is Halji Village, one of the largest villages in upper Limi Valley. But more importantly, it is home to Rinchen Ling Gompa, the oldest Buddhist monastery in the entire western region of Nepal.&rdquo; She walks away with her child, still similing. ",
			"You feel a little foolish, but that&rsquo;s the joy of exploring a region without a plan. You just follow the trail!"
		],
		guidebook: "Rinchen Ling Gompa is the oldest buddhist monastry in western Nepal. Dating back to the 10th or 11th century, Rinchen Ling Gompa was patronized by Lotsawa Rinchen Zangpo, a principal lotsawa or translator of Sanskrit Buddhist texts into Tibetan during the second diffusion of Buddhism in Tibet. Rinchen Ling played a crucial part in introducing Buddhism to Nepal from Tibet and Northern India.",
		choices: [{
				pointsTo: "rinchenLingGompa",
				type: "arrow-up"
		}],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "HaljiVillage.jpg"
	},
	rinchenLingGompa: {
		title: "Rinchen Ling Gompa",
		textnodes: [
			"You arrive at the Gompa, and it is a breathtaking site. Visible from across the valley, Rinchen Ling Gompa looks iconic. You are struck by the beautiful archways and the courtyard.", 
			"As you stare at a mandala painting on the Monastry walls, a young monk comes up to you. He enquires if you need any help. You thank him for his kindness, and ask him about the Gompa. He is more than happy to tell you all about it!",
			"Rinchen Ling Gompa played a key role in introducing Buddhism to Nepal the 10th and 11th century under the leadership of Lotsawa Zangpo."
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
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "RinchenLingGompa.jpg"
	},
	ecoImpactGompa: {
		title: "Rinchen Gompa",
		textnodes: [
			"You return to the Monastry the next day, and seek out your friend, the young monk again. He&lsquo;s completing some chores, and you wait for him to finish. You certainly don&lsquo;t want to disturb him with your questions!", 
			"Once he&lsquo;s done, you ask him to tell you more about this beautiful Monastry. He tells you that although Rinchen Ling Gompa is revered, its physical presense might not last that long. Due to global warming, this historical gompa and the surrounding village of Halji are constantly threatened by floods. If this gompa has any chance of surviving, it needs protective action immediately...",
			"Your research might be handy for something like this! You tell your friend that you are studying the changing ecology in this region, and you'll make a point of mentioning the impact on this gompa in your studies. You both part ways a little more at peace."
		],
		choices: [{
			pointsTo: "prayerFlagsTilchung",
			type: "arrow-left"
		}],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "EcoImpact.jpg"
	},
	prayerFlagsTilchung: {
		title: "Prayer Flags at Tilchung",
		textnodes: [
			"From a distance you notice prayer flags fluttering in the wind. They look beautiful, so you walk towards them. Looking down the valley, you see the confluence of two mighty rivers. You wish you knew more about them.", 
			"Just as you start walking away, an old monk comes up the road and stops near you. He looks tired. You ask the monk if he needs some water, offering your cannister. Thanking you, the monk politely refuses. You ask him about the rivers below you. He smiles and tells you to sit down a moment. These prayer flags mark the end of this trail at Til Village, a little further down accross the valley. ",
			"Tagtsi Khola, the main tributary of the Humla Karnali River, meets the stream Tilchung at Til Village, where the two merge. They cut through a mountain and proceed south through a deep and narrow ravine. You realize you must have just missed the ravine while you were in the valley! There is so much to see and learn here...",
			"You thank the old monk, who tells you to go see the Ya Yip Phuk meditation caves, since you are so close to them."
		],
		choices: [{
			pointsTo: "yaYipPhukMeditationCaves",
			type: "arrow-up"
		}],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "PrayerFlagsTilchung.jpg"
	},
	yaYipPhukMeditationCaves: {
		title: "Ya Yip Phuk Caves",
		textnodes: [
			"Although off the beaten trail, the Ya Yip Phuk caves are well worth the detour. A meditation complex carved into the side of the mountain, it has both natural rock overhands and constructed rock houses. ", 
			"You&lsquo;re struck dumb by the sheer size of the caves. Marvelling at the construction of the caves, you almost miss a man walking by you with a staff and a bag full of things. If you didn&lsquo;t know better, you might think it was Lord Shiva himself! ",
			"You ask him if he knows anything about these caves. He laughs and tells you that he is a shaman, he knows everthing! ",
			"The shaman tells you that local legend says that the famous Buddhist translator Lotsawa Rinchhen Zangpo once spent time meditating here. The cave have a major stuppa under the rocks, as well as slowly degrading but still quite impressive murals painted into the rocks of several meditation rooms. He suggests you spend some time here. He thinks you might learn something about yourself here. He gets up and leaves abruptly. ",
			"You are amused, and curious."
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
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "YaYipPhuk.jpg"
	},
	stayInYaYip: {
		title: "Explore the Caves",
		textnodes: [
			"In the caves, Water comes from two springs, but one appears to have dried up, and there is a root of what looks like a juniper tree in the other. There are three stupas in line, with heaps of clay tablets around. ", 
			"Lotsawa Rinchen Zangpo (985-1055 CE), the noted translator of Buddhist scriptures who was crucial to the revival of Buddhist cultural exchange between Tibet and India, is said to have meditated here. He had the cave decorated with mantras of various buddhist dieties and there are paintings by Kashmiri artists who he had bought here. ",
			"Maybe your shaman friend was right. Hidden stories are everywhere! Perhaps there is more to learn here, but you barely have any time left..."
		],
		choices: [
			{
				pointsTo: "shamansBuddhists",
				type: "arrow-right"
			},
			{
				pointsTo: "hilsa",
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "YaYipPhuk2.jpg"
	},
	shamansBuddhists: {
		title: "Shamans and Buddhists",
		textnodes: [
			"The next day, you see your friend the shaman again. You recognize his serpentine coils of hair anywhere! He waves back at you and come over. ", 
			"You ask him what he is doing at a buddhist meditation cave. He laughs at you, &ldquo;All the religions here belong together. Don&rsquo;t the buddhists need us shamans?&rdquo; You have no idea, so he tells you. ",
			"He is a Drangri, or a Shaman priest. This is a pre-buddhist practice, and he is not only the holy man, but a man of justice for his village. He comes to these caves to meditate and return better prepared to continue his work. He works with a Dhami, or a medium, who channels the spirits that the shaman invokes. The Drangri and the Dhami help their villages solve both spiritual and legal troubles, and they are highly respected. Some people even think that Dhami are Lord Mahadev, the Hindu god Shiva manifest on earth. ",
			"The environment and spiritual practices of this region are deeply intertwined, so are the different spiritual and religious beliefs."
		],
		choices: [{
			pointsTo: "hilsa",
			type: "arrow-left"
		}],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "Shamans_Buddhists.jpg"
	},
	hilsa: {
		title: "Hilsa",
		textnodes: [
			"In Hilsa, there are many tourists and pilgrims waiting to continue on to Burang Town on their pilgrimage to Lake Mansarovar and Mount Kailash.", 
			"However, you didn&rsquo;t plan to make the Hilsa crossing this time. Crossing into T.A.R. is a time consuming process requiring liaison officers at the border. You continue exploring the Kailash Sacred Region for now, and plan to return to Hilsa next time."
		],
		guidebook: "Hilsa is an important border town in the Kailash Sacred Region, as it borders Tibet Autonomous Region (T.A.R.), and is a customs check point on the Nepal side, and a border point into T.A.R. The Humla-Karnali river crosses the Tibetian Plateau into the mountain regions on its descent to the Ganges. ",
		choices: [
			{
				pointsTo: "yaYipPhukMeditationCaves",
				type: "arrow-up"
			},
			{
				pointsTo: "trailhead",
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 2.9, y: 37.9},
			found: false
		},
		backgroundImage: "hilsa.jpg"
	},
	upperLimiValley: {
		title: "Upper Limi Valley",
		textnodes: [
			"You are in Tshongsa Valley, onward lies Limi Valley, and with it, a wealth of wonders. Before you, alpine meadow meets a sub-alpine forest. Suffice to say, it is breathtaking. ", 
			"A forking path lies before you at Salli Khola, the trailhead. You can either keep going East towards the Hilsa chekpoint on the Greater Himalayan Trail, or go north into Upper Limi Valley."
		],
		guidebook: "West Nepal has a strong belief of a variety of demi gods who protect the rich pasture lands, and even influence local social governance. All resources goverened by these demigods need to be paid for, and it is common for hunters to pacify them. This system maintained law and order and even controlled border crossings for many years.",
		choices: [
			{
				pointsTo: "stoneCairnsField",
				type: "arrow-up"
			},
			{
				pointsTo: "eastWestCrossroads",
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "TrailheadSaliKhola.jpg"
	},
	eastWestCrossroads: {
		title: "East West Crossroads",
		textnodes: [
			"At this crossroads, going west is a 6 day hike to Hilsa, the border town between Nepal and Tibet Autonomous Region. A popular tourist hike, it is considered to be pleasant and easy. Expect a lot of tourists on this route. ", 
			"Going north via Limi Valley is the other option. This is a tougher route, with higher elevations and fewer tourists for company. Reopened recently, the route allows tourists to make a circutous trip to Zher (near Hilsa), via Nyalo Pass. However, you were told that the Shangri-la like villages of Limi Valley, and the pristine state of this ancient trail make it well worth the effort."
		],
		choices: [
			{
				pointsTo: "stoneCairnsField",
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "EastWestCrossing.jpg"
	},
	finalNode: {
		title: "Final",
		textnodes: [
			"Your time is up for this trip! You&rsquo;ll have to come back again to see more.", 
			"You gathered enough data to start your research, and write a short paper. You may not every fully understand the Kailash Sacred Region, but you have been profoundly changed by it."
		],
		choices: [{
			pointsTo: "reset",
			type: "arrow-up"
		}],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
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
