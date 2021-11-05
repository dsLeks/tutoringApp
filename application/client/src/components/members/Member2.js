import React from 'react';
// Import picture from src/components/pictures folder, follow this format to upload your own picture
// div className shows how to add your picture to the page
import Picture from '../pictures/Rui.JPG'
import './member.css'

const Member2 = () => {
    return (
        <div className="about-member">
            <div className="about-picture">
                    <img src={Picture} className='a-img'/>
                </div>
        
                

                <div className="about-info">
                    <h1 >Rui Qi Huang</h1>
                    GitHub ID: RuiQiHuang1832
                    <br/> <br/>
                    Hi! People call me Ben. I am the Front end developer of Team 7 hoping to graduate next semester
                    Spring 2022. This will be my first time working with Reactjs and building a web application
                    so I am hoping to learn as much as I can before I graduate!
                </div>
        </div>
    );
}

export default Member2;