import React from "react";
import Link from "next/link";

import { SongDivs } from "@/app/common/types";

function Song_divs({ href, key, image, songname, artist }: SongDivs) {
  return (
    <Link href={href} className="cursor-pointer" key={key}>
      <div className="w-[170px] h-[170px]">
        <img
          className="w-[100%] h-[100%] rounded-[10px]"
          src={image}
          alt={songname}
        />
      </div>
      <p className="text-[#fff] text-[15px] font-[400] mt-[5px]">{songname}</p>
      <p className="text-[14px] text-[#B3B3B3] mt-[3px]">{artist}</p>
    </Link>
  );
}

export default Song_divs;
