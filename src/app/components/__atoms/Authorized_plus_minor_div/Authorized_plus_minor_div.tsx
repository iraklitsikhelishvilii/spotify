import React from "react";

interface Authorized_plus_minor_div {
  text1: string;
  text2: string;
  icon: React.ReactNode;
  add?: () => void;
}
function Authorized_plus_minor_div({
  text1,
  text2,
  icon,
  add,
}: Authorized_plus_minor_div) {
  return (
    <div
      onClick={add}
      className="w-[100%] flex items-center gap-[15px] cursor-pointer "
    >
      <div className="w-[48px] h-[48px] bg-[#2a2a2a] rounded-[50%] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col ">
        <h3 className="text-[16px] text-[#fff] font-[700]">{text1}</h3>
        <p className="text-[13px] text-[#b3b3b3] font-[700]">{text2}</p>
      </div>
    </div>
  );
}

export default Authorized_plus_minor_div;
