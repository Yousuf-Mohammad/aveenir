import React from 'react'
import './Services.css'

import Image from 'next/image'
import Service1 from "@/public/digiMarket.jpg"
import Service2 from "@/public/graphicDesign.jpg"
import Service3 from "@/public/photoGraphy.jpg"
import Service4 from "@/public/development.jpg"
import Service5 from "@/public/vfx.gif"
import Service6 from "@/public/Mario_1-gif.gif"


const Services = () => {
  return (
    <div id='servicesContainer'>
        
        <div id='servicesImgContainer'>
            <Image src={Service1} alt="Services" id='services1Img'  />
            <Image src={Service2} alt="Services" id='services1Img' />
            <Image src={Service3} alt="Services" id='services1Img' />
            <Image src={Service4} alt="Services" id='services1Img' />
            <Image src={Service5} alt="Services" id='services1Img' />
            <Image src={Service6} alt="Services" id='services1Img' />
            
           
             
        </div>

        <div id='serviceText'>
            <h1>Services <br/> We Proudly Provide</h1>
            <ul>
                <li id='service1Heading'>Digital Marketing</li>
                <li id='service2Heading'>Mobile App Development</li>
                <li id='service3Heading'>Software Development</li>
                <li id='service4Heading'>Web Development</li>
                <li id='service5Heading'>Graphical Solution</li>
                <li id='service6Heading'>Photography & Video</li>
                <li id='service7Heading'>VFX & Animation</li>
            </ul>
        </div>
    </div>
  )
}

export default Services