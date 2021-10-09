import React from "react";
import "./Footer.css"

// Footer does not currently stick to the bottom of the page if page is filled with info
/*const Footer = () => {
  return (
    <div className="main-footer">
      <footer class="bottom">
            Copyright &copy; Team 7: 2021
      </footer>
    </div>
  );
}

export default Footer;
*/

const Footer = () => {
  return (
    
     
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*first column*/}
          <div className="col">
            <h4>GETTING TO KNOW US</h4>
            <h5 className="list-unstyled">
              {/*will add link later */}
              <li>About Us</li>
              <li>Contact Us</li>
              <li>1600 Holloway Ave </li>
              <li>San Francisco, CA</li> 
              <li>94132</li>
            </h5>
          </div>
            {/*Second column*/}
          <div className="col">
            <h4>FOR STUDENTS</h4>
            <ui className="list-unstyled">
              <li>Subjects</li>
              <li>Find a tutor</li>
              <li>Book a meeting</li>
              <li>Review a tutors</li>
            </ui>
          </div>
          {/* Third Column */}
          <div className="col">
            <h4>FOR TUTORS</h4>
            <ui className="list-unstyled">
              <li>Apply to be a tutor</li>
              <li>SFSU Software Engineering Project</li>
              <li>CSC648-848 Fall 2021</li>
              <li>For Demonstration Only</li>
              
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;
