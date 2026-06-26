import React from 'react';
import data from '../../data.json';
import './Skills.css';

import htmlLogo from '../../assets/logo/html.png';
import cssLogo from '../../assets/logo/css.png';
import jsLogo from '../../assets/logo/javsScript.png';
import typescriptLogo from '../../assets/logo/type.jpg';
import reactLogo from '../../assets/logo/react.jpg';
import nextLogo from '../../assets/logo/next.jpg';
import angularLogo from '../../assets/logo/angular.png';
import reduxLogo from '../../assets/logo/redux.png';
import materialUILogo from '../../assets/logo/mui.svg';
import bootstrapLogo from '../../assets/logo/bootstrap.png';
import nodeLogo from '../../assets/logo/nodeJS.png';
import expressLogo from '../../assets/logo/express.png';
import restLogo from '../../assets/logo/rest.png';
import graphqlLogo from '../../assets/logo/graphql.png';
import jwtLogo from '../../assets/logo/jwt.png';
import firebaseLogo from '../../assets/logo/firebase.png';
import stripeLogo from '../../assets/logo/stripe.png';
import openaiLogo from '../../assets/logo/openai.png';
import mongodbLogo from '../../assets/logo/mongo.png';
import mariadbLogo from '../../assets/logo/psql.png';
import mysqlLogo from '../../assets/logo/sql.svg';
import elasticsearchLogo from '../../assets/logo/elasticsearch.svg';
import opensearchLogo from '../../assets/logo/opensearch.png';
import jestLogo from '../../assets/logo/jest.png';
import cypressLogo from '../../assets/logo/cypress.png';
import dockerLogo from '../../assets/logo/docker.png';
import kubernetesLogo from '../../assets/logo/kubernetes.png';
import jenkinsLogo from '../../assets/logo/jenkins.png';
import awsLogo from '../../assets/logo/aws.png';
import googleCloudLogo from '../../assets/logo/google-cloud.png';
import gitLogo from '../../assets/logo/git.jpg';
import githubLogo from '../../assets/logo/github.jpg';
import npmLogo from '../../assets/logo/npm.png';
import yarnLogo from '../../assets/logo/yarn.png';
import groovyLogo from '../../assets/logo/groovy.png';
import ymlLogo from '../../assets/logo/yml.png';
import linuxLogo from '../../assets/logo/linux.png';
import windowsLogo from '../../assets/logo/windows.png';
import macLogo from '../../assets/logo/mac.png';

const ICONS = {
  html: htmlLogo, css: cssLogo, js: jsLogo, typescript: typescriptLogo,
  react: reactLogo, next: nextLogo, angular: angularLogo, redux: reduxLogo,
  materialUI: materialUILogo, bootstrap: bootstrapLogo,
  node: nodeLogo, express: expressLogo, rest: restLogo, graphql: graphqlLogo,
  jwt: jwtLogo, firebase: firebaseLogo, stripe: stripeLogo, openai: openaiLogo,
  mongodb: mongodbLogo, mariadb: mariadbLogo, mysql: mysqlLogo,
  elasticsearch: elasticsearchLogo, opensearch: opensearchLogo, jest: jestLogo, cypress: cypressLogo,
  docker: dockerLogo, kubernetes: kubernetesLogo, jenkins: jenkinsLogo, aws: awsLogo, googleCloud: googleCloudLogo,
  git: gitLogo, github: githubLogo, npm: npmLogo, yarn: yarnLogo, groovy: groovyLogo, yml: ymlLogo,
  linux: linuxLogo, windows: windowsLogo, mac: macLogo,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <span className="section-num mono">04 / skills</span>
        <span className="section-rule" />
      </div>
      <h2>Skills &amp; tools</h2>

      <div className="skills__grid">
        {Object.entries(data.skills).map(([category, items]) => (
          <div key={category} className="skills__card card">
            <h3>{category}</h3>
            <div className="skills__pills">
              {items.map((skill) => (
                <a key={skill.name} href={skill.link} target="_blank" rel="noreferrer" className="pill">
                  {skill.iconKey && ICONS[skill.iconKey] && (
                    <img src={ICONS[skill.iconKey]} alt="" className="pill-icon" />
                  )}
                  {skill.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
