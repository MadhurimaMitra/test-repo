import { useState } from "react";
import { Link, useLocation } from "wouter";
import { User, Lock } from "lucide-react";

export function LoginPage() {
  const [, navigate] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Minimal nav ── */}
      <nav className="w-full min-h-[70px] flex items-center justify-between px-[50px] bg-white shadow-[0px_4px_8.3px_#00000020]" data-testid="nav-login">
        {/* Logo */}
        <Link href="/" data-testid="link-login-logo">
          <img
            className="w-[50px] h-[44px] object-contain"
            alt="Clenfay"
            src="/figmaAssets/qfxbbmnny1csz5zkciarba7rzesqduusvgtcmz2s-1-1.png"
          />
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-10">
          <Link href="/" className="[font-family:'Poppins',Helvetica] text-[14px] text-[#444] hover:text-[#3d2b1a] transition-colors" data-testid="link-nav-home">
            HOME
          </Link>
          <a href="#" className="[font-family:'Poppins',Helvetica] text-[14px] text-[#444] hover:text-[#3d2b1a] transition-colors" data-testid="link-nav-help">
            HELP
          </a>
          <a href="#" className="[font-family:'Poppins',Helvetica] text-[14px] text-[#444] hover:text-[#3d2b1a] transition-colors" data-testid="link-nav-register">
            REGISTER
          </a>
          <img
            className="w-[28px] h-[28px] object-contain"
            alt="Profile"
            src="/figmaAssets/person-12259244-1.png"
            data-testid="img-login-profile"
          />
        </div>
      </nav>

      {/* ── Login card ── */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div
          className="bg-white rounded-b-[16px] shadow-[0px_6px_24px_#00000018] w-full max-w-[380px] overflow-hidden"
          data-testid="card-login"
        >
          <form onSubmit={handleLogin} className="flex flex-col gap-4 px-10 pt-8 pb-10">
            {/* Heading */}
            <h1 className="[font-family:'Poppins',Helvetica] font-normal text-black text-[24px] text-center mb-2" data-testid="text-login-heading">
              Login
            </h1>

            {/* Username */}
            <div className="flex items-center gap-3 h-[50px] bg-[#e0e0e0] rounded-full px-4" data-testid="input-username-wrapper">
              <User size={16} className="text-[#888] flex-shrink-0" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="flex-1 bg-transparent [font-family:'Poppins',Helvetica] text-[13px] text-[#555] placeholder:text-[#888] focus:outline-none"
                data-testid="input-username"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 h-[50px] bg-[#e0e0e0] rounded-full px-4" data-testid="input-password-wrapper">
              <Lock size={16} className="text-[#888] flex-shrink-0" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="flex-1 bg-transparent [font-family:'Poppins',Helvetica] text-[13px] text-[#555] placeholder:text-[#888] focus:outline-none"
                data-testid="input-password"
              />
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 border border-[#aaa] accent-[#3d2b1a]"
                  data-testid="checkbox-remember"
                />
                <span className="[font-family:'Poppins',Helvetica] text-[12px] text-[#444]">Remember Me</span>
              </label>
              <a
                href="#"
                className="[font-family:'Poppins',Helvetica] font-semibold text-[12px] text-[#3d2b1a] hover:underline"
                data-testid="link-forgot-password"
              >
                Forgot Password
              </a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full h-[48px] bg-[#3d2b1a] hover:bg-[#564130] transition-colors text-white [font-family:'Poppins',Helvetica] font-medium text-[13px] tracking-widest mt-1"
              data-testid="button-login"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
