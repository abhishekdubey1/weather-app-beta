import React from "react";
import { Line } from "react-chartjs-2";

export default function Chart(props) {
  return (
    <div className="chart">
      <Line
        data={props.chardata ? props.chardata : ""}
        // width={100}
        // height={50}
        options={{}}
      />
    </div>
  );
}
