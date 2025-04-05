import React from "react";
import { Icon } from "../types";

function Two_circle_icon({ classname }: Icon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="24"
      fill="none"
      className={classname}
    >
      <circle
        cx="17.455"
        cy="8.727"
        r="8.727"
        fill="#FFF"
        opacity="0.5"
        className={classname}
      ></circle>
      <circle
        cx="8.727"
        cy="15.273"
        r="8.727"
        fill="#FFF"
        opacity="0.3"
        className={classname}
      ></circle>
      <path
        fill="#FFF"
        fill-rule="evenodd"
        d="M17.18 17.446a8.728 8.728 0 0 1-8.179-10.9 8.728 8.728 0 0 1 8.18 10.9Z"
        clip-rule="evenodd"
        className={classname}
      ></path>
    </svg>
  );
}

export default Two_circle_icon;
