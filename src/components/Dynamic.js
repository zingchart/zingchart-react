import React, { useState, useEffect } from "react";
import "zingchart/es6";
import ZingChart from "../lib/Zingchart";

/*
 * A dynamically updating line plot. Demonstrates modifying the
 * configuration of an existing ZingChart.
 */

function Dynamic() {
  const nValues = 10;
  const period = 1000; // milliseconds

  // Return an array of `count` random values
  const randomData = (count) =>
    [...Array(count)].map(() => Math.floor(Math.random() * 10));

  const [config, setConfig] = useState({
    type: "line",
    series: [{ values: randomData(nValues) }],
  });

  /*
   * Set a new random dataset
   */
  function shuffle() {
    setConfig((state) => ({
      ...state,
      series: [{ values: randomData(nValues) }],
    }));
  }

  // Create an effect to periodically update the chart data
  useEffect(() => {
    const interval = setInterval(shuffle, period);

    // Invoked to clean up when unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>{JSON.stringify(config.series[0].values)}</div>
      <ZingChart data={config} />
    </div>
  );
}

export default Dynamic;
