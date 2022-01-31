import "../assets/css/navbar.css";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => {
		setMenu(!menu);
	};

	const styleMenu = {
		left: menu ? 0 : "-100%",
	};

	const styles = {
		active: {
			color: "#FF0000",
			fontWeight: "bold",
		},
	};

	const crossshow = {
		display: menu ? "block" : "none",
	};

	return (
		<>
			<nav>
				<div className='left'>
					<NavLink to='/'>
						<i className='fab fa-github gitlink'></i>{" "}
					</NavLink>
				</div>
				<div className='right'>
					<ul className='navbar' style={styleMenu}>
						<li style={styles.active}>
							<NavLink
								onClick={toggleMenu}
								className={(navdata) => {
									return navdata.isActive ? "active" : "navlink";
								}}
								to='/about'>
								About
							</NavLink>
							<NavLink
								onClick={toggleMenu}
								className={(navdata) => {
									return navdata.isActive ? "active" : "navlink";
								}}
								to='/skills'>
								Skills
							</NavLink>
							<NavLink
								onClick={toggleMenu}
								className={(navdata) => {
									return navdata.isActive ? "active" : "navlink";
								}}
								to='/Service'>
								Service
							</NavLink>
							<NavLink
								onClick={toggleMenu}
								className={(navdata) => {
									return navdata.isActive ? "active" : "navlink";
								}}
								to='/blog'>
								Blog
							</NavLink>
							<NavLink
								onClick={toggleMenu}
								className={(navdata) => {
									return navdata.isActive ? "active" : "navlink";
								}}
								to='/contact'>
								Contact
							</NavLink>
						</li>
					</ul>
					<div className='btndiv'>
						<i className='fas fa-bars' id='open' onClick={toggleMenu}></i>
						<i
							className='fas fa-times'
							style={crossshow}
							onClick={toggleMenu}
							id='close'></i>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
