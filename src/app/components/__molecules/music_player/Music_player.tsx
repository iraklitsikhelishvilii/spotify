import M_play_icon from "@/app/common/icons/M_play_icon";
import Micro_icon from "@/app/common/icons/Micro_icon";
import Pause_Icon from "@/app/common/icons/Pause_Icon";
import Prev_song_icon from "@/app/common/icons/Prev_song_icon";
import Screen2_icon from "@/app/common/icons/Screen2_icon";
import Screen_big_icon from "@/app/common/icons/Screen_big_icon";
import Screen_icon from "@/app/common/icons/Screen_icon";
import Shufle_icon from "@/app/common/icons/Shufle_icon";
import Some_icon from "@/app/common/icons/Some_icon";
import Speaker_icon from "@/app/common/icons/Speaker_icon";
import Speaker_monitor_icon from "@/app/common/icons/Speaker_monitor_icon";
import Volume_icon from "@/app/common/icons/Volume_icon";
import { useState } from "react";
import guns_img from "../../../assets/images/guns.jpg";
import Image from "next/image";
export default function Music_Player() {
  const [currentTime, setCurrentTime] = useState(169);
  const [duration] = useState(182);
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="w-full bg-black text-white flex items-center  justify-between rounded-lg shadow-lg px-[15px] py-[15px]">
      <div className=" w-[100%] max-w-[340px] flex gap-[15px] items-center">
        <Image
          className="w-[56px] h-[56px]"
          src={guns_img}
          alt="Gun's N roses"
          width={500}
          height={500}
        />
        <div className="flex flex-col items-center">
          <p className="text-[14px] text-[#fff]">Guns N Roses</p>
          <p className="text-[12px] text-[#b3b3b3]">{"sweet child o' mine"}</p>
        </div>
      </div>
      <div className="flex items-center gap-2  w-[100%] flex-col ">
        <div className="flex items-center gap-6">
          <button className="text-xl hover:text-green-500 transition duration-200">
            <Shufle_icon classname="w-[16px] h-[16px]" />
          </button>
          <button className="text-xl hover:text-green-500 transition duration-200">
            <Prev_song_icon classname="h-[16px] w-[16px]" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-[32px] h-[32px] bg-[#b3b3b3] rounded-[50%] transition duration-200 flex items-center justify-center"
          >
            {isPlaying ? (
              <Pause_Icon classname="w-[12px] h-[14px]" />
            ) : (
              <M_play_icon classname="w-[14px] h-[14px]" />
            )}
          </button>
          <button className="text-xl hover:text-green-500 transition duration-200">
            <Prev_song_icon classname="h-[16px] w-[16px] rotate-[180deg]" />
          </button>
          <button className="text-xl hover:text-green-500 transition duration-200">
            <Screen_icon classname="w-[16px] h-[16px]" />
          </button>
        </div>
        <div className="flex w-[100%] max-w-[400px] items-center gap-[10px]">
          <span className="text-sm">{formatTime(currentTime)}</span>
          <input
            style={{
              background: "transparent",
            }}
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => setCurrentTime(Number(e.target.value))}
            className="w-full bg-[#b3b3b3] rounded-full h-[5px] "
          />
          <span className="text-sm">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center gap-6 w-[100%] max-w-[400px]">
        <button className="text-xl hover:text-green-500 transition duration-200">
          <Speaker_icon classname="w-[16px] h-[16px]" />
        </button>{" "}
        <button className="text-xl hover:text-green-500 transition duration-200">
          <Micro_icon classname="w-[16px] h-[16px]" />
        </button>{" "}
        <button className="text-xl hover:text-green-500 transition duration-200">
          <Some_icon classname="w-[16px] h-[16px]" />
        </button>{" "}
        <button className="text-xl hover:text-green-500 transition duration-200">
          <Speaker_monitor_icon classname="w-[16px] h-[16px]" />
        </button>{" "}
        <button className="text-xl hover:text-green-500 transition duration-200">
          <Volume_icon classname="w-[16px] h-[16px]" />
        </button>{" "}
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-24 bg-gray-600 rounded-full"
        />
        <button className="text-xl hover:text-green-500 transition duration-200">
          <Screen2_icon classname="w-[16px] h-[16px]" />
        </button>{" "}
        <button className="text-xl hover:text-green-500 transition duration-200">
          <Screen_big_icon />
        </button>{" "}
      </div>
    </div>
  );
}
