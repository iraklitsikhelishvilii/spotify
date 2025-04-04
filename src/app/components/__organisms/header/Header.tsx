"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import HomeIcon from "@/app/common/icons/home_icon";
import Search_icon from "@/app/common/icons/Search_icon";
import Folder_icon from "@/app/common/icons/Folder_icon";
import Link from "next/link";
import Download_icon from "@/app/common/icons/Download_icon";
import { useStates } from "@/app/common/store";
import Logged_out_alert from "../../__atoms/logged_out_alert/Logged_out_alert";
function Header() {
  const { marked } = useStates();
  const Reload = () => {
    window.location.reload();
  };
  return (
    <header className="bg-[#000] w-[100%] flex items-center justify-between py-[10px] px-[15px] gap-[15px] ">
      <div className="flex items-center justify-center gap-[30px] max-w-[572px] w-[100%]  ">
        <Image
          onClick={Reload}
          className="w-[32px] h-[32px] cursor-pointer ml-[20px]"
          src={logo}
          alt="Spotify_icon"
          width={600}
          height={600}
        />
        <div className="flex items-center justify-center gap-[25px] max-w-[572px] w-[100%]">
          <div className="p-[12px]  bg-[#1F1F1F] flex items-center justify-center rounded-[50%]">
            <HomeIcon classname="w-[20px] h-[20px]" />
          </div>
          <div className="bg-[#1F1F1F] max-w-[474px] w-[100%] p-[12px] rounded-[20px] flex items-center justify-between ">
            <div className="flex items-center justify-center">
              <Search_icon classname="w-[21px] h-[21px]" />
              <input
                className="ml-[12px]  bg-[#1F1F1F] w-[195px] text-[#b3b3b3] outline-none"
                type="text"
                placeholder="What do you want to play?"
              />
            </div>
            <div className="flex items-center justify-center gap-[19px]">
              <div className="h-[20px] w-[1px] bg-[#b3b3b3]"></div>
              <Folder_icon classname="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[20px]">
        <div className="flex gap-[8px] items-center justify-center">
          <Link
            className="text-[#b3b3b3] text-[16px]"
            href={"https://www.spotify.com/ge/premium/"}
          >
            Premium
          </Link>
          <Link
            className="text-[#b3b3b3]  text-[16px]"
            href={"https://support.spotify.com/ge/"}
          >
            Support
          </Link>
          <Link
            className="text-[#b3b3b3]  text-[16px]"
            href={"https://www.spotify.com/ge/download/mac/"}
          >
            Download
          </Link>
        </div>
        <div className="h-[20px] w-[2px] bg-[#b3b3b3]"></div>
        <div className="flex items-center justify-center gap-[20px]">
          <div className="flex items-center justify-center gap-[8px]">
            <Download_icon classname="w-[16px] h-[16px]" />
            <Link
              href={"https://open.spotify.com/download"}
              className="text-[#b3b3b3]  text-[14px]"
            >
              Install App
            </Link>
          </div>
          <div className="flex items-center justify-center gap-[10px] relative">
            <Link
              href={`/signup_page_email`}
              className="text-[#b3b3b3]  text-[14px]"
            >
              Sign Up
            </Link>
            <Link
              href={`/login_page`}
              className="px-[32px] py-[8px] bg-[#fff] font-[700] text-[16px] text-[#000000] rounded-[20px]"
            >
              Log in
            </Link>
            {marked && <Logged_out_alert />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
