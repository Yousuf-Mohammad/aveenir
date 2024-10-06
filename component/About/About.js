"use client"
import React from 'react'
// import Image from 'next/image';
import "./About.css"
// import photo from "@/public/office2.jpeg"


const About = () => {
    return (
    <div id='about'>
        <div id='aboutImgContainer'>
            {/* <Image src={photo} alt="about image" id='aboutImg' /> */}
            <video id='aboutImg' autoPlay muted loop src="about us.mp4" width={"100%"} height={"100%"}></video>
            {/* https://wearenext.io/ */}
        </div>

        <div id='aboutTextContainer'>
            <h1>Who We are </h1>
            <h2>
            AVEENIR is a leading Information Technology firm, founded in 2012, dedicated to driving digital transformation in Bangladesh. Starting as a small team, AVEENIR has evolved into a global player, delivering innovative solutions to clients worldwide. With a focus on automation and digitalization, the company has successfully served clients across the UK, Germany, Australia, New Zealand, South Africa, Kenya, India, Pakistan, Turkey, Oman, and the UAE. AVEENIR&apos;s journey, marked by challenges and growth, has equipped its entrepreneurs with invaluable practical experience, solidifying their position as industry leaders.
            </h2>
        </div>

    </div>
  )
}

export default About