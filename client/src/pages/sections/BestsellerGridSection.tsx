import { Card, CardContent } from "@/components/ui/card";

const bestsellerProducts = [
  {
    id: 1,
    name: "COCOSHEA BODY BUTTER",
    description:
      "Calms skin and repairs moisture barrier for long lasting hydration.",
    image: "/figmaAssets/bestseller-1-body-butter-1-2.png",
    imageAlt: "Bestseller body butter",
  },
  {
    id: 2,
    name: "COCOSHEA BODY BUTTER",
    description:
      "Calms skin and repairs moisture barrier for long lasting hydration.",
    image: "/figmaAssets/bestseller-1-body-butter-1-2.png",
    imageAlt: "Bestseller body butter",
  },
  {
    id: 3,
    name: "COCOSHEA BODY BUTTER",
    description:
      "Calms skin and repairs moisture barrier for long lasting hydration.",
    image: "/figmaAssets/bestseller-1-body-butter-1-2.png",
    imageAlt: "Bestseller body butter",
  },
];

export const BestsellerGridSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-row flex-wrap items-start justify-center gap-[50px] px-6">
      {bestsellerProducts.map((product) => (
        <Card
          key={product.id}
          className="inline-flex flex-col items-start gap-2.5 p-2.5 bg-white shadow-[2px_2px_4px_#00000040] border-0 rounded-none flex-shrink-0"
        >
          <CardContent className="p-0 flex flex-col items-start gap-2.5">
            {/* Product image container */}
            <div className="w-[360px] h-[360px] rounded-[10px] overflow-hidden flex-shrink-0">
              <img
                className="w-[360px] h-[360px] object-cover"
                alt={product.imageAlt}
                src={product.image}
              />
            </div>
            {/* Product info */}
            <div className="flex flex-col items-start">
              {/* Product name */}
              <p className="[font-family:'Poppins',Helvetica] font-semibold italic text-black text-[15px] tracking-[0] leading-[normal] mt-[-1px]">
                {product.name}
              </p>
              {/* Product description */}
              <p className="w-[275px] [font-family:'Poppins',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal] min-h-[60px]">
                {product.description}
              </p>
              {/* Add to cart link */}
              <div className="w-[85px] h-6 flex items-center justify-center">
                <button className="[font-family:'Poppins',Helvetica] font-medium italic text-[#564130] text-[13px] text-center tracking-[0] leading-[normal] underline bg-transparent border-none cursor-pointer p-0">
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
