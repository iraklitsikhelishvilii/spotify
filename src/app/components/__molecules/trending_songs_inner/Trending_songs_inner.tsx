import React from "react";
import { Song, Trendingsongsinner } from "@/app/common/types";
import Songs_list from "../songs_list/Songs_list";
import Data from "../../../../../json_file/data.json";
interface DataItem {
  songs: Song[];
}

function Trending_songs_inner({ songData }: Trendingsongsinner) {
  const ChosenData: Song[] = (Data as DataItem[]).flatMap((item) => item.songs);

  const FilteredChosenData: Song[] = ChosenData.filter(
    (item): item is Song =>
      item?.author_name === songData?.author_name &&
      item?.song_name !== undefined
  );

  return (
    <div className="w-[100%] flex flex-col flex-1 h-[100%]">
      <div
        style={{ backgroundColor: songData?.color }}
        className="w-[100%] flex justify-center"
      >
        <div
          className="flex gap-[20px] max-w-[1700px] w-[100%] px-[20px] py-[20px]"
          key={songData?.id}
        >
          <div className="w-[216px] h-[216px] cursor-pointer">
            <img
              className="w-[100%] h-[100%] rounded-[10px]"
              src={songData?.song_image}
              alt={songData?.song_name}
            />
          </div>
          <div className="flex flex-col items-baseline justify-end">
            <h1 className="font-[700] text-[#fff] text-[48px]">
              {songData?.song_name}
            </h1>
            <div className="flex items-center justify-center gap-[10px]">
              <img
                className="w-[24px] h-[24px] rounded-[50%]"
                src={songData?.author_image}
                alt={songData?.author_name}
              />
              <p className="text-[14px] font-[800] text-[#FFF] mt-[3px]">
                {songData?.author_name}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Songs_list info={FilteredChosenData} />
    </div>
  );
}

export default Trending_songs_inner;
