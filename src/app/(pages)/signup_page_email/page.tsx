"use client";
import { useStates } from "@/app/common/store";
import Signup_email_page from "@/app/components/__organisms/singup_email_page/Signup_email_page";
import React from "react";
import Signup_password_page from "@/app/components/__organisms/signup_password_page/Signup_password_page";
import About_user from "@/app/components/__organisms/about_user/About_user";
import Terms_And_Conditions_page from "@/app/components/__organisms/terms_and_conditions_page/Terms_And_Conditions_page";

function SignupPageEmail() {
  const { validemail, validPassword, password, email, validAbout, name } =
    useStates();

  console.log(password);
  console.log(email);
  console.log(name);

  return (
    <div className="bg-[#121212] w-[100%] h-[100vh] flex items-center justify-center">
      {validAbout ? (
        <Terms_And_Conditions_page />
      ) : validPassword ? (
        <About_user />
      ) : !validemail ? (
        <Signup_email_page />
      ) : (
        <Signup_password_page />
      )}
    </div>
  );
}

export default SignupPageEmail;
