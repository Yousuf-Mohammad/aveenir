"use client"
import React from 'react'
import Image from 'next/image';
import "./About.css"
import photo from "@/public/office2.jpeg"


const About = () => {
    return (
    <div id='about'>
        <div id='aboutImgContainer'>
            <Image src={photo} alt="about image" id='aboutImg' />
            {/* https://wearenext.io/ */}
        </div>

        <div id='aboutTextContainer'>
            <h1>Who We are </h1>
            <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi temporibus quod obcaecati eveniet dolorum sint facere minima mollitia nobis ea inventore explicabo sapiente repudiandae illum adipisci eius doloribus suscipit impedit, fuga atque unde error? Odio repellendus totam, quas porro iusto aut, temporibus adipisci excepturi, cumque amet quisquam! Iure, vitae.
            </h2>
        </div>

    </div>
  )
}

export default About