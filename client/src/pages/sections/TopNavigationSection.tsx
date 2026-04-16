import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "BODYCARE" },
  { label: "SKINCARE" },
  { label: "GROOMING" },
  { label: "HAIRCARE" },
  { label: "GIFT SETS" },
];

export const TopNavigationSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="w-full h-[106px] flex items-center bg-white shadow-[0px_4px_8.3px_#00000040] px-[50px]">
      {/* Logo */}
      <img
        className="w-[59px] h-[52px] object-cover flex-shrink-0"
        alt="Img"
        src="/figmaAssets/qfxbbmnny1csz5zkciarba7rzesqduusvgtcmz2s-1-1.png"
      />
      {/* Navigation Items */}
      <div className="flex items-center ml-[353px] gap-[27px]">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`w-[129px] h-6 flex items-center justify-center font-b1 text-[length:var(--b1-font-size)] font-[number:var(--b1-font-weight)] text-[#474747] text-center tracking-[var(--b1-letter-spacing)] leading-[var(--b1-line-height)] [font-style:var(--b1-font-style)] cursor-pointer hover:text-[#564130] transition-colors bg-transparent border-none outline-none ${
              activeItem === item.label ? "text-[#564130]" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      {/* Sign Up Button */}
      <Button className="ml-[39px] w-[131px] h-[60px] flex-shrink-0 inline-flex items-center justify-center gap-2.5 px-[34px] py-[18px] bg-[#564130] rounded-[13px] overflow-hidden shadow-[0px_4px_7.8px_#00000040] hover:bg-[#6b5240] border-none h-auto">
        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[normal]">
          SIGN UP
        </span>
      </Button>
      {/* Profile Icon */}
      <img
        className="w-[33px] h-[33px] ml-12 object-cover flex-shrink-0"
        alt="Person"
        src="/figmaAssets/person-12259244-1.png"
      />
    </nav>
  );
};
