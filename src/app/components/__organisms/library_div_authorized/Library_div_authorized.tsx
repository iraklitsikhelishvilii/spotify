import { useStates } from "@/app/common/store";
import React, { useState } from "react";
import Library_icons from "@/app/common/icons/Library_icons";
import Plus_icon from "@/app/common/icons/Plus_icon";
import Authorized_plus_div from "../../__molecules/authorized_plus_div/Authorized_plus_div";
import Link from "next/link";
import SearchIcon from "@/app/common/icons/Search_icon";

function Library_div_authorized() {
  const {
    authorizedplus,
    handleauthorizedplus,
    targetArray,
    deleteFromTargetByName,
  } = useStates();

  const handleDelete = (name: string) => {
    deleteFromTargetByName(name);
  };
  const [searchletter, setsearchletter] = useState("");

  const handlesearchletter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchletter(e.target.value);
  };
  console.log(searchletter);

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[100%] justify-between items-center mt-[8px] relative">
        <div className="flex items-center gap-[15px]">
          <Library_icons classname="w-[24px] h-[24px]" />
          <p className="text-[16px] text-[#b3b3b3] font-[700] hover:text-[#fff] cursor-pointer">
            Your Library
          </p>
        </div>
        <div
          onClick={handleauthorizedplus}
          className="w-[35px] h-[35px] rounded-[50%] bg-[#1f1f1f] flex items-center justify-center hover:bg-[#2a2a2a] cursor-pointer"
        >
          <Plus_icon
            classname={`w-[16px] h-[16px] transition-all  ${
              authorizedplus ? "rotate-[45deg]" : ""
            }`}
          />
        </div>
        {authorizedplus && <Authorized_plus_div />}
      </div>
      <div className="flex  w-[100%] bg-[#1f1f1f] w-[100%] items-center gap-[15px] px-[10px] self-baseline mt-[20px]">
        <SearchIcon classname="w-[16px] h-[16px]" />{" "}
        <input
          onChange={handlesearchletter}
          className="bg-transparent outline-none text-[#b3b3b3] w-[100%]"
          type="text"
        />
      </div>
      <div className="flex flex-col w-[100%] mt-[15px] gap-[10px] overflow-y-auto">
        {targetArray.length > 0 &&
          targetArray.map((item, key) => {
            const displayName =
              item.song_name ||
              item.chart_name ||
              item.radio_name ||
              item.show_name ||
              item.artist ||
              item.song_name_al;

            const name = String(displayName);

            const page = item.song_name
              ? `/alltrendings/${encodeURIComponent(item.song_name)}`
              : item.chart_name
              ? `/featured_charts/${encodeURIComponent(item.chart_name)}`
              : item.radio_name
              ? `/radios/${encodeURIComponent(item.radio_name)}`
              : item.song_name_pl
              ? `/playlists/${item.playlist_name}`
              : `/all_albums_singles/${item.author_name}`;

            return (
              <div className="flex justify-between" key={item.id ?? key}>
                <Link href={page}>
                  <p className="text-white text-[20px] font-[700] cursor-pointer hover:text-[#b3b3b3]">
                    {item.song_name ||
                      item.radio_name ||
                      item.show_name ||
                      item.artist ||
                      item.song_name_al}
                  </p>
                </Link>
                <button
                  className="text-white"
                  onClick={() => handleDelete(name)}
                >
                  delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Library_div_authorized;
