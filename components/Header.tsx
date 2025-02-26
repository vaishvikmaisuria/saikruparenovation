"use client";

import React, { useState } from "react";
import "./Header.css"; // Assuming you will create a CSS file for styling
import Image from "next/image";

const Header: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header>
			<nav>
				<Image
					src="/saikrupa.png"
					alt="Saikrupa Logo"
					width={180}
					height={38}
					className="logo"
					priority
				/>
				<button
					className="mobile-menu-toggle"
					onClick={toggleMobileMenu}
				>
					☰
				</button>
				<ul className={isMobileMenuOpen ? "menu open" : "menu"}>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#services">Services</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contacts">Contacts</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
