import { Route, Routes } from 'react-router-dom'
import RecipePage from './components/RecipePage.jsx'
import FavoritesPage from './components/FavoritesPage.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {
  return (
    <section className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<RecipePage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </section>
  )
}

export default App
