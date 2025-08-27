// API service for making HTTP requests

interface Coffee {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
}

const API_BASE_URL = 'https://api.sampleapis.com/coffee';

/**
 * Fetches a list of hot coffee items
 * @returns Promise with an array of Coffee objects
 */
export const fetchHotCoffees = async (): Promise<Coffee[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/hot`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching coffees:', error);
    throw error;
  }
};

/**
 * Fetches a single coffee item by ID
 * @param id The ID of the coffee to fetch
 * @returns Promise with a single Coffee object
 */
export const fetchCoffeeById = async (id: number): Promise<Coffee> => {
  try {
    const response = await fetch(`${API_BASE_URL}/hot/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching coffee with id ${id}:`, error);
    throw error;
  }
};
