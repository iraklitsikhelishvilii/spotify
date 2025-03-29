import React from "react";
import Link from "next/link";
import { RadioDivsProps, Show } from "@/app/common/types";

function Radio_divs({ key, image, radioname, info, href }: RadioDivsProps) {
  return (
    <Link href={href} className="cursor-pointer" key={key}>
      <div className="w-[150px] h-[150px] rounded-[50%]">
        <img
          className="w-[100%] h-[100%] rounded-[10px]"
          src={image}
          alt={radioname}
        />
      </div>
      <div className="mt-[10px]">
        {info.shows?.map((show: Show) => (
          <p className="text-[14px] text-[#B3B3B3]" key={show.show_id}>
            {show.host}
          </p>
        ))}
      </div>
    </Link>
  );
}

export default Radio_divs;
