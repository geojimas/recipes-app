import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className="flex flex-row sm:flex-col items-center md:items-start gap-8">
      <Link to={'/'} className="flex gap-1 items-center">
        <img src="/home.svg" alt="home" />
        <span className="font-bold hidden md:block">Home</span>
      </Link>
      <Link to={'/favorites'} className="flex gap-1 items-center">
        <img src="/favorite.svg" alt="favorite" />
        <span className="font-bold hidden md:block">Favorites</span>
      </Link>
    </ul>
  )
}

export default NavBar
