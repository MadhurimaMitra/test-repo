import { Button } from "@/components/ui/button";

export const PremiumDeviceSpotlightSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center justify-center gap-[70px] px-6 py-8">
      {/* Product image with rounded bottom-right corner */}
      <div
        className="relative flex-shrink-0 w-[715px] h-[794px] rounded-[0px_0px_400px_0px]"
        style={{
          background: "url(../figmaAssets/frame-4-1.png) 50% 50% / cover",
        }}
      />
      {/* Product details */}
      <div className="flex flex-col w-[426px] items-start gap-4">
        {/* Product title */}
        <h2 className="mt-[-1.00px] [text-shadow:0px_1px_3px_#00000040] [font-family:'Poppins',Helvetica] font-medium text-[#564130] text-[40px] tracking-[0] leading-[50.2px] whitespace-nowrap">
          Ionic Facial steamer
        </h2>
        {/* Product description */}
        <p className="w-[426px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
          Spa Level Rejuvenation at home.
          <br />
          <br />
          Produces tiny ionic steam particles which penetrate the skin 10x more
          than regular steam.
        </p>
        {/* Add to cart button */}
        <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-[34px] py-[18px] bg-[#564130] rounded-[13px] overflow-hidden shadow-[0px_4px_7.8px_#00000040] hover:bg-[#6b5040] [font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[normal]">
          ADD TO CART
        </Button>
      </div>
    </section>
  );
};
