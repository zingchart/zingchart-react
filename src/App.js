import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Container from './Container.jsx';
import Dynamic from './examples/Dynamic.jsx';
import Events from './examples/Events.jsx';
import Methods from './examples/Methods.jsx';
import Simple from './examples/Simple.jsx';
import './App.css';

// PAGES

function App() {


  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li><Link to="/">Simple</Link></li>
            <li><Link to="/dynamic">Dynamic</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/methods">Methods</Link></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/dynamic">
          <Dynamic />
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
