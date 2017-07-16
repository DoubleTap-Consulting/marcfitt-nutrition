import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import './goal.css';

const style = {
  block: {
    maxWidth: 250,
  },
  buttonStyle: {
    height: 50,
    width: 101
  }
};

class Goal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  menuItemTapped = () => {
    
  }

  render = () => (
    <div className="columns small-12 goal-container">
      <h1>Fitness Goals</h1>
      <h2>Choose one</h2>
      <div className="row align-center goal-chooser">
        <div className="columns small-12 medium-6">
          <RaisedButton
            onTouchTap={this.handleTouchTap}
            label="Cut"
            rippleStyle={{ color: '#FDD831' }}
            style={style.buttonStyle}
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem primaryText="Slow" onTouchTap={this.menuItemTapped} />
              <MenuItem primaryText="Medium" onTouchTap={this.menuItemTapped}  />
              <MenuItem primaryText="Fast" onTouchTap={this.menuItemTapped}  />
            </Menu>
          </Popover>
          <RaisedButton
            label="Maintain"
            rippleStyle={{ color: '#FDD831' }}
            style={style.buttonStyle}
          />
          <RaisedButton
            onTouchTap={this.handleTouchTap}
            label="Bulk"
            rippleStyle={{ color: '#FDD831' }}
            style={style.buttonStyle}
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem primaryText="Slow" onTouchTap={this.menuItemTapped}  />
              <MenuItem primaryText="Medium" onTouchTap={this.menuItemTapped}  />
              <MenuItem primaryText="Fast" onTouchTap={this.menuItemTapped}  />
            </Menu>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default Goal;
