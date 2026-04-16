import { BenefitHighlightsSection } from "./sections/BenefitHighlightsSection";
import { BestsellerGridSection } from "./sections/BestsellerGridSection";
import { BlogPreviewSection } from "./sections/BlogPreviewSection";
import { CategoryShowcaseSection } from "./sections/CategoryShowcaseSection";
import { FooterContactSection } from "./sections/FooterContactSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { NewsletterSubscriptionSection } from "./sections/NewsletterSubscriptionSection";
import { PremiumDeviceSpotlightSection } from "./sections/PremiumDeviceSpotlightSection";
import { SkinToolSpotlightSection } from "./sections/SkinToolSpotlightSection";
import { TopNavigationSection } from "./sections/TopNavigationSection";

export const FinalLanding = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden flex flex-col">
      {/* Top Navigation */}
      <TopNavigationSection />
      {/* Hero Banner with background image */}
      <div className="relative w-full">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Slice"
          src="/figmaAssets/slice-1.svg"
        />
        <HeroBannerSection />
      </div>
      {/* "Premium self care solutions" heading */}
      <div className="w-full flex justify-center pt-16 pb-10">
        <span className="[text-shadow:0px_1px_3px_#00000040] [font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-[32px] tracking-[0] leading-[normal]">
          Premium self care solutions
        </span>
      </div>
      {/* Category Showcase */}
      <CategoryShowcaseSection />
      {/* Benefit Highlights */}
      <div className="mt-20">
        <BenefitHighlightsSection />
      </div>
      {/* "Bestsellers" heading */}
      <div className="w-full flex justify-center pt-20 pb-10">
        <span className="[text-shadow:0px_1px_3px_#00000040] [font-family:'Poppins',Helvetica] font-normal italic text-[#564130] text-5xl tracking-[0] leading-[normal]">
          Bestsellers
        </span>
      </div>
      {/* Bestseller Grid */}
      <BestsellerGridSection />
      {/* VIEW ALL divider */}
      <div className="w-full flex items-center justify-center pt-10 pb-20">
        <div className="flex items-center gap-4 w-[410px]">
          <img
            className="flex-1 h-px"
            alt="Line"
            src="/figmaAssets/line-4.svg"
          />
          <span className="font-medium text-xl [font-family:'Poppins',Helvetica] text-[#474747] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            VIEW ALL
          </span>
          <img
            className="flex-1 h-px"
            alt="Line"
            src="/figmaAssets/line-4.svg"
          />
        </div>
      </div>
      {/* Premium Device Spotlight */}
      <PremiumDeviceSpotlightSection />
      {/* Skin Tool Spotlight */}
      <SkinToolSpotlightSection />
      {/* Blog Preview */}
      <BlogPreviewSection />
      {/* Newsletter Subscription */}
      <NewsletterSubscriptionSection />
      {/* Footer Contact */}
      <FooterContactSection />
    </div>
  );
};
