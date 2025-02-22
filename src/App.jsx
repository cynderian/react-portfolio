import React from "react";
// import { ProfilePic } from "./components/ProfilePic/ProfilePic";
// import { About } from "./components/About/About";
// import { Experience } from "./components/Experience/Experience";
// import { Projects } from "./components/Projects/Projects";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
