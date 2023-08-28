import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./style/index.css";

import Home from './pages/Home'

function App() {
	const [navVisible, showNavbar] = useState(false);

	return (
		<BrowserRouter >
			<div className="App">
				<Navbar visible={ navVisible } show={ showNavbar } />
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path='/home' element={ <Home/>} />
					
					<Route path='/analytics' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Analystics</h1>
						</div>
					}/>
					<Route path='/orders' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Orders</h1>
						</div>
					}/>
					<Route path='/settings' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>Settings</h1>
						</div>
					}/>
				</Routes>
			</div>
		</BrowserRouter>
  );
}

export default App;
