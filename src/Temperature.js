import React from "react";
import SunnyIcon from "./assets/SunnyIcon";
import "./App.css";

function Temperature({ temperature }) {
  return (
    <h1 className="max-temp">
      <b className="temp-icon">
        {temperature}&#176;C
        <div className="icon-3x">
          <SunnyIcon />
        </div>
      </b>
    </h1>
  );
}
export default Temperature;
