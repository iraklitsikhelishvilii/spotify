"use client";
import Library_div from "../library_div/Library_div";
import Footer from "../footer/Footer";
import Songs_main from "../songs_main/Songs_main";
import { useStates } from "@/app/common/store";
import Data from "../../../../../json_file/data.json";
import Song_divs from "../../__molecules/song_divs/Song_divs";

function Container() {
  const { headerinput } = useStates();
  const flatData = Data.flatMap((item) => item.songs);
  const filteredData = flatData.filter((item) =>
    item?.song_name.toLocaleLowerCase().includes(headerinput)
  );
  return (
    <div className="flex px-[15px] w-[100%] justify-between flex-1 gap-[10px] overflow-y-auto">
      <Library_div />
      <div
        className={`w-full flex justify-start bg-[#121212] rounded-[8px] overflow-x-hidden px-[20px] pt-[20px] `}
      >
        <div className={`w-[100%] flex items-center flex-col overflow-y-auto`}>
          {headerinput.length > 0 ? (
            <div
              className={`${
                filteredData.length > 0 ? "grid grid-cols-5" : "flex"
              } gap-[20px] max-w-[1700px] w-[100%]`}
            >
              {filteredData.length > 0 ? (
                filteredData.map((item, key) => (
                  <Song_divs
                    href={`/alltrendings/${item?.song_name}`}
                    key={key}
                    image={item?.song_image}
                    songname={item?.song_name}
                    artist={item?.author_name}
                    imgclass="w-[100%] h-[100%] rounded-[10px]"
                  />
                ))
              ) : (
                <div className="flex w-[100%] items-center justify-center my-[70px]">
                  <p className="text-[#b3b3b3] text-[30px]">No results found</p>
                </div>
              )}
            </div>
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
