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
];

export const styleLabels: Record<TravelStyle, string> = {
  popular: "Most visited",
  hidden: "Hidden gems",
  local: "Local suggestion",
};
