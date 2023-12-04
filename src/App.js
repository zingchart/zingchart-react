import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import Simple from "./components/Simple.js";
import ModuleChart from "./components/ModuleChart.js";
import ModuleDrag from "./components/ModuleDrag.js";
import Dynamic from "./components/Dynamic.js";
import Events from "./components/Events.js";
import Methods from "./components/Methods.js";
import License from "./components/License.js";
import "./App.css";

/**
 * The main application component. This component is responsible for
 * rendering the navigation bar and the content of the currently selected
 * demo.
 */

function App() {
  const modules = {
    "/": {
      label: "Hello World",
      text: "Demonstrates a simple chart of static data",
      info: "Simplest demo, just a ZingChart instance with static data from a constant JavaScript object.",
      file: "Simple.js",
      code: "",
    },
    "/module_chart": {
      label: "US Map",
      text: "Demonstrates explicitly importing ZingChart modules",
      info: "In order to display a map, we need to import additional ZingChart modules containing the mapping code and specific map data. In this example we also use React state for the configuration (although we're not changing the state).",
      file: "ModuleChart.js",
      code: "",
    },
    "/module_drag": {
      label: "Interaction",
      text: "Demonstrates interacting with a chart to change data",
      info: "Here we obtain a React reference to the ZingChart instance and load the dragging module so we can interact with the data in a bar chart. When a drag operation completes we access the chart data and use it to update the 'Goals met' text above the chart.",
      file: "ModuleDrag.js",
      code: "",
    },
    "/dynamic": {
      label: "Reconfiguring",
      text: "Demonstrates modifying the configuration of an existing chart",
      info: "In this example we create an interval timer to periodically update the state object containing the ZingChart's configuration in order to change the data being displayed.",
      file: "Dynamic.js",
      code: "",
    },
    "/events": {
      label: "Events",
      text: "Demonstrates responding to chart events",
      info: "This demo shows how we can listen to ZingChart events and log the events to a text area elsewhere on the page. Point to one of the nodes on the plot to see its details appear in the log.",
      file: "Events.js",
      code: "",
    },
    "/methods": {
      label: "Methods",
      text: "Demonstrates using a reference to a ZingChart element to invoke methods on it",
      info: "Here we obtain a React reference to the chart and use it to invoke a method (in this case, adding an additional dataset).",
      file: "Methods.js",
      code: "",
    },
    "/license": {
      label: "Multiple Plots",
      text: "Demonstrates setting the license key and performance flags on the ZingChart object, as well as multiple plots",
      info: "In this demo we obtain the zingchart instance when we import zingchart/es6 so we can set some configuration options on it, such as the license key. This demo also shows multiple plots on one chart.",
      file: "License.js",
      code: "",
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>ZingChart React Demo</h2>
        <h6>
          A simple example of binding data, mutations with methods, and
          listening to events
        </h6>
        <div className="App-buttonbar">
          {Object.entries(modules).map(([path, mod], index) => (
            <NavLink
              to={path}
              key={index}
              className={({ isActive }) =>
                isActive ? "App-button-active" : "App-button-plain"
              }
            >
              {mod.label}
            </NavLink>
          ))}
        </div>
      </header>
      <div className="App-demo-block">
        <div className="App-demo-titlebar">
          <Routes>
            {Object.entries(modules).map(([path, mod], index) => (
              <Route
                exact
                path={path}
                key={index}
                element={
                  <>
                    <h3>{mod.text}</h3>
                    <a className="App-source-button" href={mod.code}>
                      View source on Github
                    </a>
                  </>
                }
              />
            ))}
          </Routes>
        </div>
        <div className="App-demo-demo">
          <Routes>
            <Route exact path="/" element={<Simple />} />
            <Route path="/module_chart" element={<ModuleChart />} />
            <Route path="/module_drag" element={<ModuleDrag />} />
            <Route path="/dynamic" element={<Dynamic />} />
            <Route path="/events" element={<Events />} />
            <Route path="/methods" element={<Methods />} />
            <Route path="/license" element={<License />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
