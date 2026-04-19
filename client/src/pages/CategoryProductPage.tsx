import bodycareReference from "@assets/bodycare_1776516798107.png";
import giftSetsReference from "@assets/gift_sets_1776516798111.png";
import groomingReference from "@assets/grooming_1776516798112.png";
import haircareReference from "@assets/haircare_1776516798113.png";
import skincareReference from "@assets/skincare_1776516798117.png";
import { Button } from "@/components/ui/button";
import { FooterContactSection } from "./sections/FooterContactSection";
import { NewsletterSubscriptionSection } from "./sections/NewsletterSubscriptionSection";
import { TopNavigationSection } from "./sections/TopNavigationSection";
import { useLocation } from "wouter";
import { useCart } from "@/context/CartContext";

export type CategoryProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  badge?: string;
  description?: string;
};

export type CategoryPageConfig = {
  slug: string;
  title: string;
  heading: string;
  heroImage: string;
  heroCrop?: {
    top: number;
    bottom: number;
    width: number;
    height: number;
  };
  heroAlt: string;
  products: CategoryProduct[];
  comboProducts: CategoryProduct[];
  exploreProducts: CategoryProduct[];
  spotlight?: {
    title: string;
    description: string;
    image: string;
  };
};

const defaultProductImage = "/figmaAssets/bestseller-1-body-butter-1-2.png";
const productDescription =
  "Calms skin and repairs moisture barrier for long lasting hydration.";

function makeProducts(count: number): CategoryProduct[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: "COCOSHEA BODY BUTTER",
    price: "Rs 417",
    image: defaultProductImage,
    badge: index === 0 || index === 5 || index === 7 ? "Bestseller" : undefined,
  }));
}

function makeComboProducts(count = 4): CategoryProduct[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: "COCOSHEA BODY BUTTER",
    price: "Rs 417",
    image: defaultProductImage,
  }));
}

function makeExploreProducts(): CategoryProduct[] {
  return Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    name: "COCOSHEA BODY BUTTER",
    price: "Rs 417",
    image: defaultProductImage,
    description: productDescription,
  }));
}

export const categoryProducts: Record<string, CategoryProduct[]> = {
  bodycare: makeProducts(8),
  skincare: makeProducts(8),
  grooming: makeProducts(8),
  haircare: makeProducts(12),
  giftsets: makeProducts(4),
};

export const categoryPageConfigs: Record<string, CategoryPageConfig> = {
  bodycare: {
    slug: "bodycare",
    title: "BODYCARE",
    heading: "Nourish your body with our luxurious\nbodycare essentials",
    heroImage: bodycareReference,
    heroCrop: { top: 650, bottom: 1610, width: 3024, height: 7508 },
    heroAlt: "Bodycare essentials",
    products: categoryProducts.bodycare,
    comboProducts: makeComboProducts(),
    exploreProducts: makeExploreProducts(),
  },
  skincare: {
    slug: "skincare",
    title: "SKINCARE",
    heading: "Discover your best skin with our\npremium skincare collection",
    heroImage: skincareReference,
    heroCrop: { top: 650, bottom: 1600, width: 3024, height: 8534 },
    heroAlt: "Skincare essentials",
    products: categoryProducts.skincare,
    comboProducts: makeComboProducts(),
    exploreProducts: makeExploreProducts(),
    spotlight: {
      title: "Ionic Facial steamer",
      description:
        "Spa Level Rejuvenation at home.\n\nProduces tiny ionic steam particles which penetrate the skin 10x more than regular steam.",
      image: "/figmaAssets/frame-4-1.png",
    },
  },
  grooming: {
    slug: "grooming",
    title: "GROOMING",
    heading: "Elevate your grooming game with\nexpert solutions",
    heroImage: groomingReference,
    heroCrop: { top: 650, bottom: 1600, width: 3024, height: 7494 },
    heroAlt: "Grooming essentials",
    products: categoryProducts.grooming,
    comboProducts: makeComboProducts(),
    exploreProducts: makeExploreProducts(),
  },
  haircare: {
    slug: "haircare",
    title: "HAIRCARE",
    heading: "Personalized care and expertise for all\nyour hair and scalp concerns.",
    heroImage: haircareReference,
    heroCrop: { top: 650, bottom: 1605, width: 3024, height: 8398 },
    heroAlt: "Haircare essentials",
    products: categoryProducts.haircare,
    comboProducts: makeComboProducts(),
    exploreProducts: makeExploreProducts(),
  },
  giftsets: {
    slug: "giftsets",
    title: "GIFT PACKS",
    heading: "Gift your loved ones\nexpert care",
    heroImage: giftSetsReference,
    heroCrop: { top: 650, bottom: 1610, width: 3024, height: 7508 },
    heroAlt: "Gift set essentials",
    products: categoryProducts.giftsets,
    comboProducts: [],
    exploreProducts: makeExploreProducts(),
  },
};

function CroppedDesignImage({
  image,
  alt,
  crop,
}: {
  image: string;
  alt: string;
  crop?: CategoryPageConfig["heroCrop"];
}): JSX.Element {
  if (!crop) {
    return <img className="h-full w-full object-cover" alt={alt} src={image} data-testid="img-category-hero" />;
  }

  const cropHeight = crop.bottom - crop.top;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        className="absolute left-0 w-full select-none"
        alt={alt}
        src={image}
        draggable={false}
        style={{ top: `${(-crop.top / cropHeight) * 100}%` }}
        data-testid="img-category-hero"
      />
    </div>
  );
}

export function ProductCard({
  product,
  slug,
  large = false,
}: {
  product: CategoryProduct;
  slug: string;
  large?: boolean;
}): JSX.Element {
  const [, navigate] = useLocation();
  const { addItem } = useCart();

  const category = slug.replace(/-combo$/, "").replace(/-explore$/, "");

  function handleCardClick() {
    navigate(`/product/${category}/${product.id}`);
  }

  function handleAddToCart(e: React.MouseEvent) {
    e.stopPropagation();
    addItem({
      id: product.id,
      category,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    navigate("/cart");
  }

  return (
    <article
      className={`relative bg-white rounded-[3px] shadow-[1px_1px_4px_#00000033] p-[6px] pb-3 flex flex-col cursor-pointer hover:shadow-md transition-shadow ${large ? "w-[325px]" : "w-[226px]"}`}
      onClick={handleCardClick}
      data-testid={`card-${slug}-product-${product.id}`}
    >
      {product.badge && (
        <span
          className="absolute left-[6px] top-[6px] z-10 bg-[#e5f0d9] px-2 py-1 [font-family:'Poppins',Helvetica] text-[10px] italic text-[#4e8b42]"
          data-testid={`text-${slug}-badge-${product.id}`}
        >
          {product.badge}
        </span>
      )}
      <div className={`overflow-hidden bg-[#f6f1e8] ${large ? "h-[284px]" : "h-[196px]"}`}>
        <img
          className="w-full h-full object-cover"
          alt={product.name}
          src={product.image}
          data-testid={`img-${slug}-product-${product.id}`}
        />
      </div>
      <div className="mt-2 flex flex-col gap-1">
        <div
          className="flex gap-[3px] text-[#d7c9b5] text-[8px] leading-none"
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
          className="[font-family:'Poppins',Helvetica] font-semibold italic text-[10px] leading-[1.2] text-black"
          data-testid={`text-${slug}-product-name-${product.id}`}
        >
          {product.name}
        </p>
      </div>
      {product.description && (
        <p className="[font-family:'Poppins',Helvetica] text-[10px] leading-[1.25] text-black" data-testid={`text-${slug}-description-${product.id}`}>
          {product.description}
        </p>
      )}
      <p
        className="mt-1 [font-family:'Poppins',Helvetica] font-semibold italic text-[11px] text-black"
        data-testid={`text-${slug}-product-price-${product.id}`}
      >
        {product.price}
      </p>
      <button
        onClick={handleAddToCart}
        className="mt-1 w-fit [font-family:'Poppins',Helvetica] font-medium italic text-[10px] text-[#564130] underline hover:text-[#6b5240] transition-colors"
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
  columns = 4,
  large = false,
}: {
  products: CategoryProduct[];
  slug: string;
  columns?: 2 | 3 | 4;
  large?: boolean;
}): JSX.Element {
  const gridClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2 max-w-[760px]"
      : columns === 3
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1110px]"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1110px]";

  return (
    <div className={`mx-auto mt-[44px] grid ${gridClass} justify-items-center gap-x-[44px] gap-y-[52px]`}>
      {products.map((product) => (
        <ProductCard key={`${slug}-${product.id}`} product={product} slug={slug} large={large} />
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: string }): JSX.Element {
  return (
    <h2 className="[font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-[27px] leading-none text-center [text-shadow:0px_1px_3px_#00000040]" data-testid={`text-section-${children.toLowerCase().replaceAll(" ", "-")}`}>
      {children}
    </h2>
  );
}

function ViewAllDivider({ slug }: { slug: string }): JSX.Element {
  return (
    <div className="mx-auto mt-[36px] flex w-[320px] items-center justify-center gap-4" data-testid={`divider-${slug}-view-all`}>
      <div className="h-px flex-1 bg-[#d2d2d2]" />
      <button className="[font-family:'Poppins',Helvetica] text-[11px] font-medium text-[#474747]" data-testid={`button-${slug}-view-all`}>
        VIEW ALL
      </button>
      <div className="h-px flex-1 bg-[#d2d2d2]" />
    </div>
  );
}

function Spotlight({
  spotlight,
  slug,
}: {
  spotlight: NonNullable<CategoryPageConfig["spotlight"]>;
  slug: string;
}): JSX.Element {
  return (
    <section className="mx-auto mt-[104px] flex max-w-[1120px] flex-col items-center justify-center gap-[48px] px-6 md:flex-row" data-testid={`section-${slug}-spotlight`}>
      <div className="h-[420px] w-full max-w-[600px] overflow-hidden rounded-[8px] bg-[#1b1b1b]">
        <img className="h-full w-full object-cover" src={spotlight.image} alt={spotlight.title} data-testid={`img-${slug}-spotlight`} />
      </div>
      <div className="w-full max-w-[420px]">
        <h3 className="[font-family:'Poppins',Helvetica] text-[38px] font-medium leading-[1.15] text-[#564130] [text-shadow:0px_1px_3px_#00000040]" data-testid={`text-${slug}-spotlight-title`}>
          {spotlight.title}
        </h3>
        <p className="mt-4 whitespace-pre-line [font-family:'Poppins',Helvetica] text-[17px] leading-[1.35] text-black" data-testid={`text-${slug}-spotlight-description`}>
          {spotlight.description}
        </p>
        <Button className="mt-6 h-[52px] rounded-[6px] bg-[#564130] px-8 [font-family:'Poppins',Helvetica] text-[12px] font-medium text-white shadow-[0px_4px_7.8px_#00000040] hover:bg-[#6b5240]" data-testid={`button-${slug}-spotlight-add-cart`}>
          ADD TO CART
        </Button>
      </div>
    </section>
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
        <section className="pt-[54px]" data-testid={`section-${config.slug}-hero`}>
          <h1
            className="mx-auto max-w-[820px] whitespace-pre-line px-6 text-center [font-family:'Poppins',Helvetica] text-[34px] font-normal italic leading-[1.08] text-[#564130] [text-shadow:0px_1px_3px_#00000040]"
            data-testid={`text-${config.slug}-heading`}
          >
            {config.heading}
          </h1>
          <div className="relative mt-[72px] h-[492px] w-full overflow-hidden bg-[#ebdfcd]">
            <CroppedDesignImage image={config.heroImage} alt={config.heroAlt} crop={config.heroCrop} />
          </div>
        </section>
        <section className="px-8 pt-[62px]" data-testid={`section-${config.slug}-products`}>
          <SectionTitle>{config.title}</SectionTitle>
          <ProductGrid products={config.products} slug={config.slug} columns={config.slug === "giftsets" ? 2 : 4} />
        </section>
        {config.comboProducts.length > 0 && (
          <section className="px-8 pt-[88px]" data-testid={`section-${config.slug}-combo-packs`}>
            <SectionTitle>Combo Packs</SectionTitle>
            <ProductGrid products={config.comboProducts} slug={`${config.slug}-combo`} />
          </section>
        )}
        {config.spotlight && <Spotlight spotlight={config.spotlight} slug={config.slug} />}
        <section className="px-8 pt-[96px] pb-[58px]" data-testid={`section-${config.slug}-explore`}>
          <SectionTitle>Explore more!</SectionTitle>
          <ProductGrid products={config.exploreProducts} slug={`${config.slug}-explore`} columns={3} large />
          <ViewAllDivider slug={config.slug} />
        </section>
        <div className="mx-auto w-full max-w-[720px] px-6 pb-[66px]">
          <NewsletterSubscriptionSection />
        </div>
      </main>
      <FooterContactSection />
    </div>
  );
};