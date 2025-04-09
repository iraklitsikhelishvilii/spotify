"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebaseconfig";
import Music_Player from "../music_player/Music_player";
import { useStates } from "@/app/common/store";
import { translations } from "@/app/common/translation";

function Preview_div() {
  const { language } = useStates();
  const t = translations[language];
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-[100%]">
      {user ? (
        <Music_Player />
      ) : (
        <div
          style={{
            background:
              "linear-gradient(90deg, #8c5fc0, #ae2996, #6c83df, #509bf5)",
          }}
          className="w-[100%] px-[15px] py-[11px] flex justify-between rounded-lg"
        >
          <div className="flex flex-col">
            <p className="text-[14px] font-[700] text-[#fff]">
              {t.previewSpotify}
            </p>
            <p className="text-[16px] text-[#fff]">{t.signUpText}</p>
          </div>
          <Link
            href={`/signup_page_email`}
            className="py-[8px] px-[32px] bg-[#fff] rounded-[20px] text-[16px] font-[700]"
          >
            {t.signUpButton}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Preview_div;
