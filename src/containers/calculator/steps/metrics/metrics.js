import React from 'react';
import './metrics.css';

const Metrics = ({ handleChange }) => {
  const calculateBMR = () => {
    if (this.state.gender === 'Male') {
      const BMR = 66.47+(13.75 * this.state.weight) + (5 * this.state.height) + (6.75 * this.state.age);
        handleChange('BMR', BMR)
    } else {
      const BMR = 665.09+(9.56 * this.state.weight) + (1.84 * this.state.height) - (4.67 * this.state.age)
      handleChange('BMR', BMR)
    }

    // Calculate maintenance calories
    const maintenance = BMR * this.state.activityLevelMultiplyer
    handleChange('maintenance', maintenance)

    // Calculate total calories
    const totalCalories = maintenance + activityLevelCalories
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
    </div>
  )
};

export default Metrics;
