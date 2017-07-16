import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './info.css';

const Info = ({ gender, age, heightFeet, heightInches, heightCm, heightMetric, weight, weightMetric, handleChange }) => {
  const handleGender = (event) => {
    const value = event.target.innerHTML;
    handleChange('gender', value)
  }

  const handleAge = (event) => {
    const value = parseInt(event.target.value);
    handleChange('age', value)
  }

  const handleHeightFeet = (event) => {
    const value = parseInt(event.target.innerHTML);

    // value should be in cm
    handleChange('heightFeet', value)
  }

  const handleHeightInches = (event) => {
    const value = parseInt(event.target.innerHTML);

    // value should be in cm
    handleChange('heightInches', value)
  }

  const handleHeightCm = (event) => {
    const value = parseInt(event.target.innerHTML);

    // value should be in cm
    handleChange('heightCm', value)
  }

  const handleHeightMetric = (event) => {
    const value = event.target.innerHTML;
    handleChange('heightMetric', value)
  }

  const handleWeight = (event) => {
    const value = parseInt(event.target.innerHTML);

    // value should be in kg
    handleChange('weight', value)
  }

  const handleWeightMetric = (event) => {
    const value = event.target.innerHTML;
    handleChange('weightMetric', value)
  }

  const getOptions = (min, max, type) => {
    const items = [];
    for (let i = min; i < max + 1; i++ ) {
      items.push(<MenuItem value={i} key={i} primaryText={`${i} ${type}`} />);
    }
    return items
  }
  

  return (
    <div className="infoContainer align-middle align-justify">
      <h1>Personal Information</h1>
      <div className="column">
        <div className="row align-center">
          <TextField
            className="infoContainer-input"
            hintText="Age"
            onChange={handleAge}
            style={{width: '125px'}}
          />
          <SelectField
            className="infoContainer-input"
            value={gender}
            onChange={handleGender}
            style={{width: '125px'}}
            hintText={'Gender'}
          >
            <MenuItem value={'Male'} primaryText="Male" />
            <MenuItem value={'Female'} primaryText="Female" />
          </SelectField>
        </div>
        <div className="row align-center">
          {
            heightMetric === 'cm' ?
              <SelectField
                className="infoContainer-input"
                value={heightCm}
                onChange={handleHeightCm}
                style={{width: '140px'}}
                maxHeight={200}
                hintText={'Height'}
              >
                { getOptions(80, 240, 'cm') }
              </SelectField> :
              <div>
                <SelectField
                  className="infoContainer-input"
                  value={heightFeet}
                  onChange={handleHeightFeet}
                  style={{width: '140px'}}
                  maxHeight={200}
                  hintText={'Feet'}
                  style={{width: 80}}
                >
                  { getOptions(3, 9, 'feet') }
                </SelectField>
                <SelectField
                  className="infoContainer-input"
                  value={heightInches}
                  onChange={handleHeightInches}
                  style={{width: '140px'}}
                  maxHeight={200}
                  hintText={'Inches'}
                  style={{width: 80}}
                >
                  { getOptions(0, 12, 'inches') }
                </SelectField>
              </div>
          }
          <SelectField
            className="infoContainer-input"
            value={heightMetric}
            onChange={handleHeightMetric}
            style={
              heightMetric === 'cm' ?
                {width: '110px'} :
                {width: '80px'}
            }
          >
            <MenuItem value={'cm'} primaryText="cm" />
            <MenuItem value={'ft'} primaryText="ft" />
          </SelectField>
        </div>
        <div className="row align-center">
          <SelectField
            className="infoContainer-input"
            value={weight}
            onChange={handleWeight}
            style={{width: '140px'}}
            maxHeight={200}
            hintText={'Weight'}
          >
            { 
              weightMetric === 'kg' ?
                getOptions(40, 200, 'kg') :
                getOptions(70, 300, 'lbs')
            }
          </SelectField>
          
          <SelectField
            className="infoContainer-input"
            value={weightMetric}
            onChange={handleWeightMetric}
            style={{width: '110px'}}
          >
            <MenuItem value={'kg'} primaryText="kg" />
            <MenuItem value={'lbs'} primaryText="lbs" />
          </SelectField>
        </div>
      </div>
    </div>
  )
};

export default Info;
