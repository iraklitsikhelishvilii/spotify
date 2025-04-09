"use client";
import React from "react";
import Link from "next/link";
import Facebook_icon from "@/app/common/icons/Facebook_icon";
import Instagram_icon from "@/app/common/icons/Instagram_icon";
import Twiter_icon from "@/app/common/icons/Twiter_icon";
import { translations } from "@/app/common/translation";
import { useStates } from "@/app/common/store";

function Footer() {
  const { language } = useStates();
  const t = translations[language];

  return (
    <footer className="w-[100%] px-[20px] mt-[70px] flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#fff] font-[700] text-[16px]">{t.company}</h3>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/about-us/contact/"}
          >
            {t.about}
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://www.lifeatspotify.com/"}
          >
            {t.jobs}
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://newsroom.spotify.com/"}
          >
            {t.forTheRecord}
          </Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#fff] font-[700] text-[16px]">
            {t.communities}
          </h3>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://artists.spotify.com/home"}
          >
            {t.forArtists}
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://developer.spotify.com/"}
          >
            {t.developers}
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://ads.spotify.com/en-US/"}
          >
            {t.advertising}
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://investors.spotify.com/home/default.aspx"}
          >
            {t.investors}
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://spotifyforvendors.com/"}
          >
            {t.vendors}
          </Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#fff] font-[700] text-[16px]">
            {t.usefulLinks}
          </h3>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://support.spotify.com/ge/"}
          >
            {t.support}
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/free/"}
          >
            {t.freeMobileApp}
          </Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#fff] font-[700] text-[16px]">
            {t.spotifyPlans}
          </h3>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={
              "https://www.spotify.com/ge/premium/#ref=spotifycom_footer_premium_individual"
            }
          >
            {t.premiumIndividual}
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={
              "https://www.spotify.com/ge/duo/#ref=spotifycom_footer_premium_duo"
            }
          >
            {t.premiumDuo}
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={
              "http://spotify.com/ge/family/#ref=spotifycom_footer_premium_family"
            }
          >
            {t.premiumFamily}
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={
              "http://spotify.com/ge/student/#ref=spotifycom_footer_premium_student"
            }
          >
            {t.premiumStudent}
          </Link>
          <Link
            className="text-[16px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/free/#ref=spotifycom_footer_free"}
          >
            {t.spotifyFree}
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
