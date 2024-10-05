import React from 'react'
import "./SocialMediaManagement.css"
import Image from 'next/image';



import image1 from "../../public/social (1).jpg";
import image2 from "../../public/social (2).jpg";
import image3 from "../../public/social (3).jpg";
import image4 from "../../public/social (4).jpg";

const SocialMediaManagement = () => {
  return (
    <div id='socialContainer'>
    <h1 id='socialHeading'>Social Media Management by us</h1>
    <div id="socialImageContainer">
      <Image src={image1} alt='image' className ="socialImg"  />
      <Image src={image2} alt='image' className ="socialImg" />
      <Image src={image3} alt='image' className ="socialImg" />
      <Image src={image4} alt='image' className ="socialImg" />
      <Image src={image1} alt='image' className ="socialImg"  />
      <Image src={image2} alt='image' className ="socialImg" />
      <Image src={image3} alt='image' className ="socialImg" />
      <Image src={image4} alt='image' className ="socialImg" />
    </div>

</div>
  )
}

export default SocialMediaManagement