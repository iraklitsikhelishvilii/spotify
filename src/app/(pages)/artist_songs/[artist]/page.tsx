"use client";
import { Params } from "@/app/common/types";
import Artists_inner from "@/app/components/__molecules/artists_inner/Artists_inner";
import Preview_div from "@/app/components/__molecules/preview_div/Preview_div";
import Footer from "@/app/components/__organisms/footer/Footer";
import Header from "@/app/components/__organisms/header/Header";
import Library_div from "@/app/components/__organisms/library_div/Library_div";
import React from "react";
import Data from "../../../../../json_file/data.json";

function page({ params }: Params) {
  const ArtistNameDecoded = decodeURIComponent(params.artist);
  console.log(ArtistNameDecoded);

  const ChosenArtist = Data.find(
    (item) => item.author_name === ArtistNameDecoded
  );

  if (!ChosenArtist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className=" w-[100%] h-[100vh] bg-[#000000]  flex-col pb-[10px] flex">
      <Header />
      <div className="w-[100%] flex-1 h-full flex gap-[10px] overflow-hidden ">
        <Library_div />
        <div className="w-full flex flex-col overflow-auto bg-[#121212] rounded-[8px] h-full ">
          <div className="flex flex-col h-[2000px]">
            <Artists_inner Info={ChosenArtist} />
            <Footer />
          </div>
        </div>
      </div>
      <Preview_div />
    </div>
  );
}

export default page;
