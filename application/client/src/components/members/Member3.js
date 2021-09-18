import React from 'react';
// Import picture from src/components/pictures folder, follow this format to upload your own picture
// div className shows how to add your picture to the page
import Picture from '../pictures/Rupak.jpg'
import '../About.css'

const Member3 = () => {
    return (
        <div className="container">
            <div>
                <h1 >Rupak Khatri</h1>

                <div className="about-info">
                    GitHub ID: Rupakkhatri
                    <br/> <br/>
                    Undergraduate student at San francisco state University. Graduating this Fall. Working as a front end developer
                    for this project. 
                    
                </div>

                <div className="about-picture">
                    <img src={Picture} />
                </div>

            </div>
        </div>
    );
}

export default Member3;