import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/navBar/navBar';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
