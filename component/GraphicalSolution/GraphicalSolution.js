import Image from 'next/image'
import React from 'react'
import "./GraphicalSolution.css"
import image1 from '@/public/Branding - French Bakery - UI & Print Design.jpg'
import image2 from '@/public/pos1.jpg'
const GraphicalSolution = () => {
  return (
    <div id="graphicsContainer">
      <div id="logo">
        <Image src={image2} alt="image" id="logoImage" />
        <Image src={image2} alt="image" id="logoImage" />      
        <Image src={image2} alt="image" id="logoImage" />      
        <Image src={image2} alt="image" id="logoImage" />      
        <Image src={image2} alt="image" id="logoImage" />      
        <Image src={image2} alt="image" id="logoImage" />      
        <Image src={image2} alt="image" id="logoImage" />      
        <Image src={image2} alt="image" id="logoImage" />      
      </div>
      <div id='dynamic'>
        <video id='dynamicContent'  autoPlay muted loop src="/3255275-hd_1280_720_25fps.mp4" ></video>
        <video id='dynamicContent' autoPlay muted loop src="/3255275-hd_1280_720_25fps.mp4" ></video>
        <video id='dynamicContent' autoPlay muted loop src="/3255275-hd_1280_720_25fps.mp4" ></video>
        <video id='dynamicContent' autoPlay muted loop src="/3255275-hd_1280_720_25fps.mp4" ></video>
        <video id='dynamicContent' autoPlay muted loop src="/3255275-hd_1280_720_25fps.mp4" ></video>
        <video id='dynamicContent' autoPlay muted loop src="/3255275-hd_1280_720_25fps.mp4" ></video>
        <video id='dynamicContent' autoPlay muted loop src="/3255275-hd_1280_720_25fps.mp4" ></video>

      </div>
      <div id="static">
        <Image src={image1} alt="image" id="staticImage" />
        <Image src={image2} alt="image" id="staticImage" />
        <Image src={image1} alt="image" id="staticImage" />
        <Image src={image2} alt="image" id="staticImage" />
        <Image src={image1} alt="image" id="staticImage" />
        <Image src={image2} alt="image" id="staticImage" />
        <Image src={image1} alt="image" id="staticImage" />
        <Image src={image2} alt="image" id="staticImage" />
        <Image src={image1} alt="image" id="staticImage" />
        <Image src={image2} alt="image" id="staticImage" />
        <Image src={image1} alt="image" id="staticImage" />
        <Image src={image2} alt="image" id="staticImage" />
        
      </div>
      
      
    </div>
  )
}

export default GraphicalSolution