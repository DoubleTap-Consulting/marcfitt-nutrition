import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../header/header';
// import Footer from '../footer/footer';
import asyncLoader from '../../shared-components/asyncComponentLoader';
import './app.css';

const asyncLanding = asyncLoader(() => require('../../containers/landing/landing'));
const asyncCalculator = asyncLoader(() => require('../../containers/calculator/landcalculatoring'));

class App extends Component {
  static get propTypes() {
    return {};
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-container row">
          <Switch>
            <Route path="/" component={asyncLanding} />
            <Route path="/calculator" component={asyncCalculator} />
          </Switch>
        </div>
        {/*<Footer />*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
};

export default connect(mapStateToProps)(App);
