import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Routes from './component/Routing/Routes'
import Landing from './component/Landing/Landing';


class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route component={Routes} />
      </Switch>
    </Router>
    );
  }
}

export default App;