import Facebook_icon from "@/app/common/icons/Facebook_icon";
import Instagram_icon from "@/app/common/icons/Instagram_icon";
import Twiter_icon from "@/app/common/icons/Twiter_icon";
import Link from "next/link";
import React from "react";
function Footer() {
  return (
    <footer className="w-[100%] px-[20px] mt-[70px] flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#fff] font-[700] text-[16px]">Company</h3>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/about-us/contact/"}
          >
            About
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://www.lifeatspotify.com/"}
          >
            Jobs
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://newsroom.spotify.com/"}
          >
            For the Record
          </Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#fff] font-[700] text-[16px]">Communities</h3>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://artists.spotify.com/home"}
          >
            For Artists
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://developer.spotify.com/"}
          >
            Developers
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://ads.spotify.com/en-US/"}
          >
            Advertising
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://investors.spotify.com/home/default.aspx"}
          >
            Investors
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://spotifyforvendors.com/"}
          >
            Vendors
          </Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#fff] font-[700] text-[16px]">Useful links</h3>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://support.spotify.com/ge/"}
          >
            Support
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/free/"}
          >
            Free Mobile App
          </Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#fff] font-[700] text-[16px]">Spotify Plans</h3>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={
              "https://www.spotify.com/ge/premium/#ref=spotifycom_footer_premium_individual"
            }
          >
            Premium Individual
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={
              "https://www.spotify.com/ge/duo/#ref=spotifycom_footer_premium_duo"
            }
          >
            Premium Duo
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={
              "http://spotify.com/ge/family/#ref=spotifycom_footer_premium_family"
            }
          >
            Premium Family
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={
              "http://spotify.com/ge/student/#ref=spotifycom_footer_premium_student"
            }
          >
            Premium Student
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/free/#ref=spotifycom_footer_free"}
          >
            Spotify Free
          </Link>
        </div>
        <div className="flex gap-[15px]">
          <Link
            href={"https://www.instagram.com/spotify/"}
            className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center bg-[#292929]"
          >
            <Instagram_icon classname="w-[16px] h-[16px]" />
          </Link>
          <Link
            href={"https://x.com/spotify"}
            className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center bg-[#292929]"
          >
            <Twiter_icon classname="w-[16px] h-[16px]" />
          </Link>
          <Link
            href={"https://www.facebook.com/Spotify"}
            className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center bg-[#292929]"
          >
            <Facebook_icon classname="w-[16px] h-[16px]" />
          </Link>
        </div>
      </div>
      <div className="h-[1px] w-[100%] bg-[#B3B3B3] mt-[40px]"></div>
      <p className="text-[#B3B3B3] text-[14px] mt-[40px] mb-[60px] ">
        © 2025 Spotify AB
      </p>
    </footer>
  );
}

export default Footer;
