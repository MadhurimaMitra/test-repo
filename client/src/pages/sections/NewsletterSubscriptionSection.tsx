import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterSubscriptionSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-4 py-4">
      {/* Newsletter heading */}
      <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
        Subscribe to our newsletter for regular updates about <br />
        Offers, Coupons &amp; more
      </p>
      {/* Email input and subscribe button row */}
      <div className="flex flex-row gap-[30px] items-center w-full">
        {/* Email input field */}
        <div className="flex-1 h-[62px] bg-[#d9d9d9] rounded-3xl border-2 border-solid border-[#0000004c] shadow-[2px_2px_4px_#5641301a] flex items-center px-6">
          <Input
            className="bg-transparent border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto [font-family:'Poppins',Helvetica] font-medium italic text-[#828282] text-lg tracking-[0] leading-[normal] placeholder:text-[#828282] placeholder:italic placeholder:[font-family:'Poppins',Helvetica] placeholder:font-medium placeholder:text-lg"
            placeholder="Your Email Address"
            data-testid="input-newsletter-email"
          />
        </div>
        {/* Subscribe button */}
        <Button className="h-auto w-[154px] min-h-[60px] px-[34px] py-[18px] bg-[#564130] rounded-[13px] shadow-[0px_4px_7.8px_#00000040] hover:bg-[#6b5040] [font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[normal]" data-testid="button-newsletter-subscribe">
          SUBSCRIBE
        </Button>
      </div>
    </section>
  );
};
