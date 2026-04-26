import React from "react";
import "./RecentWork.css";
import consoleGif from "../../assets/images/console.gif";
import data from "./data.json";

const RecentWork = () => {
  return (
    <section className="recent-work-section" id="recent-work">
      <div className="recent-work-container">
        <h2 className="recent-work-title">Recent Work</h2>

        <div className="recent-work-content">
          <div className="recent-work-item">
            <div className="recent-work-text">
              <h3 className="work-title">{data.title}</h3>
              <p className="work-description">{data.description}</p>

              <div className="work-details">
                <div className="work-detail">
                  <span className="detail-label">Search on VScode</span>
                  <span className="detail-value"> - {data.extensionName}</span>
                </div>
                <div className="work-detail">
                  <span className="detail-label">Downloads</span>
                  <span className="detail-value"> - {data.downloads}</span>
                </div>
                <div className="work-detail">
                  <span className="detail-label">Version</span>
                  <span className="detail-value"> - {data.version}</span>
                </div>
              </div>
              <div className="work-buttons">
                <a
                  href={data.marketplaceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-btn marketplace-btn"
                >
                  VS Code Marketplace →
                </a>
                <a
                  href={data.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-btn github-btn"
                >
                  GitHub Repository →
                </a>
              </div>
            </div>

            <div className="recent-work-image">
              <img src={consoleGif} alt="Console Log Extension Demo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
