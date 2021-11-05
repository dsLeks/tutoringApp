import React from 'react';
// Import picture from src/components/pictures folder, follow this format to upload your own picture
// div className shows how to add your picture to the page
import Picture from '../pictures/Rupak.jpg'
import '../About.css'

const Member3 = () => {
    return (
        <div className="about-member">
            <div className="about-picture">
                    <img src={Picture} className='a-img'/>
            </div>
            
            <div className="about-info">
                    <h1 >Rupak Khatri</h1>
                    GitHub ID: Rupakkhatri
                    <br/> <br/>
                    Undergraduate student at San francisco state University.<br/> Graduating this Fall. <br/>Working as a front end developer
                for this project.
            </div>

                

            </div>
        
    );
}

export default Member3;