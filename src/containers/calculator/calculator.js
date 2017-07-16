import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import muiTheme from '../../shared-components/mui/muiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Info from './steps/info/info';
import Goal from './steps/goal/goal';
import Metrics from './steps/metrics/metrics';
import './calculator.css';

class Calculator extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      finished: false,
      stepIndex: 0, 
      gender: 'Male'
    };
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Info handleChange={this.handleChange} gender={this.state.gender} />
      case 1:
        return <Goal handleChange={this.handleChange} gender={this.state.gender} />
      case 2:
        return <Metrics />
    }
  }


  handleChange = (event, index, gender) => {
    console.log('event', event)
    this.setState({gender})
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  determineType() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    if (window.matchMedia('screen and (max-width: 568px)').matches) {
      return (
          <div className="align-center" style={{maxWidth: '400px'}}>
            <Stepper activeStep={stepIndex} orientation="vertical">
              <Step>
                <StepLabel>Tell us about yourself.</StepLabel>
                <StepContent>
                  <Info handleChange={this.handleChange} gender={this.state.gender} />
                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>What are your goals?</StepLabel>
                <StepContent>
                  <Goal handleChange={this.handleChange} gender={this.state.gender} />
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Results!</StepLabel>
                <StepContent>
                  <Metrics />
                  {this.renderStepActions(2)}
                </StepContent>
              </Step>
            </Stepper>
          </div>
      )
    } else {
      return (
          <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>Tell us a little about yourself</StepLabel>
              </Step>
              <Step>
                <StepLabel>What are you trying to achieve</StepLabel>
              </Step>
              <Step>
                <StepLabel>Your results!</StepLabel>
              </Step>
            </Stepper>
          <div style={contentStyle}>
            <div>
              {this.getStepContent(stepIndex)}
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {
          this.determineType()
        }
      </MuiThemeProvider>
    );
  }
}

export default Calculator;

