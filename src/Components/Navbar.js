import React, { useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export function Navbar(){  
    const [menu, setMenu] = useState("home");
    const menuRef = useState();

    const openMenu = () =>{
        menuRef.current.style.display="block";
    }

    const closeMenu = () =>{
        menuRef.current.style.display="none";
    }

    return(
        <>
            <div className='navbar'>
                <h1>Vignesh</h1>
                <img onClick={openMenu} src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png" className='menu-open' alt='..'/>
                <ul ref={menuRef} className='nav-menu'>
                    <img onClick={closeMenu} src="https://img.icons8.com/sf-black-filled/512w/EBEBEB/x.png" className='menu-close' alt='..'/>
                    <AnchorLink className='link' href='#home'><p onClick={() => setMenu("home")}>Home</p>{menu==="home"? <hr/> :<></> }</AnchorLink> 
                    <AnchorLink className='link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About me</p>{menu==="about"? <hr/> :<></> }</AnchorLink>
                    <AnchorLink className='link' offset={50} href='#projects'><p onClick={() => setMenu("projects")}>Projects</p>{menu==="projects"? <hr/> :<></> }</AnchorLink>
                    <AnchorLink className='link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p>{menu==="contact"? <hr/> :<></> }</AnchorLink>
                </ul>
            </div>
            <hr/>
        </>
    )
}