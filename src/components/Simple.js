import React from "react";
import "zingchart/es6";
import ZingChart from "../lib/Zingchart";

/*
 * Simplest demo, just a bar chart of static data
 */

function Simple() {
  const config = {
    type: "bar",
    series: [
      {
        values: [4, 5, 3, 4, 5, 3, 5, 4, 11],
      },
    ],
  };

  return <ZingChart data={config} />;
}

export default Simple;
