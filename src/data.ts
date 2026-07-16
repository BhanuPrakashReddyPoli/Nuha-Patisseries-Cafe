import {
  MenuItem,
  PastryItem,
  TestimonialItem,
  GalleryImage,
  InstagramPost,
} from "./types";

export const COFFEE_MENU: MenuItem[] = [
  // Espresso category
  {
    id: "e1",
    name: "Cappuccino",
    description:
      "A rich espresso topped with velvety steamed milk and a light foam finish.",
    price: 229.0,
    category: "espresso",
    isSignature: true,
  },
  {
    id: "e2",
    name: "Espresso",
    description: "The pure, cocentrated shot of bold, aromatic coffee.",
    price: 195,
    category: "espresso",
  },
  {
    id: "e3",
    name: "Classic Latte",
    description:
      "A gentle balance of espresso and steamed milk for a creamy, mellow cup.",
    price: 249.0,
    category: "espresso",
  },

  // Frappucino Blends category
  {
    id: "b1",
    name: "Tiramisu",
    description:
      "A dessert inspired blend with subtle chocolate and espresso notes.",
    price: 315.0,
    category: "Frappucino Blends",
    isSignature: true,
  },
  {
    id: "b2",
    name: "Java Chip",
    description:
      "A rich coffee blend with chocolate chips for texture and depth.",
    price: 315.0,
    category: "Frappucino Blends",
  },
  {
    id: "b3",
    name: "Mocha",
    description: "Chocolate and coffee blend into a cool cafe treat.",
    price: 315.0,
    category: "Frappucino Blends",
  },

  // Specialty category
  {
    id: "s1",
    name: "Wild Berry",
    description: "A mixed-berry infusion with soft sweetness and pearls.",
    price: 275,
    category: "Toast and Sandwich",
    isSignature: true,
  },
  {
    id: "s2",
    name: "Strawberry & Cream",
    description: "fresh strawberry flavour blended with smooth creamines.",
    price: 315,
    category: "Toast and Sandwich",
  },
  {
    id: "s3",
    name: "Peach",
    description: "Crisp black tea infused with juicy peach notes.",
    price: 235,
    category: "Toast and Sandwich",
  },

  // Cold Brew & Shaken
  {
    id: "c1",
    name: "Lemon Basil",
    description:
      "Zesty lemon paired with aromatic basil for a refreshing herbal twist.",
    price: 235,
    category: "Toast and Sandwich",
    isSignature: true,
  },
  {
    id: "c2",
    name: "Watermelon, apple & feta",
    description:
      "A refreshing blend of sweet fruits, tangy feta, and mint with citrus dressing.",
    price: 329,
    category: "Toast and Sandwich",
  },
  {
    id: "c3",
    name: "Classic Pancakes",
    description: "Crisp, airy with a lightly sweet finish.",
    price: 275,
    category: "Toast and Sandwich",
  },
];

export const PASTRY_MENU: PastryItem[] = [
  {
    id: "p1",
    name: "Paratha smash burger",
    description: "Fluffy brioche soaked and caramelized to golden perfection.",
    price: 299,
    image: "assets/item3.jpg",
    tag: "Bestseller",
    isPremium: true,
  },
  {
    id: "p2",
    name: "Tiramisu French roast ",
    description:
      "Coffee-kissed french toast with mascarpone cream and cocoa dusting.",
    price: 315,
    image: "assets/tiramisu.jpg",
    tag: "Signature",
    isPremium: true,
  },
  {
    id: "p3",
    name: "Nihari kheema khachapuri",
    description: "Spiced minced meat served hot with buttered pav.",
    price: 315,
    image: "/assets/item2.jpg",
    tag: "Decadent",
  },
  {
    id: "p4",
    name: "Nihari bunny chow",
    description:
      "Simple, clean grilled chicken with cafe-style dressing and fresh greens.",
    price: 319,
    image: "/assets/SimpleChicken.jpg",
    tag: "Seasonal",
  },
];

export const GALLERY_PHOTOS: GalleryImage[] = [
  {
    id: "g1",
    url: "/assets/item6_Coffee.jpg",
    category: "brewing",
    caption:
      "Surgical extraction of our signature espresso blend, pulling slow and rich.",
  },
  {
    id: "g2",
    url: "/assets/FrontDesk.png",
    category: "ambience",
    caption:
      "Our main seating room featuring hand-crafted walnut furniture and custom brass lighting.",
  },
  {
    id: "g3",
    url: "/assets/item6.jpg",
    category: "desserts",
    caption:
      "Perfect afternoon pairings of house-baked pastries with freshly roasted coffee.",
  },
  {
    id: "g4",
    url: "/assets/item4.jpg",
    category: "brewing",
    caption:
      "Precision water pour-over during the bloom stage of the Geisha bean.",
  },
  {
    id: "g5",
    url: "/assets/WorkSpace.jpg",
    category: "ambience",
    caption:
      "Cozy velvet custom booths, providing ultimate privacy for deep conversations.",
  },
  {
    id: "g6",
    url: "/assets/tiramisu.jpg",
    category: "moments",
    caption:
      "Warm smiles and exquisite crafts shared, making every morning a true celebration.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Arbaz Sharief",
    role: "Young & dynamic enterpreneur and director of Habibi Fried Chicken, Bengaluru.",
    review:
      "Nuha patisserie and café is a sanctuary. The espresso extraction parameters are perfect, but it's the warm lighting & rich walnut architecture that brings me here every morning to draft my layouts.",
    rating: 5,
    image: "/assets/ArbazSharief.jpg",
  },
  {
    id: "t2",
    name: "Navaj Sharief",
    role: "Indian restaurateur and entrepreneur.",
    review:
      "A hidden gem in the city. Great coffee, great service, and a very comfortable atmosphere.",
    rating: 5,
    image: "/assets/NavajSharif.jpg",
  },
  {
    id: "t3",
    name: "Faraz Sharief",
    role: "Young & dynamic enterpreneur and director of Mashriq Mandi, Bengaluru.",
    review:
      "The almond croissant here sets a It is perfectly layered, butter-flaked, and pairs flawlessly with their Whiskey barrel aged slow-drip cold brew. Unforgettable afternoon tea.",
    rating: 5,
    image: "/assets/Faraz_Sharief.jpg",
  },
];

export const INSTAGRAM_FEED: InstagramPost[] = [
  {
    id: "inst1",
    url: "/assets/CafeEntrance.jpg",
    likes: 420,
    comments: 28,
    caption:
      "Aesthetic interiors, artisan desserts, and authentic coffee experiences await beyond these doors.",
  },
  {
    id: "inst2",
    url: "/assets/WorkSpace.jpg",
    likes: 512,
    comments: 32,
    caption:
      "An inviting setting for client meetings, catch-ups, and moments worth sharing.",
  },
  {
    id: "inst3",
    url: "/assets/Tables.jpg",
    likes: 680,
    comments: 47,
    caption:
      "A corner for readers, thinkers, and lovers of slow mornings. Find your sanctuary today. 🕯️🛋️ #luxurycafe #designinterior",
  },
  {
    id: "inst4",
    url: "/assets/FrontView.jpg",
    likes: 395,
    comments: 19,
    caption:
      "Thoughtfully designed interiors, exceptional flavors, and an atmosphere made for relaxation and connection.",
  },
];
