import React from 'react';
import MessengerButton from 'react-messenger-plugin';
import './metrics.css';

const Metrics = ({ handleChange, gender, age, heightFeet, heightInches, heightCm, heightMetric, weight, weightMetric, macros, totalCalories, maintenance, BMR, goal, activityLevel }) => {
  const activityLevelStore = {
    cutFast: {calories: -500},
    cutMedium: {calories: -400},
    cutSlow: {calories: -250},
    MAINTAIN: {calories: 0},
    bulkSlow: {calories: 250},
    bulkMedium: {calories: 400},
    bulkFast:{calories: 500},
  }
  let tempBMR = 0;
  let tempHeight;
  let tempWeight;
  
  // Convert height to cm
  if (heightMetric === 'cm') {
    tempHeight = heightCm
  } else {
    tempHeight = heightFeet + heightInches / 12
  }

  // Convert weight to kg
  if (weightMetric !== 'kg') {
    tempWeight = weight / 2.2046226218
  } else {
    tempWeight = weight;
  }

  if (gender === 'Male') {
    tempBMR = 66.47+(13.75 * tempWeight) + (5 * tempHeight) + (6.75 * age);
  } else {
    tempBMR = 665.09+(9.56 * tempWeight) + (1.84 * tempHeight) - (4.67 * age)
  }

  // Calculate maintenance calories
  const tempMaintenance = tempBMR * activityLevel

  // Calculate total calories
  const tempTotalCalories = tempMaintenance + activityLevelStore[goal].calories || 'Please fill out all the required information'

  // Macro Breakdown
  const proteinCalories = Math.floor(tempTotalCalories * 0.28)
  const proteinGrams = Math.floor(proteinCalories / 4)
  const carbohydrateCalories = Math.floor(tempTotalCalories * 0.42)
  const carbohydrateGrams = Math.floor(carbohydrateCalories / 4)
  const fatCalories = Math.floor(tempTotalCalories * 0.3)
  const fatGrams = Math.floor(fatCalories / 9)
  const finalMacros = {
    proteinCalories,
    proteinGrams,
    carbohydrateCalories,
    carbohydrateGrams,
    fatCalories,
    fatGrams
  }
  const stringToSend = `${proteinCalories}/${proteinGrams}/${carbohydrateCalories}/${carbohydrateGrams}/${fatCalories}/${fatGrams}`;

  return (
    <div className="align-middle align-justify metricContainer">
      <h1>Results</h1>
      <div>
        <h3>Total Daily Calories</h3>

        <div className="rightLine" />
        <h3 className="totalCalories">{Math.floor(tempTotalCalories)}</h3>
        <div className="leftLine" />
      </div>

      <h3>Macros</h3>
      <div className="row align-center">
        <div className="metricCircles">
          <p className="label">Protein</p>
          <p className="number">{proteinGrams}</p>
          <p className="numberFooter">grams</p>
          <p className="calories">({proteinCalories} calories)</p>
        </div>
        <div className="metricCircles">
          <p className="label">Carbohydrates</p>
          <p className="number">{carbohydrateGrams}</p>
          <p className="numberFooter">grams</p>
          <p className="calories">({carbohydrateCalories} calories)</p>
        </div>
        <div className="metricCircles">
          <p className="label">Fats</p>
          <p className="number">{fatGrams}</p>
          <p className="numberFooter">grams</p>
          <p className="calories">({fatCalories} calories)</p>
        </div>
      </div>
      <div className="row align-center text-center">
        <div className="columns small-12 messenger-container">
          <h5 className="">Never forget the numbers you need</h5>
          <MessengerButton
            appId="392898947778748"
            pageId="141263369788677"
            passthroughParams={stringToSend}
            size="xlarge"
          />
        </div>
      </div>
    </div>
  )
};

export default Metrics;
