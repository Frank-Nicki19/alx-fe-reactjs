function UserCard({ user }) {
    return (
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        {/* Display user's avatar */}
        <img
          src={user.avatar_url} // Ensure `avatar_url` is correctly referenced
          alt={user.login}       // Ensure `login` is correctly used for the alt text
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        {/* Display user's name or login */}
        <h2 className="text-xl font-semibold text-center">
          {user.name || user.login}
        </h2>
        <p className="text-center text-blue-500 mt-2">
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </p>
      </div>
    );
  }
  
  export default UserCard;