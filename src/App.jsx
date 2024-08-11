import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import { HomeRouter } from "./pages/home/HomeRouter.jsx"
import { LoginRouter } from "./pages/login/LoginRouter.jsx"
import { NotFound } from "./pages/NotFound.jsx"

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateIsLoggedIn = (flag) => {
    setIsLoggedIn(flag)
  }

  return (
    <div>
      <Routes>
        <Route path='/*' element={<LoginRouter updateIsLoggedIn={updateIsLoggedIn} />} />
        <Route path='/home/*' element={isLoggedIn ? <HomeRouter  /> : <LoginRouter />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}