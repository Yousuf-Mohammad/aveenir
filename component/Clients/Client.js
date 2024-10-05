"use client"
import React from 'react'
import "./Client.css"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import ClientReview from "@/component/ClientReview/ClientReview"
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
      <h1 id='mapHeading'>Our Clients Around the globe</h1>
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
        <div id="clientMap">
            
            <Image src={map} alt="Map" id="mapImg" />
        </div>

        

        <div id="clientNumber">
          <div className="number">
            <h1>15</h1>
            <p>Years Experience</p>
          </div>
          <div className="number">
            <h1>341</h1>
            <p>Completed Projects</p>
          </div>
          <div className="number">
            <h1>200+</h1>
            <p>Happy Clients</p>
          </div>
          <div className="number">
            <h1>6</h1>
            <p>Countries Served</p>
          </div>
         
        </div>
        
        <div id="clientReview">
            <ClientReview/>
        </div>

    </div>
  )
}

export default Client