import React from "react";
import Verified_icon from "@/app/common/icons/Verified_icon";
import { Artistsinner } from "@/app/common/types";
import Songs_list from "../songs_list/Songs_list";
import Data from "../../../../../json_file/data.json";
function Artists_inner({ Info }: Artistsinner) {
  const Artistsongs = Data.flatMap((item) => item.songs).filter(
    (item) => item?.author_name === Info.author_name
  );
  return (
    <div className="w-[100%] ">
      <div className="w-[100%] relative justify-center">
        <img
          className="w-[100%] max-h-[420px] min-[1700px]:object-cover  "
          src={Info?.author_image}
          alt={Info?.author_name}
        />
        <div className="max-w-[1700px] w-[100%] absolute bottom-0 left-1/2 -translate-x-1/2 px-[20px] py-[20px]">
          <div className="flex flex-col   ">
            <div className="flex items-center  gap-[15px]">
              <Verified_icon classname="w-[20px] h-[20px] bg-white rounded-[50%]" />
              <p className="text-[#fff] text-[14px] font-[700]">
                Verified Artist
              </p>
            </div>
            <h1 className="text-[#fff] text-[96px] font-[700]">
              {Info?.author_name}
            </h1>
          </div>
        </div>
      </div>
      <Songs_list info={Artistsongs} />
    </div>
  );
}

export default Artists_inner;
