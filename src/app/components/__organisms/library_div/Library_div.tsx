'use client'
import Globus_icon from "@/app/common/icons/Globus_icon";
import Music_icon from "@/app/common/icons/Music_icon";
import Plus_icon from "@/app/common/icons/Plus_icon";
import { useStates } from "@/app/common/store";
import Link from "next/link";
import Create_playlist_allert from "../../__atoms/create_playlist_allert/Create_playlist_allert";

function Library_div() {
  const {
    playlist,
    HandlePlatlistClick,
    RemovePlaylistClick,
    plus,
    handlePlus,
    NewPlaylistClick,
    HandlePodcasts,
  } = useStates();

  return (
    <div className=" relative min-w-[300px] bg-[#121212] rounded-[8px] px-[10px] py-[10px] flex-1 h-full flex flex-col  justify-between ">
      <div>
        <div className="w-[100%] flex items-center justify-between px-[10px]">
          <p className="text-[16px] font-[700] text-[#fff]">Your Library</p>
          <button onClick={handlePlus}>
            <Plus_icon classname="w-[16px] h-[16px]"></Plus_icon>
          </button>
          {plus && (
            <button
              onClick={NewPlaylistClick}
              className="flex items-center px-[12px] py-[12px] gap-[10px] rounded-[5px] bg-[#282828] absolute top-[50px] left-[100px]"
            >
              <Music_icon classname="h-[16px] w-[16px]" />
              <p className="text-[#fff] text-[14px]">Create a new playlist</p>
            </button>
          )}
        </div>
        <div
          onClick={HandlePlatlistClick}
          className="w-[100%] bg-[#1F1F1F] flex flex-col rounded-[8px] py-[16px] pl-[20px] mt-[40px] gap-[10px]"
        >
          <p className="text-[16px] font-[700] text-[#fff]">
            Create your first playlist
          </p>
          <p className="text-[14px] text-[#fff] font-[400]">
            {"  It's easy, we'll help you"}
          </p>
          <button className="py-[4px] px-[16px] bg-[#ffff] max-w-[125px] text-[14px] text-[#000000] rounded-[20px] mt-[10px]">
            Create playlist
          </button>
        </div>
        {playlist && (
          <Create_playlist_allert RemovePlaylistClick={RemovePlaylistClick} />
        )}
        <div className="w-[100%] bg-[#1F1F1F] flex flex-col rounded-[8px] py-[16px] pl-[20px] mt-[25px] gap-[10px]">
          <p className="text-[16px] font-[700] text-[#fff]">
            {"  Let's find some podcasts to follow"}
          </p>
          <p className="text-[14px] text-[#fff] font-[400]">
            {" We'll keep you updated on new episodes"}
          </p>
          <button
            onClick={HandlePodcasts}
            className="py-[4px] px-[16px] bg-[#ffff] max-w-[148px] text-[14px] text-[#000000] rounded-[20px] mt-[10px]"
          >
            Browse podcasts
          </button>
        </div>
      </div>
      <div className="flex flex-col mb-[40px]">
        <div className="max-w-[270px] w-[100%] flex flex-wrap gap-[15px]">
          <Link
            className="text-[11px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/legal/end-user-agreement/"}
          >
            Legal
          </Link>
          <Link
            className="text-[11px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/safetyandprivacy"}
          >
            Safety & Privacy Center
          </Link>
          <Link
            className="text-[11px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/legal/cookies-policy/"}
          >
            Cookies
          </Link>
          <Link
            className="text-[11px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/legal/privacy-policy/#s3"}
          >
            About Ads
          </Link>
          <Link
            className="text-[11px] text-[#B3B3B3]"
            href={"https://www.spotify.com/ge/accessibility"}
          >
            Accessibility
          </Link>
        </div>
        <Link
          className="text-[12px] text-[#fff] hover:underline mt-[10px]"
          href={"https://www.spotify.com/ge/legal/cookies-policy/"}
        >
          Cookies
        </Link>
        <button className="max-w-[100px] text-[#fff] text-[14px] flex items-center justify-between mt-[30px] border-solid border-[1px] border-[#B3B3B3] rounded-[20px] px-[10px] py-[4px]">
          <Globus_icon classname="w-[16px] h-[16px]" />
          English
        </button>
      </div>
    </div>
  );
}

export default Library_div;
