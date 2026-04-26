import React from "react";
import "./Skills.css";
import data from "./data.json";

// Frontend
import htmlLogo from "../../assets/logo/html.png";
import cssLogo from "../../assets/logo/css.png";
import jsLogo from "../../assets/logo/javsScript.png";
import reactLogo from "../../assets/logo/react.jpg";
import nextLogo from "../../assets/logo/next.jpg";
import angularLogo from "../../assets/logo/angular.png";
import reduxLogo from "../../assets/logo/redux.png";
import materialUILogo from "../../assets/logo/mui.svg";
import bootstrapLogo from "../../assets/logo/bootstrap.png";

// Backend & APIs
import nodeLogo from "../../assets/logo/nodeJS.png";
import expressLogo from "../../assets/logo/express.png";
import restLogo from "../../assets/logo/rest.png";
import graphqlLogo from "../../assets/logo/graphql.png";
import jwtLogo from "../../assets/logo/jwt.png";
import firebaseLogo from "../../assets/logo/firebase.png";
import stripeLogo from "../../assets/logo/stripe.png";
import openaiLogo from "../../assets/logo/openai.png";

// Databases & Test
import mongodbLogo from "../../assets/logo/mongo.png";
import mariadbLogo from "../../assets/logo/psql.png";
import mysqlLogo from "../../assets/logo/sql.svg";
import elasticsearchLogo from "../../assets/logo/elasticsearch.svg";
import opensearchLogo from "../../assets/logo/opensearch.png";
import jestLogo from "../../assets/logo/jest.png";
import cypressLogo from "../../assets/logo/cypress.png";

// DevOps, Cloud & CI/CD
import dockerLogo from "../../assets/logo/docker.png";
import kubernetesLogo from "../../assets/logo/kubernetes.png";
import jenkinsLogo from "../../assets/logo/jenkins.png";
import awsLogo from "../../assets/logo/aws.png";
import googleCloudLogo from "../../assets/logo/google-cloud.png";

// Version Control & Other Tech
import gitLogo from "../../assets/logo/git.jpg";
import githubLogo from "../../assets/logo/github.jpg";
import npmLogo from "../../assets/logo/npm.png";
import yarnLogo from "../../assets/logo/yarn.png";
import groovyLogo from "../../assets/logo/groovy.png";
import ymlLogo from "../../assets/logo/yml.png";

// Operating Systems
import linuxLogo from "../../assets/logo/linux.png";
import windowsLogo from "../../assets/logo/windows.png";
import macLogo from "../../assets/logo/mac.png";

const ICONS = {
  html: htmlLogo,
  css: cssLogo,
  js: jsLogo,
  react: reactLogo,
  next: nextLogo,
  angular: angularLogo,
  redux: reduxLogo,
  materialUI: materialUILogo,
  bootstrap: bootstrapLogo,
  node: nodeLogo,
  express: expressLogo,
  rest: restLogo,
  graphql: graphqlLogo,
  jwt: jwtLogo,
  firebase: firebaseLogo,
  stripe: stripeLogo,
  openai: openaiLogo,
  mongodb: mongodbLogo,
  mariadb: mariadbLogo,
  mysql: mysqlLogo,
  elasticsearch: elasticsearchLogo,
  opensearch: opensearchLogo,
  jest: jestLogo,
  cypress: cypressLogo,
  docker: dockerLogo,
  kubernetes: kubernetesLogo,
  jenkins: jenkinsLogo,
  aws: awsLogo,
  googleCloud: googleCloudLogo,
  git: gitLogo,
  github: githubLogo,
  npm: npmLogo,
  yarn: yarnLogo,
  groovy: groovyLogo,
  yml: ymlLogo,
  linux: linuxLogo,
  windows: windowsLogo,
  mac: macLogo,
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Tech Stack</h2>

        <div className="skills-groups">
          {Object.entries(data).map(([category, items]) => (
            <div key={category} className="skills-group">
              <div className="skills-category">
                <p>{category}</p>
              </div>
              <div className="skills-items">
                {items.map(({ name, iconKey, link }) => (
                  <a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-card"
                  >
                    <img src={ICONS[iconKey]} alt={name} className="skill-icon" />
                    <span className="skill-label">{name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
