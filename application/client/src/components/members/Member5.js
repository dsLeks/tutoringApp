import React from 'react';
// Import picture from src/components/pictures folder, follow this format to upload your own picture
// div className shows how to add your picture to the page
import Picture from '../pictures/alekhya.JPG'
import '../About.css'

const Member4 = () => {
    return (
       <div className="about-member">
          <div className="about-picture">
            <img src={Picture} className='a-img'/>
         </div>
         
         <div className="about-info">
            <h1 >Alekhya Gandu</h1>
            GitHub ID: dsLeks
            <br/> <br/>
            Hello! I'm the Team Lead for Team 7 and the Back End Lead. I'm a first semester grad student at SF State. I'm using Nodejs and Express to build the server.  
         </div>
         
         

         </div>
   
    );
}
 
export default Member4;
