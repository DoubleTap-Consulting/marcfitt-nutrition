import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import buttonStyles from '../../shared-components/mui/buttonStyles';
import './landing.css';

class Landing extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="landing-container">
          <div className="row align-center">
            <div className="columns small-12 medium-10 large-6">
              <p>The Nutrition Planner is Marc’s revolutionary tool that will allow you to plan your own diet, so you can choose the foods that are most convenient, and taste best to you!</p>
              <p>You’ll have the ability to calculate your caloric needs with ease, thanks to the built in calorie calculator. Enter your height, weight, goal, and smoothly transition these stats into the Planner so you can begin building your diet.</p>
              <div className="row align-center landing-start">
                <div className="small-8 columns">
                  <RaisedButton
                    buttonStyle={buttonStyles.buttonStyle}
                    labelStyle={buttonStyles.buttonLabelStyle}
                    label="Get Started"
                    secondary={false}
                    onTouchTap={this.startTap}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
};

export default Landing;
