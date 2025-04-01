import Data from "../../../../../json_file/data.json";
import Link from "next/link";
import Song_divs from "../../__molecules/song_divs/Song_divs";
import AlbumsData from "../../../../../json_file/albums.json";
import Radio_divs from "../../__molecules/radio_divs/Radio_divs";
import RadioData from "../../../../../json_file/radios.json";
import FeaturedData from "../../../../../json_file/featured.json";
import PlaylistsData from "../../../../../json_file/playlists.json";
function Songs_main() {
  return (
    <div className="max-w-[1700px] w-[100%] flex flex-col  ">
      <div className="flex w-[100%] items-center justify-between">
        <Link
          href="/alltrendings"
          className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline"
        >
          Trending songs
        </Link>
        <Link
          href="/alltrendings"
          className="font-[700] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline"
        >
          Show all
        </Link>
      </div>
      <div className="flex w-[100%] justify-between overflow-auto gap-[14px] mt-[20px]">
        {Data.map((artist) => {
          return artist.songs
            ?.slice(0, 1)
            .map((song, key) => (
              <Song_divs
                href={`/trending_songs/${song.song_name}`}
                key={key}
                image={song.song_image}
                songname={song.song_name}
                artist={artist.author_name}
                imgclass="w-[100%] h-[100%] rounded-[10px]"
              />
            ));
        })}
      </div>
      <div className="flex w-[100%] items-center justify-between mt-[50px]">
        <Link
          href="/allartists"
          className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline"
        >
          Popular artists
        </Link>
        <Link
          href="/allartists"
          className="font-[700] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline"
        >
          Show all
        </Link>
      </div>
      <div className="flex w-[100%] justify-between overflow-y-hidden gap-[14px] mt-[20px]">
        {Data.slice(0, 10).map((artist, key) => (
          <Song_divs
            href={`/artist_songs/${artist.author_name}`}
            key={key}
            image={artist?.author_image ?? "/path/to/default/image.jpg"}
            songname={artist?.author_name ?? "undefined"}
            artist={artist?.author_name ?? "undefined"}
            imgclass="w-[100%] h-[100%] rounded-[50%]"
          />
        ))}
      </div>
      <div className="flex w-[100%] items-center justify-between mt-[50px]">
        <Link
          href="/all_albums_singles"
          className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline"
        >
          Popular albums and singles
        </Link>
        <Link
          href="/all_albums_singles"
          className="font-[700] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline"
        >
          Show all
        </Link>
      </div>
      <div className="flex w-[100%] justify-between overflow-y-hidden gap-[14px] mt-[20px]">
        {AlbumsData.slice(0, 10).map((item, key) => (
          <Song_divs
            href={`/popular_albums_singles/${item?.author_name}`}
            key={key}
            image={item?.song_image ?? "/path/to/default/image.jpg"}
            songname={item?.song_name ?? "undefined"}
            artist={item?.author_name ?? "undefined"}
            imgclass="w-[100%] h-[100%] rounded-[10px]"
          />
        ))}
      </div>
      <div className="flex w-[100%] items-center justify-between mt-[50px]">
        <Link
          href="/radios"
          className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline"
        >
          Popular radio
        </Link>
        <Link
          href="/allradios"
          className="font-[700] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline"
        >
          Show all
        </Link>
      </div>
      <div className="flex w-[100%] justify-between overflow-y-hidden gap-[14px] mt-[20px]">
        {RadioData.map((item, key) => (
          <Radio_divs
            key={key}
            image={item?.radio_image}
            radioname={item?.radio_name}
            info={item}
            href={`/radio/${item.radio_name}`}
          />
        ))}
      </div>
      <div className="flex w-[100%] items-center justify-between mt-[50px]">
        <Link
          href={`/featured_charts`}
          className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline"
        >
          Featured Charts
        </Link>
        <Link
          href={`/featured_charts`}
          className="font-[700] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline"
        >
          Show all
        </Link>
      </div>
      <div className="flex w-[100%] justify-start overflow-auto gap-[14px] mt-[20px]">
        {FeaturedData.map((music, key) => (
          <Song_divs
            href={`/featured_charts/${music?.chart_name}`}
            key={key}
            image={music?.chart_image ?? "/path/to/default/image.jpg"}
            songname={music?.chart_name ?? "undefined"}
            artist={music?.description ?? "undefined"}
            imgclass="w-[100%] h-[100%] rounded-[10px]"
          />
        ))}
      </div>
      <div className="flex w-[100%] items-center justify-between mt-[50px]">
        <Link
          href={`/playlists`}
          className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline"
        >
          Playlists from our Editors
        </Link>
        <Link
          href={`/playlists`}
          className="font-[700] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline"
        >
          Show all
        </Link>
      </div>
      <div className="flex w-[100%] justify-between overflow-auto gap-[14px] mt-[20px]">
        {PlaylistsData.map((music, key) => (
          <Song_divs
            href={`/playlists/${music?.playlist_name}`}
            key={key}
            image={music?.playlist_image ?? "/path/to/default/image.jpg"}
            songname={music?.playlist_name ?? "undefined"}
            artist={music?.playlist_name ?? "undefined"}
            imgclass="w-[100%] h-[100%] rounded-[10px]"
          />
        ))}
      </div>
    </div>
  );
}

export default Songs_main;
