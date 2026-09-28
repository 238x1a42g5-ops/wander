export type TravelStyle = "popular" | "hidden" | "local";

export interface Stop {
  time: string;
  duration: string;
  title: string;
  description: string;
  style: TravelStyle;
  tag: string;
  price: string;
}

export interface Stay {
  kind: "homestay" | "view";
  name: string;
  description: string;
  price: string;
}

export interface Food {
  category: string;
  name: string;
  description: string;
}

export interface Destination {
  id: string;
  city: string;
  state: string;
  country: string;
  days: string;
  blurb: string;
  stops: Stop[];
  stays: Stay[];
  foods: Food[];
}

export const destinations: Destination[] = [
  {
    id: "jaipur",
    city: "Jaipur",
    country: "India",
    days: "3 days",
    blurb:
      "The Pink City — palaces at sunrise, bazaars at noon, and rooftop dinners under the fort lights.",
    stops: [
      { time: "08:00", duration: "2 hr", title: "Amber Fort", description: "Ride up early to the hilltop fort before the heat and the crowds.", style: "popular", tag: "Fort", price: "₹550" },
      { time: "10:30", duration: "1 hr", title: "Hawa Mahal", description: "The iconic pink façade — best photographed from the café across the road.", style: "popular", tag: "Palace", price: "₹200" },
      { time: "11:30", duration: "45 min", title: "Panna Meena ka Kund", description: "A geometric 16th-century stepwell that most tours drive straight past.", style: "hidden", tag: "Stepwell", price: "Free" },
      { time: "13:00", duration: "1 hr", title: "LMB thali lunch", description: "Laxmi Misthan Bhandar — the old-city institution for a proper Rajasthani thali.", style: "local", tag: "Food", price: "₹350" },
      { time: "15:00", duration: "1 hr", title: "Gatore ki Chhatriyan", description: "Royal cenotaphs in carved marble, quiet even at peak season.", style: "hidden", tag: "Heritage", price: "₹50" },
      { time: "16:30", duration: "1.5 hr", title: "Johari Bazaar back lanes", description: "Skip the main road — gemstones, block prints and bangles where locals shop.", style: "local", tag: "Market", price: "Free" },
      { time: "18:30", duration: "1.5 hr", title: "Nahargarh at sunset", description: "The whole pink city turns gold below the fort walls.", style: "popular", tag: "Viewpoint", price: "₹200" },
      { time: "20:30", duration: "1.5 hr", title: "Chokhi Dhani", description: "A village-style evening of folk music, puppets and dal baati.", style: "local", tag: "Dinner", price: "₹900" },
    ],
    stays: [
      { kind: "homestay", name: "Haveli Homestay, Old City", description: "A 200-year-old courtyard haveli run by the same family for generations.", price: "₹3,800" },
      { kind: "view", name: "Fort View Palace Hotel", description: "Rooftop suites facing Amber Fort, lit up every evening.", price: "₹9,500" },
      { kind: "homestay", name: "Artist's House, Bapu Bazaar", description: "A block-printing family's home with a terrace over the bazaar.", price: "₹2,900" },
    ],
    foods: [
      { category: "Classic", name: "Dal Baati Churma", description: "Baked wheat balls with lentils and sweetened ghee crumble." },
      { category: "Street", name: "Pyaaz Kachori", description: "Crisp onion-stuffed pastry — the city's favourite snack." },
      { category: "Sweets", name: "Ghewar", description: "Honeycomb cake soaked in syrup, a festive icon." },
      { category: "Drink", name: "Lassi", description: "Thick yoghurt drink served in clay cups." },
    ],
  },
  {
    id: "kerala",
    city: "Kerala",
    country: "India",
    days: "5 days",
    blurb:
      "Backwaters, tea hills and spice coast — God's own country at a slow drift.",
    stops: [
      { time: "07:30", duration: "2 hr", title: "Alleppey backwater cruise", description: "A houseboat drift past coconut palms and paddy fields.", style: "popular", tag: "Backwaters", price: "₹1,500" },
      { time: "10:30", duration: "1 hr", title: "Fort Kochi Chinese nets", description: "The giant fishing nets at the harbour mouth — an icon of the coast.", style: "popular", tag: "Landmark", price: "Free" },
      { time: "11:30", duration: "1 hr", title: "Kumbalangi village", description: "A model fishing village where you can paddle quiet canals with locals.", style: "hidden", tag: "Village", price: "₹300" },
      { time: "13:00", duration: "1 hr", title: "Karimeen lunch", description: "Pearl-spot fish wrapped in banana leaf at a toddy-shop kitchen.", style: "local", tag: "Food", price: "₹400" },
      { time: "15:00", duration: "1.5 hr", title: "Munroe Island canals", description: "Narrow canals by canoe — the backwaters without the houseboat crowds.", style: "hidden", tag: "Canoe", price: "₹600" },
      { time: "17:00", duration: "1 hr", title: "Spice market, Mattancherry", description: "Cardamom, pepper and dried ginger in warehouses older than the Raj.", style: "local", tag: "Market", price: "Free" },
      { time: "18:30", duration: "1.5 hr", title: "Varkala cliff sunset", description: "The red cliff over the Arabian Sea, lined with cafés.", style: "popular", tag: "Viewpoint", price: "Free" },
      { time: "20:00", duration: "1 hr", title: "Kathakali performance", description: "Classical dance-drama — arrive early to watch the make-up ritual.", style: "local", tag: "Culture", price: "₹350" },
    ],
    stays: [
      { kind: "homestay", name: "Backwater Homestay, Alleppey", description: "A canal-side family home where dinner comes off the canoe.", price: "₹2,800" },
      { kind: "view", name: "Tea Valley Resort, Munnar", description: "Rooms hanging over a valley of tea estates and mist.", price: "₹7,500" },
      { kind: "homestay", name: "Heritage House, Fort Kochi", description: "A Portuguese-era mansion with a courtyard and cycle loans.", price: "₹3,500" },
    ],
    foods: [
      { category: "Classic", name: "Kerala Sadhya", description: "A banana-leaf feast of a dozen curries and payasam." },
      { category: "Breakfast", name: "Appam & Stew", description: "Lacy rice pancakes with coconut-milk stew." },
      { category: "Seafood", name: "Karimeen Pollichathu", description: "Pearl-spot fish grilled in banana leaf." },
      { category: "Snack", name: "Banana Chips", description: "Fried in coconut oil, bought warm from the shop." },
    ],
  },
  {
    id: "varanasi",
    city: "Varanasi",
    country: "India",
    days: "2 days",
    blurb:
      "The oldest living city — ghats at dawn, silk lanes by day, and the aarti fire at dusk.",
    stops: [
      { time: "05:30", duration: "1.5 hr", title: "Sunrise boat on the Ganga", description: "Row past the ghats as the city wakes and the temples ring.", style: "popular", tag: "River", price: "₹300" },
      { time: "08:00", duration: "1 hr", title: "Kashi Vishwanath Temple", description: "The golden temple at the city's sacred heart.", style: "popular", tag: "Temple", price: "Free" },
      { time: "10:00", duration: "1 hr", title: "Manikarnika back lanes", description: "The old city's maze of shrines, akharas and sweet shops.", style: "hidden", tag: "Old city", price: "Free" },
      { time: "12:00", duration: "1 hr", title: "Blue Lassi shop", description: "A 90-year-old lassi counter down an alley — ask for the fruit one.", style: "local", tag: "Food", price: "₹120" },
      { time: "14:00", duration: "1 hr", title: "Sarnath", description: "Where Buddha gave his first sermon — stupas and a calm museum.", style: "popular", tag: "Heritage", price: "₹300" },
      { time: "16:00", duration: "1 hr", title: "Weavers' quarter", description: "Watch Banarasi silk being loomed in family workshops.", style: "hidden", tag: "Craft", price: "Free" },
      { time: "17:30", duration: "1 hr", title: "Chai at Assi Ghat", description: "Join the students and sadhus for riverside chai and conversation.", style: "local", tag: "Ghat", price: "₹20" },
      { time: "18:30", duration: "1.5 hr", title: "Ganga Aarti", description: "Fire, bells and chant at Dashashwamedh Ghat — the city's great ritual.", style: "popular", tag: "Ceremony", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Ghat-side Homestay, Assi", description: "A family house steps from the river, with rooftop morning chai.", price: "₹2,200" },
      { kind: "view", name: "River View Heritage Hotel", description: "Colonial-era rooms with balconies over the ghats.", price: "₹6,800" },
      { kind: "homestay", name: "Weaver's Courtyard Stay", description: "A silk-weaver family's home in the old quarter.", price: "₹1,800" },
    ],
    foods: [
      { category: "Breakfast", name: "Kachori Sabzi", description: "Crisp kachori with spicy potato — the city's morning fuel." },
      { category: "Sweets", name: "Malaiyo", description: "Winter-only saffron milk froth, served in clay cups." },
      { category: "Street", name: "Tamatar Chaat", description: "A tangy tomato chaat unique to Varanasi." },
      { category: "Classic", name: "Banarasi Paan", description: "The famous betel leaf — sweet, after dinner." },
    ],
  },
  {
    id: "manali",
    city: "Manali",
    country: "India",
    days: "4 days",
    blurb:
      "Cedar forests, snow passes and hot springs — the Himalaya's friendliest base camp.",
    stops: [
      { time: "08:00", duration: "2 hr", title: "Solang Valley", description: "Paragliding and ropeway views over the snow line.", style: "popular", tag: "Valley", price: "₹800" },
      { time: "10:30", duration: "1 hr", title: "Hidimba Devi Temple", description: "A cedar-wood temple in a deodar forest, built in 1553.", style: "popular", tag: "Temple", price: "Free" },
      { time: "11:30", duration: "1 hr", title: "Jogini Falls trail", description: "A village path to a waterfall most visitors never walk.", style: "hidden", tag: "Hike", price: "Free" },
      { time: "13:00", duration: "1 hr", title: "Siddu lunch, Old Manali", description: "Steamed walnut-stuffed bread with ghee at a family dhaba.", style: "local", tag: "Food", price: "₹180" },
      { time: "15:00", duration: "1.5 hr", title: "Naggar Castle & Roerich estate", description: "A wood-and-stone castle and a Russian artist's Himalayan home.", style: "hidden", tag: "Heritage", price: "₹100" },
      { time: "17:00", duration: "1 hr", title: "Vashisht hot springs", description: "Sulphur baths in the village temple complex — bring a towel.", style: "local", tag: "Springs", price: "Free" },
      { time: "18:30", duration: "1.5 hr", title: "Old Manali cafés", description: "Wood-fire cafés along the Beas as the peaks go pink.", style: "popular", tag: "Evening", price: "Free" },
      { time: "20:00", duration: "1.5 hr", title: "Trout dinner", description: "Rainbow trout from the Beas, grilled at a riverside kitchen.", style: "local", tag: "Dinner", price: "₹500" },
    ],
    stays: [
      { kind: "homestay", name: "Orchard Homestay, Old Manali", description: "An apple-orchard cottage with home-cooked Himachali meals.", price: "₹2,500" },
      { kind: "view", name: "Snow Peak Lodge", description: "Floor-to-ceiling windows facing the Rohtang ridge.", price: "₹6,500" },
      { kind: "homestay", name: "Kathkuni House, Naggar", description: "A traditional stone-and-wood house above the valley.", price: "₹3,000" },
    ],
    foods: [
      { category: "Classic", name: "Siddu", description: "Steamed bread stuffed with walnut or poppy, eaten with ghee." },
      { category: "Feast", name: "Dham", description: "The Himachali festive meal — rice, dal, rajma and sweet rice." },
      { category: "Street", name: "Momos", description: "Steamed dumplings with fiery chutney, everywhere in town." },
      { category: "Drink", name: "Sea-buckthorn Tea", description: "Tart mountain berry tea, perfect after a cold walk." },
    ],
  },
  {
    id: "goa",
    city: "Goa",
    country: "India",
    days: "5 days",
    blurb:
      "Beach shacks, spice farms and Portuguese-era lanes — the slow side of the coast.",
    stops: [
      { time: "08:00", duration: "2 hr", title: "Anjuna Beach morning", description: "The classic stretch — swim before the sun gets serious.", style: "popular", tag: "Beach", price: "Free" },
      { time: "10:30", duration: "1 hr", title: "Fort Aguada", description: "The 17th-century Portuguese fort over the Arabian Sea.", style: "popular", tag: "Fort", price: "Free" },
      { time: "11:30", duration: "1 hr", title: "Divar Island ferry", description: "A free ferry to an island of rice fields and quiet chapels.", style: "hidden", tag: "Island", price: "Free" },
      { time: "13:00", duration: "1 hr", title: "Vinayak family lunch", description: "Fish thali at an Assagao home kitchen — locals queue for it.", style: "local", tag: "Food", price: "₹250" },
      { time: "15:00", duration: "1.5 hr", title: "Chorão bird sanctuary", description: "Mangrove boardwalks and kingfishers, ten minutes from the bustle.", style: "hidden", tag: "Nature", price: "₹50" },
      { time: "17:00", duration: "1 hr", title: "Fontainhas lanes", description: "Panjim's Latin Quarter — pastel houses, bakeries and old taverns.", style: "local", tag: "Heritage", price: "Free" },
      { time: "18:30", duration: "2 hr", title: "Baga sunset & shacks", description: "The famous strip at golden hour, music drifting off the sand.", style: "popular", tag: "Beach", price: "Free" },
      { time: "20:30", duration: "1.5 hr", title: "Mum's Kitchen", description: "Recipes gathered from Goan grandmothers, served in a garden.", style: "local", tag: "Dinner", price: "₹700" },
    ],
    stays: [
      { kind: "homestay", name: "Casa Serenity, Assagao", description: "A Portuguese-era villa with a courtyard and home-cooked breakfast.", price: "₹4,500" },
      { kind: "view", name: "Cliffside Resort, Vagator", description: "Rooms perched over the red cliffs with the sea below.", price: "₹9,000" },
      { kind: "homestay", name: "Auntie's House, Aldona", description: "A river village homestay with toddy-tapping views.", price: "₹3,200" },
    ],
    foods: [
      { category: "Curry", name: "Goan Fish Curry", description: "Coconut-tamarind curry with the day's catch." },
      { category: "Street", name: "Ros Omelette", description: "Omelette drowned in spicy gravy — a beach-shack icon." },
      { category: "Dessert", name: "Bebinca", description: "Layered coconut-egg pudding, baked slow." },
      { category: "Drink", name: "Feni", description: "Cashew-apple spirit, sipped with lime and soda." },
    ],
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    country: "India",
    days: "3 days",
    blurb: "Beaches, submarine museums and the green hump of Kailasagiri over the Bay of Bengal.",
    stops: [
      { time: "07:30", duration: "1.5 hr", title: "Rushikonda Beach", description: "The city's golden swimming beach, calmest in the morning.", style: "popular", tag: "Beach", price: "Free" },
      { time: "10:00", duration: "1 hr", title: "INS Kursura Submarine Museum", description: "Walk through a real decommissioned submarine on the beach road.", style: "popular", tag: "Museum", price: "₹70" },
      { time: "12:30", duration: "1 hr", title: "Bamboo chicken lunch", description: "Tribal-style chicken cooked inside bamboo at an Araku road stall.", style: "local", tag: "Food", price: "₹250" },
      { time: "15:00", duration: "2 hr", title: "Borra Caves", description: "Million-year-old limestone caverns in the Araku hills.", style: "hidden", tag: "Caves", price: "₹60" },
      { time: "18:00", duration: "1 hr", title: "Kailasagiri hilltop", description: "Ropeway up for sunset over the whole coastline.", style: "popular", tag: "Viewpoint", price: "₹150" },
    ],
    stays: [
      { kind: "homestay", name: "Fisherman's Home, Bheemili", description: "A Dutch-era village home steps from a quiet beach.", price: "₹2,200" },
      { kind: "view", name: "Bay View Hotel, RK Beach", description: "Sea-facing rooms above the promenade.", price: "₹5,500" },
    ],
    foods: [
      { category: "Classic", name: "Pulihora", description: "Tangy tamarind rice, a temple-town staple." },
      { category: "Street", name: "Punugulu", description: "Crisp fermented-rice fritters with peanut chutney." },
      { category: "Sweets", name: "Pootharekulu", description: "Paper-thin rice-starch sweet from the Godavari delta." },
    ],
  },
  {
    id: "tawang",
    city: "Tawang",
    state: "Arunachal Pradesh",
    country: "India",
    days: "4 days",
    blurb: "A Himalayan monastery town at 10,000 ft — prayer flags, frozen lakes and yak-herder trails.",
    stops: [
      { time: "07:00", duration: "2 hr", title: "Tawang Monastery", description: "India's largest monastery, golden-roofed above the valley.", style: "popular", tag: "Monastery", price: "Free" },
      { time: "10:30", duration: "1.5 hr", title: "Sela Pass", description: "The 13,700-ft pass with a frozen lake beside the road.", style: "popular", tag: "Mountain pass", price: "Free" },
      { time: "13:00", duration: "1 hr", title: "Monpa kitchen lunch", description: "Thukpa and butter tea in a family-run Monpa kitchen.", style: "local", tag: "Food", price: "₹200" },
      { time: "15:00", duration: "1.5 hr", title: "Madhuri Lake", description: "A jade-green lake ringed by dead pines, formed by an earthquake.", style: "hidden", tag: "Lake", price: "₹100" },
      { time: "17:30", duration: "1 hr", title: "Tawang War Memorial", description: "A moving tribute to the 1962 soldiers, with valley views.", style: "hidden", tag: "Memorial", price: "₹30" },
    ],
    stays: [
      { kind: "homestay", name: "Monpa Family Homestay", description: "A wooden Monpa home with butter-tea breakfasts.", price: "₹1,800" },
      { kind: "view", name: "Himalaya View Lodge", description: "Simple rooms facing the snow ridge and monastery.", price: "₹3,500" },
    ],
    foods: [
      { category: "Classic", name: "Thukpa", description: "Hand-pulled noodle soup, the mountain warmer." },
      { category: "Local", name: "Zan", description: "Millet porridge eaten the Monpa way, with vegetables." },
      { category: "Drink", name: "Butter Tea", description: "Salty churned tea — an acquired taste worth acquiring." },
    ],
  },
  {
    id: "guwahati",
    city: "Guwahati",
    state: "Assam",
    country: "India",
    days: "3 days",
    blurb: "The gateway to the Northeast — river islands, the Kamakhya hill and rhino country beyond.",
    stops: [
      { time: "07:00", duration: "1.5 hr", title: "Kamakhya Temple", description: "The great Shakti shrine on Nilachal hill, above the Brahmaputra.", style: "popular", tag: "Temple", price: "Free" },
      { time: "10:00", duration: "2 hr", title: "Umananda Island", description: "Ferry to the world's smallest inhabited river island.", style: "popular", tag: "River island", price: "₹50" },
      { time: "13:00", duration: "1 hr", title: "Assamese thali", description: "Masor tenga, dal and pitika at a no-frills local bhojanalaya.", style: "local", tag: "Food", price: "₹200" },
      { time: "15:30", duration: "1.5 hr", title: "Deepor Beel", description: "A Ramsar wetland full of storks and kingfishers, minutes from town.", style: "hidden", tag: "Wetland", price: "Free" },
      { time: "18:00", duration: "1.5 hr", title: "Brahmaputra sunset cruise", description: "The river goes copper as the city lights come on.", style: "popular", tag: "Cruise", price: "₹400" },
    ],
    stays: [
      { kind: "homestay", name: "Tea Garden Bungalow Stay", description: "A planter-family home on a working tea estate outside the city.", price: "₹3,200" },
      { kind: "view", name: "Riverbend Hotel", description: "Rooms facing the Brahmaputra and the Saraighat bridge.", price: "₹5,800" },
    ],
    foods: [
      { category: "Classic", name: "Masor Tenga", description: "Light, tangy fish curry — Assam's signature plate." },
      { category: "Street", name: "Pitha", description: "Rice cakes, sweet or savoury, sold warm in winter." },
      { category: "Drink", name: "Assam Tea", description: "A malty first-flush at a garden-side stall." },
    ],
  },
  {
    id: "bodhgaya",
    city: "Bodh Gaya",
    state: "Bihar",
    country: "India",
    days: "2 days",
    blurb: "Where the Buddha found enlightenment — temples of every nation under one great tree.",
    stops: [
      { time: "06:30", duration: "2 hr", title: "Mahabodhi Temple & Bodhi Tree", description: "Dawn prayers under the descendant of the original tree.", style: "popular", tag: "Temple", price: "Free" },
      { time: "10:00", duration: "1 hr", title: "Great Buddha Statue", description: "The 80-ft sandstone Buddha, circled by prayer wheels.", style: "popular", tag: "Landmark", price: "Free" },
      { time: "12:30", duration: "1 hr", title: "Tibetan refugee market lunch", description: "Momos and thukpa at the monastery-market stalls.", style: "local", tag: "Food", price: "₹150" },
      { time: "15:00", duration: "1.5 hr", title: "Dungeshwari Caves", description: "The quiet caves where the Buddha meditated before enlightenment.", style: "hidden", tag: "Caves", price: "Free" },
      { time: "17:30", duration: "1 hr", title: "Sujata village stupa", description: "The village that fed the starving Buddha — rural and serene.", style: "hidden", tag: "Village", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Village Homestay, Sujata", description: "A farming family's courtyard home near the stupa.", price: "₹1,500" },
      { kind: "view", name: "Temple View Guesthouse", description: "Rooftop rooms looking straight at the Mahabodhi spire.", price: "₹3,000" },
    ],
    foods: [
      { category: "Classic", name: "Litti Chokha", description: "Roasted gram-flour balls with smoky mashed brinjal." },
      { category: "Sweets", name: "Khaja", description: "Flaky, syrup-soaked layers — a Silao speciality." },
      { category: "Street", name: "Sattu Sharbat", description: "A cooling roasted-gram drink for hot afternoons." },
    ],
  },
  {
    id: "jagdalpur",
    city: "Jagdalpur",
    state: "Chhattisgarh",
    country: "India",
    days: "3 days",
    blurb: "Bastar's tribal heartland — India's widest waterfall, cave systems and haat bazaars.",
    stops: [
      { time: "07:30", duration: "2 hr", title: "Chitrakote Falls", description: "The 'Niagara of India' at its thundering monsoon best.", style: "popular", tag: "Waterfall", price: "Free" },
      { time: "11:00", duration: "1.5 hr", title: "Kutumsar Caves", description: "Underground limestone chambers reached by ladder.", style: "hidden", tag: "Caves", price: "₹50" },
      { time: "13:30", duration: "1 hr", title: "Tribal haat lunch", description: "Mahua snacks and red-ant chutney at a weekly tribal market.", style: "local", tag: "Food", price: "₹150" },
      { time: "15:30", duration: "1.5 hr", title: "Dhokra craft village", description: "Watch lost-wax brass casting in a Bastar artisan village.", style: "hidden", tag: "Craft", price: "Free" },
      { time: "18:00", duration: "1 hr", title: "Dalpat Sagar", description: "The old lake where locals gather for the evening breeze.", style: "local", tag: "Lake", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Bastar Village Homestay", description: "A mud-and-tile tribal home with homegrown meals.", price: "₹1,400" },
      { kind: "view", name: "Falls View Resort, Chitrakote", description: "Cottages within earshot of the waterfall.", price: "₹4,200" },
    ],
    foods: [
      { category: "Classic", name: "Aamat", description: "Bastar's mixed-vegetable bamboo-shoot curry." },
      { category: "Adventurous", name: "Chapda Chutney", description: "The famous red-ant chutney — fiery and citrusy." },
      { category: "Drink", name: "Mahua Drink", description: "The forest flower brew, central to tribal life." },
    ],
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    days: "3 days",
    blurb: "A World Heritage old city of pols and stepwells, plus the best vegetarian street food in India.",
    stops: [
      { time: "07:30", duration: "1.5 hr", title: "Sabarmati Ashram", description: "Gandhi's riverside home, quietest at opening time.", style: "popular", tag: "Heritage", price: "Free" },
      { time: "10:00", duration: "1 hr", title: "Adalaj Stepwell", description: "Five storeys of carved sandstone descending to the water.", style: "popular", tag: "Stepwell", price: "₹25" },
      { time: "12:30", duration: "1 hr", title: "Gujarati thali", description: "Unlimited thali at an old-city institution — come hungry.", style: "local", tag: "Food", price: "₹300" },
      { time: "15:00", duration: "1.5 hr", title: "Old city pols walk", description: "Carved wooden havelis in lanes only a local can navigate.", style: "hidden", tag: "Heritage walk", price: "₹200" },
      { time: "18:30", duration: "2 hr", title: "Manek Chowk night market", description: "A jewellery square that turns into a midnight food bazaar.", style: "local", tag: "Street food", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Pol House Homestay", description: "A 150-year-old carved haveli in the old city.", price: "₹2,600" },
      { kind: "view", name: "Riverfront Hotel", description: "Rooms over the Sabarmati riverfront promenade.", price: "₹6,000" },
    ],
    foods: [
      { category: "Classic", name: "Dhokla", description: "Steamed gram-flour cakes, featherlight and tangy." },
      { category: "Street", name: "Fafda-Jalebi", description: "The Sunday-morning ritual — crisp fafda with hot jalebi." },
      { category: "Drink", name: "Masala Chaas", description: "Spiced buttermilk, served with everything." },
    ],
  },
  {
    id: "kurukshetra",
    city: "Kurukshetra",
    state: "Haryana",
    country: "India",
    days: "2 days",
    blurb: "The land of the Mahabharata — sacred tanks, battlefields and the Gita's birthplace.",
    stops: [
      { time: "07:00", duration: "1.5 hr", title: "Brahma Sarovar", description: "The great sacred tank, mirror-still at sunrise.", style: "popular", tag: "Sacred tank", price: "Free" },
      { time: "10:00", duration: "1 hr", title: "Jyotisar", description: "The banyan-marked spot where Krishna spoke the Gita.", style: "popular", tag: "Pilgrimage", price: "Free" },
      { time: "12:30", duration: "1 hr", title: "Haryanvi dhaba lunch", description: "Bajra roti, kadhi and white butter on the highway.", style: "local", tag: "Food", price: "₹180" },
      { time: "15:00", duration: "1.5 hr", title: "Sheikh Chilli's Tomb", description: "A quiet Mughal-era complex most pilgrims skip.", style: "hidden", tag: "Heritage", price: "₹25" },
      { time: "17:30", duration: "1 hr", title: "Krishna Museum", description: "The Gita retold through sculpture and diorama.", style: "hidden", tag: "Museum", price: "₹30" },
    ],
    stays: [
      { kind: "homestay", name: "Farm Stay, Kurukshetra", description: "A working farm with fresh milk and open fields.", price: "₹1,600" },
      { kind: "view", name: "Sarovar View Hotel", description: "Rooms overlooking the lit-up sacred tank.", price: "₹3,800" },
    ],
    foods: [
      { category: "Classic", name: "Bajra Khichdi", description: "Pearl-millet khichdi with ghee and jaggery." },
      { category: "Sweets", name: "Ghee Rewri", description: "Sesame-jaggery brittle, a winter favourite." },
      { category: "Drink", name: "Lassi", description: "Thick, malai-topped, in a steel tumbler." },
    ],
  },
  {
    id: "netarhat",
    city: "Netarhat",
    state: "Jharkhand",
    country: "India",
    days: "2 days",
    blurb: "The 'Queen of Chotanagpur' — pine forests, sunrise points and waterfalls on a cool plateau.",
    stops: [
      { time: "05:30", duration: "1 hr", title: "Magnolia Sunrise Point", description: "The plateau's famous dawn, mist rolling over the valleys.", style: "popular", tag: "Sunrise", price: "Free" },
      { time: "09:00", duration: "1.5 hr", title: "Lodh Falls", description: "Jharkhand's highest waterfall, dropping 468 ft through forest.", style: "popular", tag: "Waterfall", price: "Free" },
      { time: "12:30", duration: "1 hr", title: "Tribal village lunch", description: "Handia and forest greens in an Oraon village home.", style: "local", tag: "Food", price: "₹150" },
      { time: "15:00", duration: "1.5 hr", title: "Netarhat pine avenue", description: "A straight road through tall pines — walk it slowly.", style: "hidden", tag: "Forest", price: "Free" },
      { time: "17:30", duration: "1 hr", title: "Koel View Point", description: "Sunset over the Koel river valley, far below.", style: "hidden", tag: "Sunset", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Oraon Village Homestay", description: "A tribal family home amid paddy and pine.", price: "₹1,300" },
      { kind: "view", name: "Plateau View Lodge", description: "Simple rooms on the escarpment edge.", price: "₹2,800" },
    ],
    foods: [
      { category: "Classic", name: "Dhuska", description: "Fried rice-lentil cakes with potato curry." },
      { category: "Local", name: "Rugra", description: "Monsoon forest mushrooms, a tribal delicacy." },
      { category: "Sweets", name: "Arsa Roti", description: "Jaggery-sweetened rice bread from village kitchens." },
    ],
  },
  {
    id: "hampi",
    city: "Hampi",
    state: "Karnataka",
    country: "India",
    days: "3 days",
    blurb: "A boulder-strewn ruined empire — temples, coracles and banana plantations on the Tungabhadra.",
    stops: [
      { time: "07:00", duration: "1.5 hr", title: "Virupaksha Temple", description: "The living temple at the heart of the ruins.", style: "popular", tag: "Temple", price: "₹50" },
      { time: "09:30", duration: "1.5 hr", title: "Vittala Temple & Stone Chariot", description: "The stone chariot and the musical pillars.", style: "popular", tag: "Ruins", price: "₹600" },
      { time: "12:30", duration: "1 hr", title: "Mango Tree lunch", description: "Thali under the trees by the river — a traveller institution.", style: "local", tag: "Food", price: "₹250" },
      { time: "15:00", duration: "1.5 hr", title: "Coracle ride", description: "Spin down the Tungabhadra in a round basket boat.", style: "hidden", tag: "River", price: "₹150" },
      { time: "17:30", duration: "1.5 hr", title: "Matanga Hill sunset", description: "The whole ruinscape turns amber from the summit.", style: "popular", tag: "Sunset", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Plantation Homestay, Anegundi", description: "A farmer's home among banana groves across the river.", price: "₹2,000" },
      { kind: "view", name: "Boulder View Resort", description: "Cottages set among the giant granite boulders.", price: "₹5,500" },
    ],
    foods: [
      { category: "Classic", name: "Bisi Bele Bath", description: "Hot lentil-rice with vegetables and ghee." },
      { category: "Breakfast", name: "Thatte Idli", description: "Plate-sized soft idlis with chutney." },
      { category: "Sweets", name: "Mysore Pak", description: "Ghee-rich gram-flour fudge from next door." },
    ],
  },
  {
    id: "khajuraho",
    city: "Khajuraho",
    state: "Madhya Pradesh",
    country: "India",
    days: "2 days",
    blurb: "The Chandela temples — a thousand years of sculpture in a small temple town.",
    stops: [
      { time: "07:00", duration: "2 hr", title: "Western Group temples", description: "Kandariya Mahadeva and the finest carvings, best in early light.", style: "popular", tag: "Temples", price: "₹600" },
      { time: "10:30", duration: "1 hr", title: "Lakshmana Temple", description: "The oldest and best-preserved of the group.", style: "popular", tag: "Temple", price: "Included" },
      { time: "12:30", duration: "1 hr", title: "Raja's Café lunch", description: "A courtyard café opposite the temples, running since the 70s.", style: "local", tag: "Food", price: "₹300" },
      { time: "15:00", duration: "1.5 hr", title: "Raneh Falls canyon", description: "A volcanic canyon of coloured rock, twenty minutes away.", style: "hidden", tag: "Canyon", price: "₹350" },
      { time: "18:00", duration: "1 hr", title: "Eastern Group at dusk", description: "Jain temples in the village, peaceful after the crowds leave.", style: "hidden", tag: "Temples", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Village Homestay, Khajuraho", description: "A family home in the temple village with farm dinners.", price: "₹1,700" },
      { kind: "view", name: "Temple View Hotel", description: "Rooms with the western group spires in frame.", price: "₹4,800" },
    ],
    foods: [
      { category: "Classic", name: "Bhutte ka Kees", description: "Grated corn cooked in milk — an MP speciality." },
      { category: "Street", name: "Poha-Jalebi", description: "The state's beloved breakfast pairing." },
      { category: "Sweets", name: "Mawa Bati", description: "Rich khoya dumplings in syrup." },
    ],
  },
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    days: "3 days",
    blurb: "The maximum city — colonial façades, local trains, street food and the sea at Marine Drive.",
    stops: [
      { time: "07:30", duration: "1 hr", title: "Gateway of India", description: "The harbour arch before the crowds and pigeons arrive.", style: "popular", tag: "Landmark", price: "Free" },
      { time: "09:30", duration: "2 hr", title: "Elephanta Caves ferry", description: "Rock-cut cave temples on an island in the harbour.", style: "popular", tag: "Caves", price: "₹300" },
      { time: "13:00", duration: "1 hr", title: "Vada pav & chaat crawl", description: "Ashok's vada pav, then bhel at Chowpatty.", style: "local", tag: "Street food", price: "₹150" },
      { time: "15:30", duration: "1.5 hr", title: "Khotachiwadi lanes", description: "A hidden Portuguese-style village in the middle of the city.", style: "hidden", tag: "Heritage", price: "Free" },
      { time: "18:00", duration: "1.5 hr", title: "Marine Drive at dusk", description: "The Queen's Necklace lights up along the curve of the bay.", style: "popular", tag: "Seafront", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Bandra Village Homestay", description: "A family flat in Bandra's old Catholic quarter.", price: "₹3,500" },
      { kind: "view", name: "Seaface Hotel, Marine Drive", description: "Art-deco rooms facing the Arabian Sea.", price: "₹9,000" },
    ],
    foods: [
      { category: "Street", name: "Vada Pav", description: "The city's burger — potato fritter in a bun with chutneys." },
      { category: "Classic", name: "Pav Bhaji", description: "Buttery mashed vegetables with toasted bread." },
      { category: "Sweets", name: "Modak", description: "Steamed coconut-jaggery dumplings, Ganesh's favourite." },
    ],
  },
  {
    id: "imphal",
    city: "Imphal",
    state: "Manipur",
    country: "India",
    days: "3 days",
    blurb: "A valley of floating islands, the world's only floating park, and the great Ima Keithel market.",
    stops: [
      { time: "07:00", duration: "1.5 hr", title: "Ima Keithel", description: "The world's largest all-women market — go early.", style: "popular", tag: "Market", price: "Free" },
      { time: "10:00", duration: "2 hr", title: "Loktak Lake", description: "Boat among the floating phumdi islands.", style: "popular", tag: "Lake", price: "₹500" },
      { time: "13:00", duration: "1 hr", title: "Meitei thali lunch", description: "Eromba, ooti and black-rice kheer at a local eatery.", style: "local", tag: "Food", price: "₹200" },
      { time: "15:00", duration: "1.5 hr", title: "Keibul Lamjao", description: "The world's only floating national park, home of the sangai deer.", style: "hidden", tag: "National park", price: "₹100" },
      { time: "17:30", duration: "1 hr", title: "Kangla Fort", description: "The ancient seat of Manipuri kings on the river.", style: "hidden", tag: "Fort", price: "₹20" },
    ],
    stays: [
      { kind: "homestay", name: "Meitei Family Homestay", description: "A traditional home with a courtyard and home cooking.", price: "₹1,600" },
      { kind: "view", name: "Loktak View Lodge", description: "Stilted rooms over the floating lake.", price: "₹3,800" },
    ],
    foods: [
      { category: "Classic", name: "Eromba", description: "Mashed vegetables with fermented fish and chilli." },
      { category: "Rice", name: "Chak-hao Kheer", description: "Purple black-rice pudding, fragrant and nutty." },
      { category: "Snack", name: "Singju", description: "A crunchy salad of cabbage, lotus stem and herbs." },
    ],
  },
  {
    id: "shillong",
    city: "Shillong",
    state: "Meghalaya",
    country: "India",
    days: "3 days",
    blurb: "The Scotland of the East — pine hills, living root bridges and the wettest place on Earth.",
    stops: [
      { time: "07:30", duration: "1 hr", title: "Shillong Peak", description: "The city's highest point, above the clouds most mornings.", style: "popular", tag: "Viewpoint", price: "₹50" },
      { time: "10:00", duration: "2 hr", title: "Double-decker root bridge trek", description: "A 3,500-step descent to a bridge grown from living roots.", style: "popular", tag: "Trek", price: "₹100" },
      { time: "13:30", duration: "1 hr", title: "Jadoh lunch", description: "Khasi red-rice and pork at a Shillong institution.", style: "local", tag: "Food", price: "₹200" },
      { time: "15:30", duration: "1.5 hr", title: "Mawphlang sacred forest", description: "A grove untouched for centuries — nothing may be taken out.", style: "hidden", tag: "Forest", price: "₹150" },
      { time: "18:00", duration: "1 hr", title: "Police Bazar evening", description: "The hill town's lively heart — street corn and momos.", style: "local", tag: "Market", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Khasi Cottage Homestay", description: "A wooden cottage with a Khasi family's cooking.", price: "₹2,200" },
      { kind: "view", name: "Pine Ridge Hotel", description: "Rooms over the valley, mist rolling past the windows.", price: "₹4,500" },
    ],
    foods: [
      { category: "Classic", name: "Jadoh", description: "Khasi red rice cooked with pork and spices." },
      { category: "Street", name: "Dohneiiong", description: "Pork in black sesame gravy." },
      { category: "Drink", name: "Kyat", description: "The local rice brew, served warm." },
    ],
  },
  {
    id: "aizawl",
    city: "Aizawl",
    state: "Mizoram",
    country: "India",
    days: "2 days",
    blurb: "A ridge-top capital of mist, church choirs and bamboo cuisine.",
    stops: [
      { time: "07:30", duration: "1 hr", title: "Durtlang hills", description: "The ridge above town for a sea-of-clouds morning.", style: "popular", tag: "Viewpoint", price: "Free" },
      { time: "10:00", duration: "1.5 hr", title: "Bara Bazar", description: "The steep main market — bamboo, chillies and handwoven puans.", style: "popular", tag: "Market", price: "Free" },
      { time: "13:00", duration: "1 hr", title: "Mizo lunch", description: "Bai and smoked pork at a family kitchen.", style: "local", tag: "Food", price: "₹180" },
      { time: "15:00", duration: "2 hr", title: "Reiek peak", description: "A quiet heritage village and viewpoint an hour away.", style: "hidden", tag: "Village", price: "₹50" },
      { time: "17:30", duration: "1 hr", title: "Solomon's Temple", description: "The white hilltop church glowing at dusk.", style: "hidden", tag: "Church", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Mizo Family Homestay", description: "A ridge-side home with bamboo-shoot dinners.", price: "₹1,500" },
      { kind: "view", name: "Cloud Ridge Hotel", description: "Rooms hanging over the valley mist.", price: "₹3,200" },
    ],
    foods: [
      { category: "Classic", name: "Bai", description: "A light stew of vegetables, bamboo and pork." },
      { category: "Local", name: "Vawksa Rep", description: "Smoked pork with chillies and greens." },
      { category: "Snack", name: "Koat Pitha", description: "Banana fritters, crisp outside, soft inside." },
    ],
  },
  {
    id: "kohima",
    city: "Kohima",
    state: "Nagaland",
    country: "India",
    days: "3 days",
    blurb: "Hill tribes, WWII history and the Hornbill spirit in the Naga hills.",
    stops: [
      { time: "07:30", duration: "1 hr", title: "Kohima War Cemetery", description: "The moving memorial to the 1944 battle, on the old tennis court.", style: "popular", tag: "Memorial", price: "Free" },
      { time: "10:00", duration: "2 hr", title: "Kisama Heritage Village", description: "Morungs of all Naga tribes, home of the Hornbill Festival.", style: "popular", tag: "Heritage", price: "₹100" },
      { time: "13:00", duration: "1 hr", title: "Naga kitchen lunch", description: "Smoked pork with bamboo shoot and axone — ask for medium heat.", style: "local", tag: "Food", price: "₹250" },
      { time: "15:00", duration: "2 hr", title: "Khonoma green village", description: "Asia's first green village, terrace-farmed for centuries.", style: "hidden", tag: "Village", price: "₹100" },
      { time: "18:00", duration: "1 hr", title: "Local market evening", description: "Fermented soya, king chillies and hill produce.", style: "local", tag: "Market", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Angami Homestay, Khonoma", description: "A village home among the terraced fields.", price: "₹1,800" },
      { kind: "view", name: "Japfu View Lodge", description: "Rooms facing the state's second-highest peak.", price: "₹3,500" },
    ],
    foods: [
      { category: "Classic", name: "Smoked Pork with Axone", description: "Fermented soya-bean pork — the Naga signature." },
      { category: "Heat", name: "Raja Mircha Chutney", description: "One of the world's hottest chillies, tamed just enough." },
      { category: "Rice", name: "Galho", description: "A comforting Naga khichdi of rice, greens and meat." },
    ],
  },
  {
    id: "puri",
    city: "Puri",
    state: "Odisha",
    country: "India",
    days: "2 days",
    blurb: "Jagannath's city — one of the four dhams, with a long golden beach.",
    stops: [
      { time: "06:00", duration: "1.5 hr", title: "Jagannath Temple", description: "Dawn darshan at one of Hinduism's holiest shrines.", style: "popular", tag: "Temple", price: "Free" },
      { time: "09:00", duration: "1 hr", title: "Mahaprasad at Ananda Bazaar", description: "The temple's sacred food, sold in clay pots.", style: "local", tag: "Food", price: "₹100" },
      { time: "11:00", duration: "1.5 hr", title: "Raghurajpur artist village", description: "Every house paints pattachitra — buy straight from the artists.", style: "hidden", tag: "Craft", price: "Free" },
      { time: "15:00", duration: "1.5 hr", title: "Chilika Lake", description: "Asia's largest lagoon — dolphins and migratory birds.", style: "popular", tag: "Lagoon", price: "₹600" },
      { time: "17:30", duration: "1.5 hr", title: "Puri Beach sunset", description: "Fishing boats and sand art on the golden mile.", style: "popular", tag: "Beach", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Artist's Home, Raghurajpur", description: "Stay with a pattachitra painter's family.", price: "₹1,500" },
      { kind: "view", name: "Sea View Hotel, Marine Drive", description: "Rooms facing the surf.", price: "₹4,200" },
    ],
    foods: [
      { category: "Sacred", name: "Mahaprasad", description: "The 56-dish temple offering — try the khichdi." },
      { category: "Sweets", name: "Chhena Poda", description: "Odisha's baked cheese dessert, caramelised on top." },
      { category: "Street", name: "Gupchup", description: "Odisha's pani puri, spicier and tangier." },
    ],
  },
  {
    id: "amritsar",
    city: "Amritsar",
    state: "Punjab",
    country: "India",
    days: "2 days",
    blurb: "The Golden Temple, the world's largest free kitchen, and food worth the journey alone.",
    stops: [
      { time: "05:30", duration: "2 hr", title: "Golden Temple at dawn", description: "The Harmandir Sahib glowing over the sarovar — go before sunrise.", style: "popular", tag: "Temple", price: "Free" },
      { time: "08:30", duration: "1 hr", title: "Langar meal", description: "Eat with thousands in the world's largest community kitchen.", style: "local", tag: "Food", price: "Free" },
      { time: "11:00", duration: "1 hr", title: "Jallianwala Bagh", description: "The memorial garden, sobering and essential.", style: "popular", tag: "Memorial", price: "Free" },
      { time: "13:00", duration: "1 hr", title: "Kulcha at a dhaba", description: "Amritsari kulcha with chole and a slab of butter.", style: "local", tag: "Food", price: "₹150" },
      { time: "16:00", duration: "2 hr", title: "Wagah Border ceremony", description: "The flag-lowering spectacle at the India-Pakistan border.", style: "popular", tag: "Ceremony", price: "Free" },
      { time: "19:30", duration: "1 hr", title: "Gobindgarh Fort", description: "The restored fort with evening light shows and bazaar.", style: "hidden", tag: "Fort", price: "₹250" },
    ],
    stays: [
      { kind: "homestay", name: "Old City Homestay", description: "A Punjabi family home in the walled city lanes.", price: "₹2,000" },
      { kind: "view", name: "Temple View Hotel", description: "Rooftop rooms a short walk from the Golden Temple.", price: "₹5,000" },
    ],
    foods: [
      { category: "Classic", name: "Amritsari Kulcha", description: "Crisp stuffed bread with chole and butter." },
      { category: "Street", name: "Amritsari Fish", description: "Batter-fried river fish with carom seeds." },
      { category: "Drink", name: "Lassi", description: "The original — thick, sweet, with a malai top." },
    ],
  },
  {
    id: "gangtok",
    city: "Gangtok",
    state: "Sikkim",
    country: "India",
    days: "3 days",
    blurb: "Kanchenjunga views, momo stalls and monasteries on a clean mountain ridge.",
    stops: [
      { time: "07:00", duration: "1.5 hr", title: "Rumtek Monastery", description: "The great Kagyu monastery across the valley.", style: "popular", tag: "Monastery", price: "₹50" },
      { time: "10:30", duration: "2 hr", title: "Tsomgo Lake", description: "A glacial lake at 12,300 ft, yak rides on the shore.", style: "popular", tag: "Lake", price: "₹800" },
      { time: "13:30", duration: "1 hr", title: "Momo lunch, MG Marg", description: "Steamed momos on the pedestrianised main street.", style: "local", tag: "Food", price: "₹150" },
      { time: "15:30", duration: "1.5 hr", title: "Tashi View Point", description: "The classic Kanchenjunga panorama, clearest before noon.", style: "hidden", tag: "Viewpoint", price: "Free" },
      { time: "17:30", duration: "1.5 hr", title: "MG Marg evening", description: "Litter-free, traffic-free — Sikkim's pride at strolling hour.", style: "local", tag: "Promenade", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Bhutia Family Homestay", description: "A traditional home with mountain-view rooms.", price: "₹2,000" },
      { kind: "view", name: "Kanchenjunga View Hotel", description: "Wake to the world's third-highest peak outside your window.", price: "₹5,500" },
    ],
    foods: [
      { category: "Classic", name: "Momos", description: "Steamed dumplings with fiery tomato chutney." },
      { category: "Noodles", name: "Thukpa", description: "Hot noodle soup for cold evenings." },
      { category: "Local", name: "Gundruk Soup", description: "Fermented leafy-greens soup, sour and warming." },
    ],
  },
  {
    id: "madurai",
    city: "Madurai",
    state: "Tamil Nadu",
    country: "India",
    days: "2 days",
    blurb: "One of the world's oldest living cities, built around the Meenakshi temple's rainbow gopurams.",
    stops: [
      { time: "06:00", duration: "2 hr", title: "Meenakshi Temple", description: "The 14-towered temple city, best at the morning ritual.", style: "popular", tag: "Temple", price: "₹50" },
      { time: "09:30", duration: "1 hr", title: "Thirumalai Nayakkar Palace", description: "The 17th-century palace with giant stucco arches.", style: "popular", tag: "Palace", price: "₹50" },
      { time: "12:00", duration: "1 hr", title: "Jigarthanda & lunch", description: "The famous cooling drink, then a banana-leaf meals.", style: "local", tag: "Food", price: "₹200" },
      { time: "15:00", duration: "1.5 hr", title: "Puthu Mandapam tailors' market", description: "A 17th-century pillared hall turned fabric bazaar.", style: "hidden", tag: "Market", price: "Free" },
      { time: "18:00", duration: "1.5 hr", title: "Night temple ceremony", description: "Shiva is carried to Meenakshi's shrine each night — unmissable.", style: "popular", tag: "Ceremony", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Agraharam Homestay", description: "A heritage row-house near the temple.", price: "₹2,200" },
      { kind: "view", name: "Gopuram View Hotel", description: "Rooftop rooms facing the lit temple towers.", price: "₹4,500" },
    ],
    foods: [
      { category: "Drink", name: "Jigarthanda", description: "Madurai's almond-gum milk cooler, invented here." },
      { category: "Classic", name: "Kari Dosa", description: "A thick dosa layered with spiced mutton." },
      { category: "Breakfast", name: "Idiyappam", description: "String hoppers with coconut milk and curry." },
    ],
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    days: "3 days",
    blurb: "The city of pearls and biryani — Charminar's bazaars, Golconda's walls, and Irani chai.",
    stops: [
      { time: "07:30", duration: "1 hr", title: "Charminar", description: "The 1591 icon at the heart of the old city.", style: "popular", tag: "Landmark", price: "₹25" },
      { time: "09:30", duration: "2 hr", title: "Golconda Fort", description: "Climb the citadel where a handclap carries to the top.", style: "popular", tag: "Fort", price: "₹25" },
      { time: "12:30", duration: "1 hr", title: "Biryani lunch", description: "Dum biryani at an old-city institution — arrive before the rush.", style: "local", tag: "Food", price: "₹300" },
      { time: "15:00", duration: "1.5 hr", title: "Chowmahalla Palace", description: "The Nizams' restored palace, quieter than the fort.", style: "hidden", tag: "Palace", price: "₹100" },
      { time: "17:30", duration: "1.5 hr", title: "Laad Bazaar", description: "Lacquer bangles and ittar in the lanes off Charminar.", style: "local", tag: "Market", price: "Free" },
      { time: "19:30", duration: "1 hr", title: "Irani chai & Osmania biscuits", description: "End the day at a fading Irani café.", style: "local", tag: "Café", price: "₹80" },
    ],
    stays: [
      { kind: "homestay", name: "Old City Homestay", description: "A Hyderabadi family home in the old quarter.", price: "₹2,500" },
      { kind: "view", name: "Hussain Sagar View Hotel", description: "Rooms over the lake and Buddha statue.", price: "₹6,500" },
    ],
    foods: [
      { category: "Classic", name: "Hyderabadi Biryani", description: "The dum-cooked original — accept no imitations." },
      { category: "Street", name: "Haleem", description: "Slow-pounded meat-wheat porridge, a Ramzan legend." },
      { category: "Sweets", name: "Double ka Meetha", description: "Bread pudding with saffron and rabri." },
    ],
  },
  {
    id: "agartala",
    city: "Agartala",
    state: "Tripura",
    country: "India",
    days: "2 days",
    blurb: "Palace lakes, bamboo craft and a borderland culture between India and Bangladesh.",
    stops: [
      { time: "08:00", duration: "1.5 hr", title: "Ujjayanta Palace", description: "The white Mughal-style palace on its lake.", style: "popular", tag: "Palace", price: "₹20" },
      { time: "11:00", duration: "1.5 hr", title: "Neermahal", description: "The 'water palace' in the middle of Rudrasagar lake.", style: "popular", tag: "Lake palace", price: "₹100" },
      { time: "13:30", duration: "1 hr", title: "Tripuri lunch", description: "Mui borok — the state's traditional thali with berma's punch.", style: "local", tag: "Food", price: "₹200" },
      { time: "15:30", duration: "1.5 hr", title: "Sepahijala sanctuary", description: "Lakeside forest with spectacled langurs and a clouded-leopard enclosure.", style: "hidden", tag: "Wildlife", price: "₹50" },
      { time: "18:00", duration: "1 hr", title: "Battala market", description: "The evening bazaar for bamboo craft and hill produce.", style: "local", tag: "Market", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Tripuri Village Homestay", description: "A bamboo-and-mud home with garden meals.", price: "₹1,400" },
      { kind: "view", name: "Lake View Hotel, Agartala", description: "Rooms facing the palace lakes.", price: "₹3,200" },
    ],
    foods: [
      { category: "Classic", name: "Mui Borok", description: "The traditional plate with berma (fermented fish)." },
      { category: "Local", name: "Chakhwi", description: "A bamboo-shoot and pork stew." },
      { category: "Drink", name: "Chuak", description: "Rice beer served at festivals." },
    ],
  },
  {
    id: "rishikesh",
    city: "Rishikesh",
    state: "Uttarakhand",
    country: "India",
    days: "3 days",
    blurb: "Yoga capital on the Ganga — ashrams, suspension bridges and white-water rapids.",
    stops: [
      { time: "06:00", duration: "1 hr", title: "Sunrise yoga by the Ganga", description: "A drop-in class on the river beach.", style: "popular", tag: "Yoga", price: "₹300" },
      { time: "09:00", duration: "2 hr", title: "Rafting the Ganga", description: "Grade II-III rapids from Shivpuri down to NIM beach.", style: "popular", tag: "Adventure", price: "₹1,000" },
      { time: "13:00", duration: "1 hr", title: "Chotiwala lunch", description: "Garhwali thali at the two-turbaned icon of Ram Jhula.", style: "local", tag: "Food", price: "₹250" },
      { time: "15:00", duration: "1.5 hr", title: "Beatles Ashram", description: "The graffiti-covered ruins of the Maharishi's ashram.", style: "hidden", tag: "Heritage", price: "₹150" },
      { time: "17:30", duration: "1.5 hr", title: "Ganga Aarti at Triveni Ghat", description: "Lamps, bells and chant as the river darkens.", style: "popular", tag: "Ceremony", price: "Free" },
    ],
    stays: [
      { kind: "homestay", name: "Tapovan Family Homestay", description: "A quiet home above the bazaar with home cooking.", price: "₹1,800" },
      { kind: "view", name: "Ganga View Ashram Hotel", description: "Rooms with the river and Rajaji hills in frame.", price: "₹4,500" },
    ],
    foods: [
      { category: "Classic", name: "Garhwali Thali", description: "Mandua roti, gahat dal and bhang chutney." },
      { category: "Sweets", name: "Bal Mithai", description: "The Kumaoni chocolate-fudge sweet." },
      { category: "Café", name: "German Bakery treats", description: "Traveller cafés along the Laxman Jhula road." },
    ],
  },
  {
    id: "kolkata",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    days: "3 days",
    blurb: "The city of joy — colonial grandeur, trams, adda and the sweetest sweets in India.",
    stops: [
      { time: "07:00", duration: "1.5 hr", title: "Victoria Memorial", description: "The white marble icon in the Maidan, best in morning light.", style: "popular", tag: "Landmark", price: "₹50" },
      { time: "10:00", duration: "1.5 hr", title: "Kumartuli", description: "The potters' quarter where Durga idols are sculpted by hand.", style: "hidden", tag: "Craft", price: "Free" },
      { time: "12:30", duration: "1 hr", title: "Kathi roll & mishti run", description: "Nizam's roll, then rosogolla and mishti doi.", style: "local", tag: "Food", price: "₹200" },
      { time: "15:00", duration: "1 hr", title: "College Street & Coffee House", description: "The world's largest second-hand book market and the adda café.", style: "local", tag: "Culture", price: "Free" },
      { time: "17:30", duration: "1.5 hr", title: "Howrah Bridge & flower market", description: "The Mallick Ghat flower market under the great bridge.", style: "popular", tag: "Market", price: "Free" },
      { time: "19:30", duration: "1.5 hr", title: "Park Street dinner", description: "Chelo kebabs and old-world restaurants under the lights.", style: "popular", tag: "Dinner", price: "₹600" },
    ],
    stays: [
      { kind: "homestay", name: "Ballygunge Family Homestay", description: "A Bengali family's heritage flat with fish curry dinners.", price: "₹2,500" },
      { kind: "view", name: "Hooghly View Hotel", description: "Rooms facing the river and Howrah Bridge.", price: "₹6,000" },
    ],
    foods: [
      { category: "Sweets", name: "Rosogolla", description: "The syrupy icon — warm, fresh, from a mishti shop." },
      { category: "Classic", name: "Kosha Mangsho", description: "Slow-cooked mutton curry with luchi." },
      { category: "Street", name: "Phuchka", description: "Kolkata's pani puri — tamarind-sharp, eaten by the dozen." },
    ],
  },
];

export const styleLabels: Record<TravelStyle, string> = {
  popular: "Most visited",
  hidden: "Hidden gems",
  local: "Local suggestion",
};
