import { Link } from 'react-router-dom';
import data from '../data.json';

function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-2 block">View Recipe</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;