import React from 'react';
import './RecentWork.css';
import consoleGif from '../../assets/images/console.gif';

const RecentWork = () => {
  return (
    <section className="recent-work-section" id="recent-work">
      <div className="recent-work-container">
        <h2 className="recent-work-title">Recent Work</h2>
        
        <div className="recent-work-content">
          <div className="recent-work-item">
            <div className="recent-work-text">
              <h3 className="work-title">
                A vscode extension - Console Log with Emoji
              </h3>
              <p className="work-description">
                Hit Alt + P to insert console.log statements with a random emoji and the filename.
              </p>
              
              <div className="work-details">
                <div className="work-detail">
                    <span className="detail-label">Search on VScode</span>
                    <span className="detail-value"> - console-log-with-emoji</span>
                </div>
                <div className="work-detail">
                  <span className="detail-label">Downloads</span>
                  <span className="detail-value"> - 16 installs</span>
                </div>
                <div className="work-detail">
                  <span className="detail-label">Version</span>
                  <span className="detail-value"> - 0.0.6</span>
                </div>
              </div>
              <div className="work-buttons">
                <a 
                  href="https://marketplace.visualstudio.com/items?itemName=console-log-with-emoji.console-log-with-emoji" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="work-btn marketplace-btn"
                >
                  VS Code Marketplace →
                </a>
                <a 
                  href="https://github.com/parthbhatt268/console-log-with-emoji" 
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
