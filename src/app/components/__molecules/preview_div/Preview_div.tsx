import React from "react";
import Link from "next/link";
function Preview_div() {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #8c5fc0, #ae2996, #6c83df, #509bf5)",
      }}
      className="w-[100%] px-[15px] py-[11px] flex  justify-between rounded-lg"
    >
      <div className="flex flex-col">
        <p className="text-[14px] font-[700] text-[#fff]">Preview of Spotify</p>
        <p className="text-[16px] text-[#fff]">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <Link
        href={`/signup_page_email`}
        className="py-[8px] px-[32px] bg-[#fff] rounded-[20px] text-[16px] font-[700]"
      >
        Sign up free
      </Link>
    </div>
  );
}

export default Preview_div;
