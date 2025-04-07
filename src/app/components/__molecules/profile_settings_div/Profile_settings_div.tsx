import React from "react";
interface Profile_settings_div {
  Handle: () => void;
}
function Profile_settings_div({ Handle }: Profile_settings_div) {
  return (
    <div className="max-w-[200px] w-[100%] bg-[#282828]  absolute rounded-[5px] top-[60px] flex flex-col p-[16px] gap-[20px]">
      <p className="text-[14px] text-[#fff] font-[800] cursor-pointer">
        Account
      </p>
      <p className="text-[14px] text-[#fff] font-[800] cursor-pointer">
        Profile
      </p>
      <p className="text-[14px] text-[#fff] font-[800] cursor-pointer">
        Support
      </p>
      <p className="text-[14px] text-[#fff] font-[800] cursor-pointer">
        Download
      </p>
      <p className="text-[14px] text-[#fff] font-[800] cursor-pointer">
        Settings
      </p>
      <p
        onClick={Handle}
        className="text-[14px] text-[#fff] font-[800] cursor-pointer"
      >
        Log out
      </p>
    </div>
  );
}

export default Profile_settings_div;
