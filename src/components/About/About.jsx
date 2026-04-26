// src/components/About/About.jsx
import React from "react";
import "./About.css";

import ProfileCard from "../Effects/ProfileCard/ProfileCard";
import data from "./data.json";

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <div className="about-profile">
          <ProfileCard
            showUserInfo={true}
            showBehindGradient={true}
            enableTilt={true}
            name={data.profile.name}
            title={data.profile.title}
            handle={data.profile.handle}
            status={data.profile.status}
            contactText={data.profile.contactText}
            onContactClick={() =>
              window.open(data.profile.linkedinUrl, "_blank")
            }
          />
        </div>

        <div className="about-text">
          <p>{data.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
