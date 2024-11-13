import React from 'react'
import "./Team.scss"
import Image from 'next/image'
import Link from 'next/link'

import image from "@/public/client(1).jpg"
const Team = () => {
  return (
    <div id='teamContainer'>
        <div id='teamImgContainer'>
        <div className="tag-list">
        <div className="loop-slider" style={{"--duration":"19260ms","--direction":"normal"}} >  
        <div className="inner">
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
      
        
      {/* duplicated content */}
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
      
        
        </div>
      </div>
        <div className="loop-slider" style={{"--duration":"19260ms","--direction":"reverse"}} >  
        <div className="inner">
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
      
        
      {/* duplicated content */}
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
      
        
        </div>
      </div>
        <div className="loop-slider" style={{"--duration":"19260ms","--direction":"normal"}} >  
        <div className="inner">
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
      
        
      {/* duplicated content */}
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
            <div className="tag"><Image src={image} alt="image" className="teamImg" width={2000}  /></div>
      
        
        </div>
      </div>


       <div class="fade"></div>
       </div>
   
        </div>
        <div id='teamTextContainer'>
            <h1 id='teamHeading'>Meet The Team</h1>
            <p id='teamText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fugiat voluptates. Non, doloremque? Quod, reprehenderit. Quisquam, quia. Quisquam, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fugiat voluptates. Non, doloremque? Quod, reprehenderit. Quisquam, quia. Quisquam, quia.</p> 

            <p id='teamText'>
            fugiat voluptates. Non, doloremque? Quod, reprehenderit. Quisquam, quia. Quisquam, quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fugiat voluptates. Non, doloremque? Quod, reprehenderit. Quisquam, quia. Quisquam, quia.
            </p>
            <Link href="/ourTeam "><h3 id='teamButton'>See All</h3></Link>
        </div>
    </div>
  )
}

export default Team