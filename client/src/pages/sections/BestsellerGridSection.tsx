import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { useCart } from "@/context/CartContext";

const bestsellerProducts = [
  {
    id: 1,
    category: "bodycare",
    name: "COCOSHEA BODY BUTTER",
    description:
      "Calms skin and repairs moisture barrier for long lasting hydration.",
    image: "/figmaAssets/bestseller-1-body-butter-1-2.png",
    imageAlt: "Bestseller body butter",
    price: "Rs 417",
  },
  {
    id: 2,
    category: "skincare",
    name: "COCOSHEA BODY BUTTER",
    description:
      "Calms skin and repairs moisture barrier for long lasting hydration.",
    image: "/figmaAssets/bestseller-1-body-butter-1-2.png",
    imageAlt: "Bestseller body butter",
    price: "Rs 417",
  },
  {
    id: 3,
    category: "haircare",
    name: "COCOSHEA BODY BUTTER",
    description:
      "Calms skin and repairs moisture barrier for long lasting hydration.",
    image: "/figmaAssets/bestseller-1-body-butter-1-2.png",
    imageAlt: "Bestseller body butter",
    price: "Rs 417",
  },
];

export const BestsellerGridSection = (): JSX.Element => {
  const [, navigate] = useLocation();
  const { addItem } = useCart();

  return (
    <section className="w-full flex flex-row flex-wrap items-start justify-center gap-[50px] px-6">
      {bestsellerProducts.map((product) => (
        <Card
          key={product.id}
          className="inline-flex flex-col items-start gap-2.5 p-2.5 bg-white shadow-[2px_2px_4px_#00000040] border-0 rounded-none flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => navigate(`/product/${product.category}/${product.id}`)}
          data-testid={`card-bestseller-${product.id}`}
        >
          <CardContent className="p-0 flex flex-col items-start gap-2.5">
            <div className="w-[360px] h-[360px] rounded-[10px] overflow-hidden flex-shrink-0">
              <img
                className="w-[360px] h-[360px] object-cover"
                alt={product.imageAlt}
                src={product.image}
                data-testid={`img-bestseller-${product.id}`}
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="[font-family:'Poppins',Helvetica] font-semibold italic text-black text-[15px] tracking-[0] leading-[normal] mt-[-1px]" data-testid={`text-bestseller-name-${product.id}`}>
                {product.name}
              </p>
              <p className="w-[275px] [font-family:'Poppins',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal] min-h-[60px]" data-testid={`text-bestseller-desc-${product.id}`}>
                {product.description}
              </p>
              <div className="w-[85px] h-6 flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addItem({
                      id: product.id,
                      category: product.category,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    });
                    navigate("/cart");
                  }}
                  className="[font-family:'Poppins',Helvetica] font-medium italic text-[#564130] text-[13px] text-center tracking-[0] leading-[normal] underline bg-transparent border-none cursor-pointer p-0 hover:text-[#6b5240] transition-colors"
                  data-testid={`button-bestseller-add-cart-${product.id}`}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
