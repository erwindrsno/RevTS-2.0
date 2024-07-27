import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/login/About.jsx";
import Login from "./pages/login/Login.jsx";
import Contact from "./pages/login/Contact.jsx";
import Home from "./pages/home/Home.jsx"

export const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    // <p>Hello</p>
    // <Home />
  );
};

export const HomeRouter = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}