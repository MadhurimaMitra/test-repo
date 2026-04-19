import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navItems = [
  { label: "BODYCARE", href: "/bodycare" },
  { label: "SKINCARE", href: "/skincare" },
  { label: "GROOMING", href: "/grooming" },
  { label: "HAIRCARE", href: "/haircare" },
  { label: "GIFT SETS", href: "/giftsets" },
];

export const TopNavigationSection = (): JSX.Element => {
  const [location] = useLocation();
  const { totalCount } = useCart();

  return (
    <nav className="w-full min-h-[106px] flex items-center justify-between gap-8 bg-white shadow-[0px_4px_8.3px_#00000040] px-[50px]">
      {/* Logo */}
      <Link
        href="/"
        className="block flex-shrink-0"
        data-testid="link-home-logo"
      >
        <img
          className="w-[59px] h-[52px] object-cover"
          alt="Clenfay"
          src="/figmaAssets/qfxbbmnny1csz5zkciarba7rzesqduusvgtcmz2s-1-1.png"
          data-testid="img-logo"
        />
      </Link>
      {/* Navigation Items */}
      <div className="flex flex-1 items-center justify-center gap-[27px]">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`w-[129px] h-6 flex items-center justify-center font-b1 text-[length:var(--b1-font-size)] font-[number:var(--b1-font-weight)] text-center tracking-[var(--b1-letter-spacing)] leading-[var(--b1-line-height)] [font-style:var(--b1-font-style)] cursor-pointer hover:text-[#564130] transition-colors ${
              location === item.href ? "text-[#564130]" : "text-[#474747]"
            }`}
            data-testid={`link-nav-${item.label.toLowerCase().replace(" ", "-")}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      {/* Sign Up Button + Cart + Profile */}
      <div className="flex items-center gap-6 flex-shrink-0">
        <Link href="/login">
          <Button
            className="w-[131px] h-[60px] flex-shrink-0 inline-flex items-center justify-center gap-2.5 px-[34px] py-[18px] bg-[#564130] rounded-[13px] overflow-hidden shadow-[0px_4px_7.8px_#00000040] hover:bg-[#6b5240] border-none"
            data-testid="button-sign-up"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[normal]">
              SIGN UP
            </span>
          </Button>
        </Link>
        {/* Cart Icon */}
        <Link href="/cart" className="relative flex-shrink-0" data-testid="link-cart">
          <ShoppingCart className="w-7 h-7 text-[#564130] hover:text-[#6b5240] transition-colors" strokeWidth={1.5} />
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] bg-[#564130] text-white rounded-full [font-family:'Poppins',Helvetica] text-[10px] font-semibold flex items-center justify-center px-1" data-testid="text-cart-count">
              {totalCount}
            </span>
          )}
        </Link>
        {/* Profile Icon */}
        <img
          className="w-[33px] h-[33px] object-cover flex-shrink-0"
          alt="Person"
          src="/figmaAssets/person-12259244-1.png"
          data-testid="img-profile"
        />
      </div>
    </nav>
  );
};
