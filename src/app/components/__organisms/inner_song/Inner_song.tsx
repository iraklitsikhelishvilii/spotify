"use client";
import { useStates } from "@/app/common/store";
import React from "react";
import Data from "../../../../../data.json";
import Trending_songs_inner from "../../__molecules/trending_songs_inner/Trending_songs_inner";

function Inner_song() {
  const { artist,  } = useStates();

  const songData = Data.flatMap((artist) => artist.songs).find(
    (item) => item?.author_name === artist
  );

  // const artistData = Data.find((item) => item.author_name === artist2);

  return (
    <div
      style={{ backgroundColor: `${songData ? songData.color : ""}` }}
      className="w-[100%] px-[20px] py-[20px] flex justify-center"
    >
      {songData ? (
        <Trending_songs_inner songData={songData} />
      ) : (
        <p>No song found</p>
      )}
    </div>
  );
}

export default Inner_song;
