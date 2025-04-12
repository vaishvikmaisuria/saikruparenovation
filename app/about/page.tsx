"use client";

import React from "react";
import Header from "../../components/Header"; // Import the Header component
import "./about.css"; // Ensure the CSS file matches the new design

const About: React.FC = () => {
	return (
		<>
			<Header /> {/* Add the Header component */}
			<div className="about-container">
				<section className="hero-section">
					<p className="hero-subtitle">
						Design is not just what it looks like and feels like.
						Design is how it works.
					</p>
				</section>

				<section className="about-content">
					<h2>✨ My Vision</h2>
					<p>
						Like Steve Jobs, I believe in creating experiences that
						are simple, elegant, and impactful. My work is driven by
						a passion for innovation and a relentless pursuit of
						excellence.
					</p>

					<h2>🚀 My Journey</h2>
					<p>
						From humble beginnings to building projects that make a
						difference, my journey has been fueled by curiosity and
						a desire to challenge the status quo. I strive to
						combine technology and creativity to craft solutions
						that inspire.
					</p>

					<h2>💡 What I Do</h2>
					<ul>
						<li>🌐 Innovative Modern Legal Basements</li>
						<li>🧠 Creative Problem Solving</li>
						<li>🎨 Designing User-Centric Experiences</li>
						<li>⚙️ Building Efficient Solutions</li>
					</ul>

					<h2>📞 Get in Touch</h2>
					<p>
						Feel free to reach out if you&apos;d like to collaborate
						or learn more about my work. Together, we can create
						something extraordinary.
					</p>
				</section>
			</div>
		</>
	);
};

export default About;
