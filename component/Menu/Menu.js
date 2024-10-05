"use client"
import React from 'react'
import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'
import "./Menu.css"

import logo from "@/public/logo-removebg-preview (1).png"
import logoWhite from "@/public/aveenir-white.png"

// const menuLinks=[
//     {path:"/", label:"Home"},
//     {path:"/", label:"Work"},
//     {path:"/", label:"About"},
//     {path:"/", label:"Contact"},
// ]
const Menu = () => {
    // const container = useRef();
    const [isMenuOpen , setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
    <div className='menuContainer' >
        {/* visible on initial load */}
        {isMenuOpen? <div className="menuOverlay">
            <div className="menuOverlayBar">
                <div >
                    <Link href="/"><Image src={logo} alt="Company Logo" className='menuLogoImg' /></Link>
                </div>
                <div className="menuClose">
                <i className="ri-close-line" onClick={toggleMenu}></i>
                </div>
                
            </div>
            <div className='menuLinks'>
                    {/* {
                        menuLinks.forEach((link)=>{
                            return (
                                <Link key={link.path} href={link.path} className="menuLink">{link.label}</Link>
                                // console.log(link.label)
                            )
                        })
                    } */}

                    <Link href="/" className="menuLink" onClick={toggleMenu}>Home</Link>
                    <Link href="/services"  onClick={toggleMenu}className="menuLink">Services</Link>
                    <Link href="/about" onClick={toggleMenu} className="menuLink">About</Link>
                    <Link href="/contact" onClick={toggleMenu} className="menuLink">Contact</Link>
                    <Link href="/ourWorks"   onClick={toggleMenu}className="menuLink">Our Works</Link>
                    <Link href="/Packages"  onClick={toggleMenu} className="menuLink incomplete">Packages</Link>
            </div>
            <div id='socials'>
                <h1>Find Us On</h1>
                <div id='socialIcons'>
                <Link href="/"><i className="ri-facebook-circle-fill"></i></Link>
                <Link href="/"><i className="ri-twitter-fill"></i></Link>
                <Link href="/"><i className="ri-instagram-fill"></i></Link>
                <Link href="/"><i className="ri-linkedin-box-fill"></i></Link>
                </div>
            </div>
        </div>:<div className="menuBar">
            <div className="menuLogo">
            <Link href="/"><Image src={logoWhite} alt="Company Logo" className='menuLogoImg' /></Link>
            </div>
            <div className="menuOpen">
                <i className="ri-menu-3-fill" onClick={toggleMenu}></i>
            </div>
        </div>}
        

        
        

       
        
    </div>
  )
}

export default Menu