import { PodcastsDiv } from "@/app/common/types";
import React from "react";

function Podcasts_div({ component }: PodcastsDiv) {
  return (
    <div className="flex w-[100%] flex-col ">
      <div
        style={{
          background: `
          linear-gradient(to bottom, #123329, #121212)`,
        }}
        className="flex justify-center"
      >
        {component}
      </div>
    </div>
  );
}

export default Podcasts_div;
