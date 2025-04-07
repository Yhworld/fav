import axios from 'axios';

const API_URL = 'https://foregoing-typhoon-scissor.glitch.me/db.json';

export const searchProducts = async (query) => {
  try {
    const response = await axios.get(API_URL);
    const meals = response.data.Meals || [];
    
    if (!query) return meals;
    
    const lowerCaseQuery = query.toLowerCase();
    
    return meals.filter(meal => 
      (meal.name).toLowerCase().includes(lowerCaseQuery)
    );
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw error;
  }
};