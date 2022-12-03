import React from 'react';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Menu from './pages/Menu.jsx';
import Contact from './pages/Contact.jsx';

function App() {

  return (
    <div className="App">
      <Navbar />

      <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </div>
    </div>

 

  )
}

export default App;
