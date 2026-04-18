import landingReference from "@assets/landing_1776516798114.png";
import { FigmaReferencePage } from "./FigmaReferencePage";

export const FinalLanding = (): JSX.Element => {
  return (
    <FigmaReferencePage
      image={landingReference}
      alt="Clenfay landing page design"
      width={1512}
      height={6206}
      extraLinks={[
        {
          href: "/shop",
          label: "Shop Now",
          testId: "link-hero-shop-now",
          left: 59.8,
          top: 6.95,
          width: 10,
          height: 0.8,
        },
      ]}
    />
  );
};
