import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function SearchBar() {
  const [username, setUsername] = useState(''); // State to capture input value
  const [userData, setUserData] = useState(null); // State to store fetched user data
  const [loading, setLoading] = useState(false); // State to handle loading
  const [error, setError] = useState(''); // State to handle errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data); // Set user data to state
    } catch (err) {
      // Set error message exactly as expected
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter GitHub username"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          Search
        </button>
      </form>

      {/* Display loading, error, or user data based on state */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {userData && (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
          {/* Display user's avatar */}
          <img
            src={userData.avatar_url} // Access `avatar_url` directly here
            alt={userData.login}       // Use `login` for the alt text
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          {/* Display user's login name */}
          <h2 className="text-xl font-semibold text-center">{userData.login}</h2>
          <p className="text-center text-blue-500 mt-2">
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchBar;