import React from 'react';
import './metrics.css';

const Metrics = ({ handleChange, gender, age, heightFeet, heightInches, heightCm, heightMetric, weight, weightMetric, macros, totalCalories, maintenance, BMR, activityLevelMultiplyer, activityLevelCalories }) => {
  const activityLevelStore = {
    fastCut: {
      multiplyer: 1,
      calories: 0
    },
    mediumCut: {
      multiplyer: 1,
      calories: 0
    },
    slowCut: {
      multiplyer: 1,
      calories: 0
    },
    maintain: {
      multiplyer: 1,
      calories: 0
    },
    slowBulk: {
      multiplyer: 1,
      calories: 0
    },
    mediumBulk: {
      multiplyer: 1,
      calories: 0
    },
    fastBulk:{
      multiplyer: 1,
      calories: 0
    },
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
  }

  if (gender === 'Male') {
    tempBMR = 66.47+(13.75 * tempWeight) + (5 * tempHeight) + (6.75 * age);
    handleChange('BMR', tempBMR)
  } else {
    tempBMR = 665.09+(9.56 * tempWeight) + (1.84 * tempHeight) - (4.67 * age)
    handleChange('BMR', tempBMR)
  }

  // Calculate maintenance calories
  const tempMaintenance = tempBMR * activityLevelStore[activityLevelMultiplyer]
  handleChange('maintenance', tempMaintenance)

  // Calculate total calories
  const tempTotalCalories = maintenance + activityLevelStore[activityLevelCalories]
  handleChange('totalCalories', tempTotalCalories)

  // Macro Breakdown
  const proteinCalories = totalCalories * 0.28
  const proteinGrams = proteinCalories / 4
  const carbohydrateCalories = totalCalories * 0.42
  const carbohydrateGrams = carbohydrateCalories / 4
  const fatCalories = totalCalories * 0.3
  const fatGrams = fatCalories / 9
  handleChange('macros', {
    proteinCalories,
    proteinGrams,
    carbohydrateCalories,
    carbohydrateGrams,
    fatCalories,
    fatGrams
  })


  return (
    <div className="align-middle align-justify">
      {
        <h1>{macros.proteinCalories}</h1>
      }
    </div>
  )
};

export default Metrics;
