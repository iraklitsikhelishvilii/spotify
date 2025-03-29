"use client";
import Preview_div from "@/app/components/__molecules/preview_div/Preview_div";
import Radio_divs from "@/app/components/__molecules/radio_divs/Radio_divs";
import Footer from "@/app/components/__organisms/footer/Footer";
import Header from "@/app/components/__organisms/header/Header";
import Library_div from "@/app/components/__organisms/library_div/Library_div";
import React from "react";
import RadioData from "../../../../json_file/radios.json";
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
                Popular radio
              </h1>
              <div className="w-[100$] grid grid-cols-5 mt-[40px] gap-[30px]">
                {RadioData.map((radio, key) => (
                  <Radio_divs
                    key={key}
                    image={radio.radio_image}
                    radioname={radio.radio_name}
                    info={radio}
                    href={`/radios/${radio.radio_name}`}
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
