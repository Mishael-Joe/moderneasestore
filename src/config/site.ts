export const siteConfig = {
  siteName: "Moderneasestore | Spend Less. Smile More",
  name: "Moderneasestore",
  description: "An innovative online E-commerce marketplace.",
  keywords: [
    "Online marketplace, Moderneasestore, E-commerce platform, Innovative shopping, Unique online store, Secure online transactions, Quality products online, Easy online shopping, Virtual shopping experience, Reliable e-commerce, Virtual storefront, Seamless online shopping",
  ],
  footer: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Shipping & Return Policy", href: "/shipping-return-policy" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
  paymentmethods: [
    { name: "Visa", img: "/visa-svgrepo-com.svg" },
    { name: "Mastercard", img: "/mastercard-full-svgrepo-com.svg" },
    { name: "Verve", img: "/verve-svgrepo-com.svg" },
  ],
  links: {
    instagram: "#",
    linkedin: "#",
  },
  footerLinks: [
    { name: "Home", href: "/" },
    { name: "Support", href: "/support" },
    { name: "Code of Conduct", href: "/code-of-conduct" },
    { name: "Human Rights Policy", href: "/human-rights-policy" },
  ],
};

export const products = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    slug: "wireless-bluetooth-headphones",
    price: 2990000,
    image: "/cap.jpg",
    description:
      "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
    specifications: {
      brand: "SoundMax",
      batteryLife: "20 hours",
      connectivity: "Bluetooth 5.2",
      weight: "250g",
      color: "Black",
    },
  },
  {
    id: "2",
    name: "Smart LED TV 55-inch",
    slug: "smart-led-tv-55-inch",
    price: 12490000,
    image: "/casing.jpg",
    description:
      "Ultra HD Smart TV with voice control, HDR10+ support, and built-in streaming apps.",
    specifications: {
      brand: "VisionTech",
      resolution: "4K UHD",
      screenSize: "55 inches",
      smartFeatures: "Netflix, YouTube, Prime Video",
      ports: "3 HDMI, 2 USB",
    },
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    slug: "ergonomic-office-chair",
    price: 1890000,
    image: "/perfume.jpg",
    description:
      "Comfortable ergonomic chair with lumbar support, mesh back, and adjustable height.",
    specifications: {
      brand: "ComfortSeat",
      material: "Mesh + Steel",
      maxWeight: "150kg",
      color: "Gray",
      adjustability: "Height, Armrest, Tilt",
    },
  },
  {
    id: "4",
    name: "Stainless Steel Electric Kettle",
    slug: "stainless-steel-electric-kettle",
    price: 490000,
    image: "/shoe.jpg",
    description:
      "1.7L electric kettle with auto shut-off, boil-dry protection, and fast heating.",
    specifications: {
      brand: "KitchenPro",
      capacity: "1.7L",
      power: "2200W",
      material: "Stainless Steel",
      safety: "Auto shut-off, Boil-dry protection",
    },
  },
];
