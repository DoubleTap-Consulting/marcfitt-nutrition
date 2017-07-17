import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './info.css';

const Info = ({ gender, age, heightFeet, heightInches, heightCm, heightMetric, weight, weightMetric, handleChange, activityLevel, activityLevelText }) => {
  const handleGender = (event) => {
    const value = event.target.innerHTML;
    handleChange('gender', value)
  }

  const handleAge = (event) => {
    const value = parseInt(event.target.innerHTML);
    handleChange('age', value)
  }

  const handleHeightFeet = (event) => {
    const value = parseInt(event.target.innerHTML);

    handleChange('heightFeet', value)
  }

  const handleHeightInches = (event) => {
    const value = parseInt(event.target.innerHTML);

    handleChange('heightInches', value)
  }

  const handleHeightCm = (event) => {
    const value = parseInt(event.target.innerHTML);

    handleChange('heightCm', value)
  }

  const handleActivityLevel = (event) => {
    let value;
    const text = event.target.innerHTML;

    if (text === 'Sedentary (little activity, desk job)') {
      value = 1.2;
    } else if (text === 'Light exercise (3-4 days/week)') {
      value = 1.35
    } else if (text === 'Moderate exercise (3-5 days/week, 60 minutes/session)') {
      value = 1.55
    } else if (text === 'Active (6-7 days/week 60-90 min/session)') {
      value = 1.725
    } else {
      value = 1.9
    }

    handleChange('activityLevel', value)
    handleChange('activityLevelText', text)
  }

  const handleHeightMetric = (event) => {
    const value = event.target.innerHTML;
    handleChange('heightMetric', value)
  }

  const handleWeight = (event) => {
    const value = parseInt(event.target.innerHTML);

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
          <SelectField
            className="infoContainer-input"
            value={age}
            onChange={handleAge}
            style={{width: '140px'}}
            maxHeight={200}
            hintText={'Age'}
          >
            { getOptions(4, 80, 'years') }
          </SelectField>
          <SelectField
            className="infoContainer-input"
            value={gender}
            onChange={handleGender}
            style={{width: '110px'}}
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
                style={{width: '190px'}}
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
                  style={{width: 90}}
                >
                  { getOptions(3, 9, 'ft') }
                </SelectField>
                <SelectField
                  className="infoContainer-input"
                  value={heightInches}
                  onChange={handleHeightInches}
                  style={{width: '140px'}}
                  maxHeight={200}
                  hintText={'Inches'}
                  style={{width: 90}}
                >
                  { getOptions(0, 12, 'in') }
                </SelectField>
              </div>
          }
          <SelectField
            className="infoContainer-input"
            value={heightMetric}
            onChange={handleHeightMetric}
            style={
              heightMetric === 'cm' ?
                {width: '60px'} :
                {width: '60px'}
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
            style={{width: '190px'}}
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
            style={{width: '60px'}}
          >
            <MenuItem value={'kg'} primaryText="kg" />
            <MenuItem value={'lbs'} primaryText="lbs" />
          </SelectField>
        </div>
        <div className="row align-center">
          <SelectField
            className="infoContainer-input"
            value={activityLevel}
            onChange={handleActivityLevel}
            style={{width: '260px', color: 'black'}}
            hintText={'Activity Level'}
            autoWidth={true}
          >
            <MenuItem id="1.2" value={1.2} primaryText="Sedentary (little activity, desk job)" label="Sedentary" />
            <MenuItem id="1.35" value={1.35} primaryText="Light exercise (3-4 days/week)" label="Light exercise" />
            <MenuItem id="1.55" value={1.55} primaryText="Moderate exercise (3-5 days/week, 60 minutes/session)" label="Moderate exercise" />
            <MenuItem id="1.725" value={1.725} primaryText="Active (6-7 days/week 60-90 min/session)" label="Active" />
            <MenuItem id="1.9" value={1.9} primaryText="Extremely active individuals such as, heavy manual labor workers" label="Extremely active" />
          </SelectField>
        </div>
      </div>
    </div>
  )
};

export default Info;
