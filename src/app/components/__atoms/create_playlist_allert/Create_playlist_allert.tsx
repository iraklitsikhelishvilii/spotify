"use client";
import { CreatePlaylistAllert } from "@/app/common/types";
import React from "react";
import Link from "next/link";
import { useStates } from "@/app/common/store";
import { translations } from "@/app/common/translation";

function Create_playlist_allert({ RemovePlaylistClick }: CreatePlaylistAllert) {
  const { language } = useStates();
  const t = translations[language];

  return (
    <div className="max-w-[322px] p-[16px] w-full bg-[#4cb3ff] absolute top-[60px] left-[300px] rounded-[20px]">
      <h2 className="text-[16px] font-[700] text-[#000000] ">
        {t.alertCreatePlaylist}
      </h2>
      <p className="text-[14px] text-[#000000] mt-[5px]">
        {t.alertLoginToCreate}
      </p>
      <div className="mt-[25px] flex gap-[15px] justify-end">
        <button
          onClick={RemovePlaylistClick}
          className="text-[14px] text-[#000000] font-[700]"
        >
          {t.alertNotNow}
        </button>
        <Link
          href={`/login_page`}
          className="bg-[#fff] rounded-[20px] text-[14px] text-[#000000] font-[700] px-[16px] py-[4px]"
        >
          {t.alertLogin}
        </Link>
      </div>
    </div>
  );
}

export default Create_playlist_allert;
