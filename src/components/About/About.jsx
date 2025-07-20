// src/components/About/About.jsx
import React from "react";
import "./About.css";
import parthPhoto from "../../assets/images/Parth1.png";

import ProfileCard from "../Effects/ProfileCard/ProfileCard";

const About = () => {
  const text =
    "Hi,👋 my name is Parth and I am a Full stack Web Developer. " +
    "I’m currently pursuing my Master's Degree 🎓 in Information System Management (ISM) " +
    "with the aim of achieving a 1:1 🎖 from University of Galway🏛. " +
    "You can connect with me on the following social media platforms. " +
    "Also, if you have any suggestions or comments for the portfolio you can connect with me on LinkedIn. " +
    "Thank you for visiting my portfolio. 😊";

  return (
    <section className="about-container">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        {/* left: card */}
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
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>

        {/* right: text */}
        <div className="about-text">
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
