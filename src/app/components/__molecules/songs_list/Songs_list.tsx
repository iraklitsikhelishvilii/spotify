import React from "react";
import Inner_functions_div from "../inner_functions_div/Inner_functions_div";
import { Song, Songslist } from "@/app/common/types";

function Songs_list({ info }: Songslist) {
  return (
    <div className="w-[100%] flex justify-center px-[20px] py-[20px]">
      <div className="w-[100%] max-w-[1700px]">
        <Inner_functions_div />
        <div className="w-[100%] flex flex-col mt-[35px] ">
          <div>
            <p className="text-[14px] font-[600] text-[#b3b3b3]"># Title</p>
          </div>
          <div className="w-[100%] h-[1px] bg-[#B3B3B3] mt-[10px] opacity-[0.5]"></div>
        </div>
        {info?.map((item: Song, key: number) => (
          <div key={key} className="w-[100%] flex mt-[15px]">
            <div className="flex items-center gap-[20px]">
              <p className="text-[#b3b3b3] text-[16px] font-[600]">{key + 1}</p>
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
        <div className="mt-[40px]">
          <p className="text-[#B3B3B3] text-[14px] font-[700]">
            March 19, 2025
          </p>
          <p className="text-[11px] text-[#B3B3B3]">
            © 2025 SMG Music LLC & Friends Keep Secrets, under exclusive license
            to Interscope Records
          </p>{" "}
          <p className="text-[11px] text-[#B3B3B3]">
            ℗ 2025 SMG Music LLC & Friends Keep Secrets, under exclusive license
            to Interscope Records
          </p>
        </div>
        <div className="w-[100%] flex items-center gap-[30px] overflow-x-auto overflow-y-hidden mt-[70px]">
          {info?.map((item: Song, key: number) => (
            <div className="flex flex-col gap-[15px] cursor-pointer" key={key}>
              <div className="w-[162px] h-[162px]  ">
                <img
                  className="w-[162px] h-[162px]"
                  src={item?.song_image}
                  alt={item?.song_name}
                />
              </div>
              <p className="text-[#fff] text-[16px]">{item?.song_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Songs_list;
