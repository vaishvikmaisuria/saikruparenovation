"use client";

import React from "react";
import Header from "../../components/Header"; // Import the Header component
import "./services.css"; // Ensure the CSS file matches the new design

const Services: React.FC = () => {
  return (
    <>
      <Header />
      <div className="services-container">
        <h1>Our Services</h1>
        <ul>
          <li>Kitchen Cabinet Installation</li>
          <li>Bathroom Remodeling</li>
          <li>Vinyl/Laminate Flooring Services</li>
          <li>Drywalling Services</li>
          <li>Tiling</li>
          <li>HVAC</li>
          <li>Plumbing</li>
        </ul>
      </div>

    </>
  );
};

export default Services;