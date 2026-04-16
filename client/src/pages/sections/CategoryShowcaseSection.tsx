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
  const renderCategoryContent = (category: (typeof categories)[number]) => (
    <>
      {category.type === "div" ? (
        <div className="relative w-[285px] h-[454px] bg-[#ebdfcd] rounded-[250px] overflow-hidden">
          <img
            className="absolute top-0 left-0 w-[285px] h-[454px] object-cover"
            alt={category.imgAlt}
            src={category.imgSrc}
            data-testid={`img-category-${category.label.toLowerCase()}`}
          />
        </div>
      ) : (
        <img
          className="w-[285px] h-[454px]"
          alt={category.imgAlt}
          src={category.imgSrc}
          data-testid={`img-category-${category.label.toLowerCase()}`}
        />
      )}
      <span
        className="font-medium text-base [font-family:'Poppins',Helvetica] text-[#474747] text-center tracking-[0] leading-[normal]"
        data-testid={`text-category-${category.label.toLowerCase()}`}
      >
        {category.label}
      </span>
    </>
  );

  return (
    <section className="flex flex-wrap w-full items-start justify-center gap-[42px] px-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="inline-flex flex-col items-center gap-5 flex-[0_0_auto]"
        >
          {renderCategoryContent(category)}
        </div>
      ))}
    </section>
  );
};
