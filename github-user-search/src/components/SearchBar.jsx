import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function SearchBar({ setUserData }) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find the user.');
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

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
    </div>
  );
}

export default SearchBar;