import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { addToFavorite, removeFromFavorite } from '../store/card.js'
import { convertMinutesToHours } from '../utils/timeFunction.js'

const RecipeCard = ({ recipeObj, bg, badge }) => {
  const { label, image, calories, yield: portion, url, totalTime } = recipeObj

  const dispatch = useDispatch()
  const favorites = useSelector(state => state.card.favorites) || []

  // Checking if the current recipe is in favorites
  const isFavorite = favorites.some(favorite => favorite.label === label)

  const handleClickHart = e => {
    e.preventDefault()
    if (isFavorite) {
      dispatch(removeFromFavorite(recipeObj))
    } else {
      dispatch(addToFavorite(recipeObj))
    }
  }

  return (
    <div
      className={`flex flex-col rounded-md ${bg} p-1 overflow-hidden relative animate__animated animate__fadeIn`}>
      <a href={url} target="_blank" className="relative h-32">
        <img
          src={image}
          loading='lazy'
          alt="recipe"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center">
          <img src="/soup.svg" alt="soup" />
          <p className="text-sm font-bold">
            <span className="text-blue-600 mx-1">{portion}</span>Servings
          </p>
        </div>
        <button
          onClick={handleClickHart}
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 256 256">
            <g fill="red">
              <path
                d="M232 102c0 66-104 122-104 122S24 168 24 102a54 54 0 0 1 54-54c22.59 0 41.94 12.31 50 32c8.06-19.69 27.41-32 50-32a54 54 0 0 1 54 54"
                opacity={isFavorite ? 5 : 0}></path>
              <path d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"></path>
            </g>
          </svg>
        </button>
      </a>
      <div className="flex flex-col text-left min-h-8 md:min-h-12">
        <p className="font-bold tracking-wide mt-1">{label}</p>
      </div>
      <div className="flex gap-2">
        <div className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
          <img src="/time.svg" alt="pulse" />
          <span className="text-sm tracking-tighter font-semibold">
            {convertMinutesToHours(totalTime)}
          </span>
        </div>
        <div className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
          <img src="/calories.svg" alt="pulse" />
          <span className="text-sm tracking-tighter font-semibold">
            {Math.round(calories)} kcal
          </span>
        </div>
      </div>
    </div>
  )
}

RecipeCard.propTypes = {
  recipeObj: PropTypes.shape({
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    totalTime: PropTypes.number.isRequired,
    yield: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  bg: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired
}

export default RecipeCard
