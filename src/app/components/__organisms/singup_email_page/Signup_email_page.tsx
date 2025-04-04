import React from "react";
import Login_btns_div from "../../__atoms/login_btns_div/Login_btns_div";
import Loging_btn_green from "../../__atoms/login_btn_green/Loging_btn_green";
import Link from "next/link";
import Image from "next/image";
import Black_logo from "../../../assets/images/logo.png";
import { useStates } from "@/app/common/store";

function Signup_email_page() {
  const { email, setEmail, setvalidemail } = useStates();
  const handleemail = () => {
    if (email !== "") {
      setvalidemail?.();
    }
  };
  return (
    <div className="w-[100%] flex flex-col items-center">
      <Image
        className="w-[40px] h-[40px]"
        src={Black_logo}
        alt="spotify icon"
        width={600}
        height={600}
      />
      <h1 className="text-[#fff] text-[48px] font-[800] text-center mt-[20px]">
        Sign up to <br /> start listening
      </h1>{" "}
      <div className="flex flex-col max-w-[324px] w-[100%] justify-center gap-[5px] mt-[32px]">
        <label
          className="text-[14px] text-[#fff] font-[700] cursor-pointer"
          htmlFor="email"
        >
          Email or username
        </label>
        <input
          onChange={(e) => setEmail?.(e.target.value)}
          className="bg-transparent max-w-[324px] w-[100%] text-[16px] text-[#fff] font-[700] py-[8px] px-[10px] outline-none  border-solid border-[2px] border-[#5c5c5c] rounded-[5px]"
          type="text"
          name="email"
          id="email"
        />
      </div>
      <Loging_btn_green handleemail={handleemail} text="Next" />
      <div className="max-w-[324px] w-[100%] flex items-center mt-[32px]">
        <div className="bg-[#5c5c5c] w-[100%] h-[1px]"></div>
        <p className="text-[14px] font-[600] text-[#fff] mx-[10px]">or</p>
        <div className="bg-[#5c5c5c] w-[100%] h-[1px]"></div>
      </div>
      <Login_btns_div />
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
  );
}

export default Signup_email_page;
