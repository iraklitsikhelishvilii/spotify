import Library_icons from "@/app/common/icons/Library_icons";
import Plus_icon from "@/app/common/icons/Plus_icon";
import { useStates } from "@/app/common/store";
import React from "react";
import Authorized_plus_div from "../../__molecules/authorized_plus_div/Authorized_plus_div";

function Library_div_authorized() {
  const { authorizedplus, handleauthorizedplus } = useStates();

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[100%] justify-between items-center mt-[8px] relative">
        <div className="flex items-center gap-[15px] ">
          <Library_icons classname="w-[24px] h-[24px]" />{" "}
          <p className="text-[16px] text-[#b3b3b3] font-[700] hover:text-[#fff] cursor-pointer">
            Your Library
          </p>
        </div>
        <div
          onClick={handleauthorizedplus}
          className="w-[35px] h-[35px] rounded-[50%] bg-[#1f1f1f] flex items-center justify-center hover:bg-[#2a2a2a] cursor-pointer"
        >
          <Plus_icon
            classname={`w-[16px] h-[16px] transition-all  ${
              authorizedplus ? "rotate-[45deg]" : ""
            }`}
          />
        </div>
        {authorizedplus && <Authorized_plus_div />}
      </div>
      <div>
        {/* {libraryMassive.length > 0 &&
          libraryMassive.map((item) =>
            Array.isArray(item)
              ? item.slice(0, 1).map((song, subKey) => {
                  const link = links.find((l) => l.includes(song.author_name)); // Find the corresponding link
                  return link ? (
                    <Link href={link} key={subKey} className="text-white">
                      <p>{song.author_name}</p>
                    </Link>
                  ) : null;
                })
              : null
          )} */}
      </div>
    </div>
  );
}

export default Library_div_authorized;
