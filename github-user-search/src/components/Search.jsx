import { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

function SearchBar() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData([]);

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos);
      setUserData(data.items); // Set user data array from search results
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter GitHub username"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter location (optional)"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Minimum repositories (optional)"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {userData.length > 0 && (
        <div className="space-y-4">
          {userData.map((user) => (
            <div key={user.id} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{user.login}</h2>
              <p className="text-center">{user.location || 'Location not specified'}</p>
              <p className="text-center">{`Repos: ${user.public_repos || 0}`}</p>
              <p className="text-center text-blue-500 mt-2">
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  View GitHub Profile
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;