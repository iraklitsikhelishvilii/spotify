import React from "react";
import Data from "../../../../../data.json";
import { useStates } from "@/app/common/store";

interface Trending_songs_inner {
  songData: {
    id: number;
    song_image: string;
    song_name: string;
    author_image: string;
    author_name: string;
    color: string;
  };
}

function Trending_songs_inner({ songData }: Trending_songs_inner) {
  const { artist } = useStates();

  const ChosenData = Data.flatMap((item) => item.songs);
  const FilteredChosenData = ChosenData.filter(
    (item) => item?.author_name === artist
  );
  console.log(FilteredChosenData);

  return (
    <div className="w-[100%] flex flex-col justify-center">
      <div
        style={{ backgroundColor: songData.color }}
        className="w-[100%] flex justify-center"
      >
        <div
          className="flex gap-[20px] max-w-[1700px] w-[100%] px-[20px] py-[20px]"
          key={songData.id}
        >
          <div className="w-[216px] h-[216px] cursor-pointer">
            <img
              className="w-[100%] h-[100%] rounded-[10px]"
              src={songData.song_image}
              alt={songData.song_name}
            />
          </div>
          <div className="flex flex-col items-baseline justify-end">
            <h1 className="font-[700] text-[#fff] text-[48px]">
              {songData.song_name}
            </h1>
            <div className="flex items-center justify-center gap-[10px]">
              <img
                className="w-[24px] h-[24px] rounded-[50%]"
                src={songData.author_image}
                alt={songData.author_name}
              />
              <p className="text-[14px] font-[800] text-[#FFF] mt-[3px]">
                {songData.author_name}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-center px-[20px] py-[20px]">
        <div className="w-[100%] max-w-[1700px]">
          <div className="w-[100%] flex flex-col ">
            <div>
              <p className="text-[14px] font-[600] text-[#b3b3b3]"># Title</p>
            </div>
            <div className="w-[100%] h-[1px] bg-[#B3B3B3] mt-[10px]"></div>
          </div>
          {FilteredChosenData.map((item, key) => (
            <div key={key} className="w-[100%] flex mt-[15px]">
              <div className="flex items-center gap-[20px]">
                <p className="text-[#b3b3b3] text-[16px] font-[600]">
                  {item?.id}
                </p>
                <div className="felx flex-col">
                  <h2 className="text-[16px] font-[700] text-[#fff]">
                    {item?.song_name}
                  </h2>
                  <p className="text-[14px] text-[#B3B3B3] font-[600]">
                    {item?.author_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending_songs_inner;
