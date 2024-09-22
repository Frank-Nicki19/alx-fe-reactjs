import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

// Function to fetch user data based on advanced search criteria
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  const query = [
    username && `user:${username}`,
    location && `location:${location}`,
    minRepos && `repos:>${minRepos}`,
  ]
    .filter(Boolean)
    .join('+');

  try {
    const response = await axios.get(`${GITHUB_API_URL}/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};