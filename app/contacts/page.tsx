"use client";

import React, { useState } from "react";
import Header from "../../components/Header"; // Import the Header component
import "./contacts.css"; // Ensure the CSS file matches the new design

const Contacts: React.FC = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// Add your form submission logic here
	};

	return (
		<>
			<Header /> {/* Add the Header component */}
			<div className="contacts-container">
				<h1 className="contacts-title">Contact Us</h1>
				<p className="contacts-description">
					We’d love to hear from you! Fill out the form below to get
					in touch.
				</p>

				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="fullName">Full Name</label>
						<input
							type="text"
							id="fullName"
							name="fullName"
							placeholder="Enter your full name"
							value={formData.fullName}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email Address</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email address"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="subject">Subject</label>
						<input
							type="text"
							id="subject"
							name="subject"
							placeholder="Enter the subject"
							value={formData.subject}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							placeholder="Enter your message"
							value={formData.message}
							onChange={handleChange}
							required
						></textarea>
					</div>
					<button type="submit" className="submit-button">
						Send Message
					</button>
				</form>
			</div>
		</>
	);
};

export default Contacts;
