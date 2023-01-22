import React from "react";
import { useState } from "react";

export default function Box(props) {
  const [on, setOn] = useState(props.on);

  //   function handleClick() {
  //     setOn((prevOn) => !prevOn);
  //   }

  const styles = {
    backgroundColor: on ? "black" : "transparent",
  };
  return (
    <div
      style={styles}
      className="box"
      key={props.key}
      onClick={() => props.toggle(props.id)}
    ></div>
  );
}
