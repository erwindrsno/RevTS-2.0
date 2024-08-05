import { Routes, Route, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { HomeRouter } from "./pages/home/HomeRouter.jsx"
import { LoginRouter } from "./pages/login/LoginRouter.jsx"

export const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const boolean = sessionStorage.getItem('isLoggedIn');
    setIsLoggedIn(boolean);
  },[isLoggedIn])

  return (
    <div>
      <Routes>
        <Route path='/*' element={isLoggedIn ? <HomeRouter />: <LoginRouter />} />
      </Routes>
    </div>
  )
}