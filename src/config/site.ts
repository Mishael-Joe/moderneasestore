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
    name: "Modern Ease FULL HD MINI BODYCAMERA",
    slug: "modern-ease-full-hd-mini-bodycamera",
    price: 3300000,
    images: ["/products/camera_1.jpg"],
    description:
      "Compact. Powerful. Built for precision. Capture every detail in stunning 1080P Full HD whether it's day or night. Features night vision, 7-hour battery life, and smart design for on-the-go use.",
    specifications: {
      resolution: "1920 × 1080P",
      lensRotation: "180° swivel lens",
      nightVision: "4 infrared LED lights",
      viewingAngle: "Wide-angle coverage",
      battery: "1000mAh Lithium",
      recordingTime: "Up to 7 hours continuous",
      standbyMode: "Energy-efficient",
      charging: "USB-compatible",
      backClip: "Mountable on clothing or gear",
      build: "Durable polycarbonate housing",
      portability: "Lightweight and palm-sized",
    },
  },
  {
    id: "2",
    name: "HD Mini DV Camera",
    slug: "hd-mini-dv-camera",
    price: 1600000,
    images: ["/products/camera_2.jpg"],
    description:
      "Capture every moment in crisp 480P video. Lightweight and pocket-sized, this HD Mini DV Camera is perfect for home, office, or on-the-go use. Supports expandable storage up to 64GB.",
    specifications: {
      resolution: "480P",
      battery: "Rechargeable (built-in)",
      portability: "Pocket-sized",
      useCases: "Home security, office, car DVR",
      storage: "SD card support (8GB–64GB, FAT32)",
    },
  },
  {
    id: "3",
    name: "Mini Ice Mist Air Conditioning Fan",
    slug: "mini-ice-mist-air-conditioning-fan",
    price: 13000000,
    images: ["/products/AC_2.jpg", "/products/AC_1.jpg"],
    description:
      "Triple-tech cooling with semiconductor chill, high-speed airflow, and mist spray. Ultra-quiet and rechargeable with 6000mAh battery for up to 15 hours. Includes dual mist ports and 3 wind modes.",
    specifications: {
      coolingTech: "Semiconductor + airflow + mist",
      battery: "6000mAh Lithium",
      workingTime: "2–15 hours",
      windModes: "3 speeds",
      sprayPorts: "Dual (2)",
      sprayVolume: "40ml/h",
      noiseLevel: "≤ 50dBA",
      powerInput: "5V 2A / 15W",
      size: "332 × 102 × 107.5 mm",
    },
  },
];
