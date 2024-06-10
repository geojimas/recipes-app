import PropTypes from 'prop-types'

const RecipeCard = ({ label, image, calories, portion, url, totalTime, bg, badge }) => {
  return (
    <>
      <div className={`flex flex-col rounded-md ${bg} p-1 overflow-hidden relative`}>
        <a href={url} target="_blank" className="relative h-32">
          <img
            src={image}
            alt="recipe"
            className="rounded-md w-full h-full object-cover cursor-pointer"
          />
          <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center">
            <img src="/soup.svg" alt="soup" />
            <p className="text-sm font-bold">
              <span className="text-blue-600 mx-1">{portion}</span>Servings
            </p>
          </div>
          <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 256 256">
              <g fill="black">
                <path
                  d="M232 102c0 66-104 122-104 122S24 168 24 102a54 54 0 0 1 54-54c22.59 0 41.94 12.31 50 32c8.06-19.69 27.41-32 50-32a54 54 0 0 1 54 54"
                  opacity={0}></path>
                <path d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"></path>
              </g>
            </svg>
          </div>
        </a>
        <div className="flex flex-col text-left min-h-8 md:min-h-12">
          <p className="font-bold tracking-wide mt-1">{label}</p>
        </div>
        <div className="flex gap-2">
          <div className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
            <img src="/time.svg" alt="pulse" />
            <span className="text-sm tracking-tighter font-semibold">{totalTime}</span>
          </div>
          <div className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
            <img src="/calories.svg" alt="pulse" />
            <span className="text-sm tracking-tighter font-semibold">{calories} kcal</span>
          </div>
        </div>
      </div>
    </>
  )
}

// Define prop types for the component
RecipeCard.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  totalTime: PropTypes.string.isRequired,
  portion: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired
}

export default RecipeCard
