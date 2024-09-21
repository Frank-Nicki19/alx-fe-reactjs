import { useState } from 'react';
import SearchBar from './components/Search';
import UserCard from './components/UserCard';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
      <SearchBar setUserData={setUserData} />
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;