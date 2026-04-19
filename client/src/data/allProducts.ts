const defaultImage = "/figmaAssets/bestseller-1-body-butter-1-2.png";

export type SearchProduct = {
  id: number;
  category: string;
  name: string;
  price: string;
  image: string;
  badge?: string;
};

export const allProducts: SearchProduct[] = [
  /* ── Bodycare ── */
  { id: 1, category: "bodycare", name: "Cocoshea Body Butter", price: "Rs 417", image: defaultImage, badge: "Bestseller" },
  { id: 2, category: "bodycare", name: "Vitamin C Body Lotion", price: "Rs 349", image: defaultImage },
  { id: 3, category: "bodycare", name: "Lavender Body Scrub", price: "Rs 389", image: defaultImage },
  { id: 4, category: "bodycare", name: "Shea Body Oil", price: "Rs 459", image: defaultImage },
  { id: 5, category: "bodycare", name: "Deep Moisture Body Cream", price: "Rs 499", image: defaultImage },
  { id: 6, category: "bodycare", name: "Aloe Vera Body Gel", price: "Rs 299", image: defaultImage, badge: "Bestseller" },
  { id: 7, category: "bodycare", name: "Charcoal Body Wash", price: "Rs 329", image: defaultImage },
  { id: 8, category: "bodycare", name: "Rose Body Mist", price: "Rs 279", image: defaultImage, badge: "Bestseller" },

  /* ── Skincare ── */
  { id: 1, category: "skincare", name: "Niacinamide Face Serum", price: "Rs 549", image: defaultImage, badge: "Bestseller" },
  { id: 2, category: "skincare", name: "Vitamin C Brightening Cream", price: "Rs 629", image: defaultImage },
  { id: 3, category: "skincare", name: "Hyaluronic Acid Toner", price: "Rs 399", image: defaultImage },
  { id: 4, category: "skincare", name: "SPF 50 Sunscreen", price: "Rs 449", image: defaultImage },
  { id: 5, category: "skincare", name: "Retinol Night Cream", price: "Rs 699", image: defaultImage },
  { id: 6, category: "skincare", name: "Clay Purifying Mask", price: "Rs 349", image: defaultImage, badge: "Bestseller" },
  { id: 7, category: "skincare", name: "Collagen Face Wash", price: "Rs 279", image: defaultImage },
  { id: 8, category: "skincare", name: "Green Tea Moisturizer", price: "Rs 429", image: defaultImage },

  /* ── Grooming ── */
  { id: 1, category: "grooming", name: "Beard Growth Oil", price: "Rs 499", image: defaultImage, badge: "Bestseller" },
  { id: 2, category: "grooming", name: "Charcoal Face Wash For Men", price: "Rs 329", image: defaultImage },
  { id: 3, category: "grooming", name: "Hydrating Shaving Gel", price: "Rs 299", image: defaultImage },
  { id: 4, category: "grooming", name: "Peppermint Aftershave", price: "Rs 349", image: defaultImage },
  { id: 5, category: "grooming", name: "Matte Face Moisturizer", price: "Rs 449", image: defaultImage },
  { id: 6, category: "grooming", name: "Beard Balm", price: "Rs 379", image: defaultImage, badge: "Bestseller" },
  { id: 7, category: "grooming", name: "Brightening Eye Cream", price: "Rs 599", image: defaultImage },
  { id: 8, category: "grooming", name: "Cooling Face Scrub", price: "Rs 319", image: defaultImage },

  /* ── Haircare ── */
  { id: 1,  category: "haircare", name: "Argan Oil Shampoo", price: "Rs 399", image: defaultImage, badge: "Bestseller" },
  { id: 2,  category: "haircare", name: "Keratin Conditioner", price: "Rs 449", image: defaultImage },
  { id: 3,  category: "haircare", name: "Coconut Deep Hair Mask", price: "Rs 499", image: defaultImage },
  { id: 4,  category: "haircare", name: "Biotin Hair Serum", price: "Rs 549", image: defaultImage },
  { id: 5,  category: "haircare", name: "Rosemary Growth Oil", price: "Rs 429", image: defaultImage },
  { id: 6,  category: "haircare", name: "Anti-Dandruff Shampoo", price: "Rs 369", image: defaultImage, badge: "Bestseller" },
  { id: 7,  category: "haircare", name: "Heat Protection Spray", price: "Rs 349", image: defaultImage },
  { id: 8,  category: "haircare", name: "Deep Nourish Hair Pack", price: "Rs 479", image: defaultImage },
  { id: 9,  category: "haircare", name: "Scalp Revitalizer", price: "Rs 529", image: defaultImage },
  { id: 10, category: "haircare", name: "Smooth & Shine Serum", price: "Rs 389", image: defaultImage, badge: "Bestseller" },
  { id: 11, category: "haircare", name: "Aloe Hair Gel", price: "Rs 299", image: defaultImage },
  { id: 12, category: "haircare", name: "Castor Growth Oil", price: "Rs 459", image: defaultImage },

  /* ── Gift Sets ── */
  { id: 1, category: "giftsets", name: "Luxury Skin Glow Set", price: "Rs 999", image: defaultImage, badge: "Bestseller" },
  { id: 2, category: "giftsets", name: "Men's Grooming Kit", price: "Rs 1199", image: defaultImage },
  { id: 3, category: "giftsets", name: "Hair Care Essentials Box", price: "Rs 1099", image: defaultImage },
  { id: 4, category: "giftsets", name: "Total Body Care Bundle", price: "Rs 1299", image: defaultImage },
];

export function searchProducts(query: string): SearchProduct[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  ).slice(0, 7);
}
