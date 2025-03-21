import React from "react";

import Container from "../container/Container";
import Header from "../header/Header";

function Main() {
  return (
    <div className="h-[100vh] w-[100%] bg-[#000000] flex flex-col pb-[10px]">
      <Header />
      <Container />
    </div>
  );
}

export default Main;
