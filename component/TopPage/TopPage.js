import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import "./TopPage.css"
const TopPage = () => {
  return (
    // <div id='videoContainer'>
    //     <video id='video' autoPlay muted loop  src="../../public/3255275-hd_1280_720_25fps.mp4"/>
    // </div>
  <div id='videoContainer'>
    <div>
      
    
    <video id='video' autoPlay muted loop src="/3255275-hd_1280_720_25fps.mp4" width={"100%"} height={"100%"}></video>
    </div>

    <div id='overlayText'>
      <h1>We Create Your
      <br/>
      <span>
        <TypeAnimation
        sequence={[
          'VFX & Animation', // Types 'One'
          2000, // Waits 1s
          'Photography & Videography', // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          'Software Development', // Deletes 'Two' and types 'Three'
          2000, // Waits 3s
          'Mobile App Development', // Deletes 'Three' and types 'Four'
          2000, // Waits 4s
          'Web Development', // Deletes 'Four' and types 'Five' again 
          2000, // Waits 5s
          'Digital Marketing', // Deletes 'Five' and types 'Six'
          2000, // Waits 6s
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ color: 'var(--accent)' }}
      />
      </span>
      <br/>
      Experience</h1>
       
    </div>  

  </div>
    
  )
}

export default TopPage