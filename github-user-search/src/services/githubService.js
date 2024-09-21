import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com'; // Ensure this is correct

// Function to fetch user data based on username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};