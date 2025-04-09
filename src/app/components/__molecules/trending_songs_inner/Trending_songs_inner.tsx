import Songs_list from "../songs_list/Songs_list";
import Data from "../../../../../json_file/data.json";
import AlbumsData from "../../../../../json_file/albums.json";
import RadioData from "../../../../../json_file/radios.json";
import FeaturedData from "../../../../../json_file/featured.json";
import PlaylistData from "../../../../../json_file/playlists.json";
import { useStates } from "@/app/common/store";
import {
  Song,
  Show,
  Trendingsongsinner,
  FeaturedItem,
} from "@/app/common/types";
interface DataItem {
  songs?: Song[];
}

function Trending_songs_inner({ songData }: Trendingsongsinner) {
  const allSongs: Song[] = (Data as DataItem[]).flatMap(
    (item) => item.songs ?? []
  );
  const allAlbumSongs: Song[] = (
    JSON.parse(JSON.stringify(AlbumsData)) as DataItem[]
  ).flatMap((item) => item.songs ?? []);

  const filteredSongs = allSongs.filter(
    (song) => song.author_name === songData?.author_name
  );
  const filteredAlbumSongs = allAlbumSongs.filter(
    (song) => song.author_name === songData?.author_name
  );
  const Allradios = RadioData.flatMap((item) => item.shows).filter(
    (item) => item.radio_name === songData?.radio_name
  );

  const chosenFeatured: FeaturedItem[] = Array.isArray(FeaturedData)
    ? FeaturedData.map((item) => ({
        ...item,
        songs: item.songs.filter(
          (song) => song.chart_name === songData?.chart_name
        ),
      }))
    : [];

  const playlists = PlaylistData.flatMap((item) => item.tracks).filter(
    (item) => item.playlist_name === songData?.playlist_name
  );

  const combinedInfo: (Song | Show)[] = [
    ...filteredSongs,
    ...filteredAlbumSongs,
    ...Allradios,
    ...chosenFeatured.flatMap((item) => item.songs ?? []),
    ...playlists,
  ];

  const { addToTarget } = useStates();

  const handleAddToTarget = (objectToAdd: Song | Show) => {
    addToTarget(objectToAdd);
  };

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
                songData?.song_name_al ||
                songData?.radio_name ||
                songData?.chart_name ||
                songData?.playlist_name
              }
            />
          </div>
          <div className="flex flex-col items-baseline justify-end">
            <h1 className="font-bold text-white text-4xl">
              {songData?.song_name ||
                songData?.song_name_al ||
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
      <Songs_list handleAddToTarget={handleAddToTarget} info={combinedInfo} />
    </div>
  );
}

export default Trending_songs_inner;
