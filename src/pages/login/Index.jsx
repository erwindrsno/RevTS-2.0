import { Routes, Route } from "react-router-dom"
import { Login } from "./Login"
import { About } from "./About"
import { Contact } from "./Contact"
import { Header } from "../../components/login/Header"

export const Index = () => {
  return(
    <div className="h-screen w-screen">      
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}