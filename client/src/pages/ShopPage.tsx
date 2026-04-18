import { Link } from "wouter";
import shopNowFirstReference from "@assets/shop_now_1_1776516798115.png";
import shopNowSecondReference from "@assets/shop_now_2_1776516798116.png";
import { FigmaScreenshotSegment, navLinks } from "./FigmaReferencePage";

export const ShopPage = (): JSX.Element => {
  return (
    <main className="min-h-screen bg-white" data-testid="page-shop-now">
      <div className="relative mx-auto w-full max-w-[1512px] bg-white">
        <FigmaScreenshotSegment
          image={shopNowFirstReference}
          alt="Clenfay shop now page top sections"
          width={3024}
          top={0}
          bottom={6150}
        />
        <FigmaScreenshotSegment
          image={shopNowSecondReference}
          alt="Clenfay shop now page lower sections"
          width={3024}
          top={1510}
          bottom={6706}
        />
        {navLinks.map((link) => (
          <Link
            key={`${link.testId}-${link.href}`}
            href={link.href}
            aria-label={link.label}
            data-testid={link.testId}
            className="absolute block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#564130] focus-visible:outline-offset-2"
            style={{
              left: `${link.left}%`,
              top: `${link.top}%`,
              width: `${link.width}%`,
              height: `${link.height}%`,
            }}
          />
        ))}
      </div>
    </main>
  );
};