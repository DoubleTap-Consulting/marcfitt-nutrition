import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import logo from '../../logo.svg';
import asyncLoader from '../../shared-components/asyncComponentLoader';
import './app.css';

const asyncCalculator = asyncLoader(() => require('../calculator/calculator'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/calculator" component={asyncCalculator} />
        </Switch>
      </div>
    );
  }
}

export default App;
