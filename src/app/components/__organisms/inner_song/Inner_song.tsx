"use client";
import { useStates } from "@/app/common/store";
import React from "react";
import Data from "../../../../../data.json";
import Trending_songs_inner from "../../__molecules/trending_songs_inner/Trending_songs_inner";

import Artists_inner from "../../__molecules/artists_inner/Artists_inner";
function Inner_song() {
  const { artist, artist2, artist3 } = useStates();

  const songData = Data.flatMap((artist) => artist.songs).find(
    (item) => item?.author_name === artist
  );

  const artistData = Data.find((item) => item.author_name === artist2);

  const albumData = Data.flatMap((item) => item.albums).find(
    (item) => item?.artist === artist3
  );
  // const singleData = Data.flatMap((item) => item.singles).find(
  //   (item) => item?.artist === artist3
  // );

  return (
    <div className="w-[100%] ">
      {songData && <Trending_songs_inner songData={songData} />}
      {artistData && <Artists_inner artistData={artistData} />}
      {albumData && (
        <div className="100%">
          <div
            style={{ backgroundColor: albumData.color }}
            className="w-[100%] h-[310px]"
          ></div>
        </div>
      )}
    </div>
  );
}

export default Inner_song;
