"use client";
import React from "react";
import Create_playlist_allert from "../../__atoms/create_playlist_allert/Create_playlist_allert";
import Link from "next/link";
import { useStates } from "@/app/common/store";
import Plus_icon from "@/app/common/icons/Plus_icon";
import Music_icon from "@/app/common/icons/Music_icon";
import { translations } from "@/app/common/translation";


function Library_top_unothorized() {
  const {
    playlist,
    HandlePlatlistClick,
    RemovePlaylistClick,
    plus,
    handlePlus,
    NewPlaylistClick,
    language,
  } = useStates();

  const t = translations[language];

  return (
    <div>
      <div className="w-full flex items-center justify-between px-[10px]">
        <p className="text-[16px] font-[700] text-[#fff]">{t.yourLibrary}</p>
        <button onClick={handlePlus}>
          <Plus_icon classname="w-[16px] h-[16px]" />
        </button>
        {plus && (
          <button
            onClick={NewPlaylistClick}
            className="flex items-center px-[12px] py-[12px] gap-[10px] rounded-[5px] bg-[#282828] absolute top-[50px] left-[100px]"
          >
            <Music_icon classname="h-[16px] w-[16px]" />
            <p className="text-[#fff] text-[14px]">{t.createNewPlaylist}</p>
          </button>
        )}
      </div>

      <div
        onClick={HandlePlatlistClick}
        className="w-full bg-[#1F1F1F] flex flex-col rounded-[8px] py-[16px] pl-[10px] mt-[40px] gap-[10px]"
      >
        <p className="text-[16px] font-[700] text-[#fff]">
          {t.createFirstPlaylist}
        </p>
        <p className="text-[14px] text-[#fff] font-[400]">{t.easyHelp}</p>
        <button className="py-[4px] px-[16px] bg-[#ffff] max-w-[125px] text-[14px] text-[#000000] rounded-[20px] mt-[10px]">
          {t.createPlaylist}
        </button>
      </div>

      {playlist && (
        <Create_playlist_allert RemovePlaylistClick={RemovePlaylistClick} />
      )}

      <div className="w-full bg-[#1F1F1F] flex flex-col rounded-[8px] py-[16px] pl-[10px] mt-[25px] gap-[10px]">
        <p className="text-[16px] font-[700] text-[#fff]">{t.findPodcasts}</p>
        <p className="text-[14px] text-[#fff] font-[400]">{t.updateEpisodes}</p>
        <Link
          href="/podcasts"
          className="py-[4px] px-[16px] bg-[#ffff] max-w-[148px] text-[14px] text-[#000000] rounded-[20px] mt-[10px]"
        >
          {t.browsePodcasts}
        </Link>
      </div>
    </div>
  );
}

export default Library_top_unothorized;
