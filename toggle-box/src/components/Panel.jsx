import React from "react";
import { useState } from "react";

export default function Panel(children, title, onClick, isActive) {
  return (
    <div className="panel container">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onClick}>Show</button>}
    </div>
  );
}
