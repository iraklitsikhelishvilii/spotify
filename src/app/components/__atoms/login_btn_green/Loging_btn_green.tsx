import React from "react";
interface Loging_btn_green {
  text: string;
  handle?: () => void;
  classname:string
}
function Loging_btn_green({ text, handle,classname }: Loging_btn_green) {
  return (
    <button
      onClick={handle}
      className={classname}
    >
      {text}
    </button>
  );
}

export default Loging_btn_green;
