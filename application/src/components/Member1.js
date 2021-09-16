import React from 'react';
// Import picture from src/components/pictures folder, follow this format to upload your own picture
// div className shows how to add your picture to the page
import Picture from '../components/pictures/justin.jpg'
import './About.css'
 
const Member1 = () => {
    return (
       <div className="container">
         <div>
         <h1 >Justin Diones</h1>
 
         <div className="about-info">
            GitHub ID: justdio
            <br/> <br/>
            Front end lead of Team 7. Senior year at SFSU. Scheduled to graduate Spring 2022. 
            Working on the front end of the team project using React in Visual Studio Code.
         </div>
         
         <div className="about-picture">
            <img src={Picture} />
         </div>

         </div>
       </div>
    );
}
 
export default Member1;