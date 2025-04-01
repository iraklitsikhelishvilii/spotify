"use client";
import Preview_div from "@/app/components/__molecules/preview_div/Preview_div";
import Footer from "@/app/components/__organisms/footer/Footer";
import Header from "@/app/components/__organisms/header/Header";
import Library_div from "@/app/components/__organisms/library_div/Library_div";
import React from "react";
import FeaturedData from "../../../../json_file/featured.json";
import Song_divs from "@/app/components/__molecules/song_divs/Song_divs";
import PlaylistData from "../../../../json_file/playlists.json";
function page() {
  return (
    <div className=" w-[100%] h-[100vh] bg-[#000000]  flex-col pb-[10px] flex">
      <Header />
      <div className="w-[100%] flex-1 h-full flex gap-[10px] overflow-hidden ">
        <Library_div />
        <div className="w-full flex  flex-col overflow-auto bg-[#121212] rounded-[8px]  h-full ">
          <div className="flex flex-col h-[2000px] items-center">
            <div className="w-full max-w-[1700px] px-[15px]">
              <h1 className="text-[#fff] text-[32px] font-[700] mt-[70px]">
                Featured Charts
              </h1>
              <div className="w-[100$] grid grid-cols-5 mt-[40px] gap-[30px]">
                {PlaylistData.map((radio, key) => (
                  <Song_divs
                    href={`/playlists/${radio?.playlist_name}`}
                    key={key}
                    image={
                      radio?.playlist_image ?? "/path/to/default/image.jpg"
                    }
                    songname={radio?.playlist_name ?? "undefined"}
                    artist={radio?.description ?? "undefined"}
                    imgclass="w-[100%] h-[100%] rounded-[10px]"
                  />
                ))}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <Preview_div />
    </div>
  );
}

export default page;
