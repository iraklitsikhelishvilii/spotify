"use client";
import React from "react";
import Data from "../../../../../json_file/data.json";
import Trending_songs_inner from "@/app/components/__molecules/trending_songs_inner/Trending_songs_inner";
import Footer from "@/app/components/__organisms/footer/Footer";
import Library_div from "@/app/components/__organisms/library_div/Library_div";
import Header from "@/app/components/__organisms/header/Header";
import Preview_div from "@/app/components/__molecules/preview_div/Preview_div";
import { Params } from "@/app/common/types";

function page({ params }: Params) {
  console.log(params.artist);
  const songNameDecoded = decodeURIComponent(params.artist);
  const songData = Data.flatMap((artist) => artist.songs).find(
    (item) => item?.song_name.toLowerCase() === songNameDecoded.toLowerCase()
  );

  return (
    <div className=" w-[100%] h-[100vh] bg-[#000000]  flex-col pb-[10px] flex">
      <Header />
      <div className="w-[100%] flex-1 h-full flex gap-[10px] overflow-hidden ">
        <Library_div />
        <div className="w-full flex  flex-col overflow-auto bg-[#121212] rounded-[8px]  h-full ">
          <div className="flex flex-col h-[2000px]">
            <Trending_songs_inner songData={songData} />
            <Footer />
          </div>
        </div>
      </div>
      <Preview_div />
    </div>
  );
}

export default page;
