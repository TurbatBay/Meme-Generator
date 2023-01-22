import React from "react";
import { useState } from "react";
import boxes from "../data/boxes";
import Box from "./Box";
export default function BoxCont() {
  const [squares, setSquares] = useState(boxes);
  function toggle(id) {
    console.log(id);
  }

  const boxElements = squares.map((square) => {
    return (
      <Box on={square.on} key={square.id} toggle={toggle} id={square.id} />
    );
  });
  return <main>{boxElements}</main>;
}
