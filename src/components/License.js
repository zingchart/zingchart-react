import React, { useState } from "react";
import zingchart from "zingchart/es6";
import ZingChart from "../lib/Zingchart";

/*
 * Demonstrate setting the license key and performance
 * flags on the ZingChart object, as well as multiple
 * plots in one chart.
 */

// Set performance flags on the ZingChart object
zingchart.DEV.KEEPSOURCE = 0; // prevents lib from storing the original data package
zingchart.DEV.COPYDATA = 0; // prevents lib from creating a copy of the data package

// Set the license key on the ZingChart object
zingchart.LICENSE = ["abcdefghijklmnopqrstuvwxy"];

function License() {
  const [config] = useState({
    /* Graphset array */
    graphset: [
      {
        /* Object containing chart data */ type: "line",
        /* Size your chart using height/width attributes */
        height: "200px",
        width: "90%",
        /* Position your chart using x/y attributes */
        x: "5%",
        y: "5%",
        series: [
          {
            values: [76, 23, 15, 85, 13],
          },
          {
            values: [36, 53, 65, 25, 45],
          },
        ],
      },
      {
        /* Object containing chart data */ type: "funnel",
        height: "55%",
        width: "45%",
        x: "5%",
        y: "200px",
        series: [
          { values: [30] },
          { values: [15] },
          { values: [5] },
          { values: [3] },
        ],
      },
      {
        type: "pie",
        height: "55%",
        width: "45%",
        x: "50%",
        y: "200px",
        series: [{ values: [15] }, { values: [30] }, { values: [34] }],
      },
    ],
  });

  return <ZingChart data={config} />;
}

export default License;
