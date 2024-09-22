"use client"
import React from 'react'
import Image from 'next/image';
import "./About.css"


const About = () => {
    return (
    <div id='about'>
        <div id='aboutImgContainer'>
            {/* <Image src={photo} alt="about image" width={1000} height={1000} /> */}
            {/* https://wearenext.io/ */}
        </div>

        <div id='aboutTextContainer'>
            <h1>simply dummy text of the</h1>
            <h1>printing and typesetting industry.</h1>
            <h1>Lorem Ipsum has been the industrs</h1>
            <h1>standard dummy text ever since the 1500s,</h1>
            <h1>when an unknown printer took a galley of </h1>
            <h1>type and scrambled it to make </h1>
            <h1>a type specimen book. </h1>
            <h1>It has survived not only five centuries</h1>
            <h1>,but also the leap into electronic</h1>
            <h1>typesetting, remaining essentially unchanged</h1>
            <h1>.It was popularised in the 1960s</h1>
            <h1>with the release of Letraset sheets containing</h1>
            <h1>Lorem Ipsum passages, and more recently </h1>
            <h1>with desktop publishing software </h1>
            <h1>like Aldus PageMaker including </h1>
            <h1>versions of Lorem Ipsum.</h1>    
        </div>

    </div>
  )
}

export default About