import { Routes, Route } from "react-router-dom"
import { useRef } from "react"
import { HomeRouter } from "./pages/home/HomeRouter.jsx"
import { LoginRouter } from "./pages/login/LoginRouter.jsx"
import { NotFound } from "./pages/NotFound.jsx"

export const App = () => {
  const isLoggedIn = useRef(sessionStorage.setItem('isLoggedIn', JSON.stringify(false)));

  return (
    <div>
      <Routes>
        <Route path='/*' element={<LoginRouter />} />
        <Route path='/home/*' element={isLoggedIn ? <HomeRouter  /> : <LoginRouter />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}