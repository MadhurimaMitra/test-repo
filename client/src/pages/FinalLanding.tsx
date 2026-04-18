import { Link } from "wouter";
import { BenefitHighlightsSection } from "./sections/BenefitHighlightsSection";
import { BestsellerGridSection } from "./sections/BestsellerGridSection";
import { BlogPreviewSection } from "./sections/BlogPreviewSection";
import { CategoryShowcaseSection } from "./sections/CategoryShowcaseSection";
import { FooterContactSection } from "./sections/FooterContactSection";
import { NewsletterSubscriptionSection } from "./sections/NewsletterSubscriptionSection";
import { PremiumDeviceSpotlightSection } from "./sections/PremiumDeviceSpotlightSection";
import { SkinToolSpotlightSection } from "./sections/SkinToolSpotlightSection";
import { TopNavigationSection } from "./sections/TopNavigationSection";

export const FinalLanding = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden flex flex-col">
      <TopNavigationSection />
      <section className="relative h-[832px] w-full overflow-hidden rounded-[0px_0px_410px_0px] shadow-[0px_4px_4px_#00000040]" data-testid="section-landing-hero">
        <img className="absolute inset-0 h-full w-full object-cover" alt="Luxury grooming care" src="/figmaAssets/cover-3-1.png" data-testid="img-landing-hero" />
        <div className="absolute right-[10%] top-[124px] max-w-[560px]">
          <h1 className="[font-family:'Poppins',Helvetica] text-[52px] font-medium leading-[1.18] text-white [text-shadow:0px_1px_3px_#00000040]" data-testid="text-landing-heading">
            Luxury Skincare Meets <br />
            Gender-Inclusive <br />
            Beauty
          </h1>
          <Link href="/shop" className="mt-[36px] flex w-fit items-center gap-3 [font-family:'Poppins',Helvetica] text-base font-medium italic text-white" data-testid="link-hero-shop-now">
            SHOP NOW
            <img className="h-[15px] w-[32px]" alt="" src="/figmaAssets/vector-4.svg" />
          </Link>
        </div>
      </section>
      <section className="pt-[64px] pb-[44px]" data-testid="section-landing-categories">
        <h2 className="text-center [font-family:'Poppins',Helvetica] text-[28px] font-normal italic text-[#564130] [text-shadow:0px_1px_3px_#00000040]" data-testid="text-premium-self-care">
          Premium self care solutions
        </h2>
        <div className="mt-[42px]">
          <CategoryShowcaseSection />
        </div>
      </section>
      <BenefitHighlightsSection />
      <section className="pt-[76px] pb-[44px]" data-testid="section-landing-bestsellers">
        <h2 className="mb-[42px] text-center [font-family:'Poppins',Helvetica] text-[34px] font-normal italic text-[#564130] [text-shadow:0px_1px_3px_#00000040]">
          Bestsellers
        </h2>
        <BestsellerGridSection />
        <div className="mx-auto mt-[36px] flex w-[320px] items-center justify-center gap-4">
          <div className="h-px flex-1 bg-[#d2d2d2]" />
          <button className="[font-family:'Poppins',Helvetica] text-[11px] font-medium text-[#474747]" data-testid="button-bestsellers-view-all">
            VIEW ALL
          </button>
          <div className="h-px flex-1 bg-[#d2d2d2]" />
        </div>
      </section>
      <PremiumDeviceSpotlightSection />
      <SkinToolSpotlightSection />
      <BlogPreviewSection />
      <div className="mx-auto w-full max-w-[720px] px-6 pb-[60px]">
        <NewsletterSubscriptionSection />
      </div>
      <FooterContactSection />
    </div>
  );
};
