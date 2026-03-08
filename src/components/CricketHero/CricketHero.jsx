import React from "react";
import logoImg from "../../assets/banner-main.png";
import bannerImg from "../../assets/bg-shadow.png";

export default function CricketHero() {
  return (
    <div className="md:mb-12 mb-6 relative w-full flex items-center justify-center rounded-2xl py-10 bg-gradient-to-tr from-[#0f172a] via-black to-[#f3c6a5] overflow-hidden">
      {/* shadow background */}
      <img
        src={bannerImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-75"
      />

      <div className="relative max-w-[950px] w-full p-14 text-center rounded-xl">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logoImg} alt="cricket" className="w-44" />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 mb-8">Beyond Boundaries Beyond Limits</p>

        {/* Button */}
        <button className="bg-lime-400 text-black font-semibold px-8 py-3 rounded-xl border-2 border-black">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
}
