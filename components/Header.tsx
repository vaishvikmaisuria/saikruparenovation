"use client";

import React from "react";
import "./Header.css"; // Ensure the CSS file matches the new design
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
	return (
		<header className="header-container">
			<nav className="header-nav">
				<div className="logo-container">
					<Image
						src="/saikrupa.png"
						alt="Saikrupa Logo"
						width={180}
						height={38}
						className="logo"
						priority
					/>
				</div>
				<ul className="menu">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					{/* <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li> */}
				</ul>
				<div className="">
					<Link href="/contacts">Contacts</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
