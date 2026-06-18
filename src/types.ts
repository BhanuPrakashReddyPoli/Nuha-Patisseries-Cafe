export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "espresso" | "brewed" | "specialty" | "cold";
  isSignature?: boolean;
}

export interface PastryItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
  isPremium?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: "ambience" | "brewing" | "desserts" | "moments";
  caption: string;
}

export interface InstagramPost {
  id: string;
  url: string;
  likes: number;
  comments: number;
  caption: string;
}
