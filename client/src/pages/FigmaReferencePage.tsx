import { Link } from "wouter";

type NavOverlay = {
  href: string;
  label: string;
  testId: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

type ScreenshotPageProps = {
  image: string;
  alt: string;
  width: number;
  height: number;
  extraLinks?: NavOverlay[];
};

type ScreenshotSegmentProps = {
  image: string;
  alt: string;
  width: number;
  top: number;
  bottom: number;
};

const navLinks: NavOverlay[] = [
  { href: "/", label: "Home", testId: "link-logo-home", left: 2.8, top: 0.18, width: 5.2, height: 0.48 },
  { href: "/bodycare", label: "Bodycare", testId: "link-nav-bodycare", left: 39.2, top: 0.17, width: 6.4, height: 0.42 },
  { href: "/skincare", label: "Skincare", testId: "link-nav-skincare", left: 48.1, top: 0.17, width: 6, height: 0.42 },
  { href: "/grooming", label: "Grooming", testId: "link-nav-grooming", left: 56.6, top: 0.17, width: 7.1, height: 0.42 },
  { href: "/haircare", label: "Haircare", testId: "link-nav-haircare", left: 66, top: 0.17, width: 6.1, height: 0.42 },
  { href: "/giftsets", label: "Gift Sets", testId: "link-nav-giftsets", left: 74.2, top: 0.17, width: 5.8, height: 0.42 },
  { href: "/shop", label: "Shop Now", testId: "link-nav-shop", left: 83.2, top: 0.07, width: 7.9, height: 0.66 },
];

export function FigmaReferencePage({
  image,
  alt,
  width,
  height,
  extraLinks = [],
}: ScreenshotPageProps): JSX.Element {
  return (
    <main className="min-h-screen bg-white" data-testid="page-figma-reference">
      <div className="relative mx-auto w-full max-w-[1512px] bg-white">
        <img
          src={image}
          alt={alt}
          className="block w-full h-auto select-none"
          draggable={false}
          data-testid="img-figma-reference-page"
        />
        {[...navLinks, ...extraLinks].map((link) => (
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
}

export function FigmaScreenshotSegment({
  image,
  alt,
  width,
  top,
  bottom,
}: ScreenshotSegmentProps): JSX.Element {
  const segmentHeight = bottom - top;

  return (
    <div
      className="relative overflow-hidden"
      style={{ aspectRatio: `${width} / ${segmentHeight}` }}
      data-testid="section-shop-screenshot-segment"
    >
      <img
        src={image}
        alt={alt}
        className="absolute left-0 block w-full h-auto select-none"
        draggable={false}
        style={{ top: `${(-top / segmentHeight) * 100}%` }}
      />
    </div>
  );
}

export { navLinks };