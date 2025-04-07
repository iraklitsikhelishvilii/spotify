import React from "react";
import Link from "next/link";
interface Authorized_plus_minor_link {
  add?: () => void;
  icon: React.ReactNode;
  text1: string;
  text2: string;
}
function Authorized_plus_minor_link({
  add,
  icon,
  text1,
  text2,
}: Authorized_plus_minor_link) {
  return (
    <Link
      href={`/add_song`}
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
    </Link>
  );
}

export default Authorized_plus_minor_link;
