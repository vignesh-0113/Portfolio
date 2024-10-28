import React from 'react';
import './Projects.css';

export function Projects(){

    return(
        <>
        <div id='projects' className='project-title'>
            <h1>Projects & Intership</h1>
        <div className='project-internship'>
            <div className='projects'>
                <div className='project1'>
                    <h3>1. ONLINE JOB PORTAL</h3>
                    <p><b>Technology used:</b> HTML, CSS, PHP and MySQL</p>
                    <p><b>Description:</b> Implemented for this online job portals are a valuable
                            resource for both job seekers and employers. They provide a way for
                            job seekers to find and apply for jobs, and for employers to post job
                            openings and find qualified candidates</p>
                </div>

                <div className='project2'>
                    <h3>2. E-COMMERCE WEBSITE</h3>
                    <p><b>Technology used:</b>React JS</p>
                    <p><b>Description:</b>  An e-commerce website is one that allows people to buy a
                            products over the internet rather than at a brick-and-mortar location.
                            Through an e-commerce website, a business can process orders, accept
                            payments, manage shipping and logistics, and provide customer
                            service. </p>
                    <p><b>Project Link:</b><a href='https://vignesh-0113.github.io/React-E-Commerce-Website/'> Get here---</a></p>
                </div>
            </div>

            <div className='internship'>

                <div className='intership1'>
                    <h3>1. Intership - 2022</h3>
                    <p><b>Role:</b> PHP and MySQL Training</p>
                    <p><b>Company Name:</b> Mugil Cloud</p>
                    <p><b>Duration:</b> 1 month</p>
                    <p><b>Certificate:</b><a href='https://drive.google.com/file/d/18nM4Zxl8Retwi4s5cK4DvANfw07RWKYl/view?usp=drivesdk'>Get here---</a></p>
                </div>

                <div className='intership2'>
                    <h3>2. Intership - 2024</h3>
                    <p><b>Role:</b> Web Developer Training</p>
                    <p><b>Company Name:</b> Aframe technologies</p>
                    <p><b>Duration:</b> 1 month</p>
                    <p><b>Certificate:</b><a href='https://drive.google.com/file/d/1QaRA7HJJVaAhz0uNPQ5Kis6vgNuRhEr1/view?usp=drivesdk'>Get here---</a></p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}