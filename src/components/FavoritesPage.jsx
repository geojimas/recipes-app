import RecipeCard from "./RecipeCard"

const FavoritesPage = () => {
  return (
    <div className="flex-1 bg-[#efedf0] text-center p-10 max-w-screen-lg mx-auto">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  )
}

export default FavoritesPage
