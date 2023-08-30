import React, {useState} from 'react';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./style/index.css";

import Home from './pages/home/Home'
import Exploration from './pages/exploration/Exploration'
import Lesson from './pages/Lesson'
import About from './pages/About'

function App() {
	const [navVisible, showNavbar] = useState(false);

	return (
		<BrowserRouter >
			<div className="App">
				<Navbar visible={ navVisible } show={ showNavbar } />
				<Routes>
					<Route path='/home' element={ <Home/>} />
					<Route path='/exploration' element={ <Exploration/>} />
					<Route path='/lesson' element={ <Lesson/>} />
					<Route path='/about' element={ <About/>} />
				</Routes>
			</div>
		</BrowserRouter>
  );
}

export default App;
