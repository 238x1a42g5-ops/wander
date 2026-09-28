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
  country: string;
  days: string;
  blurb: string;
  stops: Stop[];
  stays: Stay[];
  foods: Food[];
}

export const destinations: Destination[] = [
  {
    id: "lisbon",
    city: "Lisbon",
    country: "Portugal",
    days: "3 days",
    blurb:
      "Tell us how you like to travel and we'll weave sights, stays and plates into one calm, walkable route.",
    stops: [
      { time: "09:00", duration: "45 min", title: "Belém Tower", description: "Manueline fortress on the river — arrive early to beat the queues.", style: "popular", tag: "Landmark", price: "€14" },
      { time: "10:30", duration: "1 hr", title: "Jerónimos Monastery", description: "The city's grandest cloister, a short stroll from the tower.", style: "popular", tag: "Landmark", price: "€12" },
      { time: "11:30", duration: "30 min", title: "Miradouro da Graça", description: "A quiet hilltop terrace locals keep to themselves — best light by noon.", style: "hidden", tag: "Viewpoint", price: "Free" },
      { time: "12:30", duration: "1 hr", title: "Rua dos Bacalhoeiros cellars", description: "A tucked-away wine cellar beneath the old town, by appointment.", style: "hidden", tag: "Cellar", price: "€10" },
      { time: "13:00", duration: "1 hr", title: "Café do Carmo", description: "A neighbourhood café where the owner picks your pastries for you.", style: "local", tag: "Food", price: "€8" },
      { time: "14:30", duration: "45 min", title: "Feira da Ladra back rows", description: "Skip the front stalls — the real finds are in the flea market's back lanes.", style: "local", tag: "Market", price: "Free" },
      { time: "16:00", duration: "2 hr", title: "Alfama Wander", description: "Winding lanes, fado corners and a sunset over the river.", style: "popular", tag: "Neighbourhood", price: "Free" },
      { time: "19:00", duration: "1.5 hr", title: "Tasca do Zé", description: "A family-run tavern where dinner is whatever came in that morning.", style: "local", tag: "Dinner", price: "€18" },
    ],
    stays: [
      { kind: "homestay", name: "Casa do Pátio", description: "Courtyard house in Alfama, 5 min from the tram.", price: "€95" },
      { kind: "view", name: "Hotel Miradouro", description: "Rooftop suites with a full river panorama.", price: "€210" },
      { kind: "homestay", name: "Quarto do Rio", description: "Quiet guesthouse steps from the waterfront.", price: "€120" },
    ],
    foods: [
      { category: "Pastry", name: "Pastéis de Nata", description: "Custard tarts, best warm with cinnamon." },
      { category: "Seafood", name: "Bacalhau à Brás", description: "Flaked cod with egg and potatoes." },
      { category: "Street", name: "Bifana", description: "Marinated pork sandwich — the local late-night staple." },
      { category: "Dessert", name: "Arroz Doce", description: "Creamy rice pudding with a lemon zest top." },
    ],
  },
  {
    id: "kyoto",
    city: "Kyoto",
    country: "Japan",
    days: "4 days",
    blurb:
      "Temples at dawn, tea at noon, lantern-lit lanes at dusk — planned around your pace.",
    stops: [
      { time: "07:30", duration: "1.5 hr", title: "Fushimi Inari at dawn", description: "Ten thousand vermilion gates before the crowds arrive.", style: "popular", tag: "Shrine", price: "Free" },
      { time: "10:00", duration: "1 hr", title: "Kiyomizu-dera", description: "The wooden terrace over the valley — Kyoto's postcard view.", style: "popular", tag: "Temple", price: "¥400" },
      { time: "11:30", duration: "45 min", title: "Ōtagi Nenbutsu-ji", description: "1,200 moss-covered stone statues, almost no visitors.", style: "hidden", tag: "Temple", price: "¥300" },
      { time: "13:00", duration: "1 hr", title: "Obanzai lunch counter", description: "Home-style Kyoto cooking at a six-seat counter in Demachiyanagi.", style: "local", tag: "Food", price: "¥1,200" },
      { time: "15:00", duration: "1 hr", title: "Kurama mountain trail", description: "A cedar-forest ridge walk to a mountain temple, far from the bus routes.", style: "hidden", tag: "Hike", price: "Free" },
      { time: "16:30", duration: "45 min", title: "Nishiki's back stalls", description: "Skip the front — pickles, skewers and fresh mochi where chefs shop.", style: "local", tag: "Market", price: "¥800" },
      { time: "18:30", duration: "2 hr", title: "Gion at dusk", description: "Lantern light, wooden machiya and the occasional geiko slipping by.", style: "popular", tag: "District", price: "Free" },
      { time: "20:30", duration: "1 hr", title: "Pontocho izakaya", description: "A riverside alley bar the taxi drivers eat at after shift.", style: "local", tag: "Dinner", price: "¥2,500" },
    ],
    stays: [
      { kind: "homestay", name: "Machiya Stay, Higashiyama", description: "A restored townhouse with a private garden and a host who knows every back street.", price: "¥14,000" },
      { kind: "view", name: "Hillside View Hotel", description: "A calm boutique with a rooftop terrace framing the whole valley.", price: "¥28,000" },
      { kind: "homestay", name: "Bamboo Ryokan, Arashiyama", description: "A quiet ryokan with a private hot spring and a local breakfast.", price: "¥22,000" },
    ],
    foods: [
      { category: "Noodles", name: "Kitsune Udon", description: "Thick wheat noodles with sweet fried tofu." },
      { category: "Sweets", name: "Yatsuhashi", description: "Cinnamon rice cakes, Kyoto's classic souvenir sweet." },
      { category: "Street", name: "Tako Tamago", description: "Candied baby octopus on a stick at Nishiki Market." },
      { category: "Tea", name: "Matcha & Wagashi", description: "Whisked green tea with a seasonal sweet in Gion." },
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
      { time: "13:00", duration: "1 hr", title: "Vinayak family lunch", description: "Fish thali at a Assagao home kitchen — locals queue for it.", style: "local", tag: "Food", price: "₹250" },
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
    id: "paris",
    city: "Paris",
    country: "France",
    days: "3 days",
    blurb:
      "Beyond the postcard: boulangeries, covered passages and the city's quieter banks.",
    stops: [
      { time: "09:00", duration: "1.5 hr", title: "Louvre, early entry", description: "The Denon wing before the tour groups land.", style: "popular", tag: "Museum", price: "€22" },
      { time: "11:00", duration: "45 min", title: "Eiffel from Trocadéro", description: "The classic view — go before noon for the light.", style: "popular", tag: "Landmark", price: "Free" },
      { time: "12:00", duration: "1 hr", title: "Passage des Panoramas", description: "A 1799 covered arcade of stamp shops and tiny bistros.", style: "hidden", tag: "Arcade", price: "Free" },
      { time: "13:30", duration: "1 hr", title: "Bouillon Pigalle", description: "Œuf mayo and boeuf bourguignon at canteen prices — queue with the locals.", style: "local", tag: "Food", price: "€15" },
      { time: "15:30", duration: "1 hr", title: "Parc des Buttes-Chaumont", description: "Cliffs, a temple and a waterfall — Parisians' secret picnic hill.", style: "hidden", tag: "Park", price: "Free" },
      { time: "17:00", duration: "45 min", title: "Rue Mouffetard market", description: "Cheese, rotisserie and fruit stalls on a village street in the 5th.", style: "local", tag: "Market", price: "Free" },
      { time: "18:30", duration: "1.5 hr", title: "Seine at golden hour", description: "From Pont Neuf to Île Saint-Louis as the city turns gold.", style: "popular", tag: "Walk", price: "Free" },
      { time: "20:30", duration: "1.5 hr", title: "Le Comptoir du Relais", description: "Saint-Germain bistro where the chalkboard changes daily.", style: "local", tag: "Dinner", price: "€35" },
    ],
    stays: [
      { kind: "homestay", name: "Chambre chez Claire, Le Marais", description: "A bright room in a 17th-century hôtel particulier.", price: "€110" },
      { kind: "view", name: "Hôtel des Toits", description: "Top-floor rooms with zinc rooftops and the tower on the horizon.", price: "€240" },
      { kind: "homestay", name: "Atelier Stay, Montmartre", description: "A painter's studio flat under the Sacré-Cœur steps.", price: "€135" },
    ],
    foods: [
      { category: "Bakery", name: "Croissant au Beurre", description: "Still warm, from a neighbourhood boulangerie." },
      { category: "Classic", name: "Steak Frites", description: "The bistro standard, sauce au poivre." },
      { category: "Street", name: "Crêpe au Sucre", description: "From a Latin Quarter stand, folded in paper." },
      { category: "Dessert", name: "Tarte Tatin", description: "Caramelised apple tart, served warm with crème." },
    ],
  },
];

export const styleLabels: Record<TravelStyle, string> = {
  popular: "Most visited",
  hidden: "Hidden gems",
  local: "Local suggestion",
};
