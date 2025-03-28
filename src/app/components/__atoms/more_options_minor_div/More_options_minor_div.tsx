import { Moreoptionsminor2div } from "@/app/common/types";
import React from "react";

function More_options_minor_div({ icon, text }: Moreoptionsminor2div) {
  return (
    <div className="cursor-pointer w-[100%] px-[10px] flex items-center gap-[10px] py-[8px]  hover:bg-[#282828]">
      {icon}
      <p className="text-[14px] text-[#fff] font-[700]">{text}</p>
    </div>
  );
}

export default More_options_minor_div;
