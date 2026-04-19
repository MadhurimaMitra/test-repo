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

const howToUse = [
  "Cleanse your face with a gentle face wash and pat dry.",
  "Take a small amount of the cream and apply evenly on your face and neck.",
  "Use twice daily — morning and night — for best results.",
];

const sampleReviews = [
  {
    id: 1,
    name: "Priya S.",
    date: "March 2024",
    rating: 5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 2,
    name: "Rahul K.",
    date: "February 2024",
    rating: 5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 3,
    name: "Ananya M.",
    date: "January 2024",
    rating: 4,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 4,
    name: "Vikram T.",
    date: "December 2023",
    rating: 5,
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  },
];

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeClass = size === "lg" ? "text-2xl" : size === "md" ? "text-base" : "text-sm";
  return (
    <div className={`flex gap-0.5 ${sizeClass}`} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? "text-[#d4a843]" : "text-[#d8d8d8]"}>
          ★
        </span>
      ))}
    </div>
  );
}

function InteractiveStarRating({
  rating,
  onChange,
}: {
  rating: number;
  onChange: (r: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1 text-2xl cursor-pointer" data-testid="rating-write-review">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          className={(hovered || rating) >= star ? "text-[#d4a843]" : "text-[#d8d8d8]"}
          data-testid={`star-review-${star}`}
        >
          ★
        </span>
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
      addItem({
        id: product.id,
        category,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
    navigate("/cart");
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <TopNavigationSection />
      <main>
        {/* Product Info Section */}
        <section className="mx-auto max-w-[1100px] px-8 pt-10 pb-16 flex flex-col md:flex-row gap-10" data-testid="section-product-detail">
          {/* Left: Images */}
          <div className="flex flex-col gap-4 flex-shrink-0">
            <div
              className="w-full md:w-[340px] h-[340px] bg-[#e8e8e8] rounded-[6px] overflow-hidden"
              data-testid="img-product-main-container"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                data-testid="img-product-main"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-[160px] h-[160px] bg-[#e8e8e8] rounded-[4px] overflow-hidden" data-testid="img-product-thumb-1">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="w-[160px] h-[160px] bg-[#e8e8e8] rounded-[4px] overflow-hidden" data-testid="img-product-thumb-2">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex-1 flex flex-col">
            <h1
              className="[font-family:'Poppins',Helvetica] font-semibold text-[#1a1a1a] text-[28px] leading-[1.2]"
              data-testid="text-product-name"
            >
              {product.name}
            </h1>
            <span
              className="mt-2 inline-block w-fit bg-[#f6f1e8] text-[#564130] [font-family:'Poppins',Helvetica] text-[11px] font-medium uppercase px-3 py-1 rounded-[3px]"
              data-testid="text-product-category"
            >
              {category.toUpperCase()}
            </span>

            <div className="mt-5 border-t border-[#e5e5e5] pt-5">
              <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#1a1a1a] text-[14px]" data-testid="text-product-tagline">
                Combats acne and reduces blemishes
              </p>
              <p className="mt-2 [font-family:'Poppins',Helvetica] text-[13px] text-[#444] leading-[1.6]" data-testid="text-product-description">
                Unveil your skin's natural radiance with our Vitamin E Day Cream, infused with hydrating hyaluronic acid and antioxidant-rich Grape Seed Oil. It restores suppleness and protects against aging by countering vitamins tighten and firm for a radiant complexion.
              </p>
            </div>

            <div className="mt-5 border-t border-[#e5e5e5] pt-5">
              <p className="[font-family:'Poppins',Helvetica] font-semibold italic text-[15px] text-[#1a1a1a]" data-testid="text-product-price">
                MRP {product.price}
              </p>

              {/* Quantity Selector */}
              <div className="mt-3 flex items-center gap-3">
                <p className="[font-family:'Poppins',Helvetica] text-[12px] text-[#444]">Quantity</p>
                <div className="flex items-center border border-[#c4b8a8] rounded-[4px] overflow-hidden" data-testid="quantity-selector">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 flex items-center justify-center bg-[#f6f1e8] hover:bg-[#ebdfcd] transition-colors [font-family:'Poppins',Helvetica] text-[#564130] font-semibold"
                    data-testid="button-quantity-decrease"
                  >
                    ∨
                  </button>
                  <span
                    className="w-10 text-center [font-family:'Poppins',Helvetica] text-[13px] font-medium"
                    data-testid="text-quantity"
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-[#f6f1e8] hover:bg-[#ebdfcd] transition-colors [font-family:'Poppins',Helvetica] text-[#564130] font-semibold"
                    data-testid="button-quantity-increase"
                  >
                    ∧
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="mt-5 w-full max-w-[220px] h-[48px] bg-[#564130] hover:bg-[#6b5240] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[13px] rounded-[6px] shadow-[0px_4px_7.8px_#00000040]"
                data-testid="button-product-add-to-cart"
              >
                ADD TO CART
              </button>
            </div>

            {/* How does it help */}
            <div className="mt-6 border-t border-[#e5e5e5] pt-5">
              <p className="[font-family:'Poppins',Helvetica] font-semibold text-[14px] text-[#1a1a1a] mb-3" data-testid="text-how-it-helps-heading">
                How does it help?
              </p>
              <ul className="flex flex-col gap-2">
                {howItHelps.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 [font-family:'Poppins',Helvetica] text-[12px] text-[#444]" data-testid={`text-benefit-${i + 1}`}>
                    <span className="mt-0.5 text-[#564130] font-bold">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Use */}
            <div className="mt-6 border-t border-[#e5e5e5] pt-5">
              <p className="[font-family:'Poppins',Helvetica] font-semibold text-[14px] text-[#1a1a1a] mb-3" data-testid="text-how-to-use-heading">
                How to Use
              </p>
              <ol className="flex flex-col gap-3">
                {howToUse.map((step, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`text-step-${i + 1}`}>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f6f1e8] text-[#564130] [font-family:'Poppins',Helvetica] text-[11px] font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#444] leading-[1.6]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mx-auto max-w-[1100px] px-8 pb-14 border-t border-[#e5e5e5] pt-10" data-testid="section-reviews">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[20px] text-[#1a1a1a]" data-testid="text-reviews-heading">
              Reviews ({sampleReviews.length})
            </h2>
            <StarRating rating={5} size="lg" />
            <span className="[font-family:'Poppins',Helvetica] text-[14px] text-[#444]" data-testid="text-reviews-avg">5/5</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-testid="grid-reviews">
            {sampleReviews.map((review) => (
              <div key={review.id} className="flex flex-col gap-2" data-testid={`review-card-${review.id}`}>
                <p className="[font-family:'Poppins',Helvetica] font-semibold text-[13px] text-[#1a1a1a]" data-testid={`text-review-name-${review.id}`}>
                  {review.name}
                </p>
                <p className="[font-family:'Poppins',Helvetica] text-[11px] text-[#888]" data-testid={`text-review-date-${review.id}`}>
                  {review.date}
                </p>
                <StarRating rating={review.rating} size="sm" />
                <p className="[font-family:'Poppins',Helvetica] text-[12px] text-[#444] leading-[1.6]" data-testid={`text-review-body-${review.id}`}>
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          {/* Write a Review */}
          <div className="mt-10 border-t border-[#e5e5e5] pt-8" data-testid="section-write-review">
            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[16px] text-[#1a1a1a] mb-4" data-testid="text-write-review-heading">
              Write a Review
            </h3>
            <InteractiveStarRating rating={reviewRating} onChange={setReviewRating} />
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Share your experience with this product..."
              className="mt-4 w-full max-w-[440px] h-[100px] border border-[#c4b8a8] rounded-[4px] px-4 py-3 [font-family:'Poppins',Helvetica] text-[13px] text-[#444] resize-none focus:outline-none focus:border-[#564130]"
              data-testid="textarea-review"
            />
            <button
              className="mt-3 px-6 h-[40px] bg-[#564130] hover:bg-[#6b5240] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[12px] rounded-[6px]"
              data-testid="button-submit-review"
            >
              SUBMIT REVIEW
            </button>
          </div>
        </section>

        {/* More for you */}
        <section className="bg-[#faf8f5] py-12 px-8" data-testid="section-more-for-you">
          <h2 className="[font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-[27px] text-center mb-8 [text-shadow:0px_1px_3px_#00000040]" data-testid="text-more-for-you-heading">
            More for you
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {relatedProducts.map((rp) => (
              <div
                key={rp.id}
                className="bg-white rounded-[3px] shadow-[1px_1px_4px_#00000033] p-[6px] pb-3 flex flex-col w-[226px] cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/product/${category}/${rp.id}`)}
                data-testid={`card-related-product-${rp.id}`}
              >
                <div className="h-[196px] overflow-hidden bg-[#f6f1e8]">
                  <img className="w-full h-full object-cover" alt={rp.name} src={rp.image} data-testid={`img-related-${rp.id}`} />
                </div>
                <div className="mt-2 flex flex-col gap-1">
                  <p className="[font-family:'Poppins',Helvetica] font-semibold italic text-[10px] leading-[1.2] text-black" data-testid={`text-related-name-${rp.id}`}>
                    {rp.name}
                  </p>
                  {rp.description && (
                    <p className="[font-family:'Poppins',Helvetica] text-[10px] leading-[1.25] text-black" data-testid={`text-related-desc-${rp.id}`}>
                      {rp.description}
                    </p>
                  )}
                  <p className="[font-family:'Poppins',Helvetica] font-semibold italic text-[11px] text-black" data-testid={`text-related-price-${rp.id}`}>
                    {rp.price}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem({ id: rp.id, category, name: rp.name, price: rp.price, image: rp.image });
                      navigate("/cart");
                    }}
                    className="mt-1 w-fit bg-[#564130] hover:bg-[#6b5240] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[10px] px-3 py-1.5 rounded-[3px]"
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
