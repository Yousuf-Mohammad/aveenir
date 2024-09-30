"use client"
import React from 'react'
import "./Client.css"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {Autoplay} from 'swiper/modules';

import map from "@/public/651d3247b7d7fac81152b4eb_client geography.svg"
import kajolDhara from "@/public/Kajoldhara.png"
import move  from "@/public/Move.png"
const Client = () => {
  return (
    <div>
        
        <div id="clientMap">
            <h1 id='mapHeading'>Our Clients Around the globe</h1>
            <Image src={map} alt="Map" id="mapImg" />
        </div>

        <div id="clientScroller">

          {/* placeholder for scroller */}

              <div id="clientScrollerPlaceholder">
              <Swiper
        slidesPerView={4}
        spaceBetween={1}
      
        // freeMode={true}
        loop={true}
        loopFillGroupWithBlank={false}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={kajolDhara} alt="logo" width={150} /></SwiperSlide>
        <SwiperSlide><Image src={move} alt="logo" width={150} /></SwiperSlide>
        <SwiperSlide><Image src={kajolDhara} alt="logo" width={150} /></SwiperSlide>
        <SwiperSlide><Image src={move} alt="logo" width={150} /></SwiperSlide>
        <SwiperSlide><Image src={kajolDhara} alt="logo" width={150} /></SwiperSlide>
        <SwiperSlide><Image src={move} alt="logo" width={150} /></SwiperSlide>
        <SwiperSlide><Image src={kajolDhara} alt="logo" width={150} /></SwiperSlide>
        <SwiperSlide><Image src={move} alt="logo" width={150} /></SwiperSlide>
        <SwiperSlide><Image src={kajolDhara} alt="logo" width={150} /></SwiperSlide>
        <SwiperSlide><Image src={move} alt="logo" width={150} /></SwiperSlide>
        
             </Swiper>
                
              
              </div>

       

        </div>

    </div>
  )
}

export default Client