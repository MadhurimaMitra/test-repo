import { useLocation } from "wouter";
import { TopNavigationSection } from "./sections/TopNavigationSection";
import { FooterContactSection } from "./sections/FooterContactSection";
import { useCart } from "@/context/CartContext";
import { categoryProducts } from "./CategoryProductPage";

const defaultProductImage = "/figmaAssets/bestseller-1-body-butter-1-2.png";

const suggestedProducts = Object.entries(categoryProducts)
  .flatMap(([cat, prods]) => prods.map((p) => ({ ...p, category: cat })))
  .slice(0, 4);

function QuantityControl({
  quantity,
  onDecrease,
  onIncrease,
}: {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  return (
    <div className="flex items-center border border-[#c4b8a8] rounded-[4px] overflow-hidden w-fit" data-testid="quantity-control">
      <button
        onClick={onDecrease}
        className="w-7 h-7 flex items-center justify-center bg-[#f6f1e8] hover:bg-[#ebdfcd] transition-colors text-[#564130] font-semibold text-sm"
        data-testid="button-cart-qty-decrease"
      >
        ∨
      </button>
      <span className="w-8 text-center [font-family:'Poppins',Helvetica] text-[12px] font-medium" data-testid="text-cart-qty">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="w-7 h-7 flex items-center justify-center bg-[#f6f1e8] hover:bg-[#ebdfcd] transition-colors text-[#564130] font-semibold text-sm"
        data-testid="button-cart-qty-increase"
      >
        ∧
      </button>
    </div>
  );
}

export function CartPage() {
  const [, navigate] = useLocation();
  const { items, removeItem, updateQuantity, addItem } = useCart();

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <TopNavigationSection />
      <main>
        {/* Cart Section */}
        <section className="mx-auto max-w-[1100px] px-8 pt-10 pb-16" data-testid="section-cart">
          <h1
            className="[font-family:'Poppins',Helvetica] font-semibold text-[28px] text-[#1a1a1a] mb-8"
            data-testid="text-your-cart-heading"
          >
            Your Cart
          </h1>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-5" data-testid="section-empty-cart">
              <p className="[font-family:'Poppins',Helvetica] text-[16px] text-[#888]">
                Your cart is empty.
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-8 h-[48px] bg-[#564130] hover:bg-[#6b5240] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[13px] rounded-[6px]"
                data-testid="button-continue-shopping"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="flex-1 border border-[#e5e5e5] rounded-[6px] divide-y divide-[#e5e5e5]" data-testid="cart-items-list">
                {items.map((item) => (
                  <div key={`${item.category}-${item.id}`} className="flex gap-5 p-5" data-testid={`cart-item-${item.category}-${item.id}`}>
                    {/* Thumbnail */}
                    <div className="w-[100px] h-[100px] bg-[#e8e8e8] rounded-[4px] flex-shrink-0 overflow-hidden" data-testid={`img-cart-item-${item.id}`}>
                      <img
                        src={item.image || defaultProductImage}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-start justify-between">
                        <p className="[font-family:'Poppins',Helvetica] font-semibold text-[13px] text-[#1a1a1a] leading-[1.4] max-w-[220px]" data-testid={`text-cart-item-name-${item.id}`}>
                          {item.name}
                        </p>
                        <div className="flex gap-4 flex-shrink-0">
                          <button
                            onClick={() => removeItem(item.id, item.category)}
                            className="[font-family:'Poppins',Helvetica] text-[11px] text-[#564130] underline hover:text-[#6b5240] transition-colors"
                            data-testid={`button-delete-item-${item.id}`}
                          >
                            Delete
                          </button>
                          <button
                            className="[font-family:'Poppins',Helvetica] text-[11px] text-[#564130] underline hover:text-[#6b5240] transition-colors"
                            data-testid={`button-save-later-${item.id}`}
                          >
                            Save for Later
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="flex flex-col gap-1">
                          <p className="[font-family:'Poppins',Helvetica] text-[11px] text-[#888]">Quantity</p>
                          <QuantityControl
                            quantity={item.quantity}
                            onDecrease={() => updateQuantity(item.id, item.category, item.quantity - 1)}
                            onIncrease={() => updateQuantity(item.id, item.category, item.quantity + 1)}
                          />
                        </div>
                        <p className="[font-family:'Poppins',Helvetica] text-[12px] text-[#444]" data-testid={`text-cart-item-price-${item.id}`}>
                          Price : {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:w-[280px] flex-shrink-0">
                <div className="border border-[#e5e5e5] rounded-[6px] p-6 flex flex-col gap-4" data-testid="cart-order-summary">
                  <div className="flex justify-between items-center">
                    <span className="[font-family:'Poppins',Helvetica] text-[13px] text-[#444]" data-testid="text-subtotal-label">
                      Subtotal
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-[13px] text-[#1a1a1a]" data-testid="text-subtotal-value">
                      Rs — — —
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="[font-family:'Poppins',Helvetica] text-[13px] text-[#444]" data-testid="text-shipping-label">
                      Shipping
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#888] italic" data-testid="text-shipping-value">
                      To be calculated
                    </span>
                  </div>
                  <div className="border-t border-[#e5e5e5] pt-4 flex justify-between items-center">
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-[14px] text-[#1a1a1a]" data-testid="text-total-label">
                      Total
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-[14px] text-[#1a1a1a]" data-testid="text-total-value">
                      Rs — — —
                    </span>
                  </div>
                  <button
                    className="mt-2 w-full h-[52px] bg-[#564130] hover:bg-[#6b5240] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[13px] rounded-[6px] shadow-[0px_4px_7.8px_#00000040]"
                    data-testid="button-checkout"
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* More products you might like */}
        <section className="bg-[#faf8f5] py-12 px-8" data-testid="section-suggested-products">
          <h2
            className="[font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-[24px] text-center mb-8 [text-shadow:0px_1px_3px_#00000040]"
            data-testid="text-suggested-heading"
          >
            More products you might like
          </h2>

          <div className="flex flex-wrap justify-center gap-6" data-testid="grid-suggested-products">
            {suggestedProducts.map((sp) => (
              <div
                key={`${sp.category}-${sp.id}`}
                className="bg-white rounded-[3px] shadow-[1px_1px_4px_#00000033] p-[6px] pb-4 flex flex-col w-[210px] cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/product/${sp.category}/${sp.id}`)}
                data-testid={`card-suggested-product-${sp.category}-${sp.id}`}
              >
                <div className="h-[180px] overflow-hidden bg-[#f6f1e8] rounded-[3px]">
                  <img
                    className="w-full h-full object-cover"
                    alt={sp.name}
                    src={sp.image}
                    data-testid={`img-suggested-${sp.category}-${sp.id}`}
                  />
                </div>
                <div className="mt-2 flex flex-col gap-1 px-1">
                  <p className="[font-family:'Poppins',Helvetica] font-semibold italic text-[10px] leading-[1.2] text-black" data-testid={`text-suggested-name-${sp.id}`}>
                    {sp.name}
                  </p>
                  <p className="[font-family:'Poppins',Helvetica] text-[10px] leading-[1.3] text-[#555]">
                    Calms skin and repairs moisture barrier for long lasting hydration.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem({ id: sp.id, category: sp.category, name: sp.name, price: sp.price, image: sp.image });
                      navigate("/cart");
                    }}
                    className="mt-2 w-full h-[32px] bg-[#564130] hover:bg-[#6b5240] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[10px] rounded-[3px]"
                    data-testid={`button-suggested-add-cart-${sp.id}`}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate("/shop")}
              className="px-12 h-[52px] bg-[#564130] hover:bg-[#6b5240] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[13px] rounded-[6px] shadow-[0px_4px_7.8px_#00000040]"
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
