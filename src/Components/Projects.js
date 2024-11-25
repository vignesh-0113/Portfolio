import React from 'react';
import './Projects.css';

export function Projects() {
    const handleLink = () => {
        window.location.href = 'https://vignesh-0113.github.io/React-E-Commerce-Website/';
    };

    const handleLinkEvent = () =>{
        window.location.href = 'https://vignesh-0113.github.io/Ticket-Booking/';
    };

    const handleDesign = () =>{
        window.location.href = 'https://vignesh-0113.github.io/Interior-Design-Website/';
    };

    const intern1 = () =>{
        window.location.href = 'https://drive.google.com/file/d/18nM4Zxl8Retwi4s5cK4DvANfw07RWKYl/view?usp=drivesdk';
    };

    const intern2 = () =>{
        window.location.href = 'https://drive.google.com/file/d/1QaRA7HJJVaAhz0uNPQ5Kis6vgNuRhEr1/view?usp=drivesdk';
    };

    const intern3 = () =>{
        window.location.href = 'https://drive.google.com/file/d/18nQN7JKY8PgzEKTER4sORHNEANyDpiph/view?usp=drivesdk';
    };

    const intern4 = () =>{
        window.location.href = 'https://drive.google.com/file/d/1NuKDgAHpv5PjK-MdjmtqHEb06Pj9ruay/view?usp=drivesdk';
    };

    return (
        <>
            <div id='projects' className='project-title'>
                <h1>Projects & Internship</h1>
                <div className='project-internship'>
                    <div className='projects'>
                        <div className='project1'>
                            <h3>1. ONLINE JOB PORTAL</h3>
                            <p><b>Technology used:</b> HTML, CSS, PHP and MySQL</p>
                            <p><b>Description:</b> Implemented for this online job portal, which is a valuable resource for both job seekers and employers. It allows job seekers to find and apply for jobs, and for employers to post job openings and find qualified candidates.</p>
                        </div>

                        <div className='project2'>
                            <h3>2. E-COMMERCE WEBSITE</h3>
                            <p><b>Technology used:</b> React JS</p>
                            <p><b>Description:</b> An e-commerce website that allows users to buy products over the internet, providing business functionalities such as order processing, payment acceptance, and customer service.</p>
                            <p><b>Project Link:</b>
                                <a href='https://vignesh-0113.github.io/React-E-Commerce-Website/'> Get here---</a>
                            </p>
                        </div>
                    </div>

                    <div className='internship'>
                        <div className='intership1'>
                            <h3>1. Internship - 2022</h3>
                            <p><b>Role:</b> PHP and MySQL Training</p>
                            <p><b>Company Name:</b> Mugil Cloud</p>
                            <p><b>Duration:</b> 1 month</p>
                            <p><b>Certificate:</b>
                                <a href='https://drive.google.com/file/d/18nM4Zxl8Retwi4s5cK4DvANfw07RWKYl/view?usp=drivesdk'>Get here---</a>
                            </p>
                        </div>

                        <div className='intership2'>
                            <h3>2. Internship - 2024</h3>
                            <p><b>Role:</b> Web Developer Training</p>
                            <p><b>Company Name:</b> Aframe technologies</p>
                            <p><b>Duration:</b> 1 month</p>
                            <p><b>Certificate:</b>
                                <a href='https://drive.google.com/file/d/1QaRA7HJJVaAhz0uNPQ5Kis6vgNuRhEr1/view?usp=drivesdk'>Get here---</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mywork'>
                <h1>My Work</h1>
                <div className='work'>
                    <div className="flip-card" onClick={handleLink}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2>E-COMMERCE WEBSITE</h2>
                            </div>
                            <div className="flip-card-back">
                                <img src='https://api.letsdiskuss.com/resources/static/asset/uploads/1722059644546-12_29_121584620onl.jpg' alt='Notfound' />
                                <h3>Technology Used: REACT JS</h3>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card" onClick={handleLinkEvent}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2>EVENTS TICKET BOOKING</h2>
                            </div>
                            <div className="flip-card-back">
                                <img src='https://cdn3.f-cdn.com/contestentries/1005995/24366795/5900d742b8360_thumbCard.jpg' alt='Notfound' />
                                <h3>Technology Used: REACT JS</h3>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card" onClick={handleDesign}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h2>INTERIOR DESIGN WEBSITE</h2>
                            </div>
                            <div className="flip-card-back">
                                <img src='https://hasthemes.com/blog/wp-content/uploads/2022/03/best-interior-design-website-templates.jpg' alt='Notfound' />
                                <h3>Technology Used: HTML, CSS and JS</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="certificates">
                    <h1>Certificates</h1>
                    <div className='cards'>
                        <div className='card' onClick={intern1}>
                            <h2>INTERNSHIP-2022</h2>
                            <h2>MUGIL CLOUD</h2>
                            <h3>(PHP and MySQL)</h3>
                        </div>

                        <div className='card' onClick={intern2}>
                            <h2>INTERNSHIP-2024</h2>
                            <h2>AFRAME TECHNOLOGIES</h2>
                            <h3>(Web Developer)</h3>
                        </div>

                        <div className='card' onClick={intern3}>
                            <h2>Skill Development Training</h2>
                            <h2>Naandhi Foundation</h2>
                        </div>

                        <div className='card' onClick={intern4}> 
                            <h2>Leadership Skill</h2>
                            <h2>JIT College</h2>
                            <h3>(Symposium Overall Coordinator)</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}