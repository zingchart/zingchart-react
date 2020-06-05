import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Dynamic from './Dynamic.jsx';
import Events from './Events.jsx';
import Methods from './Methods.jsx';
import Simple from './Simple.jsx';
import ModuleChart from './ModuleChart.jsx';
import License from './License.jsx';
import './App.css';

// PAGES

function App() {


  return (
    <Router>
      <div >
        <h1>zingchart-react playground</h1>
        <p>A simple example of binding data, mutations with methods, and listening to events</p>
          <Link to="/" className="button">Simple</Link>
          <Link to="/module-chart" className="button">Module Chart</Link>
          <Link to="/dynamic" className="button">Dynamic</Link>
          <Link to="/events" className="button">Events</Link>
          <Link to="/methods" className="button">Methods</Link>
          <Link to="/license" className="button">License</Link>
      </div>
      <Switch>
        <Route path="/license">
          <License />
        </Route>
        <Route path="/dynamic">
          <Dynamic />
        </Route>
        <Route path="/module-chart">
          <ModuleChart />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/methods">
          <Methods />
        </Route>
        <Route path="/">
          <Simple />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
