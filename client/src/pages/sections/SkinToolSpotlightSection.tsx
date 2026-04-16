import { Button } from "@/components/ui/button";

export const SkinToolSpotlightSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center gap-[50px] py-8 px-4">
      {/* Text content column */}
      <div className="flex flex-col flex-shrink-0 w-[426px] items-start gap-[11px]">
        <h2 className="mt-[-1.00px] [text-shadow:0px_1px_3px_#00000040] [font-family:'Poppins',Helvetica] font-medium text-[#564130] text-[40px] tracking-[0] leading-[50.2px] whitespace-nowrap">
          Revival Derma Roller
        </h2>
        <p className="w-[426px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
          Boosts collagen production in your skin.
          <br />
          <br />
          Visible reduction in acne scars, fine lines, wrinkles and age spots
        </p>
        <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-[34px] py-[18px] bg-[#564130] rounded-[13px] overflow-hidden shadow-[0px_4px_7.8px_#00000040] hover:bg-[#6b5040] mt-1">
          <span className="mt-[-0.50px] [font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[normal]">
            ADD TO CART
          </span>
        </Button>
      </div>
      {/* Product image column */}
      <div className="w-[715px] h-[794px] flex-shrink-0 rounded-[0px_0px_0px_400px] relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          alt="Dsc"
          src="/figmaAssets/dsc00279-1.png"
        />
      </div>
    </section>
  );
};
