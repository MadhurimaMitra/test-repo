// Data for policy links
const policies = [
  "Terms & Conditions",
  "Privacy Policy",
  "Return Policy",
  "Support Policy",
];

export const FooterContactSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-white shadow-[0px_-2px_8.3px_#00000040] py-10">
      <div className="flex flex-row w-full px-[102px] gap-0">
        {/* Left Column: Logo + Tagline */}
        <div className="flex flex-col items-start justify-start w-[280px] shrink-0 pt-4">
          <img
            className="w-[146px] h-[127px] object-cover"
            alt="Img"
            src="/figmaAssets/qfxbbmnny1csz5zkciarba7rzesqduusvgtcmz2s-1-1.png"
          />
          <p className="mt-4 w-[216px] [font-family:'Poppins',Helvetica] font-normal italic text-black text-[15px] tracking-[0] leading-[normal]">
            This is a tagline for ClenFay.
          </p>
        </div>
        {/* Middle Column: Contact Us */}
        <div className="flex flex-col flex-1 pt-4">
          <h3 className="font-h3 font-[number:var(--h3-font-weight)] text-[#d19f4c] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-4">
            CONTACT US
          </h3>
          <div className="font-b1 font-[number:var(--b1-font-weight)] text-black text-[length:var(--b1-font-size)] tracking-[var(--b1-letter-spacing)] leading-[var(--b1-line-height)] [font-style:var(--b1-font-style)] mb-5">
            Address <br />
            41 SSI, INDUSTRIAL AREA, JAHANGIRPURI GT KARNAL ROAD DELHI -110033
          </div>
          <div className="font-b1 font-[number:var(--b1-font-weight)] text-black text-[length:var(--b1-font-size)] tracking-[var(--b1-letter-spacing)] leading-[var(--b1-line-height)] [font-style:var(--b1-font-style)] mb-5">
            Phone <br />
            +91 97188 99099
          </div>
          <div className="font-b1 font-[number:var(--b1-font-weight)] text-black text-[length:var(--b1-font-size)] tracking-[var(--b1-letter-spacing)] leading-[var(--b1-line-height)] [font-style:var(--b1-font-style)]">
            Email <br />
            info@clenfay.com
          </div>
        </div>
        {/* Right Column: Our Policies */}
        <div className="flex flex-col w-[250px] shrink-0 pt-4">
          <h3 className="font-h3 font-[number:var(--h3-font-weight)] text-[#d19f4c] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-4">
            OUR POLICIES
          </h3>
          <ul className="flex flex-col gap-[7px]">
            {policies.map((policy) => (
              <li
                key={policy}
                className="font-b1 font-[number:var(--b1-font-weight)] text-black text-[length:var(--b1-font-size)] tracking-[var(--b1-letter-spacing)] leading-[var(--b1-line-height)] [font-style:var(--b1-font-style)] cursor-pointer hover:underline"
              >
                {policy}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
