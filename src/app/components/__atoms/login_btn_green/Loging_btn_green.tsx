import React from "react";
interface Loging_btn_green {
  text: string;
  handleemail?: () => void;
}
function Loging_btn_green({ text, handleemail }: Loging_btn_green) {
  return (
    <button
      onClick={handleemail}
      className="max-w-[324px] w-[100%] bg-[#1ed760] text-[16px] text-[#000000] flex items-center justify-center py-[8px] font-[700] rounded-[20px] mt-[16px]"
    >
      {text}
    </button>
  );
}

export default Loging_btn_green;
