import React from "react";
import Login_btn from "../login_btn/Login_btn";
import Google_icon from "../../../assets/images/8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000-fotor-bg-remover-20250404215852.png";
import Facebook_icon from "../../../assets/images/facebook-logo-facebook-icon-transparent-free-png.webp";
import Apple_icon from "../../../assets/images/8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000-fotor-bg-remover-20250404215852.png";
import { useStates } from "@/app/common/store";
import { translations } from "@/app/common/translation";

function Login_btns_div() {
  const { language } = useStates();
  const t = translations[language];

  return (
    <div className="w-[100%] flex flex-col items-center justify-center gap-[12px] mt-[32px]">
      <Login_btn image={Google_icon} text={t.continueWithGoogle} />
      <Login_btn image={Facebook_icon} text={t.continueWithFacebook} />
      <Login_btn image={Apple_icon} text={t.continueWithApple} />
    </div>
  );
}

export default Login_btns_div;
