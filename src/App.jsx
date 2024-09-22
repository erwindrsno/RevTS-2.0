import { Routes, Route } from "react-router-dom"
import { useEffect, useRef } from "react"
import { HomeRouter } from "./pages/home/HomeRouter.jsx"
import { LoginRouter } from "./pages/login/LoginRouter.jsx"
import { NotFound } from "./pages/NotFound.jsx"

export const App = () => {
  sessionStorage.setItem('isLoggedIn', true)
  const isLoggedIn = sessionStorage.getItem('isLoggedIn')

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