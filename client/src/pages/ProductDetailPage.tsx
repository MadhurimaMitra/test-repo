import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { TopNavigationSection } from "./sections/TopNavigationSection";
import { FooterContactSection } from "./sections/FooterContactSection";
import { useCart } from "@/context/CartContext";
import { categoryProducts } from "./CategoryProductPage";

const defaultProductImage = "/figmaAssets/bestseller-1-body-butter-1-2.png";

const howItHelps = [
  "Has a soothing and cooling effect on the skin",
  "Locks in moisture to intensely hydrate the skin",
  "Protects the skin from harmful UV rays of the sun",
  "Combats acne and visibly reduces blemishes",
];

const howToUse = ["Step - 1", "Step - 2", "Step - 3"];

const sampleReviews = [
  {
    id: 1,
    name: "Name",
    date: "Date",
    rating: 5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 2,
    name: "Name",
    date: "Date",
    rating: 5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 3,
    name: "Name",
    date: "Date",
    rating: 4,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 4,
    name: "Name",
    date: "Date",
    rating: 5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  },
];

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const textSize = size === "lg" ? "text-xl" : "text-[14px]";
  return (
    <div className={`flex gap-0.5 ${textSize}`} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "text-[#e8a020]" : "text-[#d0d0d0]"}>★</span>
      ))}
    </div>
  );
}

function InteractiveStars({ rating, onChange }: { rating: number; onChange: (r: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1 text-[22px] cursor-pointer" data-testid="rating-write-review">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          onMouseEnter={() => setHovered(s)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(s)}
          className={(hovered || rating) >= s ? "text-[#e8a020]" : "text-[#d0d0d0]"}
          data-testid={`star-review-${s}`}
        >★</span>
      ))}
    </div>
  );
}

export function ProductDetailPage() {
  const params = useParams<{ category: string; id: string }>();
  const [, navigate] = useLocation();
  const { addItem } = useCart();

  const category = params.category ?? "bodycare";
  const id = parseInt(params.id ?? "1");

  const products = categoryProducts[category] ?? [];
  const product = products.find((p) => p.id === id) ?? {
    id,
    name: "COCOSHEA BODY BUTTER",
    price: "Rs 417",
    image: defaultProductImage,
  };

  const [quantity, setQuantity] = useState(1);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const relatedProducts = products.filter((p) => p.id !== id).slice(0, 3);

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addItem({ id: product.id, category, name: product.name, price: product.price, image: product.image });
    }
    navigate("/cart");
  }

  return (
    <div className="min-h-screen bg-white">
      <TopNavigationSection />

      <main className="max-w-[960px] mx-auto px-6 py-10">

        {/* ── Top section: images + info ── */}
        <div className="flex gap-10" data-testid="section-product-detail">

          {/* Left: images */}
          <div className="flex flex-col gap-3 flex-shrink-0 w-[370px]">
            <div className="w-full h-[330px] bg-[#e0e0e0] overflow-hidden" data-testid="img-product-main-container">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" data-testid="img-product-main" />
            </div>
            <div className="flex gap-3">
              <div className="flex-1 h-[160px] bg-[#e0e0e0] overflow-hidden" data-testid="img-product-thumb-1">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 h-[160px] bg-[#e0e0e0] overflow-hidden" data-testid="img-product-thumb-2">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right: product info */}
          <div className="flex-1 flex flex-col">

            {/* Name + category */}
            <h1 className="[font-family:'Poppins',Helvetica] font-bold text-black text-[22px] leading-[1.25]" data-testid="text-product-name">
              {product.name}
            </h1>
            <p className="mt-1 [font-family:'Poppins',Helvetica] text-[12px] text-[#555] uppercase tracking-wide" data-testid="text-product-category">
              {category}
            </p>

            {/* Description */}
            <div className="mt-4 border-t border-[#d9d9d9] pt-4">
              <p className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[13px]" data-testid="text-product-tagline">
                Combats acne and reduces blemishes
              </p>
              <p className="mt-2 [font-family:'Poppins',Helvetica] text-[12px] text-[#333] leading-[1.7]" data-testid="text-product-description">
                Unveil your skin's natural radiance with our Vitamin E Day Cream, infused with hydrating hyaluronic acid and antioxidant-rich Grape Seed Oil. It restores suppleness and protects against aging. Rejuvenating vitamins tighten and firm for a radiant complexion.
              </p>
            </div>

            {/* MRP + Quantity + Add to cart */}
            <div className="mt-4 border-t border-[#d9d9d9] pt-4">
              <p className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[13px] mb-3" data-testid="text-product-price">
                MRP {product.price}
              </p>

              {/* Quantity control — matches design: ∨ 1 ∧ in a small bordered row */}
              <div className="flex items-center gap-0 border border-[#bbb] w-fit" data-testid="quantity-selector">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center border-r border-[#bbb] bg-white hover:bg-[#f3ede4] transition-colors [font-family:'Poppins',Helvetica] text-[#333] text-[13px]"
                  data-testid="button-quantity-decrease"
                >
                  ∨
                </button>
                <span className="w-10 h-8 flex items-center justify-center [font-family:'Poppins',Helvetica] text-[13px] text-black border-r border-[#bbb]" data-testid="text-quantity">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-white hover:bg-[#f3ede4] transition-colors [font-family:'Poppins',Helvetica] text-[#333] text-[13px]"
                  data-testid="button-quantity-increase"
                >
                  ∧
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="mt-4 w-full h-[44px] bg-[#3d2b1a] hover:bg-[#564130] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[12px] tracking-widest"
                data-testid="button-product-add-to-cart"
              >
                ADD TO CART
              </button>
            </div>

            {/* How does it help */}
            <div className="mt-5 border-t border-[#d9d9d9] pt-5">
              <p className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[13px] mb-3" data-testid="text-how-it-helps-heading">
                How does it help?
              </p>
              <ul className="flex flex-col gap-[6px]">
                {howItHelps.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 [font-family:'Poppins',Helvetica] text-[12px] text-[#333]" data-testid={`text-benefit-${i + 1}`}>
                    <span className="text-black font-bold leading-[1.6]">•</span>
                    <span className="leading-[1.6]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Use */}
            <div className="mt-5 border-t border-[#d9d9d9] pt-5">
              <p className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[13px] mb-3" data-testid="text-how-to-use-heading">
                How to Use
              </p>
              <ol className="flex flex-col gap-4">
                {howToUse.map((step, i) => (
                  <li key={i} className="flex items-center gap-3" data-testid={`text-step-${i + 1}`}>
                    <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#564130] font-semibold">→</span>
                    <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#333]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </div>

        {/* ── Reviews ── */}
        <section className="mt-12 border-t border-[#d9d9d9] pt-8" data-testid="section-reviews">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[18px]" data-testid="text-reviews-heading">
              Reviews ({sampleReviews.length})
            </h2>
            <StarRating rating={5} size="lg" />
            <span className="[font-family:'Poppins',Helvetica] text-[13px] text-[#333]" data-testid="text-reviews-avg">5/5</span>
          </div>

          {/* Review grid */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8" data-testid="grid-reviews">
            {sampleReviews.map((review) => (
              <div key={review.id} className="flex flex-col gap-[3px]" data-testid={`review-card-${review.id}`}>
                <p className="[font-family:'Poppins',Helvetica] font-semibold text-[13px] text-black" data-testid={`text-review-name-${review.id}`}>
                  {review.name}
                </p>
                <p className="[font-family:'Poppins',Helvetica] text-[11px] text-[#888]" data-testid={`text-review-date-${review.id}`}>
                  {review.date}
                </p>
                <StarRating rating={review.rating} size="sm" />
                <p className="mt-1 [font-family:'Poppins',Helvetica] text-[12px] text-[#333] leading-[1.65]" data-testid={`text-review-body-${review.id}`}>
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          {/* Write a Review */}
          <div className="mt-10 pt-6 border-t border-[#d9d9d9]" data-testid="section-write-review">
            <p className="[font-family:'Poppins',Helvetica] font-semibold text-[14px] text-black mb-3" data-testid="text-write-review-heading">
              Write a Review
            </p>
            <InteractiveStars rating={reviewRating} onChange={setReviewRating} />
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="mt-4 w-full max-w-[360px] h-[90px] border border-[#bbb] px-3 py-2 [font-family:'Poppins',Helvetica] text-[12px] text-[#333] resize-none focus:outline-none focus:border-[#564130]"
              data-testid="textarea-review"
            />
          </div>
        </section>

        {/* ── More for you ── */}
        <section className="mt-12" data-testid="section-more-for-you">
          <h2 className="[font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-[24px] text-center mb-8 [text-shadow:0px_1px_3px_#00000040]" data-testid="text-more-for-you-heading">
            More for you
          </h2>
          <div className="flex justify-center gap-6">
            {relatedProducts.map((rp) => (
              <div
                key={rp.id}
                className="bg-white shadow-[1px_1px_4px_#00000033] p-2 pb-3 flex flex-col w-[220px] cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/product/${category}/${rp.id}`)}
                data-testid={`card-related-product-${rp.id}`}
              >
                <div className="h-[190px] overflow-hidden bg-[#f6f1e8]">
                  <img className="w-full h-full object-cover" alt={rp.name} src={rp.image} data-testid={`img-related-${rp.id}`} />
                </div>
                <div className="mt-2 flex flex-col gap-1 px-1">
                  <p className="[font-family:'Poppins',Helvetica] font-semibold italic text-[11px] leading-[1.3] text-black" data-testid={`text-related-name-${rp.id}`}>
                    {rp.name}
                  </p>
                  <p className="[font-family:'Poppins',Helvetica] text-[10px] leading-[1.4] text-[#444]">
                    Calms skin and repairs moisture barrier for long lasting hydration.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem({ id: rp.id, category, name: rp.name, price: rp.price, image: rp.image });
                      navigate("/cart");
                    }}
                    className="mt-2 w-full h-[34px] bg-[#3d2b1a] hover:bg-[#564130] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[10px] tracking-wider"
                    data-testid={`button-related-add-cart-${rp.id}`}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <FooterContactSection />
    </div>
  );
}
