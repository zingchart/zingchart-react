import React, { useState, useRef } from "react";
import "zingchart/es6";
import ZingChart from "../lib/Zingchart";
import "zingchart/modules-es6/zingchart-dragging.min.js";

/*
 * Demonstrate interacting with a chart to change its data
 * using the dragging module. Note that the module is imported
 * and then passed as a prop to the ZingChart component.
 */

function ModuleDrag() {
  const startingValues = [20, 40, 14, 50, 15, 35, 5];
  const goals = [25, 43, 30, 40, 21, 59, 35];

  // Compare values to goals and return count of goals met
  function countGoodDays(vs, gs) {
    let n = 0;

    for (const i in vs) if (vs[i] >= gs[i]) n++;

    return n;
  }

  const chart = useRef(null);
  const [goodDays, setGoodDays] = useState(
    countGoodDays(startingValues, goals)
  );
  const [config] = useState({
    type: "vbullet",
    title: {
      text: "Pushups Per Day",
    },
    subtitle: {
      text: "Bars are draggable",
    },
    plot: {
      valueBox: [
        {
          type: "all",
          text: "[%node-value / %node-goal-value]",
          color: "#000",
          placement: "goal",
        },
      ],
    },
    scaleX: {
      labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
    },
    tooltip: {
      borderRadius: "3px",
      borderWidth: "0px",
      fontSize: "14px",
      shadow: true,
    },
    series: [
      {
        values: startingValues,
        dataDragging: true,
        goal: {
          backgroundColor: "#64b5f6",
          borderWidth: "0px",
        },
        goals: goals,
        rules: [
          {
            backgroundColor: "#81c784",
            rule: "%v >= %g",
          },
          {
            backgroundColor: "#ef5350",
            rule: "%v < %g/2",
          },
          {
            backgroundColor: "#ffca28",
            rule: "%v >= %g/2 && %v < %g",
          },
        ],
      },
    ],
  });

  /*
   * Update the number of days the goals have been met
   */
  function showData() {
    const data = chart.current.getseriesdata();

    setGoodDays(countGoodDays(data[0].values, data[0].goals));
  }

  return (
    <div>
      <div>Goals met {goodDays} days this week</div>
      <ZingChart
        ref={chart}
        data={config}
        height="600px"
        modules="dragging"
        zingchart_plugins_dragging_complete={showData}
      />
    </div>
  );
}

export default ModuleDrag;
