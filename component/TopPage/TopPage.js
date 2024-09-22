import React from 'react'
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

        {/* <h1>Aveenir</h1> */}
    </div>  

  </div>
    
  )
}

export default TopPage