import { Routes, Route } from "react-router-dom"
import { useEffect, useRef } from "react"
import { HomeRouter } from "./pages/home/HomeRouter.jsx"
import { LoginRouter } from "./pages/login/LoginRouter.jsx"
import { NotFound } from "./pages/NotFound.jsx"
import AuthProvider from "./hooks/Authentication.jsx"
import AuthenticatedRoute from "./routes/AuthenticatedRoute.jsx"

export const App = () => {

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<LoginRouter />} />
          <Route element={<AuthenticatedRoute />}>
            <Route path='/home/*' element={<HomeRouter />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}