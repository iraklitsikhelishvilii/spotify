import React from "react";
import Image, { StaticImageData } from "next/image";
interface Login_btn {
  image: string | StaticImageData;
  text: string;
}
function Login_btn({ image, text }: Login_btn) {
  return (
    <button className="max-w-[324px] w-[100%] border-solid border-[2px] border-[#5c5c5c] rounded-[20px] flex items-center justify-between pl-[30px] pr-[50px] py-[8px] hover:border-white">
      <Image
        className="w-[24px] h-[24px]"
        src={image}
        alt="icon"
        width={500}
        height={500}
      />
      <h2 className="text-[16px] text-[#fff] font-[700]">{text}</h2>
    </button>
  );
}

export default Login_btn;
