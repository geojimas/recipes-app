import PropTypes from 'prop-types'

const CardLoading = ({ loading }) => {
  return (
    <>
      {loading &&
        [...Array(9)].map((_, index) => (
          <div key={index} className="flex flex-col gap-4 w-full">
            <div className="skeleton h-32 w-full"></div>
            <div className="flex justify-start">
              <div className="skeleton h-4 w-32"></div>
            </div>
            <div className="flex gap-1 justify-start">
              <div className="skeleton h-4 w-1/3"></div>
              <div className="skeleton h-4 w-1/3"></div>
            </div>
          </div>
        ))}
    </>
  )
}

// Define prop types for the component
CardLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default CardLoading
