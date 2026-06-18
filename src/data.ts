import { MenuItem, PastryItem, TestimonialItem, GalleryImage, InstagramPost } from "./types";

export const COFFEE_MENU: MenuItem[] = [
  // Espresso category
  {
    id: "e1",
    name: "Cappuccino",
    description: "A rich espresso topped with velvety steamed milk and a light foam finish.",
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
    description: "A gentle balance of espresso and steamed milk for a creamy, mellow cup.",
    price: 249.0,
    category: "espresso",
  },
  
  // Frappucino Blends category
  {
    id: "b1",
    name: "Tiramisu",
    description: "A dessert inspired blend with subtle chocolate and espresso notes.",
    price: 315.0,
    category: "Frappucino Blends",
    isSignature: true,
  },
  {
    id: "b2",
    name: "Java Chip",
    description: "A rich coffee blend with chocolate chips for texture and depth.",
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
    description: "Zesty lemon paired with aromatic basil for a refreshing herbal twist.",
    price: 235,
    category: "Toast and Sandwich",
    isSignature: true,
  },
  {
    id: "c2",
    name: "Watermelon, apple & feta",
    description: "A refreshing blend of sweet fruits, tangy feta, and mint with citrus dressing.",
    price: 329,
    category: "Toast and Sandwich",
  },
  {
    id: "c3",
    name: "Classic Pancakes",
    description: "Crisp, airy with a lightly sweet finish.",
    price: 275,
    category: "Toast and Sandwich",
  }
];

export const PASTRY_MENU: PastryItem[] = [
  {
    id: "p1",
    name: "Brioche french Toast",
    description: "Fluffy brioche soaked and caramelized to golden perfection.",
    price: 299,
    image: "assets/item3.jfif",
    tag: "Bestseller",
    isPremium: true
  },
  {
    id: "p2",
    name: "Tiramisu French Toast",
    description: "Coffee-kissed french toast with mascarpone cream and cocoa dusting.",
    price: 315,
    image: "assets/tiramisu.jfif",
    tag: "Signature",
    isPremium: true
  },
  {
    id: "p3",
    name: "Kheema with pav",
    description: "Spiced minced meat served hot with buttered pav.",
    price: 315,
    image: "assets/item2.jfif",
    tag: "Decadent"
  },
  {
    id: "p4",
    name: "Classic chicken",
    description: "Simple, clean grilled chicken with cafe-style dressing and fresh greens.",
    price: 319,
    image: "assets/item1.jfif",
    tag: "Seasonal"
  }
];

export const GALLERY_PHOTOS: GalleryImage[] = [
  {
    id: "g1",
    url: "assets/item6_Coffee.jfif",
    category: "brewing",
    caption: "Surgical extraction of our signature espresso blend, pulling slow and rich."
  },
  {
    id: "g2",
    url: "assets/FrontDesk.jpeg",
    category: "ambience",
    caption: "Our main seating room featuring hand-crafted walnut furniture and custom brass lighting."
  },
  {
    id: "g3",
    url: "assets/item6.jfif",
    category: "desserts",
    caption: "Perfect afternoon pairings of house-baked pastries with freshly roasted coffee."
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    category: "brewing",
    caption: "Precision water pour-over during the bloom stage of the Geisha bean."
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    category: "ambience",
    caption: "Cozy velvet custom booths, providing ultimate privacy for deep conversations."
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
    category: "moments",
    caption: "Warm smiles and exquisite crafts shared, making every morning a true celebration."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Eleanor Sterling",
    role: "Architectural Designer",
    review: "Nuha patisserie and café is a sanctuary. The espresso extraction parameters are perfect, but it's the warm lighting & rich walnut architecture that brings me here every morning to draft my layouts.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "t2",
    name: "Navaj Sharief",
    role: "Indian restaurateur and entrepreneur.",
    review: "A hidden gem in the city. Great coffee, great service, and a very comfortable atmosphere.",
    rating: 5,
    image: "assets/NavajSharif.jfif"
  },
  {
    id: "t3",
    name: "Sophia Rossi",
    role: "Culinary & Travel Editorial Writer",
    review: "The almond croissant here sets a new gold standard. It is perfectly layered, butter-flaked, and pairs flawlessly with their Whiskey barrel aged slow-drip cold brew. Unforgettable afternoon tea.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  }
];

export const INSTAGRAM_FEED: InstagramPost[] = [
  {
    id: "inst1",
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    likes: 420,
    comments: 28,
    caption: "Symmetric layers of gold and velvet crema. Morning essentials at Nuha patisserie and café. ☕✨ #specialtycoffee #cafenua #latteart"
  },
  {
    id: "inst2",
    url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
    likes: 512,
    comments: 32,
    caption: "Golden hour and the absolute perfect crisp. Fresh almond laminated pastries rising in our oven. 🥐🌙 #artisanbakery #luxurydesserts"
  },
  {
    id: "inst3",
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop",
    likes: 680,
    comments: 47,
    caption: "A corner for readers, thinkers, and lovers of slow mornings. Find your sanctuary today. 🕯️🛋️ #luxurycafe #designinterior"
  },
  {
    id: "inst4",
    url: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop",
    likes: 395,
    comments: 19,
    caption: "Craft is in the patience. Watching the magical bloom of single-origin Geisha beans. 🧪💧 #specialtybrew #v60"
  }
];
