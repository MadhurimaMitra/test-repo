const benefits = [
  {
    imgSrc: "/figmaAssets/group-38.svg",
    imgAlt: "Group",
    imgClass: "w-[110.57px] h-[109.31px]",
    gap: "gap-7",
    textWidth: "w-[244px]",
    text: "With every product we commit 100% transparency with the ingredients used.",
  },
  {
    imgSrc: "/figmaAssets/group-42.svg",
    imgAlt: "Group",
    imgClass: "w-[144.94px] h-[128.46px]",
    gap: "gap-1.5",
    textWidth: "w-[285px]",
    text: "We curate luxurious products to take care of your skin, because skin issues have no gender.",
  },
  {
    imgSrc: "/figmaAssets/layer-1.svg",
    imgAlt: "Layer",
    imgClass: "w-[102.29px] h-[126.34px]",
    gap: "gap-[23px]",
    textWidth: "w-[229px]",
    text: "Made after consultation from experts in derma and ayurveda",
  },
];

export const BenefitHighlightsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#564130] py-[55px]">
      <div className="flex flex-wrap items-center justify-center gap-[168px]">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`inline-flex flex-col items-center ${benefit.gap} flex-[0_0_auto]`}
          >
            <img
              className={benefit.imgClass}
              alt={benefit.imgAlt}
              src={benefit.imgSrc}
            />
            <p
              className={`${benefit.textWidth} [font-family:'Poppins',Helvetica] font-normal italic text-white text-[15px] text-center tracking-[0] leading-[normal]`}
            >
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
