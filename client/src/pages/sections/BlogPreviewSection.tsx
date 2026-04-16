export const BlogPreviewSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[52px] w-full py-20 px-6">
      {/* Section heading */}
      <h2 className="w-fit mt-[-1.00px] [text-shadow:0px_1px_3px_#00000040] italic text-[#564130] text-[32px] [font-family:'Poppins',Helvetica] font-normal tracking-[0] leading-[normal]">
        Our Blogs
      </h2>
      {/* Blog cards row */}
      <div className="flex flex-row items-center justify-center gap-[65px] flex-wrap">
        {/* Left blog card */}
        <div className="flex flex-col items-start gap-[43px]">
          <div className="w-[647px] h-[424px] bg-white rounded-[34px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Dsc"
              src="/figmaAssets/dsc09895-1.png"
            />
          </div>
          <p className="w-[578px] [font-family:'Poppins',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
            BLOG TITLE
          </p>
        </div>
        {/* Right blog card */}
        <img
          className="w-[625px] h-[493px]"
          alt="Frame"
          src="/figmaAssets/frame-15.svg"
        />
      </div>
    </section>
  );
};
