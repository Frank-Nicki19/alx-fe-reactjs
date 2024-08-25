import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  searchTerm: '',
  filteredRecipes: [],
  recommendations: [],

  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  setSearchTerm: (term) => set(state => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),

  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  updateRecipe: (id, updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.recipes.map(recipe =>
      recipe.id === id ? updatedRecipe : recipe
    ).filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    filteredRecipes: state.recipes.filter(recipe => recipe.id !== id).filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  generateRecommendations: () => set(state => {
    // Simple recommendation logic based on favorites (mock)
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
