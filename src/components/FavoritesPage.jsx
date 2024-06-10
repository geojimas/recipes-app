import { useSelector } from 'react-redux'
import RecipeCard from './RecipeCard'
import { getRandomColor } from '../utils/useRandomColor.js'

const FavoritesPage = () => {
  const favorites = useSelector(state => state.card.favorites) || []

  return (
    <div className="bg-[#efedf0] flex-1 text-center p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto ">
        <p className="font-bold text-3xl mb-8">
          <span className="text-green-600 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
            Favorites
            <svg
              className="absolute -bottom-1 w-full max-h-1.5"
              viewBox="0 0 55 5"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none">
              <path
                d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                strokeWidth="2"></path>
            </svg>
          </span>
        </p>
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((recipe, index) => (
              <RecipeCard key={index} recipeObj={recipe} {...getRandomColor()} />
            ))}
          </div>
        ) : (
          <h2 className="flex flex-row flex-nowrap items-center mt-24">
            <span className="flex-grow block border-t border-black"></span>
            <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
              No Favorites Found
            </span>
            <span className="flex-grow block border-t border-black"></span>
          </h2>
        )}
      </div>
    </div>
  )
}

export default FavoritesPage
