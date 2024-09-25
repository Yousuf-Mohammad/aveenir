"use client"
import React from 'react'
import "./Client.css"
import Image from 'next/image'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination,  Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import map from "@/public/651d3247b7d7fac81152b4eb_client geography.svg"
// import kajolDhara from "@/public/Kajoldhara.png"
// import move  from "@/public/Move.png"
const Client = () => {
  return (
    <div>
        
        <div id="clientMap">
            <h1 id='mapHeading'>Our Clients Around the globe</h1>
            <Image src={map} alt="Map" />
        </div>
        <div id="clientScroller">

        {/* <Swiper
        
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            >

                <SwiperSlide>1</SwiperSlide>
            
            </Swiper> */}


        </div>

    </div>
  )
}

export default Client