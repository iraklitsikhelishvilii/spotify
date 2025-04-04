import React, { useEffect, useState } from "react";
import Image from "next/image";
import Eye_icon from "@/app/common/icons/Eye_icon";
import Loging_btn_green from "../../__atoms/login_btn_green/Loging_btn_green";
import Black_logo from "../../../assets/images/logo.png";
import Left_arrow_icon from "@/app/common/icons/Left_arrow_icon";
import { useStates } from "@/app/common/store";
function Signup_password_page() {
  const { password, setpassword } = useStates();
  const [tenchar, settenchar] = useState(false);
  const [oneletter, setoneletter] = useState(false);
  const [onesymbol, setonesymbol] = useState(false);
  useEffect(() => {
    const pass = password || "";
    if (
      pass?.length >= 10 &&
      /[a-zA-Z]/.test(pass) &&
      /[0-9!@#$%^&*()_+=-]/.test(pass)
    ) {
      settenchar(true);
      setoneletter(true);
      setonesymbol(true);
    } else if (pass?.length >= 10 && /[a-zA-Z]/.test(pass)) {
      settenchar(true);
      setoneletter(true);
      setonesymbol(false);
    } else if (pass?.length >= 10 && /[0-9!@#$%^&*()_+=-]/.test(pass)) {
      settenchar(true);
      setoneletter(false);
      setonesymbol(true);
    } else if (/[a-zA-Z]/.test(pass) && /[0-9!@#$%^&*()_+=-]/.test(pass)) {
      settenchar(false);
      setoneletter(true);
      setonesymbol(true);
    } else if (/[a-zA-Z]/.test(pass)) {
      settenchar(false);
      setoneletter(true);
      setonesymbol(false);
    } else if (/[0-9!@#$%^&*()_+=-]/.test(pass)) {
      settenchar(false);
      setoneletter(false);
      setonesymbol(true);
    } else if (pass?.length >= 10) {
      settenchar(true);
      setoneletter(false);
      setonesymbol(false);
    } else {
      settenchar(false);
      setoneletter(false);
      setonesymbol(false);
    }
  }, [password]);
  console.log(password);

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
        <div className="w-[100%] flex items-center  border-solid border-[2px] border-[#5c5c5c] rounded-[5px] px-[10px]">
          <input
            onChange={(e) => setpassword?.(e.target.value)}
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
              oneletter ? "border-[#1ed760]" : "border-[#5c5c5c]"
            }`}
          ></div>
          <p className="text-[13px] text-[#fff] font-[700]">1 letter</p>
        </div>
        <div className="flex max-w-[324px] w-[100%] gap-[10px] items-center">
          <div
            className={`w-[12px] h-[12px] rounded-[50%] border-solid border-[1px] ${
              onesymbol ? "border-[#1ed760]" : "border-[#5c5c5c]"
            }`}
          ></div>
          <p className="text-[13px] text-[#fff] font-[700]">
            1 number or special character (example: # ? ! &)
          </p>
        </div>{" "}
        <div className="flex max-w-[324px] w-[100%] gap-[10px] items-center">
          <div
            className={`w-[12px] h-[12px] rounded-[50%] border-solid border-[1px] ${
              tenchar ? "border-[#1ed760]" : "border-[#5c5c5c]"
            }`}
          ></div>
          <p className="text-[13px] text-[#fff] font-[700]">10 characters</p>
        </div>
      </div>
      <Loging_btn_green text="Next" />
    </div>
  );
}

export default Signup_password_page;
