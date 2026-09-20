const unsplash = (id: string, extra = "") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80${extra}`;

const cakePhoto = (slug: string) => `/cakes/${slug}.png`;

export const images = {
  heroCake: unsplash("photo-1578985545062-69928b1d9587", "&w=1400"),
  signatureCake: unsplash("photo-1621303837174-89787a7d4729", "&w=1400"),
  customCta: unsplash("photo-1464349095431-e9a21285b5f3", "&w=2000"),
  aboutAtelier: unsplash("photo-1517433670267-08bbd4be890f", "&w=1600"),
  aboutCraft: unsplash("photo-1555507036-ab1f4038808a", "&w=1200"),
  bakeryCounter: unsplash("photo-1509440159596-0249088772ff", "&w=1400"),
  layers: {
    oreo: "/layers/chocolate-oreo.jpg",
  },
  categories: {
    celebration: cakePhoto("chocolate-drip"),
    birthday: cakePhoto("oreo"),
    wedding: cakePhoto("red-velvet"),
    cupcakes: unsplash("photo-1486427944299-d1955d23e34d", "&w=900"),
    pastries: unsplash("photo-1555507036-ab1f4038808a", "&w=900"),
    sundaes: unsplash("photo-1563805042-7684c019e1cb", "&w=900"),
  },
  collection: {
    chocolate: cakePhoto("chocolate-drip"),
    lotus: cakePhoto("lotus-biscoff"),
    redVelvet: cakePhoto("red-velvet"),
    oreo: cakePhoto("oreo"),
    lemon: cakePhoto("lemon-drizzle-loaf"),
    caramel: cakePhoto("chocolate-salted-caramel"),
    custom: cakePhoto("kitkat"),
  },
  instagram: [
    cakePhoto("chocolate-drip"),
    cakePhoto("oreo"),
    cakePhoto("lotus-biscoff"),
    cakePhoto("red-velvet"),
    cakePhoto("kitkat"),
    cakePhoto("brownies-calendar"),
  ],
} as const;

export const productImages = {
  "chocolate-drip": cakePhoto("chocolate-drip"),
  "chocolate-salted-caramel": cakePhoto("chocolate-salted-caramel"),
  "vanilla-sponge": unsplash("photo-1535141192574-5d4897c12636", "&w=1000"),
  "pineapple-cream": unsplash("photo-1464349095431-e9a21285b5f3", "&w=1000"),
  "red-velvet": cakePhoto("red-velvet"),
  "red-velvet-cheesecake": cakePhoto("red-velvet-cheesecake"),
  butterscotch: cakePhoto("butterscotch"),
  "chocolate-fudge": cakePhoto("chocolate-fudge"),
  oreo: cakePhoto("oreo"),
  "lotus-biscoff": cakePhoto("lotus-biscoff"),
  "black-forest": cakePhoto("black-forest"),
  "lemon-drizzle-loaf": cakePhoto("lemon-drizzle-loaf"),
  "lemon-cake": cakePhoto("lemon-cake"),
  kitkat: cakePhoto("kitkat"),
  "swiss-roll": cakePhoto("swiss-roll"),
  "brownies-calendar": cakePhoto("brownies-calendar"),
  "almond-croissant": unsplash("photo-1555507036-ab1f4038808a", "&w=1000"),
  "butter-croissant": unsplash("photo-1509440159596-0249088772ff", "&w=1000"),
  "chocolate-donut": unsplash("photo-1551024601-bec78aea704b", "&w=1000"),
  "cinnamon-roll": unsplash("photo-1607958996333-41aef7caefaa", "&w=1000"),
  "cupcake-assortment": unsplash("photo-1486427944299-d1955d23e34d", "&w=1000"),
  "chocolate-sundae": unsplash("photo-1563805042-7684c019e1cb", "&w=1000"),
  "vanilla-sundae": unsplash("photo-1570197788417-0e556a1e4b43", "&w=1000"),
  "strawberry-sundae": unsplash("photo-1488900128323-21503983a07e", "&w=1000"),
  "oreo-sundae": unsplash("photo-1572490122747-3968b75cc699", "&w=1000"),
  "caramel-sundae": unsplash("photo-1514849302771-b8030cdc9c00", "&w=1000"),
} as const;
