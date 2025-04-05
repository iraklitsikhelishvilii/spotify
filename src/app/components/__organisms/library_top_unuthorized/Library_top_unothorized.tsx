import React from "react";
import Create_playlist_allert from "../../__atoms/create_playlist_allert/Create_playlist_allert";
import Link from "next/link";
import { useStates } from "@/app/common/store";
import Plus_icon from "@/app/common/icons/Plus_icon";
import Music_icon from "@/app/common/icons/Music_icon";
function Library_top_unothorized() {
     const {
        playlist,
        HandlePlatlistClick,
        RemovePlaylistClick,
        plus,
        handlePlus,
        NewPlaylistClick,
      } = useStates();
  return (
    <div>
      <div className="w-[100%] flex items-center justify-between px-[10px]">
        <p className="text-[16px] font-[700] text-[#fff]">Your Library</p>
        <button onClick={handlePlus}>
          <Plus_icon classname="w-[16px] h-[16px]"></Plus_icon>
        </button>
        {plus && (
          <button
            onClick={NewPlaylistClick}
            className="flex items-center px-[12px] py-[12px] gap-[10px] rounded-[5px] bg-[#282828] absolute top-[50px] left-[100px]"
          >
            <Music_icon classname="h-[16px] w-[16px]" />
            <p className="text-[#fff] text-[14px]">Create a new playlist</p>
          </button>
        )}
      </div>
      <div
        onClick={HandlePlatlistClick}
        className="w-[100%] bg-[#1F1F1F] flex flex-col rounded-[8px] py-[16px] pl-[20px] mt-[40px] gap-[10px]"
      >
        <p className="text-[16px] font-[700] text-[#fff]">
          Create your first playlist
        </p>
        <p className="text-[14px] text-[#fff] font-[400]">
          {"  It's easy, we'll help you"}
        </p>
        <button className="py-[4px] px-[16px] bg-[#ffff] max-w-[125px] text-[14px] text-[#000000] rounded-[20px] mt-[10px]">
          Create playlist
        </button>
      </div>
      {playlist && (
        <Create_playlist_allert RemovePlaylistClick={RemovePlaylistClick} />
      )}
      <div className="w-[100%] bg-[#1F1F1F] flex flex-col rounded-[8px] py-[16px] pl-[20px] mt-[25px] gap-[10px]">
        <p className="text-[16px] font-[700] text-[#fff]">
          {"  Let's find some podcasts to follow"}
        </p>
        <p className="text-[14px] text-[#fff] font-[400]">
          {" We'll keep you updated on new episodes"}
        </p>
        <Link
          href={`/podcasts`}
          className="py-[4px] px-[16px] bg-[#ffff] max-w-[148px] text-[14px] text-[#000000] rounded-[20px] mt-[10px]"
        >
          Browse podcasts
        </Link>
      </div>
    </div>
  );
}

export default Library_top_unothorized;
