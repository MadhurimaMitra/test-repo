import shopNowFirstReference from "@assets/shop_now_1_1776516798115.png";
import { categoryProducts, ProductGrid } from "./CategoryProductPage";
import { FooterContactSection } from "./sections/FooterContactSection";
import { NewsletterSubscriptionSection } from "./sections/NewsletterSubscriptionSection";
import { TopNavigationSection } from "./sections/TopNavigationSection";

const comboProducts = Array.from({ length: 8 }, (_, index) => ({
  ...categoryProducts.bodycare[index % categoryProducts.bodycare.length],
  id: index + 1,
}));

function CroppedShopHero(): JSX.Element {
  const cropTop = 250;
  const cropBottom = 1050;
  const cropHeight = cropBottom - cropTop;

  return (
    <div className="relative h-[270px] w-full overflow-hidden bg-[#decfc7]" data-testid="section-shop-hero">
      <img
        src={shopNowFirstReference}
        alt="One stop shop for all expert solutions"
        className="absolute left-0 w-full select-none"
        draggable={false}
        style={{ top: `${(-cropTop / cropHeight) * 100}%` }}
        data-testid="img-shop-hero"
      />
    </div>
  );
}

function ShopControls(): JSX.Element {
  return (
    <section className="mx-auto flex max-w-[1250px] flex-wrap items-center justify-between gap-8 px-8 py-[32px]" data-testid="section-shop-controls">
      <label className="flex h-[40px] w-full max-w-[420px] items-center rounded-[3px] border border-[#9d9d9d] bg-[#d9d9d9] px-4" data-testid="label-shop-search">
        <span className="mr-2 text-[#828282]">⌕</span>
        <input className="w-full bg-transparent [font-family:'Poppins',Helvetica] text-[13px] italic text-[#474747] outline-none placeholder:text-[#828282]" placeholder="Search" data-testid="input-shop-search" />
      </label>
      <select className="h-[40px] w-[220px] rounded-[3px] border border-[#eeeeee] bg-white px-4 [font-family:'Poppins',Helvetica] text-[13px] text-[#474747] shadow-[1px_1px_8px_#00000012]" data-testid="select-shop-category">
        <option>Category</option>
      </select>
      <select className="h-[40px] w-[220px] rounded-[3px] border border-[#eeeeee] bg-white px-4 [font-family:'Poppins',Helvetica] text-[13px] text-[#474747] shadow-[1px_1px_8px_#00000012]" data-testid="select-shop-sort">
        <option>Highest rated</option>
      </select>
      <div className="flex h-[40px] overflow-hidden rounded-[3px] border border-[#d8d8d8] [font-family:'Poppins',Helvetica] text-[13px]" data-testid="pagination-shop">
        {["Previous", "1", "2", "3", "Next"].map((item) => (
          <button key={item} className={`min-w-[54px] px-4 ${item === "1" ? "bg-[#564130] text-white" : "bg-white text-[#474747]"}`} data-testid={`button-shop-page-${item.toLowerCase()}`}>
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

function ShopSection({
  title,
  products,
  columns = 4,
}: {
  title: string;
  products: typeof categoryProducts.bodycare;
  columns?: 2 | 4;
}): JSX.Element {
  return (
    <section className="px-8 pt-[86px]" data-testid={`section-shop-${title.toLowerCase().replaceAll(" ", "-")}`}>
      <h2 className="text-center [font-family:'Poppins',Helvetica] text-[24px] font-normal italic text-[#564130] [text-shadow:0px_1px_3px_#00000040]" data-testid={`text-shop-${title.toLowerCase().replaceAll(" ", "-")}`}>
        {title}
      </h2>
      <ProductGrid products={products} slug={`shop-${title.toLowerCase().replaceAll(" ", "-")}`} columns={columns} />
    </section>
  );
}

export const ShopPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white overflow-hidden" data-testid="page-shop-now">
      <TopNavigationSection />
      <main>
        <CroppedShopHero />
        <ShopControls />
        <ShopSection title="HAIRCARE" products={categoryProducts.haircare.slice(0, 4)} />
        <ShopSection title="GROOMING" products={categoryProducts.grooming.slice(0, 4)} />
        <ShopSection title="SKINCARE" products={categoryProducts.skincare.slice(0, 4)} />
        <ShopSection title="BODYCARE" products={categoryProducts.bodycare.slice(0, 8)} />
        <ShopSection title="ACCESORIES" products={categoryProducts.bodycare.slice(0, 2)} columns={2} />
        <ShopSection title="COMBO PACKS" products={comboProducts} />
        <ShopSection title="GIFT SETS" products={categoryProducts.giftsets} />
        <div className="mx-auto w-full max-w-[720px] px-6 py-[72px]">
          <NewsletterSubscriptionSection />
        </div>
      </main>
      <FooterContactSection />
    </div>
  );
};