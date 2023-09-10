import React from 'react';
import {
	FaAngleRight,
	FaAngleLeft, 
	FaChartBar, 
	FaShoppingCart, 
	FaCog,
	FaSignOutAlt,
	FaBars,
	FaHome,
	FaFileAlt,
	FaInfoCircle
} from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

const ICON_SIZE = 20;

function Navbar({visible, show}) {

	return (
		<>
			<div className="mobile-nav">
				<button
					className="mobile-nav-btn"
					onClick={() => show(!visible)}
				>
					<FaBars size={24}  />
				</button>
			</div>
			<nav className={!visible ? 'navbar' : ''}>
				<button
					type="button"
					className="nav-btn"
					onClick={() => show(!visible)}
				>
					{ !visible
						? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
				</button>
				<div>
					<NavLink
						className="logo"
						to="/"
					>
							<h3>Math Wise</h3>

					</NavLink>
					<div className="links nav-top">
						<NavLink to="/home" className="nav-link">
							<FaHome size={ICON_SIZE} />
							<span>Home</span>
						</NavLink>
						<NavLink to="/exploration" className="nav-link">
							<FaChartBar size={ICON_SIZE} />
							<span>Exploration </span>
						</NavLink>
						<NavLink to="/lesson" className="nav-link">
							<FaFileAlt size={ICON_SIZE} />
							<span>Lesson</span> 
						</NavLink>
						<NavLink to="/about" className="nav-link">
							<FaInfoCircle size={ICON_SIZE} />
							<span>About</span> 
						</NavLink>
					</div>
				</div>

				<div className="links">
					<NavLink to="/settings" className="nav-link">
						<FaCog size={ICON_SIZE} />
						<span>Settings</span> 
					</NavLink>
					<NavLink to="/Sign-out" className="nav-link">
						<FaSignOutAlt size={ICON_SIZE} />
						<span>Logout</span> 
					</NavLink>
				</div>
			</nav>
		</>
  );
}

export default Navbar;
