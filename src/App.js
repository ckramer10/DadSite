import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/navBar/navBar';
import Home from './pages/home/home';
import About from './pages/about/about';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
