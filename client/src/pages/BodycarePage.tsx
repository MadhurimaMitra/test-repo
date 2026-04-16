import { Link } from "wouter";
import { FooterContactSection } from "./sections/FooterContactSection";
import { TopNavigationSection } from "./sections/TopNavigationSection";

const products = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  name: "COCOSHEA BODY BUTTER",
  price: "Rs 417",
  image: "/figmaAssets/bestseller-1-body-butter-1-2.png",
}));

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}): JSX.Element {
  return (
    <article
      className="bg-white rounded-lg shadow-[2px_2px_4px_#00000040] p-2.5 pb-3.5 flex flex-col gap-2.5 w-[263px]"
      data-testid={`card-bodycare-product-${product.id}`}
    >
      <div className="h-[238px] rounded-[10px] overflow-hidden bg-[#f6f1e8]">
        <img
          className="w-full h-full object-cover scale-125"
          alt={product.name}
          src={product.image}
          data-testid={`img-bodycare-product-${product.id}`}
        />
      </div>
      <div className="flex flex-col gap-[13px]">
        <div
          className="flex gap-0.5 text-[#d19f4c] text-sm leading-none"
          aria-label="4 out of 5 stars"
          data-testid={`text-rating-${product.id}`}
        >
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="text-[#d8d8d8]">★</span>
        </div>
        <p
          className="[font-family:'Poppins',Helvetica] font-semibold italic text-[13px] text-black"
          data-testid={`text-product-name-${product.id}`}
        >
          {product.name}
        </p>
      </div>
      <p
        className="[font-family:'Poppins',Helvetica] font-semibold italic text-[15px] text-black"
        data-testid={`text-product-price-${product.id}`}
      >
        {product.price}
      </p>
      <button
        className="[font-family:'Poppins',Helvetica] font-medium italic text-[13px] text-[#564130] underline w-fit hover:text-[#6b5240] transition-colors"
        data-testid={`button-add-cart-${product.id}`}
      >
        ADD TO CART
      </button>
    </article>
  );
}

export const BodycarePage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <TopNavigationSection />
      <main>
        <section className="pt-[54px]">
          <h1
            className="[font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-[36px] leading-[1.09] text-center mx-auto max-w-[719px] [text-shadow:0px_1px_3px_#00000040]"
            data-testid="text-bodycare-heading"
          >
            Nourish your body with our luxurious bodycare essentials
          </h1>
          <div className="relative mt-[83px] h-[488px] w-full overflow-hidden bg-[#ebdfcd]">
            <img
              className="w-full h-full object-cover object-center"
              alt="Bodycare essentials"
              src="/figmaAssets/dsc00650-1.svg"
              data-testid="img-bodycare-hero"
            />
          </div>
        </section>
        <section className="pt-[60px] pb-[92px] px-8">
          <h2
            className="[font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-[36px] leading-none text-center [text-shadow:0px_1px_3px_#00000040]"
            data-testid="text-bodycare-title"
          >
            BODYCARE
          </h2>
          <div className="mt-[44px] flex flex-wrap justify-center gap-[38px] max-w-[1170px] mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/"
              className="[font-family:'Poppins',Helvetica] font-medium italic text-[#564130] underline hover:text-[#6b5240] transition-colors"
              data-testid="link-back-home"
            >
              BACK TO HOME
            </Link>
          </div>
        </section>
      </main>
      <FooterContactSection />
    </div>
  );
};