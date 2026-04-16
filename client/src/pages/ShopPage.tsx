import { FooterContactSection } from "./sections/FooterContactSection";
import { TopNavigationSection } from "./sections/TopNavigationSection";
import {
  ProductGrid,
  categoryPageConfigs,
  categoryProducts,
} from "./CategoryProductPage";

const featuredProducts = [
  ...categoryProducts.bodycare.slice(0, 2),
  ...categoryProducts.skincare.slice(0, 2),
  ...categoryProducts.grooming.slice(0, 2),
  ...categoryProducts.haircare.slice(0, 2),
].map((product, index) => ({ ...product, id: index + 1 }));

export const ShopPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <TopNavigationSection />
      <main>
        <section className="relative min-h-[620px] flex items-center bg-[#ebdfcd] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-75"
            alt="Clenfay shop collection"
            src="/figmaAssets/cover-3-1.png"
            data-testid="img-shop-hero"
          />
          <div className="relative z-10 max-w-[620px] ml-auto mr-[9vw] px-8">
            <h1
              className="[font-family:'Poppins',Helvetica] font-medium text-white text-[56px] leading-[1.2] [text-shadow:0px_1px_3px_#00000040]"
              data-testid="text-shop-heading"
            >
              Shop luxury self-care for every routine
            </h1>
            <p
              className="mt-8 [font-family:'Poppins',Helvetica] text-white text-xl leading-8 max-w-[520px]"
              data-testid="text-shop-description"
            >
              Explore bodycare, skincare, grooming, haircare, and gift sets in one continuous collection.
            </p>
          </div>
        </section>
        <section className="py-20 px-8">
          <h2 className="[font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-[36px] leading-none text-center [text-shadow:0px_1px_3px_#00000040]">
            FEATURED PRODUCTS
          </h2>
          <ProductGrid products={featuredProducts} slug="shop" />
        </section>
        <section className="pb-24 px-8">
          <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(categoryPageConfigs).map((config) => (
              <a
                key={config.slug}
                href={`/${config.slug}`}
                className="group block rounded-[28px] overflow-hidden bg-[#f6f1e8] shadow-[2px_2px_8px_#00000026]"
                data-testid={`link-shop-${config.slug}`}
              >
                <div className="h-[300px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={config.heroAlt}
                    src={config.heroImage}
                  />
                </div>
                <div className="p-8">
                  <h3 className="[font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-[30px]">
                    {config.title}
                  </h3>
                  <p className="mt-3 [font-family:'Poppins',Helvetica] text-[#474747]">
                    {config.heading}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <FooterContactSection />
    </div>
  );
};