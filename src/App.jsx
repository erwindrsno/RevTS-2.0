import { Routes, Route } from "react-router-dom"
import { useEffect, useRef } from "react"
import { HomeRouter } from "./pages/home/HomeRouter.jsx"
import { LoginRouter } from "./pages/login/LoginRouter.jsx"
import { NotFound } from "./pages/NotFound.jsx"
import AuthProvider from "./hooks/Authentication.jsx"

export const App = () => {

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<LoginRouter />} />
          {/* <Route path='/home/*' element={isLoggedIn ? <HomeRouter /> : <LoginRouter />} /> */}
          <Route path='/home/*' element={<HomeRouter />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}