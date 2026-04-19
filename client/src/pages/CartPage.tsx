import { useLocation } from "wouter";
import { TopNavigationSection } from "./sections/TopNavigationSection";
import { FooterContactSection } from "./sections/FooterContactSection";
import { useCart } from "@/context/CartContext";
import { categoryProducts } from "./CategoryProductPage";

const defaultProductImage = "/figmaAssets/bestseller-1-body-butter-1-2.png";

const suggestedProducts = Object.entries(categoryProducts)
  .flatMap(([cat, prods]) => prods.map((p) => ({ ...p, category: cat })))
  .slice(0, 4);

export function CartPage() {
  const [, navigate] = useLocation();
  const { items, removeItem, updateQuantity, addItem } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <TopNavigationSection />

      <main className="max-w-[960px] mx-auto px-6 py-10">

        {/* ── Your Cart heading ── */}
        <h1
          className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[26px] mb-8"
          data-testid="text-your-cart-heading"
        >
          Your Cart
        </h1>

        {/* ── Empty state ── */}
        {items.length === 0 ? (
          <div className="border border-[#d9d9d9] p-16 flex flex-col items-center gap-6" data-testid="section-empty-cart">
            <p className="[font-family:'Poppins',Helvetica] text-[14px] text-[#888]">
              Your cart is empty.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-10 h-[44px] bg-[#3d2b1a] hover:bg-[#564130] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[12px] tracking-widest"
              data-testid="button-continue-shopping"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div className="flex gap-6 items-start" data-testid="section-cart-content">

            {/* ── Cart items panel ── */}
            <div className="flex-1 border border-[#d9d9d9]" data-testid="cart-items-list">
              {items.map((item, idx) => (
                <div
                  key={`${item.category}-${item.id}`}
                  className={`flex gap-4 p-5 ${idx < items.length - 1 ? "border-b border-[#d9d9d9]" : ""}`}
                  data-testid={`cart-item-${item.category}-${item.id}`}
                >
                  {/* Thumbnail */}
                  <div
                    className="w-[100px] h-[90px] bg-[#cdd8d3] flex-shrink-0 overflow-hidden"
                    data-testid={`img-cart-item-${item.id}`}
                  >
                    <img
                      src={item.image || defaultProductImage}
                      alt={item.name}
                      className="w-full h-full object-cover mix-blend-multiply opacity-70"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col gap-2 min-w-0">
                    {/* Name row + actions */}
                    <div className="flex items-start justify-between gap-4">
                      <p
                        className="[font-family:'Poppins',Helvetica] font-semibold text-[13px] text-black leading-[1.4]"
                        data-testid={`text-cart-item-name-${item.id}`}
                      >
                        {item.name}
                      </p>
                      <div className="flex gap-5 flex-shrink-0">
                        <button
                          onClick={() => removeItem(item.id, item.category)}
                          className="[font-family:'Poppins',Helvetica] text-[12px] text-black underline hover:text-[#564130] transition-colors"
                          data-testid={`button-delete-item-${item.id}`}
                        >
                          Delete
                        </button>
                        <button
                          className="[font-family:'Poppins',Helvetica] text-[12px] text-black underline hover:text-[#564130] transition-colors"
                          data-testid={`button-save-later-${item.id}`}
                        >
                          Save for Later
                        </button>
                      </div>
                    </div>

                    {/* Quantity + Price row */}
                    <div className="flex items-end gap-6 mt-1">
                      <div>
                        <p className="[font-family:'Poppins',Helvetica] text-[11px] text-[#444] mb-1">Quantity</p>
                        {/* Quantity control — exact design: ∨ 1 ∧ side by side in bordered cells */}
                        <div className="flex items-center border border-[#bbb] w-fit" data-testid={`quantity-control-${item.id}`}>
                          <button
                            onClick={() => updateQuantity(item.id, item.category, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border-r border-[#bbb] bg-white hover:bg-[#f3ede4] transition-colors [font-family:'Poppins',Helvetica] text-[13px] text-[#333]"
                            data-testid={`button-cart-qty-decrease-${item.id}`}
                          >
                            ∨
                          </button>
                          <span
                            className="w-10 h-8 flex items-center justify-center border-r border-[#bbb] [font-family:'Poppins',Helvetica] text-[13px] text-black"
                            data-testid={`text-cart-qty-${item.id}`}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.category, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-white hover:bg-[#f3ede4] transition-colors [font-family:'Poppins',Helvetica] text-[13px] text-[#333]"
                            data-testid={`button-cart-qty-increase-${item.id}`}
                          >
                            ∧
                          </button>
                        </div>
                      </div>
                      <p
                        className="[font-family:'Poppins',Helvetica] text-[12px] text-black mb-1"
                        data-testid={`text-cart-item-price-${item.id}`}
                      >
                        Price : {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Order summary panel ── */}
            <div className="w-[270px] flex-shrink-0 border border-[#d9d9d9] p-5 flex flex-col gap-4" data-testid="cart-order-summary">
              <div className="flex justify-between items-center">
                <span className="[font-family:'Poppins',Helvetica] text-[13px] text-black" data-testid="text-subtotal-label">
                  Subtotal
                </span>
                <span className="[font-family:'Poppins',Helvetica] text-[13px] text-black" data-testid="text-subtotal-value">
                  Rs _ _ _
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="[font-family:'Poppins',Helvetica] text-[13px] text-black" data-testid="text-shipping-label">
                  Shipping
                </span>
                <span className="[font-family:'Poppins',Helvetica] text-[11px] text-[#666]" data-testid="text-shipping-value">
                  To be calculated
                </span>
              </div>
              <div className="border-t border-[#d9d9d9] pt-4 flex justify-between items-center">
                <span className="[font-family:'Poppins',Helvetica] font-semibold text-[14px] text-black" data-testid="text-total-label">
                  Total
                </span>
                <span className="[font-family:'Poppins',Helvetica] font-semibold text-[14px] text-black" data-testid="text-total-value">
                  Rs _ _ _
                </span>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="w-full h-[50px] bg-[#3d2b1a] hover:bg-[#564130] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[13px] tracking-widest mt-1"
                data-testid="button-checkout"
              >
                CHECKOUT
              </button>
            </div>

          </div>
        )}

        {/* ── More products you might like ── */}
        <section className="mt-14" data-testid="section-suggested-products">
          <h2
            className="[font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-[22px] text-center mb-8 [text-shadow:0px_1px_3px_#00000040]"
            data-testid="text-suggested-heading"
          >
            More products you might like
          </h2>

          <div className="flex gap-5 justify-center flex-wrap" data-testid="grid-suggested-products">
            {suggestedProducts.map((sp) => (
              <div
                key={`${sp.category}-${sp.id}`}
                className="bg-white shadow-[1px_1px_4px_#00000026] flex flex-col w-[210px] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/product/${sp.category}/${sp.id}`)}
                data-testid={`card-suggested-product-${sp.category}-${sp.id}`}
              >
                {/* Image */}
                <div className="h-[175px] bg-[#f6f1e8] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={sp.name}
                    src={sp.image}
                    data-testid={`img-suggested-${sp.category}-${sp.id}`}
                  />
                </div>
                {/* Info */}
                <div className="p-3 flex flex-col gap-1 flex-1">
                  <p className="[font-family:'Poppins',Helvetica] font-semibold italic text-[11px] text-black leading-[1.3]" data-testid={`text-suggested-name-${sp.id}`}>
                    {sp.name}
                  </p>
                  <p className="[font-family:'Poppins',Helvetica] text-[10px] text-[#444] leading-[1.5]">
                    Calms skin and repairs moisture barrier for long lasting hydration.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem({ id: sp.id, category: sp.category, name: sp.name, price: sp.price, image: sp.image });
                    }}
                    className="mt-2 w-full h-[34px] bg-[#3d2b1a] hover:bg-[#564130] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[10px] tracking-wider"
                    data-testid={`button-suggested-add-cart-${sp.id}`}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Browse for more */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate("/shop")}
              className="px-14 h-[50px] bg-[#3d2b1a] hover:bg-[#564130] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[12px] tracking-widest rounded-[4px]"
              data-testid="button-browse-for-more"
            >
              BROWSE FOR MORE
            </button>
          </div>
        </section>

      </main>

      <FooterContactSection />
    </div>
  );
}
