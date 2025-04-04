import React from "react";
import Login_btn from "../login_btn/Login_btn";
import Google_icon from "../../../assets/images/Logo-google-icon-PNG-fotor-bg-remover-20250404214610.png";
import Facebook_icon from "../../../assets/images/facebook-logo-facebook-icon-transparent-free-png.webp";
import Apple_icon from "../../../assets/images/8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000-fotor-bg-remover-20250404215852.png";
function Login_btns_div() {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center gap-[12px] mt-[32px]">
      <Login_btn image={Google_icon} text="Continue with Google" />
      <Login_btn image={Facebook_icon} text="Continue with Facebook" />
      <Login_btn image={Apple_icon} text="Continue with Apple" />
    </div>
  );
}

export default Login_btns_div;
