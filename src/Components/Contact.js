import React from 'react';
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form = useRef();

  function submit() {
    alert("Send Successfully");
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_picz2om', 'template_srb0t7l', form.current, {
        publicKey: 'HqZAVrYyGdHP8mCnp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
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
                    <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="from_name" />
                    <label>Email</label>
                    <input type="email" name="from_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <div className='submit'>
                    <input type="submit" value="Send" onClick={submit} />
                    </div>
                    </form>
                    </div>  
            </div>
    </div>
  );
};