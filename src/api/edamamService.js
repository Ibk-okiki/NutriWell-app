// src/api/edamamService.js

const APP_ID = import.meta.env.VITE_EDAMAM_APP_ID;
const APP_KEY = import.meta.env.VITE_EDAMAM_APP_KEY;
const API_URL = 'https://api.edamam.com/api/recipes/v2';

export const fetchPersonalizedRecipes = async (userPreferences) => {
  // Example: We will build out the query based on userPreferences later
  const { goal, dietaryNeeds } = userPreferences;

  // For now, let's just search for "chicken" as a test
  const query = "chicken";

  // Construct the full API request URL
  const url = `${API_URL}?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.hits; // The recipes are inside the 'hits' array
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    return []; // Return an empty array on error
  }
};