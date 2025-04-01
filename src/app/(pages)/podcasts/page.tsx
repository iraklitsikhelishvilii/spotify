"use client";
import Preview_div from "@/app/components/__molecules/preview_div/Preview_div";
import Footer from "@/app/components/__organisms/footer/Footer";
import Header from "@/app/components/__organisms/header/Header";
import Library_div from "@/app/components/__organisms/library_div/Library_div";
import React from "react";
import Song_divs from "@/app/components/__molecules/song_divs/Song_divs";
import PlaylistData from "../../../../json_file/playlists.json";
import Podcasts_div from "@/app/components/__organisms/podcasts_div/Podcasts_div";
import Podcast_categories_notfull from "@/app/components/__organisms/podcast_categories_notfull/Podcast_categories_notfull";
function page() {
  return (
    <div className=" w-[100%] h-[100vh] bg-[#000000]  flex-col pb-[10px] flex">
      <Header />
      <div className="w-[100%] flex-1 h-full flex gap-[10px] overflow-hidden ">
        <Library_div />
        <div className="w-full flex  flex-col overflow-auto bg-[#121212] rounded-[8px]  h-full ">
          <div className="flex flex-col h-[2000px] items-center">
            <Podcasts_div component={<Podcast_categories_notfull />} />
            <Footer />
          </div>
        </div>
      </div>
      <Preview_div />
    </div>
  );
}

export default page;
