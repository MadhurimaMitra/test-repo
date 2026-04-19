import { useState } from "react";
import { useLocation } from "wouter";
import { TopNavigationSection } from "./sections/TopNavigationSection";
import { FooterContactSection } from "./sections/FooterContactSection";
import { useCart } from "@/context/CartContext";
import { Scissors } from "lucide-react";

type Step = 1 | 2 | 3 | 4 | 5;

/* ─── Progress stepper ─────────────────────────────────────── */
function Stepper({ step }: { step: Step }) {
  const contactDone = step >= 1;
  const addressDone = step >= 3;
  const paymentDone = step >= 4;

  const dot = (filled: boolean, label: string) => (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-3 h-3 rounded-full border-2 ${filled ? "bg-[#3d2b1a] border-[#3d2b1a]" : "bg-white border-[#aaa]"}`}
      />
      <span className="[font-family:'Poppins',Helvetica] text-[11px] text-[#444]">{label}</span>
    </div>
  );

  const line = (filled: boolean) => (
    <div className={`flex-1 h-[2px] mb-4 ${filled ? "bg-[#3d2b1a]" : "bg-[#ccc]"}`} />
  );

  return (
    <div className="flex items-center gap-0 w-full mb-6" data-testid="checkout-stepper">
      {dot(contactDone, "Contact")}
      {line(step >= 3)}
      {dot(addressDone, "Address")}
      {line(paymentDone)}
      {dot(paymentDone, "Payment")}
    </div>
  );
}

/* ─── Order summary (left column) ──────────────────────────── */
function OrderSummary({ step, coupon, setCoupon, couponApplied, onApplyCoupon }: {
  step: Step;
  coupon: string;
  setCoupon: (v: string) => void;
  couponApplied: boolean;
  onApplyCoupon: () => void;
}) {
  const { items } = useCart();
  const defaultImage = "/figmaAssets/bestseller-1-body-butter-1-2.png";

  return (
    <div className="w-[390px] flex-shrink-0 flex flex-col gap-4" data-testid="section-order-summary">
      <p className="[font-family:'Poppins',Helvetica] font-bold text-black text-[13px] tracking-widest uppercase mb-1">
        Order Summary
      </p>

      {/* Items box */}
      <div className="border border-[#d9d9d9] rounded-[10px] overflow-hidden p-4 flex flex-col gap-4" data-testid="order-items-list">
        {items.length === 0 ? (
          <p className="[font-family:'Poppins',Helvetica] text-[12px] text-[#888] text-center py-4">No items in cart</p>
        ) : (
          items.map((item, idx) => (
            <div key={`${item.category}-${item.id}`} className={`flex gap-4 ${idx < items.length - 1 ? "pb-4 border-b border-[#e5e5e5]" : ""}`} data-testid={`order-item-${item.id}`}>
              <div className="w-[90px] h-[80px] bg-[#c5d3cd] flex-shrink-0 rounded-[4px] overflow-hidden">
                <img src={item.image || defaultImage} alt={item.name} className="w-full h-full object-cover mix-blend-multiply opacity-70" />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <p className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[12px] leading-[1.4] max-w-[200px]">
                  {item.name}
                </p>
                <div className="flex gap-6 mt-1">
                  <span className="[font-family:'Poppins',Helvetica] text-[11px] text-[#444]">Quantity : {item.quantity}</span>
                  <span className="[font-family:'Poppins',Helvetica] text-[11px] text-[#444]">Price : Rs _ _ _ _</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Totals box */}
      <div className="border border-[#d9d9d9] rounded-[10px] p-4 flex flex-col gap-2" data-testid="order-totals">
        <div className="flex justify-between">
          <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#333]">Subtotal</span>
          <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#333]">Rs _ _ _</span>
        </div>
        <div className="flex justify-between">
          <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#333]">Shipping</span>
          <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#888]">To be calculated</span>
        </div>
        {couponApplied && (
          <div className="flex justify-between">
            <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#333]">Coupon Discount</span>
            <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#333]">-Rs 200</span>
          </div>
        )}
        <div className="flex justify-between border-t border-[#e5e5e5] pt-2 mt-1">
          <span className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[13px]">Total</span>
          <span className="[font-family:'Poppins',Helvetica] font-bold text-[#3d2b1a] text-[13px]">Rs _ _ _</span>
        </div>
      </div>

      {/* Coupons box */}
      <div className="border border-[#d9d9d9] rounded-[10px] p-4" data-testid="section-coupons">
        {couponApplied ? (
          <div className="flex items-center gap-2">
            <Scissors size={14} className="text-[#3d2b1a]" />
            <span className="[font-family:'Poppins',Helvetica] text-[12px] font-semibold text-[#3d2b1a]">FLAT200 Applied!</span>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 cursor-pointer">
              <Scissors size={14} className="text-[#444]" />
              <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#444]">Apply Coupons</span>
            </div>
            {step >= 3 && (
              <div className="flex gap-2 mt-1">
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1 border border-[#ccc] rounded-[6px] px-3 py-1.5 [font-family:'Poppins',Helvetica] text-[11px] focus:outline-none focus:border-[#3d2b1a]"
                  data-testid="input-coupon"
                />
                <button
                  onClick={onApplyCoupon}
                  className="px-3 py-1.5 bg-[#3d2b1a] text-white [font-family:'Poppins',Helvetica] text-[11px] rounded-[6px] hover:bg-[#564130] transition-colors"
                  data-testid="button-apply-coupon"
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Step 1: Enter Phone ───────────────────────────────────── */
function StepContact({ onNext }: { onNext: (phone: string) => void }) {
  const [phone, setPhone] = useState("");
  const [offers, setOffers] = useState(false);
  return (
    <div className="flex-1 flex flex-col items-end" data-testid="step-contact">
      <Stepper step={1} />
      <div className="w-full border border-[#d9d9d9] rounded-[12px] p-8 flex flex-col gap-5 bg-white shadow-sm">
        <p className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[16px] text-center">
          Enter your Mobile Number
        </p>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Your Number..."
          className="w-full h-[48px] bg-[#e8e8e8] rounded-full px-5 [font-family:'Poppins',Helvetica] text-[13px] text-[#555] focus:outline-none focus:ring-2 focus:ring-[#3d2b1a33]"
          data-testid="input-phone"
        />
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={offers}
            onChange={(e) => setOffers(e.target.checked)}
            className="w-4 h-4 border border-[#aaa] rounded-[3px] accent-[#3d2b1a]"
            data-testid="checkbox-offers"
          />
          <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#444]">Send me order updates and offers</span>
        </label>
        <button
          onClick={() => phone.length >= 6 && onNext(phone)}
          className="w-full h-[46px] bg-[#3d2b1a] hover:bg-[#564130] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[13px] rounded-full"
          data-testid="button-get-otp"
        >
          GET OTP
        </button>
      </div>
    </div>
  );
}

/* ─── Step 2: Enter OTP ─────────────────────────────────────── */
function StepOtp({ phone, onNext }: { phone: string; onNext: () => void }) {
  const [otp, setOtp] = useState(["", "", "", ""]);

  function handleChange(val: string, idx: number) {
    const newOtp = [...otp];
    newOtp[idx] = val.slice(-1);
    setOtp(newOtp);
    if (val && idx < 3) {
      document.getElementById(`otp-${idx + 1}`)?.focus();
    }
  }

  return (
    <div className="flex-1 flex flex-col items-end" data-testid="step-otp">
      <Stepper step={2} />
      <div className="w-full border border-[#d9d9d9] rounded-[12px] p-8 flex flex-col gap-5 bg-white shadow-sm items-center">
        <div className="text-center">
          <p className="[font-family:'Poppins',Helvetica] text-[13px] text-[#444]">OTP sent to</p>
          <p className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[14px]">+91 {phone}</p>
        </div>
        <p className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[15px]">Enter OTP</p>
        <div className="flex gap-3" data-testid="otp-inputs">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              id={`otp-${idx}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              className="w-12 h-12 border border-[#ccc] bg-[#e8e8e8] rounded-[6px] text-center [font-family:'Poppins',Helvetica] text-[16px] font-semibold text-black focus:outline-none focus:border-[#3d2b1a]"
              data-testid={`input-otp-${idx}`}
            />
          ))}
        </div>
        <button
          onClick={onNext}
          className="w-full h-[46px] bg-[#3d2b1a] hover:bg-[#564130] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[13px] rounded-full"
          data-testid="button-otp-continue"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}

/* ─── Step 3: Address ───────────────────────────────────────── */
function StepAddress({ onNext }: { onNext: () => void }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", address: "", city: "", state: "", pin: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const inputClass = "w-full h-[44px] bg-[#e8e8e8] rounded-full px-5 [font-family:'Poppins',Helvetica] text-[12px] text-[#555] placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-[#3d2b1a33]";

  return (
    <div className="flex-1 flex flex-col items-end" data-testid="step-address">
      <Stepper step={3} />
      <div className="w-full border border-[#d9d9d9] rounded-[12px] p-7 flex flex-col gap-4 bg-white shadow-sm">
        <div className="flex gap-3">
          <input value={form.firstName} onChange={set("firstName")} placeholder="First Name" className={inputClass} data-testid="input-first-name" />
          <input value={form.lastName} onChange={set("lastName")} placeholder="Last Name" className={inputClass} data-testid="input-last-name" />
        </div>
        <input value={form.address} onChange={set("address")} placeholder="Address" className={inputClass} data-testid="input-address" />
        <div className="flex gap-3">
          <input value={form.city} onChange={set("city")} placeholder="City" className={inputClass} data-testid="input-city" />
          <input value={form.state} onChange={set("state")} placeholder="State" className={inputClass} data-testid="input-state" />
          <input value={form.pin} onChange={set("pin")} placeholder="PIN Code" className={inputClass} data-testid="input-pin" />
        </div>
        <button
          onClick={onNext}
          className="w-full h-[46px] bg-[#3d2b1a] hover:bg-[#564130] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[13px] rounded-full mt-2"
          data-testid="button-continue-to-payment"
        >
          CONTINUE TO PAYMENT
        </button>
      </div>
    </div>
  );
}

/* ─── Step 4: Payment ───────────────────────────────────────── */
function StepPayment({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    {
      id: "card",
      label: "Credit or Debit Card",
      icons: (
        <div className="flex gap-1 items-center">
          <span className="text-[#1a1f71] [font-family:'Poppins',Helvetica] font-bold text-[11px] border border-[#1a1f71] px-1.5 py-0.5 rounded-[3px]">VISA</span>
          <div className="flex">
            <div className="w-5 h-5 rounded-full bg-[#eb001b] opacity-90" />
            <div className="w-5 h-5 rounded-full bg-[#f79e1b] -ml-2 opacity-90" />
          </div>
        </div>
      ),
    },
    {
      id: "upi",
      label: "UPI Payment",
      icons: (
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6 rounded-full bg-[#5f259f] flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">Pe</span>
          </div>
          <div className="w-6 h-6 rounded-full bg-white border border-[#eee] flex items-center justify-center">
            <span className="text-[10px] font-bold" style={{ background: "linear-gradient(135deg,#4285F4,#EA4335,#FBBC05,#34A853)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>G</span>
          </div>
        </div>
      ),
    },
    {
      id: "cod",
      label: "Cash on Delivery",
      icons: null,
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-end" data-testid="step-payment">
      <Stepper step={4} />
      <div className="w-full border border-[#d9d9d9] rounded-[12px] p-6 flex flex-col gap-4 bg-white shadow-sm">
        <div>
          <p className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[15px]">Payment Method</p>
          <p className="[font-family:'Poppins',Helvetica] text-[12px] text-[#666] mt-0.5">How would you like to pay?</p>
        </div>
        <div className="flex flex-col" data-testid="payment-options">
          {options.map((opt, idx) => (
            <button
              key={opt.id}
              onClick={() => { setSelected(opt.id); setTimeout(onNext, 300); }}
              className={`flex items-center justify-between px-4 py-3.5 border-b border-[#e5e5e5] last:border-b-0 hover:bg-[#faf8f5] transition-colors text-left ${selected === opt.id ? "bg-[#faf8f5]" : ""}`}
              data-testid={`payment-option-${opt.id}`}
            >
              <span className="[font-family:'Poppins',Helvetica] text-[13px] text-black">{opt.label}</span>
              {opt.icons}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Step 5: Confirmation overlay ─────────────────────────── */
function StepConfirmation() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" data-testid="step-confirmation">
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[3px]" />
      {/* Modal */}
      <div className="relative bg-white rounded-[12px] shadow-[0px_4px_30px_#00000020] px-14 py-10 flex flex-col items-center gap-3 max-w-[420px] w-full mx-6" data-testid="modal-confirmation">
        <img
          src="/figmaAssets/qfxbbmnny1csz5zkciarba7rzesqduusvgtcmz2s-1-1.png"
          alt="Clenfay"
          className="w-[52px] h-[46px] object-contain mb-1"
        />
        <p className="[font-family:'Poppins',Helvetica] italic text-black text-[15px] text-center leading-[1.5]">
          Thanks for waiting!
        </p>
        <p className="[font-family:'Poppins',Helvetica] italic text-black text-[14px] text-center leading-[1.5]">
          You will be redirected to the payment window shortly
        </p>
      </div>
    </div>
  );
}

/* ─── Main page ─────────────────────────────────────────────── */
export function CheckoutPage() {
  const [step, setStep] = useState<Step>(1);
  const [phone, setPhone] = useState("");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  function handleApplyCoupon() {
    if (coupon.trim()) setCouponApplied(true);
  }

  return (
    <div className="min-h-screen bg-white">
      <TopNavigationSection />

      {step === 5 && <StepConfirmation />}

      <main className="max-w-[960px] mx-auto px-6 py-10">
        <div className="flex gap-10 items-start">
          {/* Left: Order summary */}
          <OrderSummary
            step={step}
            coupon={coupon}
            setCoupon={setCoupon}
            couponApplied={couponApplied}
            onApplyCoupon={handleApplyCoupon}
          />

          {/* Right: Step content */}
          <div className="flex-1 flex flex-col">
            {step === 1 && (
              <StepContact onNext={(p) => { setPhone(p); setStep(2); }} />
            )}
            {step === 2 && (
              <StepOtp phone={phone} onNext={() => setStep(3)} />
            )}
            {step === 3 && (
              <StepAddress onNext={() => setStep(4)} />
            )}
            {step === 4 && (
              <StepPayment onNext={() => setStep(5)} />
            )}
            {step === 5 && (
              /* Keep step 4 visible behind the overlay */
              <StepPayment onNext={() => {}} />
            )}
          </div>
        </div>
      </main>

      <FooterContactSection />
    </div>
  );
}
