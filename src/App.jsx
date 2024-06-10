import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Sidebar = lazy(() => import('./components/Sidebar.jsx'))
const FavoritesPage = lazy(() => import('./components/FavoritesPage.jsx'))
const RecipePage = lazy(() => import('./components/RecipePage.jsx'))

function App() {
  return (
    <Suspense>
      <section className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<RecipePage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Routes>
      </section>
    </Suspense>
  )
}

export default App
