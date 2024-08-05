import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import { HomeRouter } from "./pages/home/HomeRouter.jsx"
import { LoginRouter } from "./pages/login/LoginRouter.jsx"
import { NotFound } from "./pages/NotFound.jsx"

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const boolean = Boolean(sessionStorage.getItem('isLoggedIn'));
    console.log("sawadeekap " + boolean)
    setIsLoggedIn(boolean);
  })

  return (
    <div>
      <Routes>
        <Route path='/*' element={<LoginRouter />} />
        <Route path='/home/*' element={isLoggedIn ? <HomeRouter /> : <LoginRouter />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}