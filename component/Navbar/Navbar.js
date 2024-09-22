import Image from 'next/image'
import React from 'react'
import logo from "../../public/companyLogo-removebg-preview (1).png"
import Link from 'next/link'
import "./Navbar.css"

const navbar = () => {
  return (
    <nav id='navbar'>
    <div id='navContainer'>
        <div id='navimage'> 
        <Link href="/">   <Image src={logo} alt="Vercel Logo" width={150} /></Link>
     
        </div>
        <ul id='navlinks'>
            
            <li><Link href="/about">About Us</Link>
            </li>
            <li><Link href="/about">Services</Link>
            </li>
            <li><Link href="/about">Portfolio</Link>
            </li>
            <li><Link href="/about">Packages</Link>
            </li>

            <li><Link href="/about" id='letsTalk'>lets Talk</Link>
            </li>
            
        </ul>
        
    </div>
    </nav>
  )
}

export default navbar