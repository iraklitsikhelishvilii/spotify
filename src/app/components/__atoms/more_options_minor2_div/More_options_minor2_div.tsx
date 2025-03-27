import Play_btn_icon from "@/app/common/icons/Play_btn_icon";
import React from "react";

function More_options_minor2_div({ icon, text }: any) {
  return (
    <div className="cursor-pointer w-[100%] px-[10px] flex items-center justify-between gap-[10px] py-[8px] hover:bg-[#282828] ">
      <div className="flex gap-[10px]">
        {icon}
        <p className="text-[14px] text-[#fff] font-[700]">{text}</p>
      </div>
      <Play_btn_icon classname="w-[16px] h-[16px] " fillcolor="#fff" />
    </div>
  );
}

export default More_options_minor2_div;
