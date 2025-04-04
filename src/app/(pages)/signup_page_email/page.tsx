"use client";
import { useStates } from "@/app/common/store";
import Signup_email_page from "@/app/components/__organisms/singup_email_page/Signup_email_page";
import React from "react";
import Image from "next/image";
import Black_logo from "../../assets/images/logo.png";
import Loging_btn_green from "@/app/components/__atoms/login_btn_green/Loging_btn_green";
import Link from "next/link";
import Eye_icon from "@/app/common/icons/Eye_icon";

function SignupPageEmail() {
  const { validemail } = useStates();
  return (
    <div className="bg-[#121212] w-[100%] h-[100vh] flex items-center justify-center">
      {!validemail ? (
        <Signup_email_page />
      ) : (
        <div className="w-[100%] flex flex-col items-center">
          <Image
            className="w-[40px] h-[40px]"
            src={Black_logo}
            alt="spotify icon"
            width={600}
            height={600}
          />

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
          <Loging_btn_green text="Next" />
          <div className="max-w-[324px] w-[100%] flex items-center mt-[32px]">
            <div className="bg-[#5c5c5c] w-[100%] h-[1px]"></div>
            <p className="text-[14px] font-[600] text-[#fff] mx-[10px]">or</p>
            <div className="bg-[#5c5c5c] w-[100%] h-[1px]"></div>
          </div>

          <div className="max-w-[324px] w-[100%] h-[1px] bg-[#5c5c5c] mt-[32px]"></div>
          <div className="flex items-center justify-center mt-[32px] gap-[7px] mb-[50px]">
            <p className="text-[#b3b3b3] text-[16px] font-[600] ">
              Already have an account?
            </p>{" "}
            <Link
              href={`/login_page`}
              className="text-[#fff] text-[16px] underline hover:text-[#1ed760]"
            >
              Log in here
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupPageEmail;
