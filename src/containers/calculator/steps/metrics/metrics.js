import React from 'react';
import MessengerButton from 'react-messenger-plugin';
import './metrics.css';

const Metrics = ({ handleChange }) => {
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
  const calculateBMR = () => {
    let BMR = 0;
    if (this.state.gender === 'Male') {
      BMR = 66.47+(13.75 * this.state.weight) + (5 * this.state.height) + (6.75 * this.state.age);
        handleChange('BMR', BMR)
    } else {
      BMR = 665.09+(9.56 * this.state.weight) + (1.84 * this.state.height) - (4.67 * this.state.age)
      handleChange('BMR', BMR)
    }

    // Calculate maintenance calories
    const maintenance = BMR * activityLevelStore[this.state.activityLevelMultiplyer['multiplyer']]
    handleChange('maintenance', maintenance)

    // Calculate total calories
    const totalCalories = maintenance + activityLevelStore[this.state.activityLevelCalories['calories']]
    handleChange('totalCalories', totalCalories)

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
  }


  return (
    <div className="align-middle align-justify">
      <h1>Results</h1>
      <h5>Never forget the numbers you need</h5>
      <MessengerButton
        appId="392898947778748"
        pageId="141263369788677"
        passthroughParams="testfromplugin"
        size="xlarge"
      />
    </div>
  )
};

export default Metrics;
