import React from "react";
import Container from "../container/Container";
import Header from "../header/Header";
import Preview_div from "../../__molecules/preview_div/Preview_div";

function Main() {
  return (
    <div className="h-[100vh] w-[100%] bg-[#000000] flex flex-col pb-[10px] overflow-hidden">
      <Header />
      <Container />
      <Preview_div />
    </div>
  );
}

export default Main;
