import ProfilePage from './components/ProfilePage'
import React from 'react';
import UserContext from './components/UserContext';



function App() {
  const userData = {
     name: "Jane Doe", 
     email: "jane.doe@example.com"
     };

     return (
      <UserContext.Provider value={userData}>
        <div className="App">
          <h1>Welcome to the App!</h1>
          {/* Wrap ProfilePage with UserContext.Provider */}
          <ProfilePage />
        </div>
      </UserContext.Provider>
    );
  }


export default App;