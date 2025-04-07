import React from "react";
import Authorized_plus_minor_div from "../../__atoms/Authorized_plus_minor_div/Authorized_plus_minor_div";
import Song_icon from "@/app/common/icons/Song_icon";
import Two_circle_icon from "@/app/common/icons/Two_circle_icon";
import File_icon from "@/app/common/icons/File_icon";
import Plus_icon2 from "@/app/common/icons/Plus_icon2";
import Authorized_plus_minor_link from "../../__atoms/Authorized_plus_minor_link/Authorized_plus_minor_link";

function Authorized_plus_div() {
  return (
    <div className="bg-[#1a1a1a] max-w-[345px] w-[345px]  absolute top-[45px] left-[230px] p-[15px] flex flex-col gap-[20px] ">
      <Authorized_plus_minor_div
        text1="Playlist"
        text2="Build a playlist with songs, or episodes"
        icon={
          <Song_icon classname="w-[24px] h-[24px] hover:fill-[#1ed760] cursor-pointer" />
        }
      />{" "}
      <Authorized_plus_minor_div
        text1="Blend"
        text2="Mix up your tastes with friends"
        icon={
          <Two_circle_icon classname="w-[27px] h-[24px] hover:fill-[#1ed760] cursor-pointer" />
        }
      />{" "}
      <Authorized_plus_minor_div
        text1="Folder"
        text2="Organize your playlists"
        icon={
          <File_icon classname="w-[24px] h-[24px] fill-[#fff] hover:fill-[#1ed760] cursor-pointer" />
        }
      />{" "}
      <Authorized_plus_minor_link
        text1="Add song"
        text2="Add your song "
        icon={
          <Plus_icon2 classname="w-[24px] h-[24px] fill-[#fff] hover:fill-[#1ed760] cursor-pointer" />
        }
      />
    </div>
  );
}

export default Authorized_plus_div;
