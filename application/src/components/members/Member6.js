import React from 'react';
// Import picture from src/components/pictures folder, follow this format to upload your own picture
// div className shows how to add your picture to the page
import Picture from './pictures/Mai.jpg'
import './About.css'
 
const Member6 = () => {
    return (
       <div className="container">
         <div>
         <h1 >Mai Ra</h1>
 
         <div className="about-info">
            GitHub ID: Mai873
            <br/> <br/>
            Back end developer of Team 7. Senior year at SFSU. Scheduled to graduate Spring 2022. 
            Working on the back end of the team project and maintaing the cloud and infrastructure.
         </div>
         </div>
         
         <div className="about-picture">
            <img src={Picture} />
         </div>

         
       </div>
    );
}
 
export default Member6;