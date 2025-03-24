import React from "react";
import Verified_icon from "@/app/common/icons/Verified_icon";
interface Artists_inner {
  artistData: {
    author_image?: string;
    author_name?: string;
    id?: number;
    song_image?: string;
    song_name?: string;
    isTreanding?: boolean;
    popular?: boolean;
    color?: string;
  };
}
function Artists_inner({ artistData }: Artists_inner) {
  return (
    <div className="w-[100%] relative justify-center">
      <img
        className="w-[100%] max-h-[420px] min-[1700px]:object-cover  "
        src={artistData?.author_image}
        alt={artistData?.author_name}
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
            {artistData?.author_name}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Artists_inner;
