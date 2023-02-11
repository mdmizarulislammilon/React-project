import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/";
import Blogs from "../pages/Blogs/";
import Contact from "../pages/Contact/";
import About from "../pages/About/";
import Servise from "../pages/Servise/"
import Nopage from "../pages/Nopage/"


export default function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="servise" element={<Servise />} />
          <Route path="*" element={<Nopage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}