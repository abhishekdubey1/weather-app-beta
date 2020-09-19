import React, { useEffect, useState } from "react";
import converter from "./converterFunc";
function Time({ milliseconds }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(converter(milliseconds[0], milliseconds[1]));
  }, [milliseconds]);
  // sunrise: 1600494140
  // sunset: 1600538769 6:15am
  return (
    <div style={{ marginTop: "5rem" }}>
      <span>
        Sunrise:{" "}
        <span
          style={{
            fontSize: "80%",
            color: "rgb(49, 45, 45)",
            marginRight: "10rem"
          }}
        >
          {`${time[0] - 30}:${time[1]}am`}
        </span>{" "}
        Sunset:
        <span style={{ fontSize: "80%", color: "rgb(49, 45, 45)" }}>{`${
          time[2] - 30
        }:${time[3]}pm`}</span>
      </span>
    </div>
  );
}
export default Time;
