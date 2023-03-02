import React, { useState } from "react";
import NavCart from "../icons/NavCart";
import "../styles/navbar.css";
import useBodyScrollLock from "./useBodyScrollLock";

//fix mobile navbar
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isLocked, toggle] = useBodyScrollLock();
	const open = () => {
		setIsOpen(!isOpen);
		toggle();
	};
	return (
		<header>
			<div className='navbar'>
				<div className='logo'>
					<h1>
						<a href='./'>Too Asian</a>
					</h1>
				</div>
				<div className={`nav-toggle ${isOpen && "open"}`} onClick={() => open()}>
					<div className='bars'> </div>
				</div>
				<nav className={`nav-items ${isOpen && "open"}`}>
					{/* prettier-ignore */}
					<ul>
					<li><a href='./cards'>Add Order</a></li>
					<li><a href='./orderform'>Orderform</a></li>
					<li><a href='#' onClick={() =>{
						console.log('hi')	
					}}><NavCart /></a></li>
				</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
