"use client";
import Data from "../../../../../data.json";
import Image from "next/image";
import Library_div from "../library_div/Library_div";
import Footer from "../footer/Footer";

function Container() {
  return (
    <div className="flex px-[15px]  w-[100%] justify-between  flex-1 gap-[10px] overflow-y-auto">
      <Library_div />
      <div className="w-full flex  justify-start bg-[#121212] rounded-[8px] px-[20px] pt-[20px] overflow-x-hidden  ">
        <div className=" w-[100%] flex items-center flex-col overflow-y-auto h-[2200px] ">
          <div className="max-w-[1700px] w-[100%] flex flex-col overflow-y-auto h-[2200px] ">
            <div className="flex w-[100%] items-center justify-between">
              <h1 className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline">
                Trending songs
              </h1>
              <p className="font-[700] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline">
                Show all
              </p>
            </div>
            <div className="flex w-[100%] justify-between overflow-auto  gap-[14px] mt-[20px]">
              {Data.map((artist, key) => {
                return artist.songs?.slice(0, 1).map((song) => (
                  <div className="cursor-pointer" key={key}>
                    <div className="w-[150px] h-[150px] ">
                      {" "}
                      <img
                        className=" w-[100%] h-[100%] rounded-[10px]"
                        src={song.song_image}
                        alt={song.song_name}
                      />
                    </div>
                    <p className="text-[#fff] text-[15px] font-[400] mt-[5px]">
                      {song.song_name}
                    </p>
                    <p className="text-[14px] text-[#B3B3B3] mt-[3px]">
                      {artist.author_name}
                    </p>
                  </div>
                ));
              })}
            </div>
            <div className="flex w-[100%] items-center justify-between mt-[50px]">
              <h1 className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline">
                Popular artists
              </h1>
              <p className="font-[700] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline">
                Show all
              </p>
            </div>
            <div className="flex w-[100%] justify-between overflow-y-hidden gap-[14px] mt-[20px]">
              {Data.slice(0, 10).map((artist, key) => (
                <div className=" cursor-pointer" key={key}>
                  <div className="w-[150px] h-[150px] rounded-[50%] ">
                    <img
                      className=" w-[100%] h-[100%] rounded-[50%]"
                      src={artist.author_image}
                      alt={artist.author_name}
                    />
                  </div>
                  <p className="text-[#fff] text-[15px]  font-[400]   mt-[5px]">
                    {artist.author_name}
                  </p>
                  <p className="text-[14px] text-[#B3B3B3] mt-[3px]">Artist</p>
                </div>
              ))}
            </div>
            <div className="flex w-[100%] items-center justify-between mt-[50px]">
              <h1 className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline">
                Popular albums and singles
              </h1>
              <p className="font-[700] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline">
                Show all
              </p>
            </div>
            <div className="flex w-[100%] justify-between overflow-y-hidden gap-[14px] mt-[20px]">
              {Data.map((music, key) => {
                return music.albums?.map((album, key) => (
                  <div className=" cursor-pointer" key={key}>
                    <div className="w-[150px] h-[150px] rounded-[50%] ">
                      <img
                        className=" w-[100%] h-[100%] rounded-[10px]"
                        src={album.music_image}
                        alt={album.music_name}
                      />
                    </div>
                    <p className="text-[#fff] text-[15px]  font-[400]   mt-[5px]">
                      {album.music_name}
                    </p>
                    <p className="text-[14px] text-[#B3B3B3] mt-[3px]">
                      {album.artist}
                    </p>
                  </div>
                ));
              })}
              {Data.map((music, key) => {
                return music.singles?.map((single, key) => (
                  <div className=" cursor-pointer" key={key}>
                    <div className="w-[150px] h-[150px] rounded-[50%] ">
                      <img
                        className=" w-[100%] h-[100%] rounded-[10px]"
                        src={single.music_image}
                        alt={single.music_name}
                      />
                    </div>
                    <p className="text-[#fff] text-[15px]  font-[400]   mt-[5px]">
                      {single.music_name}
                    </p>
                    <p className="text-[14px] text-[#B3B3B3] mt-[3px]">
                      {single.artist}
                    </p>
                  </div>
                ));
              })}
            </div>
            <div className="flex w-[100%] items-center justify-between mt-[50px]">
              <h1 className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline">
                Popular radio
              </h1>
              <p className="font-[700] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline">
                Show all
              </p>
            </div>
            <div className="flex w-[100%] justify-between overflow-y-hidden gap-[14px] mt-[20px]">
              {Data.map((music, key) => {
                return music.radios?.map((radio, key) => (
                  <div className=" cursor-pointer" key={key}>
                    <div className="w-[150px] h-[150px] rounded-[50%] ">
                      <img
                        className=" w-[100%] h-[100%] rounded-[10px]"
                        src={radio.radio_image}
                        alt={radio.radio_name}
                      />
                    </div>
                    <div className="mt-[10px]">
                      {radio.shows?.map((shows, key) => (
                        <p className="text-[14px] text-[#B3B3B3] ">
                          {shows.host}
                        </p>
                      ))}
                    </div>
                  </div>
                ));
              })}
            </div>
            <div className="flex w-[100%] items-center justify-between mt-[50px]">
              <h1 className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline">
                Featured Charts
              </h1>
              <p className="font-[700] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline">
                Show all
              </p>
            </div>
            <div className="flex w-[100%] justify-start overflow-auto  gap-[14px] mt-[20px]">
              {Data.map((music, key) => {
                return music.featured_charts?.map((featured, key) => (
                  <div className=" cursor-pointer" key={key}>
                    <div className="w-[150px] h-[150px] rounded-[50%] ">
                      <img
                        className=" w-[100%] h-[100%] rounded-[10px]"
                        src={featured.chart_image}
                        alt={featured.chart_name}
                      />
                    </div>
                    <p className="text-[10px] w-[150px] text-[#B3B3B3] mt-[3px]">
                      {featured.description}
                    </p>
                  </div>
                ));
              })}
            </div>
            <div className="flex w-[100%] items-center justify-between mt-[50px]">
              <h1 className="text-[24px] text-[#fff] font-[700] cursor-pointer hover:underline">
                Playlists from our Editors
              </h1>
              <p className="font-[700] text-[14px] text-[#B3B3B3] cursor-pointer hover:underline">
                Show all
              </p>
            </div>
            <div className="flex w-[100%] justify-between overflow-auto  gap-[14px] mt-[20px]">
              {Data.map((music, key) => {
                return music.playlists?.map((playlist) => (
                  <div className="cursor-pointer" key={key}>
                    <div className="w-[150px] h-[150px] ">
                      {" "}
                      <img
                        className=" w-[100%] h-[100%] rounded-[10px]"
                        src={playlist.playlist_image}
                        alt={playlist.playlist_name}
                      />
                    </div>

                    <p className="text-[14px] text-[#B3B3B3] mt-[3px]">
                      {playlist.playlist_name}
                    </p>
                  </div>
                ));
              })}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Container;
