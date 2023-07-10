import { Route, Routes } from "react-router-dom"
import { SearchPage, FavoriteListPage } from "./pages"

export const App = () => {
  return (
    <Routes>
      <Route element={<SearchPage />} path="/" />
      <Route element={<FavoriteListPage />} path="/favorites" />
    </Routes>
  )
}
