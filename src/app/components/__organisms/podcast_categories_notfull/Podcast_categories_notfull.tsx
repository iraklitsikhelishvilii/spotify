import React from "react";
import Podcasts from "../../../../../json_file/podcasts.json";
import Arrow_icon from "@/app/common/icons/Arrow_icon";
import Link from "next/link";
function Podcast_categories_notfull() {
  return (
    <div className="mt-[50px] px-[20px] py-[20px] w-[100%]  max-w-[1700px] ">
      <p className="text-[24px] text-[#fff] font-[700] ">Categories</p>
      <div className=" grid grid-cols-4 justify-between w-[100%] gap-[30px] cursor-pointer mt-[20px]">
        {Podcasts.map((podcast, key) => (
          <div
            key={key}
            style={{ backgroundColor: podcast.color }}
            className=" h-[160px] w-[100%]  rounded-[10px] px-[16px] py-[16px]"
          >
            <p className="text-[20px] text-[#fff] font-[800]">
              {podcast.title}
            </p>
          </div>
        ))}
      </div>
      <Link
        href={`/Allpodcasts`}
        className="text-[#fff] text-[14px] font-[700] flex items-center justify-between gap-[5px] bg-[#FFFFFF1A] px-[12px] py-[4px] rounded-[20px] mt-[40px]  w-[170px]"
      >
        See all categories <Arrow_icon classname="w-[12px] h-[12px]" />
      </Link>
    </div>
  );
}

export default Podcast_categories_notfull;
