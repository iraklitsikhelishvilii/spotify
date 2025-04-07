import Library_icons from "@/app/common/icons/Library_icons";
import Plus_icon from "@/app/common/icons/Plus_icon";
import { useStates } from "@/app/common/store";
import React, { useEffect, useState } from "react";
import Authorized_plus_div from "../../__molecules/authorized_plus_div/Authorized_plus_div";
import Link from "next/link";

function Library_div_authorized() {
  const { authorizedplus, handleauthorizedplus, libraryMassive } = useStates();

  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    const generatedLinks = libraryMassive?.flatMap((item) =>
      Array.isArray(item)
        ? item.map((innerItem) => {
            if (
              [
                "Led Zeppelin",
                "AC DC",
                "Guns N' Roses",
                "Ocean Wisdom",
                "System of a Down",
                "Rolling Stones",
                "Black Sabbath",
                "Bon Jovi",
                "Iron Maiden",
                "KISS",
              ].includes(innerItem.author_name)
            ) {
              return `/allartists/${innerItem.author_name}`;
            } else if (
              [
                "Adele",
                "The Weeknd",
                "Dua Lipa",
                "Taylor Swift",
                "Ed Sheeran",
                "Harry Styles",
                "Olivia Rodrigo",
                "Blinding Lights",
              ].includes(innerItem.author_name)
            ) {
              return `/all_albums_singles/${innerItem.author_name}`;
            }
            return null;
          })
        : []
    );

    setLinks(generatedLinks.filter(Boolean) as string[]);
  }, [libraryMassive]);

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
        {libraryMassive.length > 0 &&
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
          )}
      </div>
    </div>
  );
}

export default Library_div_authorized;
