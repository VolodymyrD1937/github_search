import { Route, Routes } from "react-router-dom"
import { SearchPage, FavoriteListPage } from "./pages"
import { TopAppBar } from "./components/AppBar"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const App = () => {
  return (
    <>
      <TopAppBar />
      <Routes>
        <Route element={<SearchPage />} path="/" />
        <Route element={<FavoriteListPage />} path="/favorites" />
      </Routes>
      <ToastContainer />
    </>
  )
}
