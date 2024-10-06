import React from 'react'
import "./Footer.css"
import 'remixicon/fonts/remixicon.css'
import Link from 'next/link'
const Footer = () => {
  return (
    <div id='footerContainer'>
      <p id='copyright'>© Aveenir 2024, All Rights Reserved</p>
    
     <div id='socials'>
     <p>Find Us On</p>
     <div id='socialIcons'>
     <Link href="/"><i className="ri-facebook-circle-fill"></i></Link>
     <Link href="/"><i className="ri-twitter-fill"></i></Link>
     <Link href="/"><i className="ri-instagram-fill"></i></Link>
     <Link href="/"><i className="ri-linkedin-box-fill"></i></Link>
     </div>
    </div>
 </div>
  )
}

export default Footer