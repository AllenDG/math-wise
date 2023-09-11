import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/index.css';

import Home from './pages/home/Home'
import Exploration from './pages/exploration/Exploration';
import Lesson from './pages/lesson/Lesson';
import About from './pages/about/About';
import Settings from './pages/settings/Settings';
import SignInOutContainer from './containers';

function App() {
  const [navVisible, showNavbar] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
     
        
        <Routes>
         
        <Route path="/login" element={<SignInOutContainer/>} />
      

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

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
