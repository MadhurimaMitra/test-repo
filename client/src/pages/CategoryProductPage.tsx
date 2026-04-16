import { Link } from "wouter";
import { FooterContactSection } from "./sections/FooterContactSection";
import { TopNavigationSection } from "./sections/TopNavigationSection";

export type CategoryProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export type CategoryPageConfig = {
  slug: string;
  title: string;
  heading: string;
  heroImage: string;
  heroAlt: string;
  products: CategoryProduct[];
};

const defaultProductImage = "/figmaAssets/bestseller-1-body-butter-1-2.png";

export const categoryProducts: Record<string, CategoryProduct[]> = {
  bodycare: Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: "COCOSHEA BODY BUTTER",
    price: "Rs 417",
    image: defaultProductImage,
  })),
  skincare: Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: "CLENFAY SKINCARE ESSENTIAL",
    price: "Rs 417",
    image: defaultProductImage,
  })),
  grooming: Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: "CLENFAY GROOMING ESSENTIAL",
    price: "Rs 417",
    image: defaultProductImage,
  })),
  haircare: Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: "CLENFAY HAIRCARE ESSENTIAL",
    price: "Rs 417",
    image: defaultProductImage,
  })),
  giftsets: Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: "CLENFAY GIFT SET",
    price: "Rs 417",
    image: defaultProductImage,
  })),
};

export const categoryPageConfigs: Record<string, CategoryPageConfig> = {
  bodycare: {
    slug: "bodycare",
    title: "BODYCARE",
    heading: "Nourish your body with our luxurious bodycare essentials",
    heroImage: "/figmaAssets/dsc00650-1.svg",
    heroAlt: "Bodycare essentials",
    products: categoryProducts.bodycare,
  },
  skincare: {
    slug: "skincare",
    title: "SKINCARE",
    heading: "Restore your glow with gentle skincare rituals",
    heroImage: "/figmaAssets/frame-239.svg",
    heroAlt: "Skincare essentials",
    products: categoryProducts.skincare,
  },
  grooming: {
    slug: "grooming",
    title: "GROOMING",
    heading: "Refine your routine with premium grooming essentials",
    heroImage: "/figmaAssets/dsc00858-1.svg",
    heroAlt: "Grooming essentials",
    products: categoryProducts.grooming,
  },
  haircare: {
    slug: "haircare",
    title: "HAIRCARE",
    heading: "Care for every strand with nourishing haircare formulas",
    heroImage: "/figmaAssets/frame-241.svg",
    heroAlt: "Haircare essentials",
    products: categoryProducts.haircare,
  },
  giftsets: {
    slug: "giftsets",
    title: "GIFT SETS",
    heading: "Gift complete self-care rituals for every occasion",
    heroImage: "/figmaAssets/dsc09895-1.png",
    heroAlt: "Gift set essentials",
    products: categoryProducts.giftsets,
  },
};

function ProductCard({
  product,
  slug,
}: {
  product: CategoryProduct;
  slug: string;
}): JSX.Element {
  return (
    <article
      className="bg-white rounded-lg shadow-[2px_2px_4px_#00000040] p-2.5 pb-3.5 flex flex-col gap-2.5 w-[263px]"
      data-testid={`card-${slug}-product-${product.id}`}
    >
      <div className="h-[238px] rounded-[10px] overflow-hidden bg-[#f6f1e8]">
        <img
          className="w-full h-full object-cover scale-125"
          alt={product.name}
          src={product.image}
          data-testid={`img-${slug}-product-${product.id}`}
        />
      </div>
      <div className="flex flex-col gap-[13px]">
        <div
          className="flex gap-0.5 text-[#d19f4c] text-sm leading-none"
          aria-label="4 out of 5 stars"
          data-testid={`text-${slug}-rating-${product.id}`}
        >
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="text-[#d8d8d8]">★</span>
        </div>
        <p
          className="[font-family:'Poppins',Helvetica] font-semibold italic text-[13px] text-black"
          data-testid={`text-${slug}-product-name-${product.id}`}
        >
          {product.name}
        </p>
      </div>
      <p
        className="[font-family:'Poppins',Helvetica] font-semibold italic text-[15px] text-black"
        data-testid={`text-${slug}-product-price-${product.id}`}
      >
        {product.price}
      </p>
      <button
        className="[font-family:'Poppins',Helvetica] font-medium italic text-[13px] text-[#564130] underline w-fit hover:text-[#6b5240] transition-colors"
        data-testid={`button-${slug}-add-cart-${product.id}`}
      >
        ADD TO CART
      </button>
    </article>
  );
}

export function ProductGrid({
  products,
  slug,
}: {
  products: CategoryProduct[];
  slug: string;
}): JSX.Element {
  return (
    <div className="mt-[44px] flex flex-wrap justify-center gap-[38px] max-w-[1170px] mx-auto">
      {products.map((product) => (
        <ProductCard key={`${slug}-${product.id}`} product={product} slug={slug} />
      ))}
    </div>
  );
}

export const CategoryProductPage = ({
  config,
}: {
  config: CategoryPageConfig;
}): JSX.Element => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <TopNavigationSection />
      <main>
        <section className="pt-[54px]">
          <h1
            className="[font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-[36px] leading-[1.09] text-center mx-auto max-w-[760px] px-6 [text-shadow:0px_1px_3px_#00000040]"
            data-testid={`text-${config.slug}-heading`}
          >
            {config.heading}
          </h1>
          <div className="relative mt-[83px] h-[488px] w-full overflow-hidden bg-[#ebdfcd]">
            <img
              className="w-full h-full object-cover object-center"
              alt={config.heroAlt}
              src={config.heroImage}
              data-testid={`img-${config.slug}-hero`}
            />
          </div>
        </section>
        <section className="pt-[60px] pb-[92px] px-8">
          <h2
            className="[font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-[36px] leading-none text-center [text-shadow:0px_1px_3px_#00000040]"
            data-testid={`text-${config.slug}-title`}
          >
            {config.title}
          </h2>
          <ProductGrid products={config.products} slug={config.slug} />
          <div className="mt-12 flex justify-center">
            <Link
              href="/"
              className="[font-family:'Poppins',Helvetica] font-medium italic text-[#564130] underline hover:text-[#6b5240] transition-colors"
              data-testid={`link-${config.slug}-back-home`}
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