import { Routes, Route } from "react-router-dom"
import { Home } from './Home.jsx';

export const HomeRouter = () => {
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}