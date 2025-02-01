export const calculateCalories = (foodItems) => {
    return foodItems.reduce((total, item) => total + item.calories, 0);
  };
  
  export const calculateMacronutrients = (foodItems) => {
    return foodItems.reduce((totals, item) => {
      totals.protein += item.protein || 0;
      totals.carbs += item.carbs || 0;
      totals.fat += item.fat || 0;
      return totals;
    }, { protein: 0, carbs: 0, fat: 0 });
  };
  
  export const calculateBMR = (weight, height, age, gender) => {
    if (gender === 'male') {
      return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
  };
  
  