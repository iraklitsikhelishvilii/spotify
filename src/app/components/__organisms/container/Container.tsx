"use client";
import Library_div from "../library_div/Library_div";
import Footer from "../footer/Footer";
import Songs_main from "../songs_main/Songs_main";

function Container() {
  return (
    <div className="flex px-[15px]  w-[100%] justify-between  flex-1 gap-[10px] overflow-y-auto">
      <Library_div />
      <div
        className={`w-full flex  justify-start bg-[#121212] rounded-[8px]  overflow-x-hidden px-[20px] pt-[20px]`}
      >
        <div
          className={` w-[100%] flex items-center flex-col overflow-y-auto  h-[2400px]`}
        >
          <Songs_main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Container;
