"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Black_logo from "../../../assets/images/logo.png";
import Loging_btn_green from "../../__atoms/login_btn_green/Loging_btn_green";
import Left_arrow_icon from "@/app/common/icons/Left_arrow_icon";
import { useStates } from "@/app/common/store";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../../firebaseconfig";
import { useRouter } from "next/navigation";
function Terms_And_Conditions_page() {
  const { name, password, email } = useStates();
  const router = useRouter();
  const HandleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name });
      router.push("/login_page");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };
  return (
    <div className="w-[100%] flex flex-col items-center">
      <Image
        className="w-[40px] h-[40px]"
        src={Black_logo}
        alt="spotify icon"
        width={600}
        height={600}
      />
      <div className="flex max-w-[436px] w-[100%] items-center gap-[20px] mt-[25px]">
        <Left_arrow_icon classname="w-[24px] h-[24px]" />
        <div className="flex flex-col ">
          <p className="text-[16px] text-[#b3b3b3] font-[700]">Step 3 of 3</p>
          <h2 className="text-[16px] text-[#fff] font-[700]">
            Terms & Conditions
          </h2>
        </div>
      </div>
      <div className="flex flex-col max-w-[324px] w-[100%] mt-[30px] gap-[10px]">
        <div className="w-[100%]">
          <div className="flex w-[100%] items-start gap-[10px] bg-[#2a2a2a] py-[16px] pl-[16px] rounded-[5px]">
            <input type="checkbox" />
            <p className="text-[14px] text-[#fff] fonr-[700]">
              I would prefer not to receive marketing messages from Spotify
            </p>
          </div>
        </div>
        <div className="w-[100%]">
          <div className="flex w-[100%] items-start gap-[10px] bg-[#2a2a2a] py-[16px] pl-[16px] rounded-[5px]">
            <input type="checkbox" />
            <p className="text-[14px] text-[#fff] fonr-[700]">
              {"Share my registration data with Spotify's"} <br /> content
              providers for marketing <br /> purposes.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[324px] w-[100%] flex flex-col mt-[20px] gap-[10px]">
        <div>
          <p className="text-[14px] text-[#fff] fonr-[700]">
            {"  By clicking on sign-up, you agree to Spotify's"}
          </p>
          <Link
            className="text-[14px] text-[#1db954] fonr-[700] underline"
            href={"https://www.spotify.com/ge/legal/end-user-agreement/"}
          >
            Terms and Conditions of Use
          </Link>
        </div>
        <div>
          <p className="text-[14px] text-[#fff] fonr-[700]">
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see
          </p>
          <Link
            className="text-[14px] text-[#1db954] fonr-[700] underline"
            href={"https://www.spotify.com/ge/legal/privacy-policy/"}
          >
            {"Spotify's Privacy Policy"}
          </Link>
        </div>
      </div>
      <Loging_btn_green
        classname="max-w-[324px] w-[100%] bg-[#1ed760] text-[16px] text-[#000000] flex items-center justify-center py-[8px] font-[700] rounded-[20px] mt-[20px]"
        text="Sign up"
        handle={HandleSignup}
      />
    </div>
  );
}

export default Terms_And_Conditions_page;
