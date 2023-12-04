import React, { useState } from "react";
import "zingchart/es6";
import ZingChart from "../lib/Zingchart";

/*
 * A line chart with events logged to a text box.
 */

function Events() {
  const listOfEventListeners = ["complete", "node_mouseover"];
  const events = listOfEventListeners.map((value, index) => (
    <li key={index}>{value}</li>
  ));

  const [config] = useState({
    type: "line",
    series: [
      {
        values: [4, 5, 3, 4, 5, 3, 5, 4, 11],
      },
    ],
  });

  const [output, setOutput] = useState("");
  const [renderState, setRenderState] = useState("pending");

  /*
   * Invoked when the chart has finished rendering
   */
  function chartDone() {
    setRenderState("rendered");
  }

  /*
   * Handle the info relating to the node under the cursor
   */
  function nodeInfo(info) {
    delete info.ev; // Remove the event data
    setOutput(`Node Info\n${JSON.stringify(info, null, 2)}\n`);
  }

  return (
    <div className="Events-wrapper">
      <ZingChart data={config} complete={chartDone} node_mouseover={nodeInfo} />
      <div className="Events-output">
        <h2>Output from events</h2>
        <div className="Events-bound">
          Events bound:
          <ul>{events}</ul>
        </div>
        <div className="Events-renderState">Chart is {renderState}</div>
        <pre className="Events-nodeInfo">{output}</pre>
      </div>
    </div>
  );
}

export default Events;
