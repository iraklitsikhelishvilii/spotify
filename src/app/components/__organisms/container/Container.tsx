"use client";
import Plus_icon from "@/app/common/icons/Plus_icon";
import Link from "next/link";
import Globus_icon from "@/app/common/icons/Globus_icon";
import Data from "../../../../../data.json";
import Image from "next/image";

function Container() {
  const FirstSix = Data.slice(0, 6);
  return (
    <div className="flex px-[15px]  w-[100%] justify-between  flex-1 gap-[10px]">
      <div className="min-w-[420px] bg-[#121212] rounded-[8px] px-[10px] py-[10px] flex flex-col flex-1 justify-between ">
        <div>
          <div className="w-[100%] flex items-center justify-between px-[10px]">
            <p className="text-[16px] font-[700] text-[#fff]">Your Library</p>
            <button>
              <Plus_icon classname="w-[16px] h-[16px]"></Plus_icon>
            </button>
          </div>
          <div className="w-[100%] bg-[#1F1F1F] flex flex-col rounded-[8px] py-[16px] pl-[20px] mt-[40px] gap-[10px]">
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
          <div className="w-[100%] bg-[#1F1F1F] flex flex-col rounded-[8px] py-[16px] pl-[20px] mt-[40px] gap-[10px]">
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
      <div className="w-full flex justify-center bg-[#121212] rounded-[8px] overflow-y-auto px-[20px] pt-[20px]">
        <div className="max-w-[1700px] w-[100%] flex flex-col">
          <div>
            <div className="flex w-[100%] items-center justify-between">
              <h1 className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline">
                Trending songs
              </h1>
              <p className="font-[400] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline">
                Show all
              </p>
            </div>
            <div className="flex w-[100%] justify-between overflow-y-hidden gap-[14px] mt-[20px]">
              {Data.map((artist, key) => {
                return artist.songs?.slice(0, 1).map((song) => (
                  <div key={key}>
                    <div className="w-[150px] h-[150px] ">
                      {" "}
                      <img
                        className=" w-[100%] h-[100%]"
                        src={song.song_image}
                        alt={song.song_name}
                      />
                    </div>
                    <p className="text-[#fff]">{song.song_name}</p>
                  </div>
                ));
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
