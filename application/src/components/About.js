import React from "react";
import '../index.css'
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';

function About() {
  let { path, url} = useRouteMatch;
  return (
    <div className="about">
      <div class="container">
        <div class="center">
            <h1 class="font-weight-light">About Team 7:</h1>
                Below is a list of the technologies used in Team 7’s software stack:
                <br/><br/>
                <div class="indent">
                    <strong>Server Host: </strong> AWS EC2 Instance 1vCPU 2GB Ram
                    <br/> 
                    <strong>Operating System: </strong>Ubuntu v18.0 
                    <br/>
                    <strong>Database: </strong>MySQL v8.0.26 
                    <br/>
                    <strong>Web Server: </strong>Nodejs 14.17.6
                    <br/>
                    <strong>Server-Side Language: </strong>Javascript
                    <br/>
                    <strong>Additional Technologies: </strong>Web Framework: Expressjs 4.17.1 
                    <br/>
                    <strong>Front-End UI: </strong>Reactjs 17.0.2, HTML/CSS 
                    <br/>
                    <strong>IDE: </strong>Visual Studio Code 
                    <br/>
                    <strong>Website Performance: </strong>Google Analytics
                    <br/><br/>
                    </div>
                This is the list of technologies that we'll be using for our project.
                
              <h2>Team Members</h2>
              <ul>
              <li>
              <Link to={`${url}/member1`}>Justin Diones</Link>
              </li>
              </ul>
        </div>
      </div>
    </div>
  );
}

export default About;