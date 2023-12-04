import React, { useState, useRef } from "react";
import "zingchart/es6";
import ZingChart from "../lib/Zingchart";

/*
 * A bar chart with a button that adds additional data. Demonstrates
 * using a reference to a ZingChart element.
 */

function Methods() {
  const nValues = 10;

  // Return an array of `count` random values
  const randomData = (count) =>
    [...Array(count)].map(() => Math.floor(Math.random() * 10));

  const chart = useRef(null);
  const [nSets, setNSets] = useState(1);
  const [config] = useState({
    type: "bar",
    series: [
      {
        values: randomData(nValues),
      },
    ],
  });

  /*
   * Add an additional dataset to the existing barchart
   */
  function addDataset() {
    chart.current.addplot({
      data: {
        values: randomData(nValues),
      },
    });

    setNSets((n) => n + 1);
  }

  return (
    <div>
      <button onClick={addDataset}>Add dataset {nSets + 1}</button>
      <ZingChart ref={chart} data={config} />
    </div>
  );
}

export default Methods;
