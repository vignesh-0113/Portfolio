import React from 'react';
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


export function Contact(){

    return(
        <>
            <div id='contact' className='contact'>
            <h1>Let's talk</h1>
                <div className='contact-left'>
                    <p>I'm Currently available to working the corporate culture. my resume and skills are mentioned above the give detail.</p>
                    <div className='list'>
                        <ul>
                            <p><MdEmail /> vignesha0101@gmail.com</p>
                            <p><FaPhoneAlt />  +91-7695917831</p> 
                            <p><FaLinkedinIn />  www.linkedin.com/in/a-vignesh152002</p>
                            <p><FaGithub />  https://github.com/vignesh-0113</p>
                        </ul>
                    </div>
                    <div className='form'>
                    <form action='https://formsubmit.co/el/vignesha0101@gmail.com'>
                        <label>Name:</label>
                        <input type='text' name='Your name' /><br/>

                        <label>E-Mail:</label>
                        <input type='email' name='email' /><br/>
                                
                        <div className='text-area'>
                            <label>Contant:</label>
                            <textarea type='text' name='contant' cols='51' rows='6'/>
                        </div>
                    
                    <div className='button'>
                        <button type='submit'>Submit</button>
                    </div>
                    </form>
                    </div>
                </div>
                
            </div>
        </>
    )
}