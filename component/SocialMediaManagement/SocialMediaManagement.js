import React from 'react'
import "./SocialMediaManagement.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';
import Image from 'next/image';



import image1 from "../../public/social (1).jpg";
import image2 from "../../public/social (2).jpg";
import image3 from "../../public/social (3).jpg";
import image4 from "../../public/social (4).jpg";

const SocialMediaManagement = () => {
  return (
    <div name="Development" id='development'>
    <h1 id='developmentHeading'>Social Media Management by us</h1>
    <Swiper
slidesPerView={1}
spaceBetween={30}
loop={true}
autoplay={{
  delay: 1500,
  disableOnInteraction: false,
}}
loopFillGroupWithBlank={false}
pagination={{
clickable: true,
}}
navigation={true}
modules={[Pagination, Navigation ,Autoplay]}
className="mySwiper developmentSwiper"
>
<SwiperSlide> <Image src={image1}  alt="image1" id="image1" className='swiperImage'  /></SwiperSlide>
<SwiperSlide> <Image src={image2} alt="image1" id="image1"  className='swiperImage' /></SwiperSlide>
<SwiperSlide> <Image src={image3} alt="image1" id="image1"  className='swiperImage' /></SwiperSlide>
<SwiperSlide> <Image src={image4} alt="image1" id="image1"  className='swiperImage' /></SwiperSlide>

</Swiper>

</div>
  )
}

export default SocialMediaManagement