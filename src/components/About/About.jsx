// src/components/About/About.jsx
import React from "react";
import "./About.css";

import ProfileCard from "../Effects/ProfileCard/ProfileCard";

const About = () => {
  const text =
    "Hi,👋 my name is Parth and I am currently at Siren as a Software Engineer. " +
    "I have been working in the field of Software Engineering for almost 4.5 years now. " +
    "I have First Class Honours 🎖️ in my Master's Degree 🎓 in Information System Management (ISM) " +
    "from University of Galway🏛. " +
    "I have passion to build Software which make sense in real world, and now with using AI and Machine Learning." +
    "Thanks for taking your time to visit my page. 😁";

  return (
    <section className="about-container">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <div className="about-profile">
          <ProfileCard
            showUserInfo={true}
            showBehindGradient={true}
            enableTilt={true}
            name="Parth Bhatt"
            title="Software Engineer"
            handle="parthbhatt268"
            status="Online"
            contactText="Contact Me"
            onContactClick={() => window.open('https://www.linkedin.com/in/parth-bhatt-092024186/', '_blank')}
          />
        </div>

        <div className="about-text">
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
