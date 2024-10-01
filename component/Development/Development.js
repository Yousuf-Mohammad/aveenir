import React from 'react'
import "./Development.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import assets 

import image1 from "@/public/Finance App Dark Theme.jpg";
import image2 from "@/public/website1.jpg";
import image3 from "@/public/pos1.jpg";
import image4 from "@/public/pos2.jpg";
import image5 from "@/public/Magnetic UI Kit - Figma Resources.jpg";



// import required modules
import { Pagination, Navigation ,Autoplay} from 'swiper/modules';
import Image from 'next/image';
const Development = () => {
  return (
    <div name="Development" id='development'>
                <h1 id='developmentHeading'> Robust Software Developed by us</h1>
                <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={true}
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
        <SwiperSlide> <Image src={image5} alt="image1" id="image1"  className='swiperImage' /></SwiperSlide>
       
          </Swiper>

            </div>
  )
}

export default Development