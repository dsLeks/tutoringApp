import React from 'react';
// Import picture from src/components/pictures folder, follow this format to upload your own picture
// div className shows how to add your picture to the page
import Picture from '../pictures/william.png'
import '../About.css'

const Member4 = () => {
    return (
       <div className="container">
         <div>
         <h1 >William Lushbough</h1>
 
         <div className="about-info">
            GitHub ID: lushbough
            <br/> <br/>
            I am the Github Master for Team 7 and a front-end developer. It's my senior year at SFSU. I'm scheduled to graduate December 2021. 
            I'll be using VS Code as my IDE and will be primarily handling the Github repository through Gitbash Terminal and the Github website.
         </div>
         
         <div className="about-picture">
            <img src={Picture} />
         </div>

         </div>
       </div>
    );
}
 
export default Member4;
