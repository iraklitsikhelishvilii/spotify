"use client";
import { useStates } from "@/app/common/store";
import Signup_email_page from "@/app/components/__organisms/singup_email_page/Signup_email_page";
import React from "react";
import Signup_password_page from "@/app/components/__organisms/signup_password_page/Signup_password_page";

function SignupPageEmail() {
  const { validemail } = useStates();
  return (
    <div className="bg-[#121212] w-[100%] h-[100vh] flex items-center justify-center">
      {!validemail ? <Signup_email_page /> : <Signup_password_page />}
    </div>
  );
}

export default SignupPageEmail;
