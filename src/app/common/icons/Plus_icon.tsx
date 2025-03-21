import React from "react";
interface HomeIcon {
  classname: string;
}
function Plus_icon({ classname }: HomeIcon) {
  return (
    <svg
      data-encore-id="icon"
      role="img"
      aria-hidden="true"
      className={classname}
      viewBox="0 0 16 16"
      fill="#b3b3b3"
    >
      <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
    </svg>
  );
}

export default Plus_icon;
