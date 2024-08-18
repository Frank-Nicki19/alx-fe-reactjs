import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  // Use useContext to access user data from UserContext
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserDetails;