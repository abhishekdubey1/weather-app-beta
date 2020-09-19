import React, { useState, useEffect } from "react";
import CloudyIcon from "./assets/CloudyIcon";
import RainyIcon from "./assets/RainyIcon";
import SunnyIcon from "./assets/SunnyIcon";
import dateFunc from "./dateFunc";
function Card(props) {
  let tempMax = !(props.weekdata.list === undefined) ? (
    <span>
      {Math.round(props.weekdata.list[props.num].main.temp_max - 273)}
    </span>
  ) : (
    "-"
  );
  let tempMin = !(props.weekdata.list === undefined) ? (
    <span>
      {Math.round(props.weekdata.list[props.num].main.temp_min - 273)}
    </span>
  ) : (
    "-"
  );
  let today = new Date();
  let todaydate =
    today.getDay() + props.num - 1 > 7
      ? today.getDay() + props.num - 8
      : today.getDay() + props.num - 1;
  let day = dateFunc(todaydate);
  return (
    <div
      className="col span_1_of_5 item"
      style={{ border: "1px solid transparent" }}
    >
      <h3 className="weekday">{day}</h3>
      <div className="max-temp">{tempMax}&#176; C</div>
      <div className="min-temp">{tempMin}&#176; C</div>
      <div className="weather">
        {props.weekdata ? (
          props.weekdata.list[props.num].weather[0].main === "Rain" ||
          props.weekdata.list[props.num].weather[0].main === "Clouds" ? (
            props.weekdata.list[props.num].weather[0].main === "Rain" ? (
              <span className="icon-1x">
                <CloudyIcon />
              </span>
            ) : (
              <span className="icon-1x">
                <RainyIcon />
              </span>
            )
          ) : (
            <span className="icon-1x">
              <SunnyIcon />
            </span>
          )
        ) : (
          "-"
        )}
      </div>
    </div>
  );
}
export default Card;
