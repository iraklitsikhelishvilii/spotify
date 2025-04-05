import React, { useEffect, useState } from "react";
import Image from "next/image";
import Eye_icon from "@/app/common/icons/Eye_icon";
import Loging_btn_green from "../../__atoms/login_btn_green/Loging_btn_green";
import Black_logo from "../../../assets/images/logo.png";
import Left_arrow_icon from "@/app/common/icons/Left_arrow_icon";
import Mark_icon from "@/app/common/icons/Mark_icon";
interface Signup_password_page {
  setvalidpassword: (validpassword: boolean) => void;
}
function Signup_password_page({ setvalidpassword }: Signup_password_page) {
  const [password, setPassword] = useState("");
  const [oneLetter, setoneLetter] = useState(false);
  const [oneSymbol, setoneSymbol] = useState(false);
  const [tenChar, settenChar] = useState(false);
  const [onelettererror, setonelettererror] = useState(false);
  const [onesymbolerror, setonesymbolerror] = useState(false);
  const [tencharerror, settencharerror] = useState(false);
  const letters = /[a-zA-Z]/;
  const symbols = /[0-9!@#\$%\^\&*\)\(+=._-]/;

  useEffect(() => {
    if (letters.test(password)) {
      setoneLetter(true);
      setonelettererror(false);
    } else setoneLetter(false);
    if (symbols.test(password)) {
      setoneSymbol(true);
      setonesymbolerror(false);
    } else setoneSymbol(false);
    if (password.length >= 10) {
      settenChar(true);
      settencharerror(false);
    } else settenChar(false);
  }, [password, setPassword]);

  const handlepassword = () => {
    if (oneLetter && oneSymbol && tenChar) {
      setvalidpassword(true);
    }
    if (!oneLetter) {
      setonelettererror(true);
    } else setonelettererror(false);
    if (!oneSymbol) {
      setonesymbolerror(true);
    } else setonesymbolerror(false);
    if (!tenChar) {
      settencharerror(true);
    } else settencharerror(false);
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
      <div className="flex max-w-[436px] w-[100%] items-center gap-[20px] mt-[25px]">
        <Left_arrow_icon classname="w-[24px] h-[24px]" />
        <div className="flex flex-col ">
          <p className="text-[16px] text-[#b3b3b3] font-[700]">Step 1 of 3</p>
          <h2 className="text-[16px] text-[#fff] font-[700]">
            Create a password
          </h2>
        </div>
      </div>
      <div className="flex flex-col max-w-[324px] w-[100%] justify-center gap-[5px] mt-[30px]">
        <label
          className="text-[14px] text-[#fff] font-[700] cursor-pointer"
          htmlFor="password"
        >
          Password
        </label>
        <div
          className={`w-[100%] flex items-center  border-solid border-[2px]  rounded-[5px] px-[10px] border-[#5c5c5c]`}
        >
          <input
            onChange={(e) => setPassword?.(e.target.value)}
            className="bg-transparent max-w-[324px] w-[100%] text-[16px] text-[#fff] font-[700] py-[8px] pr-[15px] outline-none "
            type="password"
            name="password"
            id="password"
          />
          <Eye_icon classname="w-[24px] h-[24px] cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col max-w-[324px] w-[100%] mt-[20px] gap-[10px]">
        <h3 className="text-[14px] text-[#fff] font-[700]">
          Your password must contain at least
        </h3>
        <div className="flex max-w-[324px] w-[100%] gap-[10px] items-center">
          <div
            className={`w-[12px] h-[12px] rounded-[50%] border-solid border-[1px] ${
              oneLetter ? "border-[#1ed760]" : "border-[#5c5c5c]"
            }`}
          >
            {oneLetter && <Mark_icon classname="w-[100%] h-[100%]" />}
          </div>
          <p
            className={`text-[13px] font-[700] ${
              onelettererror ? "text-[#f3727f]" : " text-[#fff] "
            }`}
          >
            1 letter
          </p>
        </div>
        <div className="flex max-w-[324px] w-[100%] gap-[10px] items-center">
          <div
            className={`w-[12px] h-[12px] rounded-[50%] border-solid border-[1px] ${
              oneSymbol ? "border-[#1ed760]" : "border-[#5c5c5c]"
            }`}
          >
            {" "}
            {oneSymbol && <Mark_icon classname="w-[100%] h-[100%]" />}
          </div>
          <p
            className={`text-[13px] font-[700] ${
              onesymbolerror ? "text-[#f3727f]" : " text-[#fff] "
            }`}
          >
            1 number or special character (example: # ? ! &)
          </p>
        </div>{" "}
        <div className="flex max-w-[324px] w-[100%] gap-[10px] items-center">
          <div
            className={`w-[12px] h-[12px] rounded-[50%] border-solid border-[1px] ${
              tenChar ? "border-[#1ed760]" : "border-[#5c5c5c]"
            }`}
          >
            {" "}
            {tenChar && <Mark_icon classname="w-[100%] h-[100%]" />}
          </div>
          <p
            className={`text-[13px] font-[700] ${
              tencharerror ? "text-[#f3727f]" : " text-[#fff] "
            }`}
          >
            10 characters
          </p>
        </div>
      </div>
      <Loging_btn_green
        classname="max-w-[324px] w-[100%] bg-[#1ed760] text-[16px] text-[#000000] flex items-center justify-center py-[8px] font-[700] rounded-[20px] mt-[20px]"
        handle={handlepassword}
        text="Next"
      />
    </div>
  );
}

export default Signup_password_page;
