import { Routes, Route } from "react-router-dom"
import { Login } from "./Login.jsx"
import { About } from "./About.jsx"
import { Contact } from "./Contact.jsx"
import { Header } from "../../components/login/Header.jsx"

export const LoginRouter = () => {
  return (
    <div className="h-screen w-screen bg-bluegray-100">
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}
