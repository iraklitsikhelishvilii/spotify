"use client";
import React from "react";
import Link from "next/link";
import Globus_icon from "@/app/common/icons/Globus_icon";
import { useStates } from "@/app/common/store";
import { translations } from "@/app/common/translation";

function Library_bottom_unothorized() {
  const { language, toggleLanguage } = useStates();
  const t = translations[language];

  return (
    <div className="flex flex-col mb-[40px]">
      <div className="max-w-[270px] w-full flex flex-wrap gap-[15px]">
        <Link
          className="text-[11px] text-[#B3B3B3]"
          href="https://www.spotify.com/ge/legal/end-user-agreement/"
        >
          {t.legal}
        </Link>
        <Link
          className="text-[11px] text-[#B3B3B3]"
          href="https://www.spotify.com/ge/safetyandprivacy"
        >
          {t.safety}
        </Link>
        <Link
          className="text-[11px] text-[#B3B3B3]"
          href="https://www.spotify.com/ge/legal/cookies-policy/"
        >
          {t.cookies}
        </Link>
        <Link
          className="text-[11px] text-[#B3B3B3]"
          href="https://www.spotify.com/ge/legal/privacy-policy/#s3"
        >
          {t.ads}
        </Link>
        <Link
          className="text-[11px] text-[#B3B3B3]"
          href="https://www.spotify.com/ge/accessibility"
        >
          {t.accessibility}
        </Link>
      </div>
      <Link
        className="text-[12px] text-[#fff] hover:underline mt-[10px]"
        href="https://www.spotify.com/ge/legal/cookies-policy/"
      >
        {t.cookies}
      </Link>
      <button
        onClick={toggleLanguage}
        className="max-w-[120px] text-[#fff] text-[14px] flex items-center gap-[6px] mt-[30px] border border-[#B3B3B3] rounded-[20px] px-[10px] py-[4px]"
      >
        <Globus_icon classname="w-[16px] h-[16px]" />
        {t.language}
      </button>
    </div>
  );
}

export default Library_bottom_unothorized;
