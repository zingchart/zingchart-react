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
      file: "Simple.js",
    },
    "/module_chart": {
      label: "US Map",
      text: "Demonstrates explicitly importing ZingChart modules",
      file: "ModuleChart.js",
    },
    "/module_drag": {
      label: "Interaction",
      text: "Demonstrates interacting with a chart to change data",
      file: "ModuleDrag.js",
    },
    "/dynamic": {
      label: "Reconfiguring",
      text: "Demonstrates modifying the configuration of an existing chart",
      file: "Dynamic.js",
    },
    "/events": {
      label: "Events",
      text: "Demonstrates responding to chart events",
      file: "Events.js",
    },
    "/methods": {
      label: "Methods",
      text: "Demonstrates using a reference to a ZingChart element to invoke methods on it",
      file: "Methods.js",
    },
    "/license": {
      label: "Multiple Plots",
      text: "Demonstrates setting the license key and performance flags on the ZingChart object, as well as multiple plots",
      file: "License.js",
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
                element={<h3>{mod.text}</h3>}
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
