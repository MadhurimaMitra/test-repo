import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { searchProducts, type SearchProduct } from "@/data/allProducts";

const navItems = [
  { label: "BODYCARE", href: "/bodycare" },
  { label: "SKINCARE", href: "/skincare" },
  { label: "GROOMING", href: "/grooming" },
  { label: "HAIRCARE", href: "/haircare" },
  { label: "GIFT SETS", href: "/giftsets" },
];

export const TopNavigationSection = (): JSX.Element => {
  const [location, navigate] = useLocation();
  const { totalCount } = useCart();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<SearchProduct[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    setActiveIdx(-1);
    const results = searchProducts(val);
    setSuggestions(results);
    setOpen(results.length > 0);
  }

  function handleSelect(p: SearchProduct) {
    setQuery("");
    setSuggestions([]);
    setOpen(false);
    navigate(`/product/${p.category}/${p.id}`);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIdx >= 0) {
      handleSelect(suggestions[activeIdx]);
    } else if (e.key === "Escape") {
      setOpen(false);
      setQuery("");
    }
  }

  function handleClear() {
    setQuery("");
    setSuggestions([]);
    setOpen(false);
    inputRef.current?.focus();
  }

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const categoryLabel: Record<string, string> = {
    bodycare: "Bodycare",
    skincare: "Skincare",
    grooming: "Grooming",
    haircare: "Haircare",
    giftsets: "Gift Sets",
  };

  return (
    <nav className="w-full min-h-[106px] flex items-center justify-between gap-6 bg-white shadow-[0px_4px_8.3px_#00000040] px-[50px]">
      {/* Logo */}
      <Link href="/" className="block flex-shrink-0" data-testid="link-home-logo">
        <img
          className="w-[59px] h-[52px] object-cover"
          alt="Clenfay"
          src="/figmaAssets/qfxbbmnny1csz5zkciarba7rzesqduusvgtcmz2s-1-1.png"
          data-testid="img-logo"
        />
      </Link>

      {/* Navigation Items */}
      <div className="flex flex-1 items-center justify-center gap-[18px]">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`h-6 flex items-center justify-center font-b1 text-[length:var(--b1-font-size)] font-[number:var(--b1-font-weight)] text-center tracking-[var(--b1-letter-spacing)] leading-[var(--b1-line-height)] [font-style:var(--b1-font-style)] cursor-pointer hover:text-[#564130] transition-colors whitespace-nowrap ${
              location === item.href ? "text-[#564130]" : "text-[#474747]"
            }`}
            data-testid={`link-nav-${item.label.toLowerCase().replace(" ", "-")}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Right cluster: Search + SIGN UP + Cart + Profile */}
      <div className="flex items-center gap-4 flex-shrink-0">

        {/* ── Search bar ── */}
        <div ref={containerRef} className="relative" data-testid="search-container">
          <div className={`flex items-center gap-2 h-[42px] bg-[#f3f0eb] rounded-full px-3 transition-all duration-200 ${open || query ? "w-[220px]" : "w-[160px]"}`}>
            <Search size={15} className="text-[#888] flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={() => { if (suggestions.length > 0) setOpen(true); }}
              placeholder="Search products..."
              className="flex-1 bg-transparent [font-family:'Poppins',Helvetica] text-[12px] text-[#333] placeholder:text-[#999] focus:outline-none min-w-0"
              data-testid="input-search"
            />
            {query && (
              <button onClick={handleClear} className="flex-shrink-0 text-[#888] hover:text-[#444]" data-testid="button-search-clear">
                <X size={13} />
              </button>
            )}
          </div>

          {/* Suggestions dropdown */}
          {open && (
            <div
              className="absolute top-[50px] left-0 w-[340px] bg-white rounded-[12px] shadow-[0px_8px_24px_#00000020] border border-[#e8e4de] z-50 overflow-hidden"
              data-testid="search-suggestions"
            >
              {suggestions.map((p, idx) => (
                <button
                  key={`${p.category}-${p.id}`}
                  onClick={() => handleSelect(p)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    activeIdx === idx ? "bg-[#faf7f2]" : "hover:bg-[#faf7f2]"
                  } ${idx < suggestions.length - 1 ? "border-b border-[#f0ede8]" : ""}`}
                  data-testid={`suggestion-${p.category}-${p.id}`}
                >
                  <div className="w-10 h-10 bg-[#e8e4de] rounded-[6px] flex-shrink-0 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="[font-family:'Poppins',Helvetica] text-[12px] font-semibold text-black truncate">{p.name}</p>
                    <p className="[font-family:'Poppins',Helvetica] text-[11px] text-[#888]">{categoryLabel[p.category] ?? p.category}</p>
                  </div>
                  <span className="[font-family:'Poppins',Helvetica] text-[12px] font-medium text-[#564130] flex-shrink-0">{p.price}</span>
                </button>
              ))}
              {query && suggestions.length === 0 && (
                <p className="px-4 py-3 [font-family:'Poppins',Helvetica] text-[12px] text-[#888] text-center">No products found</p>
              )}
            </div>
          )}
        </div>

        {/* SIGN UP */}
        <Link href="/login">
          <Button
            className="h-[50px] px-[26px] flex-shrink-0 inline-flex items-center justify-center bg-[#564130] rounded-[13px] overflow-hidden shadow-[0px_4px_7.8px_#00000040] hover:bg-[#6b5240] border-none"
            data-testid="button-sign-up"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-[14px] text-center leading-normal">
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
