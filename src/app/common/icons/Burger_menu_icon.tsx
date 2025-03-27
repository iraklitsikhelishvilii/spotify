import React from "react";
import { Icon } from "../types";

function Burger_menu_icon({ classname }: Icon) {
  return (
    <svg
      data-encore-id="icon"
      role="img"
      aria-hidden="true"
      className={classname}
      viewBox="0 0 16 16"
      fill="#FFFFFFB2"
    >
      <path d="M15.5 13.5H.5V12h15v1.5zm0-4.75H.5v-1.5h15v1.5zm0-4.75H.5V2.5h15V4z"></path>
    </svg>
  );
}

export default Burger_menu_icon;
