import React from "react";
import "./Footer.css";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import leetcode from "../../assets/images/LeetCode.png";
import hackerrank from "../../assets/images/hackerrank.svg";
import coursera from "../../assets/images/Coursera.png";
import data from "./data.json";

const IMAGES = {
  linkedin,
  github,
  leetcode,
  hackerrank,
  coursera,
};

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        setShowTopBtn(rect.bottom < 0);
      } else {
        setShowTopBtn(window.scrollY > 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <h3 className="footer-connect-text">{data.connectText}</h3>
      <ul className="social-icon">
        {data.socialLinks.map((social) => (
          <li key={social.platform} className="social-icon__item">
            <div className="glass-social-icon">
              <a
                className="social-icon__link"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IMAGES[social.imageKey]} alt={social.platform} />
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p>{data.copyright}</p>
      <div className="footer-made-with">{data.madeWith}</div>
      {showTopBtn && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
