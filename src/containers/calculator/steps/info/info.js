import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './info.css';

const Info = ({ gender, age, height, weight, handleChange }) => {
  const handleGender = (event) => {
    const value = event.target.innerHTML;
    handleChange('gender', value)
  }

  const handleAge = (event) => {
    const value = parseInt(event.target.innerHTML);
    handleChange('age', value)
  }

  const handleHeight = (event) => {
    const value = parseInt(event.target.innerHTML);

    // value should be in cm
    handleChange('height', value)
  }

  const handleWeight = (event) => {
    const value = parseInt(event.target.innerHTML);

    // value should be in kg
    handleChange('weight', value)
  }

  return (
    <div className="infoContainer align-middle align-justify">
      <h1>Personal Information</h1>
      <TextField
        className="infoContainer-input"
        hintText="Age"
        onChange={handleAge}
      />
      <TextField
        hintText="Height"
        onChange={this.handleHeight}
      />
      <TextField
        hintText="Weight"
        onChange={this.handleWeight}
      />
      <SelectField
        floatingLabelText="Gender"
        value={gender}
        onChange={handleGender}
      >
        <MenuItem value={'Male'} primaryText="Male" />
        <MenuItem value={'Female'} primaryText="Female" />
      </SelectField>
    </div>
  )
};

export default Info;
