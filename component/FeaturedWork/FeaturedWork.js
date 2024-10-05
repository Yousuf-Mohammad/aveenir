import React from 'react'
import "./FeaturedWork.css"
import Image from 'next/image'

import image1 from "@/public/Magnetic UI Kit - Figma Resources.jpg"
import image2 from "@/public/website1.jpg"
import image3 from "@/public/pos1.jpg"
import image4 from "@/public/social (1).jpg"
import image5 from "@/public/social (3).jpg"
import image6 from "@/public/download (1).jpg"
import image7 from "@/public/download.jpg"
import image8 from "@/public/wallet.jpg"
import Link from 'next/link'
const FeaturedWork = () => {
  return (
    <div id='featuredWorkContainer'>
        <h1 id='FeaturedWorkHeading'>Featured Work</h1>
        <div id='featuredWork'>
        <div id= "grid1">
              <div id="imageContainer1"><Image src={image4} alt="image" id="image" /></div>
              <div id="imageContainer2"><Image src={image7} alt="image5" id="image" /></div>
              <div id="imageContainer3"><Image src={image5} alt="image6" id="image" /></div>
              <div id="imageContainer4"><Image src={image8} alt="image7" id="image" /></div>
              <div id="imageContainer5"><Image src={image6} style={{height:"100%"}} alt="image8" id="image" /></div>
               {/* 
               
               
               
                */}
        </div>
        <div id= "grid2">
              <div id="imageContainer6"><Image src={image1} alt="image" id="image" /></div>
              <div id="imageContainer7"><Image src={image2} alt="image" id="image" /></div>
              <div id="imageContainer8"><Image src={image3} alt="image" id="image" /></div>
            
        </div>

        </div>
        <Link href="/ourWorks"><h3 id='seeMore'>See More</h3></Link>
    </div>
  )
}

export default FeaturedWork