import NavBar from './NavBar.jsx'

const MobileSidebar = () => {
  return (
    <div className="flex sm:hidden justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2">
      <NavBar />
    </div>
  )
}

export default MobileSidebar
