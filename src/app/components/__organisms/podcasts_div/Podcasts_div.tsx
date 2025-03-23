import React from "react";

import Podcast_categories_notfull from "../podcast_categories_notfull/Podcast_categories_notfull";
import { useStates } from "@/app/common/store";
import AllPodcasts from "../allpodcasts/AllPodcasts";
function Podcasts_div() {
  const { Allpodcasts } = useStates();
  return (
    <div className="flex w-[100%] flex-col ">
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(93, 173, 135, 0.5), rgba(73, 151, 118, 0.5), rgba(64, 142, 116, 0.5), rgba(57, 122, 98, 0.5), rgba(47, 99, 80, 0.5))",
        }}
        className="w-[100%]  h-[265px] flex justify-center pl-[20px] pb-[20px]"
      >
        <div className="max-w-[1700px] w-[100%] flex items-end justify-start">
          <h1 className="text-[96px] font-[800] text-[#fff]">Podcasts</h1>
        </div>
      </div>
      <div
        style={{
          background: `${
            Allpodcasts
              ? "#121212"
              : "linear-gradient(to bottom, #123329, #121212)"
          }`,
        }}
        className="flex justify-center"
      >
        {Allpodcasts ? <AllPodcasts /> : <Podcast_categories_notfull />}
      </div>
    </div>
  );
}

export default Podcasts_div;
