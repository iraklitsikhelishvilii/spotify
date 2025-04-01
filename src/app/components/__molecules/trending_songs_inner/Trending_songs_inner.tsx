"use client";
import Songs_list from "../songs_list/Songs_list";
import Data from "../../../../../json_file/data.json";
import AlbumsData from "../../../../../json_file/albums.json";
import RadioData from "../../../../../json_file/radios.json";
import FeaturedData from "../../../../../json_file/featured.json";
import {
  DataItem,
  FeaturedItem,
  Show,
  Song,
  Trendingsongsinner,
} from "@/app/common/types";
import PlaylistData from "../../../../../json_file/playlists.json";

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

  const chosenFeatured: FeaturedItem[] = Array.isArray(FeaturedData)
    ? (FeaturedData as FeaturedItem[]).map((item) => ({
        id: item.id,
        chart_name: item.chart_name,
        chart_image: item.chart_image,
        description: item.description,
        color: item.color,
        songs: item.songs.filter(
          (song) => song.chart_name === songData?.chart_name
        ),
      }))
    : [];

  console.log(songData?.playlist_name);

  const playlists: Song[] = PlaylistData.flatMap((playlist) =>
    (playlist.tracks || []).map((track) => ({
      id: track.track_id,
      song_name: track.song_name,
      author_name: track.artist,
      duration: track.duration,
      song_image: track.song_image,
      playlist_name: track.playlist_name,
      playlist_image: track.playlist_image,
    }))
  );

  const combinedInfo: (Song | Show)[] = [
    ...filteredSongs,
    ...filteredAlbumSongs,
    ...Allradios,
    ...chosenFeatured.flatMap((item) => item.songs),
    ...playlists,
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
              src={
                songData?.song_image ||
                songData?.radio_image ||
                songData?.chart_image ||
                songData?.playlist_image
              }
              alt={
                songData?.song_name ||
                songData?.radio_name ||
                songData?.chart_name ||
                songData?.playlist_name
              }
            />
          </div>
          <div className="flex flex-col items-baseline justify-end">
            <h1 className="font-bold text-white text-4xl">
              {songData?.song_name ||
                songData?.radio_name ||
                songData?.playlist_name}
            </h1>
            <div className="flex items-center gap-2.5">
              <img
                className="w-6 h-6 rounded-full"
                src={
                  songData?.author_image ||
                  songData?.song_image ||
                  songData?.radio_image ||
                  songData?.chart_image ||
                  songData?.playlist_image
                }
                alt={
                  songData?.author_name ||
                  songData?.radio_name ||
                  songData?.chart_name ||
                  songData?.playlist_name
                }
              />
              <p className="text-sm font-bold text-white mt-1">
                {songData?.author_name ||
                  songData?.radio_name ||
                  songData?.chart_name ||
                  songData?.playlist_name}
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
