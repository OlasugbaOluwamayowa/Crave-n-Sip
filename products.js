/*
 * CRAVE & SIP — PRODUCT CATALOGUE
 * These are provisional sample items/prices supplied for website development.
 * Confirm every product, description, size and price with the business owner before launch.
 * To edit the menu, update this array. Price values are integer naira amounts.
 */
window.CRAVE_CONFIG = {
  whatsappNumber: "2348024850065", // international format, digits only
  currency: "NGN",
  currencyLocale: "en-NG",
  businessName: "Crave & Sip",
  deliveryFee: null // Keep null until an explicit delivery pricing rule is confirmed.
};

window.CRAVE_PRODUCTS = [
  {
    id: "heart-beet",
    name: "Heart Beet",
    category: "healthy-boost",
    description: "Freshly made with beetroot, pineapple, ginger and lemon for a bold, tangy, fruit-forward sip.",
    price: 2500,
    size: "50cl",
    image: "assets/products/heart-beet.jpg",
    imageAlt: "Crave & Sip Heart Beet drink in a bottle",
    colour: "berry",
    badge: "Local favourite",
    available: true
  },
  {
    id: "belly-blast",
    name: "Belly Blast",
    category: "healthy-boost",
    description: "Freshly made with cucumber, pineapple and sugar for a crisp, lightly sweet refresh.",
    price: 2000,
    size: "50cl",
    image: "assets/products/belly-blast.jpg",
    imageAlt: "Crave & Sip Belly Blast drink in a bottle",
    colour: "mint",
    badge: "A little twist",
    available: true
  },
  {
    id: "classic-chapman",
    name: "Classic Chapman",
    category: "classic",
    description: "A freshly made, citrusy Chapman-style classic with a bright, celebratory finish.",
    price: 2500,
    size: "50cl",
    image: "assets/products/classic-chapman.jpg",
    imageAlt: "Red Chapman-style drink with citrus garnish and umbrella",
    colour: "purple",
    badge: "Party mood",
    available: true
  },
  {
    id: "fresh-orange-juice",
    name: "Fresh Orange Juice",
    category: "juice",
    description: "Freshly made orange juice with a bright citrus taste and a naturally sunny finish.",
    price: 3000,
    size: "50cl",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Fresh orange juice served in a glass",
    colour: "orange",
    badge: "Sunshine in a cup",
    available: true
  },
  {
    id: "pineapple-juice",
    name: "Pineapple Juice",
    category: "juice",
    description: "Freshly made pineapple juice with a sweet-tart tropical flavour.",
    price: 2500,
    size: "50cl",
    image: "assets/products/pineapple-juice.jpg",
    imageAlt: "Yellow pineapple drink served with pineapple fruit",
    colour: "yellow",
    badge: "",
    available: true
  },
  {
    id: "watermelon-juice",
    name: "Watermelon Juice",
    category: "juice",
    description: "Freshly made watermelon juice with a light, juicy, refreshing finish.",
    price: 2200,
    size: "50cl",
    image: "assets/products/watermelon-juice.jpg",
    imageAlt: "Red-pink refreshing drink served with citrus",
    colour: "pink",
    badge: "Pink pick",
    available: true
  },
  {
    id: "tropical-fruit-blend",
    name: "Tropical Fruit Blend",
    category: "blend",
    description: "A freshly made mix of tropical fruit flavours for a vibrant, full-fruit sip.",
    price: 3000,
    size: "50cl",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Tropical fruit blend served in a glass",
    colour: "berry",
    badge: "Tropical mood",
    available: true
  },
  {
    id: "strawberry-smoothie",
    name: "Strawberry Smoothie",
    category: "blend",
    description: "A freshly made strawberry smoothie with a rich berry flavour and creamy texture.",
    price: 3500,
    size: "50cl",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80",
    imageAlt: "Strawberry smoothie served in a glass",
    colour: "pink",
    badge: "Berry good",
    available: true
  }
];
