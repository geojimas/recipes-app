import RecipeCard from './RecipeCard'

const RecipePage = () => {
  return (
    <div className="bg-[#efedf0] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label htmlFor="search" className="input border-none shadow-md flex items-center gap-2">
            <img src="/search.svg" alt="search" />
            <input
              type="text"
              id="search"
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today ?"
            />
          </label>
        </form>
        <p className="font-bold text-3xl mt-3">
          <span className="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-green-600">
            Popular
          </span>
          <span className="text-green-600 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
            Choices
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
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  )
}
export default RecipePage