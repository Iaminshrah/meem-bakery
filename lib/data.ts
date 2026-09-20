import { images, productImages } from "./images";

export type ProductCategory = "cakes" | "bakery";

export type CakeFlavor =
  | "chocolate"
  | "lotus"
  | "red-velvet"
  | "lemon"
  | "caramel"
  | "vanilla"
  | "pineapple"
  | "specialty";

export type CakeSizeId = "1lb" | "2lb";

export const cakeSizes: Array<{
  id: CakeSizeId;
  label: string;
  weight: string;
  price: number;
}> = [
  { id: "1lb", label: "1 Pound", weight: "~0.5 kg", price: 1500 },
  { id: "2lb", label: "2 Pounds", weight: "~1 kg", price: 3000 },
];

export const PRICE_1_POUND = 1500;
export const PRICE_2_POUNDS = 3000;

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: ProductCategory;
  flavor?: CakeFlavor;
  tags: string[];
  image: string;
  bestseller?: boolean;
};

export function isPricedByPound(product: Product) {
  return product.category === "cakes";
}

export function getSizePrice(sizeId: CakeSizeId = "1lb") {
  return cakeSizes.find((size) => size.id === sizeId)?.price ?? PRICE_1_POUND;
}

export type Category = {
  id: string;
  name: string;
  href: string;
  image: string;
  description: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
  rating: 5;
};

export type NavLink = {
  href: string;
  label: string;
};

export const site = {
  name: "MEEM BAKERS",
  shortName: "Meem Bakers",
  tagline: "Baked With Love. Crafted To Impress.",
  description:
    "Handcrafted cakes, sundaes and sweet creations made fresh for every special moment.",
  keywords: [
    "Meem Bakers",
    "cakes Pakistan",
    "birthday cake",
    "custom cake",
    "sundaes",
    "cupcakes",
  ],
  phone: "0316 7737208",
  phoneHref: "+923167737208",
  whatsapp: "https://wa.me/923167737208",
  address: "Pickup by arrangement — we’ll share details when you order.",
  instagram: "https://www.instagram.com/meembakers.official/",
  hours: "Order any day. We’ll confirm a pickup or delivery time with you.",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/cakes", label: "Cakes" },
  { href: "/bakery", label: "Bakery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export const footerExplore: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/cakes", label: "Cakes" },
  { href: "/bakery", label: "Bakery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerCare: NavLink[] = [
  { href: "/faq", label: "FAQs" },
  { href: "/delivery", label: "Delivery Information" },
  { href: "/returns", label: "Returns" },
  { href: "/privacy", label: "Privacy Policy" },
];

export const categories: Category[] = [
  {
    id: "celebration",
    name: "Celebration Cakes",
    href: "/cakes?collection=celebration",
    image: images.categories.celebration,
    description: "Cakes made for life’s biggest days.",
  },
  {
    id: "birthday",
    name: "Birthday Cakes",
    href: "/cakes?collection=birthday",
    image: images.categories.birthday,
    description: "Personal, joyful, and made to be remembered.",
  },
  {
    id: "wedding",
    name: "Wedding Cakes",
    href: "/cakes?collection=wedding",
    image: images.categories.wedding,
    description: "Elegant cakes for the most important day.",
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    href: "/bakery?collection=cupcakes",
    image: images.categories.cupcakes,
    description: "Small cakes with frosting, fruit, and chocolate.",
  },
  {
    id: "pastries",
    name: "Pastries",
    href: "/bakery?collection=pastries",
    image: images.categories.pastries,
    description: "Fresh pastry for breakfast, tea, and sharing.",
  },
  {
    id: "sundaes",
    name: "Sundaes",
    href: "/bakery?collection=sundaes",
    image: images.categories.sundaes,
    description: "Ice cream, sauce, and toppings — simple and cold.",
  },
];

export const products: Product[] = [
  {
    id: "vanilla-sponge",
    name: "Vanilla Sponge Cake",
    slug: "vanilla-sponge",
    description: "A soft vanilla sponge, light, classic, and freshly baked daily.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "vanilla",
    tags: ["celebration", "birthday", "bestseller"],
    image: productImages["vanilla-sponge"],
    bestseller: true,
  },
  {
    id: "pineapple-cream",
    name: "Pineapple Cream Cake",
    slug: "pineapple-cream",
    description: "Vanilla layers folded with pineapple cream and golden fruit.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "pineapple",
    tags: ["celebration", "birthday"],
    image: productImages["pineapple-cream"],
  },
  {
    id: "chocolate-drip",
    name: "Chocolate Drip Cake",
    slug: "chocolate-drip",
    description: "Dark sponge crowned with a slow, glossy chocolate drip.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "chocolate",
    tags: ["celebration", "birthday", "bestseller"],
    image: productImages["chocolate-drip"],
    bestseller: true,
  },
  {
    id: "chocolate-salted-caramel",
    name: "Chocolate Salted Caramel Cake",
    slug: "chocolate-salted-caramel",
    description: "Fudge layers, burnt caramel, and a finish of sea salt.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "caramel",
    tags: ["celebration", "birthday"],
    image: productImages["chocolate-salted-caramel"],
  },
  {
    id: "red-velvet",
    name: "Red Velvet Cake",
    slug: "red-velvet",
    description: "Cocoa-kissed crimson sponge with silk cream cheese frosting.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "red-velvet",
    tags: ["celebration", "wedding", "bestseller"],
    image: productImages["red-velvet"],
    bestseller: true,
  },
  {
    id: "red-velvet-cheesecake",
    name: "Red Velvet Cheesecake",
    slug: "red-velvet-cheesecake",
    description: "A velvet crumb base beneath a tall, baked cheesecake crown.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "red-velvet",
    tags: ["celebration", "wedding"],
    image: productImages["red-velvet-cheesecake"],
  },
  {
    id: "butterscotch",
    name: "Butterscotch Cake",
    slug: "butterscotch",
    description: "Golden sponge soaked in butterscotch and finished with toffee shard.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "caramel",
    tags: ["celebration", "birthday"],
    image: productImages.butterscotch,
  },
  {
    id: "chocolate-fudge",
    name: "Chocolate Fudge Cake",
    slug: "chocolate-fudge",
    description: "Intense ganache, fudge crumb, and a deep chocolate finish.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "chocolate",
    tags: ["celebration", "birthday", "bestseller"],
    image: productImages["chocolate-fudge"],
    bestseller: true,
  },
  {
    id: "oreo",
    name: "Oreo Cake",
    slug: "oreo",
    description: "Chocolate sponge, crushed Oreo cream, and a ganache heart.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "specialty",
    tags: ["celebration", "birthday", "bestseller"],
    image: productImages.oreo,
    bestseller: true,
  },
  {
    id: "lotus-biscoff",
    name: "Lotus Biscoff Cake",
    slug: "lotus-biscoff",
    description: "Caramelised biscuit crumb folded through velvet sponge.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "lotus",
    tags: ["celebration", "birthday", "bestseller"],
    image: productImages["lotus-biscoff"],
    bestseller: true,
  },
  {
    id: "black-forest",
    name: "Black Forest Cake",
    slug: "black-forest",
    description: "Dark chocolate sponge, kirsch cherries, and clouds of cream.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "chocolate",
    tags: ["celebration", "birthday", "bestseller"],
    image: productImages["black-forest"],
    bestseller: true,
  },
  {
    id: "lemon-drizzle-loaf",
    name: "Lemon Drizzle Loaf Cake",
    slug: "lemon-drizzle-loaf",
    description: "A citrus loaf, soaked and glazed until it shines.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "lemon",
    tags: ["celebration"],
    image: productImages["lemon-drizzle-loaf"],
  },
  {
    id: "lemon-cake",
    name: "Lemon Cake",
    slug: "lemon-cake",
    description: "Bright lemon curd between pale-gold layers of sponge.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "lemon",
    tags: ["celebration", "wedding"],
    image: productImages["lemon-cake"],
  },
  {
    id: "kitkat",
    name: "KitKat Cake",
    slug: "kitkat",
    description: "Chocolate sponge wrapped in KitKat and finished with a ganache drip.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "specialty",
    tags: ["celebration", "birthday"],
    image: productImages.kitkat,
  },
  {
    id: "swiss-roll",
    name: "Swiss Roll",
    slug: "swiss-roll",
    description: "A soft chocolate roll filled with cream — sliced to share.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "specialty",
    tags: ["bakery", "celebration"],
    image: productImages["swiss-roll"],
  },
  {
    id: "brownies-calendar",
    name: "Brownies Calendar",
    slug: "brownies-calendar",
    description: "A royal box of brownies — twelve squares, ready to share.",
    price: PRICE_1_POUND,
    category: "cakes",
    flavor: "specialty",
    tags: ["bakery", "celebration"],
    image: productImages["brownies-calendar"],
  },
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    slug: "almond-croissant",
    description: "Filled with almond cream and finished with toasted almonds.",
    price: 650,
    category: "bakery",
    tags: ["pastries"],
    image: productImages["almond-croissant"],
  },
  {
    id: "butter-croissant",
    name: "Butter Croissant",
    slug: "butter-croissant",
    description: "Flaky, buttery layers and a golden crust.",
    price: 480,
    category: "bakery",
    tags: ["pastries"],
    image: productImages["butter-croissant"],
  },
  {
    id: "chocolate-donut",
    name: "Chocolate Donut",
    slug: "chocolate-donut",
    description: "Soft dough with a chocolate glaze.",
    price: 420,
    category: "bakery",
    tags: ["pastries"],
    image: productImages["chocolate-donut"],
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    slug: "cinnamon-roll",
    description: "A soft swirl with cinnamon and vanilla icing.",
    price: 520,
    category: "bakery",
    tags: ["pastries"],
    image: productImages["cinnamon-roll"],
  },
  {
    id: "cupcake-assortment",
    name: "Cupcake Assortment",
    slug: "cupcake-assortment",
    description: "A dozen cupcakes — chocolate, vanilla, berry, and lotus.",
    price: 3600,
    category: "bakery",
    tags: ["cupcakes", "celebration"],
    image: productImages["cupcake-assortment"],
  },
  {
    id: "chocolate-sundae",
    name: "Chocolate Sundae",
    slug: "chocolate-sundae",
    description: "Vanilla ice cream, warm chocolate sauce, and a cherry on top.",
    price: 550,
    category: "bakery",
    tags: ["sundaes"],
    image: productImages["chocolate-sundae"],
  },
  {
    id: "vanilla-sundae",
    name: "Vanilla Sundae",
    slug: "vanilla-sundae",
    description: "Creamy vanilla ice cream with cream and a simple topping.",
    price: 500,
    category: "bakery",
    tags: ["sundaes"],
    image: productImages["vanilla-sundae"],
  },
  {
    id: "strawberry-sundae",
    name: "Strawberry Sundae",
    slug: "strawberry-sundae",
    description: "Vanilla ice cream with strawberry sauce and fresh fruit.",
    price: 550,
    category: "bakery",
    tags: ["sundaes"],
    image: productImages["strawberry-sundae"],
  },
  {
    id: "oreo-sundae",
    name: "Oreo Sundae",
    slug: "oreo-sundae",
    description: "Ice cream, crushed Oreo, and chocolate sauce.",
    price: 650,
    category: "bakery",
    tags: ["sundaes"],
    image: productImages["oreo-sundae"],
  },
  {
    id: "caramel-sundae",
    name: "Caramel Sundae",
    slug: "caramel-sundae",
    description: "Ice cream with caramel sauce and a little crunch.",
    price: 600,
    category: "bakery",
    tags: ["sundaes"],
    image: productImages["caramel-sundae"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "amira",
    quote:
      "Absolutely beautiful cake and even better taste. Everyone at the party loved it.",
    name: "Amira Khalil",
    location: "Birthday party",
    rating: 5,
  },
  {
    id: "james",
    quote:
      "The wedding cake looked stunning and tasted even better. Guests still ask who made it.",
    name: "Hassan Malik",
    location: "Wedding",
    rating: 5,
  },
  {
    id: "sofia",
    quote:
      "Beautiful, neat, and generous. The Oreo cake is unforgettable.",
    name: "Sofia Marin",
    location: "Family gathering",
    rating: 5,
  },
  {
    id: "nadia",
    quote:
      "Ordered a custom birthday cake on a week’s notice. It arrived flawless and tasted even better.",
    name: "Nadia Rahman",
    location: "Birthday cake",
    rating: 5,
  },
];

export const cakeCollection = [
  {
    id: "chocolate",
    name: "Chocolate Drip",
    href: "/cakes?flavor=chocolate",
    image: images.collection.chocolate,
    span: "md:col-span-7 md:row-span-2 min-h-[22rem] md:min-h-full",
  },
  {
    id: "oreo",
    name: "Oreo",
    href: "/cakes?flavor=specialty",
    image: images.collection.oreo,
    span: "md:col-span-5 min-h-[16rem]",
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    href: "/cakes?flavor=red-velvet",
    image: images.collection.redVelvet,
    span: "md:col-span-5 min-h-[16rem]",
  },
  {
    id: "lotus",
    name: "Lotus Biscoff",
    href: "/cakes?flavor=lotus",
    image: images.collection.lotus,
    span: "md:col-span-4 min-h-[18rem]",
  },
  {
    id: "lemon",
    name: "Lemon",
    href: "/cakes?flavor=lemon",
    image: images.collection.lemon,
    span: "md:col-span-4 min-h-[18rem]",
  },
  {
    id: "caramel",
    name: "Salted Caramel",
    href: "/cakes?flavor=caramel",
    image: images.collection.caramel,
    span: "md:col-span-4 min-h-[18rem]",
  },
  {
    id: "custom",
    name: "Customized Cakes",
    href: "/order",
    image: images.collection.custom,
    span: "md:col-span-12 min-h-[18rem]",
  },
] as const;

export function getBestsellers() {
  return products.filter((product) => product.bestseller);
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((product) => product.category === category);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.tags.some((tag) => tag.includes(q)),
  );
}
