import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './info.css';

const Info = ({ gender, handleChange }) => (
  <div className="align-middle align-justify">
    <h1>Info</h1>
    <TextField
      hintText="Age"
    />
    <SelectField
      floatingLabelText="Gender"
      value={gender}
      onChange={handleChange}
    >
      <MenuItem value={1} primaryText="Male" />
      <MenuItem value={2} primaryText="Female" />
    </SelectField>
  </div>
);

export default Info;
