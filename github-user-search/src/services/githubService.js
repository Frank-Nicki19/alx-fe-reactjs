import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

// Function to fetch user data based on advanced search criteria
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  // Construct the query string for the advanced search
  const query = [
    username ? `user:${username}` : '',       // Search by username
    location ? `location:${location}` : '',   // Search by location
    minRepos ? `repos:>${minRepos}` : '',     // Search by minimum repository count
  ]
    .filter(Boolean) // Filter out empty strings
    .join('+');      // Join all parameters with '+'

  // Log the constructed query URL (optional for debugging)
  console.log(`Fetching: ${GITHUB_API_URL}/search/users?q=${query}`);

  try {
    // Make the API request using the constructed query
    const response = await axios.get(
      `${GITHUB_API_URL}/search/users?q=${query}`
    );

    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle errors during the API call
    throw new Error('Error fetching user data');
  }
};