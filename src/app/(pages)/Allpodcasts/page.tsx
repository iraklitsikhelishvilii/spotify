"use client";
import Preview_div from "@/app/components/__molecules/preview_div/Preview_div";
import Footer from "@/app/components/__organisms/footer/Footer";
import Header from "@/app/components/__organisms/header/Header";
import Library_div from "@/app/components/__organisms/library_div/Library_div";
import React from "react";
import Podcasts_div from "@/app/components/__organisms/podcasts_div/Podcasts_div";

import AllPodcasts from "@/app/components/__organisms/allpodcasts/AllPodcasts";
function page() {
  return (
    <div className=" w-[100%] h-[100vh] bg-[#000000]  flex-col pb-[10px] flex">
      <Header />
      <div className="w-[100%] flex-1 h-full flex gap-[10px] overflow-hidden ">
        <Library_div />
        <div className="w-full flex  flex-col overflow-auto bg-[#121212] rounded-[8px]  h-full ">
          <div className="flex flex-col h-[2000px] items-center">
            <Podcasts_div component={<AllPodcasts />} />
            <Footer />
          </div>
        </div>
      </div>
      <Preview_div />
    </div>
  );
}

export default page;
