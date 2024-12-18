import React from 'react';
import './Home.css';
import Profile from '../assets/Profile.jpg'


export function Home (){

    return(
        <>
            <div id='home' className='home'>
                <img src={Profile} alt='not found'/>
            </div>
            <div className='content'>
                <div className='home-para'>
                    <h1><span>I am Vignesh,</span> python fullstack developer</h1>
                    <p>I am a python fullstack developer building dynamic 
                        web applications using Python and MySQL for backend development, 
                        and React, HTML, CSS and JavaScript for front-end solutions.</p>
                </div>
                <button className='resume'><a href='https://drive.google.com/file/d/1b-pV8TuJsCkmSO019jSkrunaso-jef4_/view?usp=drivesdk'>My Resume</a></button>
            </div>
        </>
    )
}