"use client";
import { Params } from "@/app/common/types";
import Preview_div from "@/app/components/__molecules/preview_div/Preview_div";
import Footer from "@/app/components/__organisms/footer/Footer";
import Header from "@/app/components/__organisms/header/Header";
import Library_div from "@/app/components/__organisms/library_div/Library_div";
import React from "react";
import AlbumsData from "../../../../../json_file/albums.json";
import Trending_songs_inner from "@/app/components/__molecules/trending_songs_inner/Trending_songs_inner";

function page({ params }: Params) {
  const ArtistDecoded = decodeURIComponent(params.artist);
  const chosenArtist = AlbumsData.find(
    (item) => item.author_name === ArtistDecoded
  );

  return (
    <div className=" w-[100%] h-[100vh] bg-[#000000]  flex-col pb-[10px] flex">
      <Header />
      <div className="w-[100%] flex-1 h-full flex gap-[10px] overflow-hidden ">
        <Library_div />
        <div className="w-full flex  flex-col overflow-auto bg-[#121212] rounded-[8px]  h-full ">
          <div className="flex flex-col h-[2000px]">
            <Trending_songs_inner songData={chosenArtist} />
            <Footer />
          </div>
        </div>
      </div>
      <Preview_div />
    </div>
  );
}

export default page;
