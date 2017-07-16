import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './info.css';

const Info = ({ gender, handleChange }) => (
  <div className="infoContainer align-middle align-justify">
    <h1>Personal Information</h1>
    <TextField
      className="infoContainer-input"
      hintText="Age"
    />
    <TextField
      hintText="Height"
    />
    <TextField
      hintText="Weight"
    />
    <SelectField
      floatingLabelText="Gender"
      value={gender}
      onChange={handleChange}
    >
      <MenuItem value={1} key={1} primaryText="Male" />
      <MenuItem value={2} key={2} primaryText="Female" />
    </SelectField>
  </div>
);

export default Info;
