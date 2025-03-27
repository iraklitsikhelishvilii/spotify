import React from "react";
import Plus_icon2 from "@/app/common/icons/Plus_icon2";
import Three_dots_icon from "@/app/common/icons/Three_dots_icon";
import Burger_menu_icon from "@/app/common/icons/Burger_menu_icon";
import Play_btn_icon from "@/app/common/icons/Play_btn_icon";
import Mark_icon from "@/app/common/icons/Mark_icon";
import Save_to_library_div from "../../__atoms/save_to_library_div/Save_to_library_div";
import { useStates } from "@/app/common/store";
import More_options_div from "../more_options_div/More_options_div";
function Inner_functions_div() {
  const {
    plusHover,
    MarkedClick,
    PlusEnter,
    PlusLeave,
    marked,
    DotsEnter,
    DotsLeave,
    dotsHover,
    DotsClick,
    DotsClickFunc,
  } = useStates();
  return (
    <div className=" flex w-[100%] justify-between">
      <div className="flex items-center gap-[20px] h-[60px] relative">
        {plusHover && <Save_to_library_div />}
        <div className="w-[60px] flex items-center justify-center">
          <button className="bg-[rgb(28,215,96)] rounded-[50%] w-[56px] h-[56px] flex justify-center items-center hover:w-[57px] hover:h-[57px] hover:bg-[#3be477]">
            <Play_btn_icon classname="w-[24px] h-[24px] " />
          </button>
        </div>
        <button
          onClick={MarkedClick}
          onMouseEnter={PlusEnter}
          onMouseLeave={PlusLeave}
          className="w-[32px] h-[32px]  rounded-[50%] "
        >
          {marked ? (
            <Mark_icon classname="w-[32px] h-[32px]" />
          ) : (
            <Plus_icon2
              Hover={plusHover}
              classname="w-[32px] h-[32px] hover:w-[33px] hover:h-[33px]"
            />
          )}
        </button>
        <button
          onClick={DotsClickFunc}
          onMouseEnter={DotsEnter}
          onMouseLeave={DotsLeave}
        >
          <Three_dots_icon
            Hover={dotsHover}
            classname="w-[32px] hover:w-[33px]"
          />
        </button>
        {DotsClick && <More_options_div />}
      </div>
      <div className="flex items-center gap-[10px]">
        <p className="text-[#FFFFFFB2] text-[14px]">Compact</p>
        <button>
          <Burger_menu_icon classname="w-[16px] h-[16px]" />
        </button>
      </div>
    </div>
  );
}

export default Inner_functions_div;
