import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/index.css';

import Home from './pages/Home';
import Exploration from './pages/Exploration';
import Lesson from './pages/Lesson';
import About from './pages/About';
import Settings from './pages/Settings';
import Login from './pages/Login';

function App() {
  const [navVisible, showNavbar] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
       
       

        <Routes>
         
          <Route
            path="/home"
            element={
              <>
                <Navbar visible={navVisible} show={showNavbar} />
                <Home />
              </>
            }
          />
          <Route
            path="/lesson"
            element={
              <>
                <Navbar visible={navVisible} show={showNavbar} />
                <Lesson />
              </>
            }
          />
          <Route
            path="/exploration"
            element={
              <>
                <Navbar visible={navVisible} show={showNavbar} />
                <Exploration />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar visible={navVisible} show={showNavbar} />
                <About />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <Navbar visible={navVisible} show={showNavbar} />
                <Settings />
              </>
            }
          />

       
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
