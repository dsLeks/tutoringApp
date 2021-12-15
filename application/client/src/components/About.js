import React from "react";
import "../index.css";
import "./About.css";
import { Route, Link, Switch, useRouteMatch } from "react-router-dom";
import Picture from "../components/pictures/justin.jpg";
import Rui from "../components/pictures/Rui.JPG";
import Alex from "../components/pictures/alekhya.JPG";
import William from "../components/pictures/william.png";
import Rupak from "../components/pictures/Rupak.jpg";
import Mai from "../components/pictures/Mai.jpg";

function About() {
  //Used for routing

  return (
    <div className="about text-center">
      <div class="container">
        <div class="center">
          <h1 class="font-weight-light">About Team 7:</h1>
          Below is a list of the technologies used in Team 7’s software stack:
          <br />
          <br />
          <div class="text-center">
            <strong>Server Host: </strong> AWS EC2 Instance 1vCPU 2GB Ram
            <br />
            <strong>Operating System: </strong>Ubuntu v18.0
            <br />
            <strong>Database: </strong>MySQL v8.0.26
            <br />
            <strong>Web Server: </strong>Nodejs 14.17.6
            <br />
            <strong>Server-Side Language: </strong>Javascript
            <br />
            <strong>Additional Technologies: </strong>Web Framework: Expressjs
            4.17.1
            <br />
            <strong>Front-End UI: </strong>Reactjs 17.0.2, HTML/CSS
            <br />
            <strong>IDE: </strong>Visual Studio Code
            <br />
            <strong>Website Performance: </strong>Google Analytics
            <br />
            <br />
          </div>
          {/* List of team members, clicking on names will open members' specific page. /undefined/member1 error happens here*/}
          {/* Routing error must be due to `${url} portion.
                  Clicking on the Justin Diones link brings you to localhost:3000/undefined/member1
                  instead of the desired localhost:3000/about/member1*/}
          <section className="team text-center py-5">
            <div className="container">
              <div className="header my-5">
                <h1>Meet the Team </h1>
                <p className="text-muted">Meet and Greet our Team Members</p>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="img-block mb-5">
                    <a href="/about/Justin-Diones">
                      <img
                        id="imagesize"
                        src={Picture}
                        className="img-fluid  img-thumbnail rounded-circle border-dark"
                      ></img>
                    </a>
                    <div className="content mt-2">
                      <a
                        id="fontColor"
                        className="nav-item nav-links"
                        href="/about/Justin-Diones"
                      >
                        Justin Diones
                      </a>
                      <p className="text-muted">Frontend Lead</p>
                      <p className="text-muted">jdiones@mail.sfsu.edu</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 ">
                  <div className="img-block mb-5">
                    <a href="/about/RuiQi-Huang">
                      <img
                        id="imagesize"
                        src={Rui}
                        className="img-fluid img-thumbnail rounded-circle border-warning"
                      ></img>{" "}
                    </a>
                    <div className="content mt-2">
                      <a
                        id="fontColor"
                        className="nav-item nav-links"
                        href="/about/RuiQi-Huang"
                      >
                        Rui Qi Huang
                      </a>
                      <p className="text-muted">Frontend Developer</p>
                      <p className="text-muted">rhuang10@mail.sfsu.edu</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="img-block mb-5">
                    <a href="/about/Rupak-Khatri">
                      <img
                        id="imagesize"
                        src={Rupak}
                        className="img-fluid  img-thumbnail rounded-circle border-danger"
                      ></img>{" "}
                    </a>
                    <div className="content mt-2">
                      <a
                        id="fontColor"
                        className="nav-item nav-links"
                        href="/about/Rupak-Khatri"
                      >
                        Rupak Khatri
                      </a>
                      <p className="text-muted">Frontend Developer</p>
                      <p className="text-muted">rkhatri@mail.sfsu.edu</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="img-block mb-5">
                    <a href="/about/Alekhya-Gandu">
                      <img
                        id="imagesize"
                        src={Alex}
                        className="img-fluid  img-thumbnail rounded-circle border-success"
                      ></img>{" "}
                    </a>
                    <div className="content mt-2">
                      <a
                        id="fontColor"
                        className="nav-item nav-links"
                        href="/about/Alekhya-Gandu"
                      >
                        Alekhya Gandu
                      </a>
                      <p className="text-muted">Team Lead and Backend Lead</p>
                      <p className="text-muted">agandu1@mail.sfsu.edu</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="img-block mb-5">
                    <a href="/about/Mai-Ra">
                      <img
                        id="imagesize"
                        src={Mai}
                        className="img-fluid  img-thumbnail rounded-circle border-primary"
                      ></img>{" "}
                    </a>
                    <div className="content mt-2">
                      <a
                        id="fontColor"
                        className="nav-item nav-links"
                        href="/about/Mai-Ra"
                      >
                        Mai Ra
                      </a>
                      <p className="text-muted">Backend Developer</p>
                      <p className="text-muted">mra1@mail.sfsu.edu</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="img-block mb-5">
                    <a href="/about/William-Lushbough">
                      <img
                        id="imagesize"
                        src={William}
                        className="img-fluid  img-thumbnail rounded-circle border-success"
                      ></img>{" "}
                    </a>
                    <div className="content mt-2">
                      <a
                        id="fontColor"
                        className="nav-item nav-links"
                        href="/about/William-Lushbough"
                      >
                        William Lushbough
                      </a>
                      <p className="text-muted">Github Master</p>
                      <p className="text-muted">wlushbough@mail.sfsu.edu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
