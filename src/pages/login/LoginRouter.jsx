import { Routes, Route } from "react-router-dom"
import { Login } from "./Login.jsx"
import { About } from "./About.jsx"
import { Contact } from "./Contact.jsx"
import { Header } from "../../components/login/Header.jsx"
import { PropTypes } from 'prop-types';

export const LoginRouter = ({ updateIsLoggedIn }) => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <Routes>
        <Route path='/' element={<Login updateIsLoggedIn={updateIsLoggedIn} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

//eslint
LoginRouter.propTypes = {
  updateIsLoggedIn: PropTypes.func.isRequired,
};