import React, { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

const ColorSelector = () => {
  const [color, setColor] = useColor("#561ecb");

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Color picker</h1>
      <ColorPicker
        height={50}
        color={color}
        onChange={setColor}
        // hideAlpha={true}
      />
    </div>
  );;
  
};

export default ColorSelector;
