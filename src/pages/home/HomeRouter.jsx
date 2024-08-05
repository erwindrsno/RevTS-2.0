import { Routes, Route } from "react-router-dom"
import { Home } from './Home.jsx';
import { Topics } from "./Topics.jsx";

export const HomeRouter = () => {
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topics' element={<Topics />} />
      </Routes>
    </div>
  )
}