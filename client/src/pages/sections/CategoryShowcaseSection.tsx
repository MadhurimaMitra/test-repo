const categories = [
  {
    type: "div",
    imgSrc: "/figmaAssets/dsc00650-1.svg",
    imgAlt: "Dsc",
    label: "BODYCARE",
  },
  {
    type: "img",
    imgSrc: "/figmaAssets/frame-239.svg",
    imgAlt: "Frame",
    label: "SKINCARE",
  },
  {
    type: "div",
    imgSrc: "/figmaAssets/dsc00858-1.svg",
    imgAlt: "Dsc",
    label: "GROOMING",
  },
  {
    type: "img",
    imgSrc: "/figmaAssets/frame-241.svg",
    imgAlt: "Frame",
    label: "HAIRCARE",
  },
];

export const CategoryShowcaseSection = (): JSX.Element => {
  return (
    <section className="flex flex-wrap w-full items-start gap-[42px]">
      {categories.map((category, index) => (
        <div
          key={index}
          className="inline-flex flex-col items-center gap-5 flex-[0_0_auto]"
        >
          {category.type === "div" ? (
            <div className="relative w-[285px] h-[454px] bg-[#ebdfcd] rounded-[250px] overflow-hidden">
              <img
                className="absolute top-0 left-0 w-[285px] h-[454px] object-cover"
                alt={category.imgAlt}
                src={category.imgSrc}
              />
            </div>
          ) : (
            <img
              className="w-[285px] h-[454px]"
              alt={category.imgAlt}
              src={category.imgSrc}
            />
          )}
          <span className="font-medium text-base [font-family:'Poppins',Helvetica] text-[#474747] text-center tracking-[0] leading-[normal]">
            {category.label}
          </span>
        </div>
      ))}
    </section>
  );
};
