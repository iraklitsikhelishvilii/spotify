import React from "react";
import More_options_minor_div from "../../__atoms/more_options_minor_div/More_options_minor_div";
import Plus_icon2 from "@/app/common/icons/Plus_icon2";
import Live_icon from "@/app/common/icons/Live_icon";
import More_options_minor2_div from "../../__atoms/more_options_minor2_div/More_options_minor2_div";
import Plus_icon from "@/app/common/icons/Plus_icon";
import Share_icon from "@/app/common/icons/Share_icon";
import Spotify_icon from "@/app/common/icons/Spotify_icon";

function More_options_div() {
  return (
    <div className=" w-[200px]  p-[4px] bg-[#1f1f1f] flex flex-col absolute  left-[130px] top-[57px] ">
      <More_options_minor_div
        icon={<Plus_icon2 classname="w-[16px] h-[16px]" />}
        text="Add to Your Library"
      />
      <More_options_minor_div
        icon={<Live_icon classname="w-[16px] h-[16px]" />}
        text="Go to artist radio"
      />
      <More_options_minor2_div
        icon={<Plus_icon classname="w-[16px] h-[16px]" />}
        text="Go to artist radio"
      />
      <More_options_minor2_div
        icon={<Share_icon classname="w-[16px] h-[16px]" />}
        text="Share"
      />
      <More_options_minor_div
        icon={<Spotify_icon classname="w-[16px] h-[16px]" />}
        text="Open in Desktop app"
      />
    </div>
  );
}

export default More_options_div;
