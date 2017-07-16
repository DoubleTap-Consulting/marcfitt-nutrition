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
      gender: undefined,
      age: undefined,
      heightFeet: undefined,
      heightCm: undefined,
      heightInches: undefined,
      heightMetric: 'cm',
      weight: undefined,
      weightMetric: 'kg',
      macros: {},
      totalCalories: 0,
      maintenance: 0,
      BMR: 0
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
        return <Info 
          handleChange={this.handleChange}
          gender={this.state.gender}
          age={this.state.age}
          heightFeet={this.state.heightFeet}
          heightInches={this.state.heightInches}
          heightCm={this.state.heightCm}
          heightMetric={this.state.heightMetric}
          weight={this.state.weight}
          weightMetric={this.state.weightMetric}
        />
      case 1:
        return <Goal handleChange={this.handleChange} />
      case 2:
        return <Metrics />
    }
  }


  handleChange = (type, value) => {
    console.log('type', type, ' with value: ', value)
    console.log('this.state', this.state)
    const newState = {
      [type]: value
    }
    this.setState(newState)
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
        <div style={{ width: '100%' }}>
          <Stepper activeStep={stepIndex} orientation="vertical">
            <Step>
              <StepLabel>Tell us about yourself.</StepLabel>
              <StepContent>
                <Info 
                  handleChange={this.handleChange}
                  gender={this.state.gender}
                  age={this.state.age}
                  heightFeet={this.state.heightFeet}
                  heightInches={this.state.heightInches}
                  heightCm={this.state.heightCm}
                  heightMetric={this.state.heightMetric}
                  weight={this.state.weight}
                  weightMetric={this.state.weightMetric}
                />
                {this.renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel>What are your goals?</StepLabel>
              <StepContent>
                <Goal handleChange={this.handleChange} />
                {this.renderStepActions(1)}
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
        <div className="row" style={{width: '100%', marginTop: '45px'}}>
          <div style={{width: '100%', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto'}} className="text-center">
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
