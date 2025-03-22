import Globus_icon from "@/app/common/icons/Globus_icon";
import Music_icon from "@/app/common/icons/Music_icon";
import Plus_icon from "@/app/common/icons/Plus_icon";
import Link from "next/link";
import React, { useState } from "react";

function Library_div() {
  const [playlist, setPlaylist] = useState(false);
  const HandlePlatlistClick = () => {
    setPlaylist(true);
  };
  const RemovePlaylistClick = () => {
    setPlaylist(false);
  };
  const [plus, setPlus] = useState(false);
  const handlePlus = () => {
    setPlus(true);
  };
  const NewPlaylistClick = () => {
    setPlus(false);
    setPlaylist(true);
  };
  return (
    <div className="min-w-[420px] bg-[#121212] rounded-[8px] px-[10px] py-[10px] flex flex-col flex-1 justify-between ">
      <div>
        <div className="w-[100%] flex items-center justify-between px-[10px]">
          <p className="text-[16px] font-[700] text-[#fff]">Your Library</p>
          <button onClick={handlePlus}>
            <Plus_icon classname="w-[16px] h-[16px]"></Plus_icon>
          </button>
          {plus && (
            <button
              onClick={NewPlaylistClick}
              className="flex items-center px-[12px] py-[12px] gap-[10px] rounded-[5px] bg-[#282828] absolute top-[110px] left-[230px]"
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
            It's easy, we'll help you
          </p>
          <button className="py-[4px] px-[16px] bg-[#ffff] max-w-[125px] text-[14px] text-[#000000] rounded-[20px] mt-[10px]">
            Create playlist
          </button>
        </div>
        {playlist && (
          <div className="max-w-[322px] p-[16px] w-[100%] bg-[#4cb3ff] absolute top-[130px] left-[435px] rounded-[20px]">
            <h2 className="text-[16px] font-[700] text-[#000000] ">
              Create a playlist
            </h2>
            <p className="text-[14px]  text-[#000000] mt-[5px]">
              Log in to create and share playlists.
            </p>
            <div className="mt-[25px] flex gap-[15px]  justify-end">
              <button
                onClick={RemovePlaylistClick}
                className="text-[14px] text-[#000000] font-[700]"
              >
                Not now
              </button>
              <button className="bg-[#fff] rounded-[20px] text-[14px] text-[#000000] font-[700] px-[16px] py-[4px]">
                Log in
              </button>
            </div>
          </div>
        )}
        <div className="w-[100%] bg-[#1F1F1F] flex flex-col rounded-[8px] py-[16px] pl-[20px] mt-[25px] gap-[10px]">
          <p className="text-[16px] font-[700] text-[#fff]">
            Let's find some podcasts to follow
          </p>
          <p className="text-[14px] text-[#fff] font-[400]">
            We'll keep you updated on new episodes
          </p>
          <button className="py-[4px] px-[16px] bg-[#ffff] max-w-[148px] text-[14px] text-[#000000] rounded-[20px] mt-[10px]">
            Browse podcasts
          </button>
        </div>
      </div>
      <div className="flex flex-col mb-[40px]">
        <div className="max-w-[270px] w-[100%] flex flex-wrap gap-[15px]">
          <Link
            className="text-[11px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/legal/end-user-agreement/"}
          >
            Legal
          </Link>
          <Link
            className="text-[11px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/safetyandprivacy"}
          >
            Safety & Privacy Center
          </Link>
          <Link
            className="text-[11px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/legal/cookies-policy/"}
          >
            Cookies
          </Link>
          <Link
            className="text-[11px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/legal/privacy-policy/#s3"}
          >
            About Ads
          </Link>
          <Link
            className="text-[11px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/accessibility"}
          >
            Accessibility
          </Link>
        </div>
        <Link
          className="text-[12px] text-[#fff] hover:underline mt-[10px]"
          href={"https://www.spotify.com/ge/legal/cookies-policy/"}
        >
          Cookies
        </Link>
        <button className="max-w-[100px] text-[#fff] text-[14px] flex items-center justify-between mt-[30px] border-solid border-[1px] border-[#B3B3B3] rounded-[20px] px-[10px] py-[4px]">
          <Globus_icon classname="w-[16px] h-[16px]" />
          English
        </button>
      </div>
    </div>
  );
}

export default Library_div;
