import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About.jsx";
import Login from "./Login.jsx";
import Contact from "./Contact.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    // <p>Hello</p>
  );
};

export default App;