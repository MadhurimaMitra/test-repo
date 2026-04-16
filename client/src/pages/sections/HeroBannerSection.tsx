export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[876px] rounded-[0px_0px_500px_0px] overflow-hidden shadow-[0px_4px_4px_#00000040]">
      {/* Background cover image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Cover"
        src="/figmaAssets/cover-3-1.png"
      />
      {/* Text and CTA overlay positioned on the right side */}
      <div className="absolute top-[126px] left-[860px] w-[632px] flex flex-col gap-0">
        <h1 className="[text-shadow:0px_1px_3px_#00000040] [font-family:'Poppins',Helvetica] font-medium text-white text-[56px] tracking-[0] leading-[70.2px]">
          Luxury Skincare Meets <br />
          Gender-Inclusive Beauty
        </h1>
        {/* SHOP NOW link with arrow */}
        <div className="mt-[45px] flex items-center gap-2 w-[129px] h-6 cursor-pointer">
          <span className="[font-family:'Poppins',Helvetica] font-medium italic text-white text-base tracking-[0] leading-[normal]">
            SHOP NOW
          </span>
          <img
            className="mt-[4.6px] w-[31.79px] h-[14.73px]"
            alt="Vector"
            src="/figmaAssets/vector-4.svg"
          />
        </div>
      </div>
    </section>
  );
};
