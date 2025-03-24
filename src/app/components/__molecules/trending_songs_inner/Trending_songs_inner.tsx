import React from "react";
interface Trending_songs_inner {
  songData: {
    id: number;
    song_image: string;
    song_name: string;
    author_image: string;
    author_name: string;
  };
}
function Trending_songs_inner({ songData }: Trending_songs_inner) {
  return (
    <div
      className=" flex gap-[20px] max-w-[1700px] w-[100%] "
      key={songData.id}
    >
      <div className="w-[216px] h-[216px] cursor-pointer">
        <img
          className="w-[100%] h-[100%] rounded-[10px]"
          src={songData.song_image}
          alt={songData.song_name}
        />
      </div>
      <div className="flex flex-col items-baseline justify-end ">
        <h1 className="font-[700] text-[#fff] text-[48px]">
          {songData.song_name}
        </h1>
        <div className="flex items-center justify-center gap-[10px]">
          <img
            className="w-[24px] h-[24px] rounded-[50%]"
            src={songData.author_image}
            alt={songData.author_name}
          />
          <p className="text-[14px] font-[800] text-[#FFF] mt-[3px]">
            {songData.author_name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trending_songs_inner;
