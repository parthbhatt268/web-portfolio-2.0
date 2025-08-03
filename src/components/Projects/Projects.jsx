import React from 'react';
import './Projects.css';
import rapidBasketImage from '../../assets/images/rapis-basket.png';
import chatAppImage from '../../assets/images/chat-app.png';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Rapid Basket - A end to end Food Ordering Website",
      description: "",
      techStack: [
        "React, Redux, Redux Toolkit Thunk",
        "HTML, CSS, Javascript",
        "ExpressJS and NodeJS REST API",
        "MongoDb Database",
        "Stripe Payment Integration",
        "Amazon Web Service (AWS) Deployment"
      ],
      image: rapidBasketImage,
      liveLink: "https://rapid-basket.netlify.app/",
      githubLink: "https://github.com/parthbhatt268/ui-rapidBasket"
    },
    {
      id: 2,
      title: "Fire Chat",
      description: "Web chatting application",
      techStack: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Firebase"
      ],
      image: chatAppImage,
      liveLink: "https://webchat-4d001.web.app/",
      githubLink: "https://github.com/parthbhatt268/Fire-Chat"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        
        <div className="projects-content">
          {projectsData.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-text">
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-details">
                  <div className="project-detail">
                    <span className="detail-label">Tech Stack</span>
                    <span className="detail-value"> -</span>
                  </div>
                </div>

                <ol className="tech-stack-list">
                  {project.techStack.map((tech, index) => (
                    <li key={index} className="tech-stack-item">
                      {tech}
                    </li>
                  ))}
                </ol>

                <div className="project-buttons">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn live-btn"
                  >
                    Live Website →
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn github-btn"
                  >
                    GitHub Repo →
                  </a>
                </div>
              </div>
              
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;