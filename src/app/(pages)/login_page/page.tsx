"use client";
import React, { useState } from "react";
import Black_logo from "../../assets/images/logo.png";
import Image from "next/image";
import Eye_icon from "@/app/common/icons/Eye_icon";
import Loging_btn_green from "@/app/components/__atoms/login_btn_green/Loging_btn_green";
import Link from "next/link";
import Login_btns_div from "@/app/components/__atoms/login_btns_div/Login_btns_div";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseconfig";
import { useRouter } from "next/navigation";
import { useStates } from "@/app/common/store";
import { translations } from "@/app/common/translation";

function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { language } = useStates();
  const t = translations[language];

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      setEmailError(t.pleaseEnterEmail);
      return;
    } else if (!emailRegex.test(email) || email === "") {
      setEmailError(t.invalidEmail);
      return;
    }

    if (!password) {
      setPasswordError(t.pleaseEnterPassword);
      return;
    } else if (password.length < 6) {
      setPasswordError(t.passwordMinLength);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch {
      console.log("error");
    }
  };
  const [eyeclick, seteyeclick] = useState(false);
  const handleeyeclick = () => {
    seteyeclick(!eyeclick);
  };
  return (
    <div className="w-[100%] h-[100vh] bg-black bg-gradient-to-b from-white/10 to-black flex items-center justify-center ">
      <div className="max-w-[740px] w-[100%] bg-black bg-gradient-to-b from-black to-white/10 flex items-center justify-center flex-col px-[100px]">
        <div className="flex flex-col items-center justify-center gap-[8px] w-[100%] pt-[32px]">
          <Image
            className="w-[36px] h-[36px]"
            src={Black_logo}
            alt="Spotify logo"
            width={500}
            height={500}
          />
          <h1 className="font-[700] text-[#fff] text-[32px]">{t.loginTitle}</h1>
        </div>
        <Login_btns_div />
        <div className="w-[100%] h-[1px] bg-[#5c5c5c] my-[32px] "></div>
        <div className="w-[100%] flex items-center justify-center flex-col gap-[15px]">
          <div className="flex flex-col max-w-[324px] w-[100%] justify-center gap-[5px]">
            <label
              className="text-[14px] text-[#fff] font-[700] cursor-pointer"
              htmlFor="email"
            >
              {t.emailOrUsername}
            </label>
            <input
              className={`bg-transparent max-w-[324px] w-[100%] text-[16px] text-[#fff] font-[700] py-[8px] px-[10px] outline-none  border-solid border-[2px]  rounded-[5px] ${
                emailError ? "border-[#e91429]" : "border-[#5c5c5c]"
              }`}
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="text-[#f3727f] text-[12px]">{emailError}</p>
            )}
          </div>
          <div className="flex flex-col max-w-[324px] w-[100%] justify-center gap-[5px]">
            <label
              className="text-[14px] text-[#fff] font-[700] cursor-pointer"
              htmlFor="password"
            >
              {t.password}
            </label>
            <div
              className={`w-[100%] flex items-center  border-solid border-[2px]  rounded-[5px] px-[10px] ${
                passwordError ? "border-[#e91429]" : "border-[#5c5c5c]"
              }`}
            >
              <input
                className="bg-transparent max-w-[324px] w-[100%] text-[16px] text-[#fff] font-[700] py-[8px] pr-[15px] outline-none "
                type={`${eyeclick ? "text" : "password"}`}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleeyeclick}>
                <Eye_icon classname="w-[24px] h-[24px] cursor-pointer" />
              </button>
            </div>
            {passwordError && (
              <p className="text-[#f3727f] text-[12px]">{passwordError}</p>
            )}
          </div>
        </div>
        <Loging_btn_green
          classname="max-w-[324px] w-[100%] bg-[#1ed760] text-[16px] text-[#000000] flex items-center justify-center py-[8px] font-[700] rounded-[20px] mt-[20px]"
          text={t.loginButton}
          handle={handleLogin}
        />
        <p className="underline text-[16px] font-[700] text-[#fff] mt-[32px] hover:text-[#1ed760] cursor-pointer">
          {t.forgotPassword}
        </p>
        <div className="flex items-center justify-center mt-[32px] gap-[7px] mb-[50px]">
          <p className="text-[#b3b3b3] text-[16px] font-[600] ">
            {t.dontHaveAccount}
          </p>{" "}
          <Link
            href={`/signup_page_email`}
            className="text-[#fff] text-[16px] underline hover:text-[#1ed760]"
          >
            {t.signUp}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
