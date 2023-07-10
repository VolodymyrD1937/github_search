import { Route, Routes } from "react-router-dom"
import { SearchPage, FavoriteListPage } from "./pages"
import { TopAppBar } from "./components/AppBar"

export const App = () => {

  return (
    <>
      <TopAppBar />
      <Routes>
        <Route element={<SearchPage />} path="/" />
        <Route element={<FavoriteListPage />} path="/favorites" />
      </Routes>
    </>
  )
}
