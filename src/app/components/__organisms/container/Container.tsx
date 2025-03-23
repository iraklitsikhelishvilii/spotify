"use client";
import Library_div from "../library_div/Library_div";
import Footer from "../footer/Footer";
import Songs_main from "../songs_main/Songs_main";
import { useStates } from "@/app/common/store";
import Podcasts_div from "../podcasts_div/Podcasts_div";
import Inner_song from "../inner_song/Inner_song";

function Container() {
  const { Podcasts, Allpodcasts, InnerClick } = useStates();
  return (
    <div className="flex px-[15px]  w-[100%] justify-between  flex-1 gap-[10px] overflow-y-auto">
      <Library_div />
      <div
        className={`w-full flex  justify-start bg-[#121212] rounded-[8px]  overflow-x-hidden ${
          Podcasts ? "px-[0px] py-[0px]" : "px-[20px] pt-[20px]"
        }`}
      >
        <div
          className={` w-[100%] flex items-center flex-col overflow-y-auto  ${
            Podcasts ? "h-[1300px]" : "h-[2200px]"
          } ${Allpodcasts ? "h-[4800px]" : ""}`}
        >
          {Podcasts ? (
            <Podcasts_div />
          ) : InnerClick ? (
            <Inner_song />
          ) : (
            <Songs_main />
          )}

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Container;
