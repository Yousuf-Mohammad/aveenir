"use client"
import React from 'react'
import {useState, useRef} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'
import "./Menu.css"

import logo from "@/public/logo.png"

// const menuLinks=[
//     {path:"/", label:"Home"},
//     {path:"/", label:"Work"},
//     {path:"/", label:"About"},
//     {path:"/", label:"Contact"},
// ]
const menu = () => {
    const container = useRef();
    const [isMenuOpen , setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <div className='menuContainer' ref={container}>
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

                    <Link href="/" className="menuLink">Home</Link>
                    <Link href="/" className="menuLink">Work</Link>
                    <Link href="/" className="menuLink">About</Link>
                    <Link href="/" className="menuLink">Contact</Link>
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
            <Link href="/"><Image src={logo} alt="Company Logo" width={80} /></Link>
            </div>
            <div className="menuOpen">
                <i className="ri-menu-3-fill" onClick={toggleMenu}></i>
            </div>
        </div>}
        

        
        {/* overlayed menu appeared on click EVENT */}

       
        
    </div>
  )
}

export default menu