import axios from 'axios';

// Create an instance of axios with the base URL of the backend
const api = axios.create({
  baseURL: 'http://localhost:5000', // Change this if your backend is hosted elsewhere
});

// Function to get all users
export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

// Function to create a user (optional, can be used later)
export const createUser = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data;
};

export default api;
