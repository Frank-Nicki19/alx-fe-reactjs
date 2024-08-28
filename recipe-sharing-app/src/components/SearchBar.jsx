import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearch = () => {
    setSearchTerm(input);
    filterRecipes();  // Trigger filtering after setting the search term
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '8px', flexGrow: 1, marginRight: '10px' }}
      />
      <button onClick={handleSearch} style={{ padding: '8px 16px' }}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;