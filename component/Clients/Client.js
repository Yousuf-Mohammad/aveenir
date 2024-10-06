"use client"
import React from 'react'
import "./Client.css"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// import ClientReview from "@/component/ClientReview/ClientReview"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {Autoplay} from 'swiper/modules';


import image from "@/public/logos/clientsLogo .webp"
import image1 from "@/public/logos/clientsLogo (1).webp"
import image2 from "@/public/logos/clientsLogo (2).webp"
import image3 from "@/public/logos/clientsLogo (3).webp"
import image4 from "@/public/logos/clientsLogo (4).webp"
import image5 from "@/public/logos/clientsLogo (5).webp"
import image6 from "@/public/logos/clientsLogo (6).webp"
import image7 from "@/public/logos/clientsLogo (7).webp"
import image8 from "@/public/logos/clientsLogo (8).webp"
import image9 from "@/public/logos/clientsLogo (9).webp"
import image10 from "@/public/logos/clientsLogo (10).webp"
import image11 from "@/public/logos/clientsLogo (11).webp"
import image12 from "@/public/logos/clientsLogo (12).webp"
import image13 from "@/public/logos/clientsLogo (13).webp"
import image14 from "@/public/logos/clientsLogo (14).webp"
import image15 from "@/public/logos/clientsLogo (15).webp"
import image16 from "@/public/logos/clientsLogo (16).webp"
import image17 from "@/public/logos/clientsLogo (17).webp"
import image18 from "@/public/logos/clientsLogo (18).webp"
import image19 from "@/public/logos/clientsLogo (19).webp"
import image20 from "@/public/logos/clientsLogo (20).webp"
import image21 from "@/public/logos/clientsLogo (21).webp"
import image22 from "@/public/logos/clientsLogo (22).webp"
import map from "@/public/651d3247b7d7fac81152b4eb_client geography.svg"
const Client = () => {
  return (
    <div>
      <h1 id='mapHeading'>Our Clients Around the globe</h1>
      

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
style={{
  height: "100%",
}}>
<SwiperSlide><Image src={image} alt="logo"   width={150}    height={50}/></SwiperSlide>
<SwiperSlide><Image src={image1} alt="logo"  width={150}   height={50}/></SwiperSlide>
<SwiperSlide><Image src={image2} alt="logo"  width={150}   height={50}/></SwiperSlide>
<SwiperSlide><Image src={image3} alt="logo"  width={150}   height={50}/></SwiperSlide>
<SwiperSlide><Image src={image4} alt="logo"  width={150}   height={50}/></SwiperSlide>
<SwiperSlide><Image src={image5} alt="logo"  width={150}   height={50}/></SwiperSlide>
<SwiperSlide><Image src={image6} alt="logo"  width={150}   height={50}/></SwiperSlide>
<SwiperSlide><Image src={image7} alt="logo"  width={150}   height={50}/></SwiperSlide>
<SwiperSlide><Image src={image8} alt="logo"  width={150}   height={50}/></SwiperSlide>
<SwiperSlide><Image src={image9} alt="logo"  width={150}   height={50}/></SwiperSlide>
<SwiperSlide><Image src={image10} alt="logo" width={150}  height={50} /></SwiperSlide>
<SwiperSlide><Image src={image11} alt="logo" width={150}  height={50} /></SwiperSlide>
<SwiperSlide><Image src={image12} alt="logo" width={150}  height={50} /></SwiperSlide>
<SwiperSlide><Image src={image13} alt="logo" width={150}  height={50} /></SwiperSlide>
<SwiperSlide><Image src={image14} alt="logo" width={150}  height={50} /></SwiperSlide>
<SwiperSlide><Image src={image15} alt="logo" width={150}  height={50} /></SwiperSlide>
<SwiperSlide><Image src={image16} alt="logo" width={150}  height={50} /></SwiperSlide>
<SwiperSlide><Image src={image17} alt="logo" width={150}  height={50} /></SwiperSlide>
<SwiperSlide><Image src={image18} alt="logo" width={150}  height={50} /></SwiperSlide>
<SwiperSlide><Image src={image19} alt="logo" width={150}  height={50} /></SwiperSlide>
<SwiperSlide><Image src={image20} alt="logo" width={150}  height={50} /></SwiperSlide>
<SwiperSlide><Image src={image21} alt="logo" width={150}  height={50} /></SwiperSlide>
<SwiperSlide><Image src={image22} alt="logo" width={150}  height={50} /></SwiperSlide>



   </Swiper>
      
    
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
        
        {/* <div id="clientReview">
            <ClientReview/>
        </div> */}

    </div>
  )
}

export default Client