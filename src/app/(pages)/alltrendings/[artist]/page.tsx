"use client";
import { Params } from "@/app/common/types";
import React from "react";
import Data from "../../../../../json_file/data.json";
import Header from "@/app/components/__organisms/header/Header";
import Library_div from "@/app/components/__organisms/library_div/Library_div";
import Trending_songs_inner from "@/app/components/__molecules/trending_songs_inner/Trending_songs_inner";
import Footer from "@/app/components/__organisms/footer/Footer";
import Preview_div from "@/app/components/__molecules/preview_div/Preview_div";
function page({ params }: Params) {
  const songNameDecoded = decodeURIComponent(params.artist);
  const isTreandingSong = Data.flatMap((item) => item.songs).find(
    (item) => item?.song_name === songNameDecoded
  );

  return (
    <div className=" w-[100%] h-[100vh] bg-[#000000]  flex-col pb-[10px] flex">
      <Header />
      <div className="w-[100%] flex-1 h-full flex gap-[10px] overflow-hidden ">
        <Library_div />
        <div className="w-full flex  flex-col overflow-auto bg-[#121212] rounded-[8px]  h-full ">
          <div className="flex flex-col h-[2000px]">
            <Trending_songs_inner songData={isTreandingSong || {}} />
            <Footer />
          </div>
        </div>
      </div>
      <Preview_div />
    </div>
  );
}

export default page;
