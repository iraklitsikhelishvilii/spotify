import React from "react";
import Black_logo from "../../assets/images/logo.png";
import Image from "next/image";
import Eye_icon from "@/app/common/icons/Eye_icon";
import Loging_btn_green from "@/app/components/__atoms/login_btn_green/Loging_btn_green";
import Link from "next/link";
import Login_btns_div from "@/app/components/__atoms/login_btns_div/Login_btns_div";
function page() {
  return (
    <div className="w-[100%] h-[100vh] bg-black bg-gradient-to-b from-white/10 to-black flex items-center justify-center ">
      <div className="max-w-[740px] w-[100%]  bg-black bg-gradient-to-b from-black to-white/10 flex items-center justify-center flex-col px-[100px]">
        <div className="flex flex-col items-center justify-center gap-[8px] w-[100%] pt-[32px]">
          <Image
            className="w-[36px] h-[36px]"
            src={Black_logo}
            alt="Spotify logo"
            width={500}
            height={500}
          />
          <h1 className="font-[700] text-[#fff] text-[32px]">
            Log in to Spotify
          </h1>
        </div>
        <Login_btns_div />
        <div className="w-[100%] h-[1px] bg-[#5c5c5c] my-[32px] "></div>
        <div className="w-[100%] flex items-center justify-center flex-col gap-[15px]">
          <div className="flex flex-col max-w-[324px] w-[100%] justify-center gap-[5px]">
            <label
              className="text-[14px] text-[#fff] font-[700] cursor-pointer"
              htmlFor="email"
            >
              Email or username
            </label>
            <input
              className="bg-transparent max-w-[324px] w-[100%] text-[16px] text-[#fff] font-[700] py-[8px] px-[10px] outline-none  border-solid border-[2px] border-[#5c5c5c] rounded-[5px]"
              type="text"
              name="email"
              id="email"
            />
          </div>{" "}
          <div className="flex flex-col max-w-[324px] w-[100%] justify-center gap-[5px]">
            <label
              className="text-[14px] text-[#fff] font-[700] cursor-pointer"
              htmlFor="password"
            >
              Password
            </label>
            <div className="w-[100%] flex items-center  border-solid border-[2px] border-[#5c5c5c] rounded-[5px] px-[10px]">
              <input
                className="bg-transparent max-w-[324px] w-[100%] text-[16px] text-[#fff] font-[700] py-[8px] pr-[15px] outline-none "
                type="password"
                name="password"
                id="password"
              />
              <Eye_icon classname="w-[24px] h-[24px] cursor-pointer" />
            </div>
          </div>
        </div>
        <Loging_btn_green text="Log in" />
        <p className=" underline text-[16px] font-[700] text-[#fff] mt-[32px] hover:text-[#1ed760] cursor-pointer">
          Forgot your password?
        </p>
        <div className="flex items-center justify-center mt-[32px] gap-[7px] mb-[50px]">
          <p className="text-[#b3b3b3] text-[16px] font-[600] ">
            {`Don't have an account?`}
          </p>{" "}
          <Link
            href={`/signup_page_email`}
            className="text-[#fff] text-[16px] underline hover:text-[#1ed760]"
          >
            Sign up for Spotify
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
