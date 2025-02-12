import React from 'react';
import styles from "./App.module.css";
// import { ProfilePic } from "./components/ProfilePic/ProfilePic";
// import { About } from "./components/About/About";
// import { Experience } from "./components/Experience/Experience";
// import { Projects } from "./components/Projects/Projects";
// import { Contact } from "./components/Contact/Contact";

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
        </Routes>
      </Router>
    </>
  );
}

export default App;