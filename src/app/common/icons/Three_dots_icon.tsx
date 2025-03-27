import React from "react";
import { Icon } from "../types";

function Three_dots_icon({ classname, Hover }: Icon) {
  return (
    <svg
      data-encore-id="icon"
      role="img"
      aria-hidden="true"
      className={classname}
      viewBox="0 0 24 24"
      fill={`${Hover ? "#fff" : "rgb(179, 179, 179)"}`}
    >
      <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
    </svg>
  );
}

export default Three_dots_icon;
