import React from 'react';
import './About.css';
import Profile from '../assets/profile.png'

export function About(){
    return(
        <>
            <div id='about' className='about'>
                <h1>About me</h1>
                <div className='about-section'>
                <div className='left'>
                    <img src={Profile} alt='not fount....'/>
                </div>
                <div className='right'>
                    <p>Enthusiastic and motivated Computer Science graduate with a
                        solid foundation in full stack development. Proficient in building
                        dynamic web applications using Python and MySQL for back
                        end development, and React, HTML, CSS and JavaScript for
                        front-end solutions. Eager to contribute to team projects and
                        deliver innovative software solutions in a collaborative
                        environment.</p>
                    <p>Frontend technologies used HTML,CSS,JavaScript.
                        Databases like SQL Functions, Commands, Joins,
                        Views, Sub queries, Constraints. 
                        Python Basic concepts like operator, datatype,
                        control flow and OOPS concepts.</p>

                    <div className='about-skills'><p>HTML & CSS</p> <hr style={{width:"80%"}}/></div>
                    <div className='about-skills'><p>JavaScript</p> <hr style={{width:"50%"}}/></div>
                    <div className='about-skills'><p>React JS</p> <hr style={{width:"70%"}}/></div>
                    <div className='about-skills'><p>Python</p> <hr style={{width:"60%"}}/></div>
                    <div className='about-skills'><p>MySQL</p> <hr style={{width:"70%"}}/></div>
                </div>
                </div>
            </div>
        </>
    )
}