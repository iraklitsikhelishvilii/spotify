import React from "react";
import { Icon } from "../types";

function Share_icon({ classname }: Icon) {
  return (
    <svg
      data-encore-id="icon"
      role="img"
      aria-hidden="true"
      className={classname}
      viewBox="0 0 16 16"
      fill="rgb(179, 179, 179)"
    >
      <path d="M1 5.75A.75.75 0 0 1 1.75 5H4v1.5H2.5v8h11v-8H12V5h2.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-9.5z"></path>
      <path d="M8 9.576a.75.75 0 0 0 .75-.75V2.903l1.454 1.454a.75.75 0 0 0 1.06-1.06L8 .03 4.735 3.296a.75.75 0 0 0 1.06 1.061L7.25 2.903v5.923c0 .414.336.75.75.75z"></path>
    </svg>
  );
}

export default Share_icon;
