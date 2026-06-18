import { MenuItem, PastryItem, TestimonialItem, GalleryImage, InstagramPost } from "./types";

export const COFFEE_MENU: MenuItem[] = [
  // Espresso category
  {
    id: "e1",
    name: "Golden Affogato Royale",
    description: "Premium double shot espresso poured over organic Madagascar vanilla bean gelato, finished with edible 24K gold flakes.",
    price: 12.0,
    category: "espresso",
    isSignature: true,
  },
  {
    id: "e2",
    name: "Classic Double Espresso",
    description: "The pure essence of our signature Nuha blend: a full-bodied double shot with notes of rich cacao, dark cherry, and a velvety crema.",
    price: 4.5,
    category: "espresso",
  },
  {
    id: "e3",
    name: "Velvet Flat White",
    description: "Two ristretto shots with silky micro-foamed milk, poured with precise latte art. Incredibly smooth and intensely satisfying.",
    price: 5.5,
    category: "espresso",
  },
  
  // Brewed category
  {
    id: "b1",
    name: "Panama Geisha V60 Hand-Brew",
    description: "Brewed to perfection using the legendary Geisha beans. Reveals floral jasmine top notes, bergamot body, and a sweet honey tea finish.",
    price: 16.0,
    category: "brewed",
    isSignature: true,
  },
  {
    id: "b2",
    name: "Ethiopian Yirgacheffe Siphon",
    description: "Full sensory theatrical siphon brew. Clean cup displaying bright citrus acidity, lavender aroma, and delicate sweet tea finish.",
    price: 8.5,
    category: "brewed",
  },
  {
    id: "b3",
    name: "Chemex Classic Reserve",
    description: "Slow-filtered through triple-thick filter paper. Incredibly crisp body with highlighted fruit tones and zero bitterness.",
    price: 7.0,
    category: "brewed",
  },

  // Specialty category
  {
    id: "s1",
    name: "Rose Pistachio Luxury Latte",
    description: "A delicate double shot espresso steamed with house-infused organic rosewater and topped with crushed toasted premium pistachios.",
    price: 9.5,
    category: "specialty",
    isSignature: true,
  },
  {
    id: "s2",
    name: "Spanish Saffron Latte",
    description: "Espresso sweetened with cream condensed milk that has been slow-steeped with rare Persian saffron stigmata.",
    price: 9.0,
    category: "specialty",
  },
  {
    id: "s3",
    name: "Salted Caramel Sea Salt Cold Foam",
    description: "Rich layered latte featuring house-made dark caramel syrup, pink Himalayan sea-salt, and extra thick cold-aerated cream foam.",
    price: 8.5,
    category: "specialty",
  },

  // Cold Brew & Shaken
  {
    id: "c1",
    name: "Smoked Oak Cask Cold Brew",
    description: "Slow-dripped for 18 hours, then matured in white-oak whiskey barrels to infuse a magnificent smoky vanillin aroma.",
    price: 9.0,
    category: "cold",
    isSignature: true,
  },
  {
    id: "c2",
    name: "Nuha Shakerato Shaken",
    description: "Double shot espresso violently shaken over double-frozen artisanal ice. Sweetened with premium Demerara sugar syrup with a rich foam.",
    price: 6.5,
    category: "cold",
  },
  {
    id: "c3",
    name: "Espresso Tonic Botanical",
    description: "Concentrated double ristretto floated on top of fever-tree Mediterranean tonic water, fresh ice, and a twist of rosemary and lime.",
    price: 7.5,
    category: "cold",
  }
];

export const PASTRY_MENU: PastryItem[] = [
  {
    id: "p1",
    name: "Golden Croissant Amande",
    description: "Our signature 36-layer sourdough croissant generously filled with real frangipane almond cream, topped with toasted almond slices.",
    price: 6.5,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
    tag: "Bestseller",
    isPremium: true
  },
  {
    id: "p2",
    name: "Pistachio Framboise Tart",
    description: "Crisp vanilla pastry shell layered with intense raspberry compote and dark Sicilian pistachio ganache, crowned with fresh raspberries.",
    price: 8.5,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
    tag: "Signature",
    isPremium: true
  },
  {
    id: "p3",
    name: "Dark Chocolate Lava Moelleux",
    description: "Luxurious single-origin Belgian dark chocolate cake with a molten center, served warm with a drizzle of salted butter caramel.",
    price: 9.5,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop",
    tag: "Decadent"
  },
  {
    id: "p4",
    name: "Hazelnut Craquelin Choux",
    description: "Crispy-topped choux pastry filled with premium Piedmont hazelnut praline cremeux and dark milk chocolate ganache core.",
    price: 7.5,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
    tag: "Seasonal"
  }
];

export const GALLERY_PHOTOS: GalleryImage[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
    category: "ambience",
    caption: "Our main seating room featuring hand-crafted walnut furniture and custom brass lighting."
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800&auto=format&fit=crop",
    category: "brewing",
    caption: "Surgical extraction of our signature espresso blend, pulling slow and rich."
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1532499016263-f2c3e89df9c5?q=80&w=800&auto=format&fit=crop",
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
    name: "Dr. Marcus Vance",
    role: "Specialty Green Coffee Importer",
    review: "I've tasted Panamanian Geisha all around the world, yet Nuha patisserie and café's water chemistry and hand-brew precision coaxes out notes of jasmine and tea in an incredibly pure form. Stunning.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
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
