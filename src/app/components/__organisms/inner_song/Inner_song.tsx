import { useStates } from "@/app/common/store";
import React from "react";

function Inner_song() {
  const { artist } = useStates();
  return (
    <div>
      <p>{artist}</p>
    </div>
  );
}

export default Inner_song;
