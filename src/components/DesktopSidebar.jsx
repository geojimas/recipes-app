import NavBar from './NavBar'

const DesktopSidebar = () => {
  return (
    <section className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src="/logo.svg" alt="Logo" className="hidden md:block" />
          <img src="/mobile-logo.svg" alt="mobile Logo" className="block md:hidden" />
        </div>
        <NavBar />
      </div>
    </section>
  )
}
export default DesktopSidebar
