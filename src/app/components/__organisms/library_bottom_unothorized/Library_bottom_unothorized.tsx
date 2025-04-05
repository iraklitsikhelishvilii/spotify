import React from 'react'
import Link from 'next/link'
import Globus_icon from '@/app/common/icons/Globus_icon'
function Library_bottom_unothorized() {
  return (
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
  )
}

export default Library_bottom_unothorized