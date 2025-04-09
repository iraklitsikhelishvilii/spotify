import Globus_icon from "@/app/common/icons/Globus_icon";
import { useStates } from "@/app/common/store";
import { translations } from "@/app/common/translation";
import React from "react";

interface Profile_settings_div {
  Handle: () => void;
}

function Profile_settings_div({ Handle }: Profile_settings_div) {
  const { language, toggleLanguage } = useStates();
  const t = translations[language];

  return (
    <div className="max-w-[200px] w-[100%] bg-[#282828] absolute rounded-[5px] top-[60px] flex flex-col p-[16px] gap-[20px]">
      <p className="text-[14px] text-[#fff] font-[800] cursor-pointer">
        {t.account}
      </p>
      <p className="text-[14px] text-[#fff] font-[800] cursor-pointer">
        {t.profile}
      </p>
      <p className="text-[14px] text-[#fff] font-[800] cursor-pointer">
        {t.support}
      </p>
      <p className="text-[14px] text-[#fff] font-[800] cursor-pointer">
        {t.download}
      </p>
      <p className="text-[14px] text-[#fff] font-[800] cursor-pointer">
        {t.settings}
      </p>
      <p
        onClick={Handle}
        className="text-[14px] text-[#fff] font-[800] cursor-pointer"
      >
        {t.logout}
      </p>
      <button
        onClick={toggleLanguage}
        className="max-w-[120px] text-[#fff] text-[14px] flex items-center gap-[6px] border border-[#B3B3B3] rounded-[20px] px-[10px] py-[4px]"
      >
        <Globus_icon classname="w-[16px] h-[16px]" />
        {t.language}
      </button>
    </div>
  );
}

export default Profile_settings_div;
