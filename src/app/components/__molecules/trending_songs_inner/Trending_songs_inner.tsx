import React from "react";
import { Show, Song, Trendingsongsinner } from "@/app/common/types";
import Songs_list from "../songs_list/Songs_list";
import Data from "../../../../../json_file/data.json";
import AlbumsData from "../../../../../json_file/albums.json";
import RadioData from "../../../../../json_file/radios.json";
interface DataItem {
  songs: Song[];
}

function Trending_songs_inner({ songData }: Trendingsongsinner) {
  const allSongs: Song[] = (Data as DataItem[]).flatMap((item) => item?.songs);
  const allAlbumSongs: Song[] = (AlbumsData as DataItem[]).flatMap(
    (item) => item?.songs
  );
  const Allradios: Show[] = RadioData.flatMap((item) => item.shows).filter(
    (item) => item.radio_name === songData?.radio_name
  );

  const filteredSongs = allSongs.filter(
    (song) => song?.author_name === songData?.author_name
  );

  const filteredAlbumSongs = allAlbumSongs.filter(
    (song) => song?.author_name === songData?.author_name
  );
  const combinedInfo: (Song | Show)[] = [
    ...filteredSongs,
    ...filteredAlbumSongs,
    ...Allradios,
  ];
  return (
    <div className="w-full flex flex-col flex-1 h-full">
      <div
        style={{ backgroundColor: songData?.color }}
        className="w-full flex justify-center"
      >
        <div
          className="flex gap-5 max-w-[1700px] w-full px-5 py-5"
          key={songData?.id}
        >
          <div className="w-[216px] h-[216px] cursor-pointer">
            <img
              className="w-full h-full rounded-lg"
              src={songData?.song_image || songData?.radio_image}
              alt={songData?.song_name || songData?.radio_name}
            />
          </div>
          <div className="flex flex-col items-baseline justify-end">
            <h1 className="font-bold text-white text-4xl">
              {songData?.song_name || songData?.radio_name}
            </h1>
            <div className="flex items-center gap-2.5">
              <img
                className="w-6 h-6 rounded-full"
                src={
                  songData?.author_image
                    ? songData.author_image
                    : songData?.song_image
                    ? songData.song_image
                    : songData?.radio_image
                }
                alt={songData?.author_name || songData?.radio_name}
              />
              <p className="text-sm font-bold text-white mt-1">
                {songData?.author_name || songData?.radio_name}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Songs_list info={combinedInfo} />
    </div>
  );
}

export default Trending_songs_inner;
