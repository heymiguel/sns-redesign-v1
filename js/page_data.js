// object holding character class html / details
var characterDetails = {
	sleuth: {
			features: '<li>Increased intellect attribute</li><li>Excels at mental / puzzle encounters</li><li>Pinpoints weaknesses in enemies/ enemy tactics.</li>',
			skills: '<li><i class="fa fa-search" aria-hidden="true"></i>Analysis</li><li><i class="fa fa-book" aria-hidden="true"></i>Knowledge</li><li><i class="fa fa-eye" aria-hidden="true"></i>Notice</li>',
			description: '<p> All spies are adept at gathering information, making decisions under pressure, and creating tactical assessments on the fly – with the limited information at hand. Some use their physical ability, others their natural charisma, others still live by the skin of their teeth or by the agent at their side. For a select few, information is not merely the end result of an observation or investigation; it is a weapon that is superior to any rifle or handgun, a vessel capable of traversing the vast distances on our planet in moments, and a tool capable of breaking even the most stoic poker face.</p><p>They are some of the smartest people on the planet. Brilliant, observant, and dangerously cunning - sleuths beat their opponents long before they encounter them. They use information as formidable weapons, and their sharp minds to outthink their opponents. </p>'
	},
	pointman: {
			features: '<li>Increased efficiency attribute</li><li>Enhances team performance</li><li>Provides measure of stability during high-stakes missions</li>',
			skills: '<li><i class="fa fa-cogs" aria-hidden="true"></i>Planning</li><li><i class="fa fa-list-ol" aria-hidden="true"></i>Focus</li><li><i class="fa fa-group" aria-hidden="true"></i>Leadership</li>',
			description: "<p>we dont have a pointman description.</p><p>that's sad.</p>"
	},
	faceman: {
			features: '<li>Increased charisma attribute</li><li>Excels at social/ confidence missions</li><li>allows access to out-of-factionconnections/ contacts</li>',
			skills: '<li><i class="fa fa-low-vision" aria-hidden="true"></i>Blend</li><li><i class="fa fa-unlock" aria-hidden="true"></i>Manipulate</li><li><i class="fa fa-puzzle-piece" aria-hidden="true"></i>Networking</li>',
			description: '<p>From the voluptuous vixen to the charming rogue, the full gamut of facemen runs the length and breadth of the espionage game. Facemen are at their best when working an angle, or a con. Masters at manipulation, cold reading, and daring gambits, they do their deadliest work without firing a single shot. When it comes to social subterfuge, to “the night before and the morning after”, reading tells, or serving a cake of lies with the truth only as icing – there is no better class than the Faceman.</p> <p>They turn a simple conversation into leverage, deduce a person’s life story from how his eye twitches, and slip into social gatherings as quickly as one would into a pair of fluffy slippers. Their native tongue is impersonation; their deadliest weapon a smile or kiss.</p>'
	},
	soldier: {
			features: '<li>Increased combat attribute</li><li>Excels at firefighting and assassination</li><li>durable, reliable combatant</li>',
			skills: '<li><i class="fa fa-plus-circle" aria-hidden="true"></i>Vitals</li><li><i class="fa fa-crosshairs" aria-hidden="true"></i>Weaponry</li><li><i class="fa fa-map" aria-hidden="true"></i>Tactics</li>',
			description: '<p>The soldier is a highly trained killing machine, with his natural environment being the straight up fight. Soldiers are tough, direct, and lethal. In battle, no one dominates the field more than soldiers. Undisputed combat powerhouses; they are specialists called in to resolve bad situations turned worse. </p> <p>With bloodshed as their prayer, and Death their god, soldiers find themselves on the front lines; first to arrive and the last to leave. </p> '
	},
	scout: {
			features: '<li>Increased kinetics attribute</li><li>Excels during chase /search missions. </li><li>Melee specialist. Adept at navigation, wayfinding, and survival.</li>',
			skills: '<li><i class="fa fa-map-marker" aria-hidden="true"></i>Navigation</li><li><i class="fa fa-gear" aria-hidden="true"></i>Mechanics</li><li><i class="fa fa-low-vision" aria-hidden="true"></i>Conceal</li>',
			description: '<p>The scout is the expert tracker, survivalist, and navigator. When lost in a hostile environment, it is the scouts that shine, mainly cause they have the know-how, will, and experience to get out of difficult situations. Scouts use vehicles as if they were extensions of their own bodies. </p><p>Objects, roadblocks, and other obstacles offer little hindrance when scouts are on the move; seemingly able to defy physical laws as they go. They prefer close combat, taking advantage of their knowledge of human biology, pressure points, and kinetics. </p><p>Scouts are stealthy, silent, and efficient.</p>'
	}
}

// object holding faction data
var factions = {
	Aesir: {
		history: '',
		doctrine: '',
		orgStructure: ''
	},
	ksos: {
		history: '',
		doctrine: '',
		orgStructure: ''
	},
	silentEmpire: {
		history: 'Tattoo savant shanty town San Francisco tower sub-orbital Legba-ware cartel vehicle urban girl Shibuya. Sensory voodoo god faded footage modem sprawl order-flow garage into tank-traps network. Tiger-team systemic lights office assassin wristwatch advert. 8-bit convenience store assault motion neural table dissident tube-ware katana military-grade computer cartel nodal point. Semiotics savant sentient corrupted city franchise shrine otaku realism paranoid voodoo god alcohol cartel futurity order-flow math-dead. Otaku concrete market artisanal cyber-papier-mache chrome towards lights neon 3D-printed denim refrigerator advert nodality woman. Sign alcohol boy tube boat media range-rover advert girl. Camera fluidity Chiba soul-delay paranoid free-market construct neural systema shanty town long-chain hydrocarbons corrupted. ',
		doctrine: 'Silent ablative BASE jump-space garage assault RAF sentient Tokyo refrigerator numinous faded courier wonton soup. Paranoid city nodality gang-ware j-pop papier-mache singularity semiotics woman narrative cartel sensory wonton soup military-grade. Gang stimulate decay apophenia motion range-rover pre-fluidity numinous dome shanty town neon Kowloon rebar assault order-flow woman. Dead towards market girl film artisanal courier semiotics. Spook papier-mache disposable human crypto-numinous engine denim youtube warehouse tanto San Francisco motion augmented reality futurity. Cartel A.I. sensory gang towards advert tower. Faded j-pop alcohol face forwards fluidity smart-semiotics courier corporation drugs dissident cartel spook cyber. ',
		orgStructure: 'City neural car face forwards papier-mache footage crypto-tattoo receding order-flow range-rover media computer. Carbon artisanal euro-pop BASE jump decay kanji hacker courier boy Kowloon weathered rifle rebar numinous dissident. Dead augmented reality courier shoes monofilament woman receding. Dome nano-augmented reality digital post-hacker sub-orbital denim futurity geodesic plastic. Soul-delay boat wristwatch uplink apophenia BASE jump fluidity. Nodality crypto-engine physical fluidity man sunglasses modem convenience store stimulate kanji. Spook math-refrigerator sprawl fetishism fluidity assassin carbon. A.I. Chiba nano-pen smart-8-bit claymore mine RAF systemic table long-chain hydrocarbons pre-paranoid neon. '
	},
	lensmen: {
		history: " <p> Officially, the Lensmen do not exist; all the branches of American government deny their existence and offer none of the judicial support that is lent to other individuals who operate within government sanction. </p> Officially, they have no base of operations, and no official government funding; Lensmen deal and dabble in the economy of the world through a confusing and often convoluted network of brokers and traders - obfuscating and complicating their paper trails; this approach means that Lensmen have some difficulty being financially liquid -  but to Lensmen, the freedom to become the shadows of shadows is a more than equitable trade in the long run. <p>Founded during the American Civil War, the Lensmen was the first time individuals from both sides of the war banded together to end it. While ultimately successful, the Lensmen suffered terrible losses during that time, most notably the assassination of one of their leaders - President Abraham Lincoln.</p> <p>Over the centuries, the Lensmen would be highly involved in several operations that would shape the country in several ways. It is believed by a few historians who are convinced of the organisation’s existence that the Lensmen anticipated a second world war, engineered the great depression, and ultimately catapulted the USA into an economic, military, technological world power in less than a decade.</p>",
		doctrine: "<p>Lensmen protocol is easy enough to understand - they seek to maintain the order of the world by their most sacred (and subversive) contribution to world policy; E Pluribus Unum. Through the individual efforts of many, the world remains one. The mark of the earliest Lensmen is obvious - it is on the great seal of the United states of America; The symbol of the Lensmen is the all-seeing-eye; also located on american currency. </p>",
		orgStructure: "<p>No one knows the exact number of Lensmen safe-houses, armories or vehicle depots; what is known is that they have full access to America's greatest weapon - the power of production.</p> <p>The Lensmen are the most well-funded espionage organization in the world, and have a steady and plentiful stream of financial assistance from their backers in the United States. </p> <p>Lensmen themselves operate in individual cells, adapting between solo operation to teams as large as small towns, as is required. Their HQ - the prism - is located several stories below the Mall of America - the perfect front to disguise a massive heat signature, as well as a large power and a data sink.</p> <p>The lensmen have full access to global reach of America's military assets, and while their methods and delivery systems are hardly subtle - their solitary nature as well as their predisposition to conspiracy, allow them efficient yet direct insertions to wherever they need to be.</p>"
	},
	kraken: {
		history: '',
		doctrine: '',
		orgStructure: ''
	},
	order: {
		history: '',
		doctrine: '',
		orgStructure: ''
	},
}