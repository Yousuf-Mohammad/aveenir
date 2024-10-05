import Image from 'next/image'
import React from 'react'
import "./ClientReview.scss"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {Autoplay} from 'swiper/modules'; 

import image1 from "@/public/client(1).jpg"
const ClientReview = () => {
  return (
    <div >
        <Swiper
        slidesPerView={3}
        spaceBetween={1}

        // freeMode={true}
        loop={true}
        loopFillGroupWithBlank={false}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
        }}
        pagination={{
        clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        style={{height:"100%" ,margin:"auto" ,}}
        >
        <SwiperSlide style={{height:"100%",paddingTop:"10vw" ,paddingBottom:"10vw"}}>
        <div className="testimonial" >
	<span className="open quote">“</span>
	<div className="image">
		<div className="clip"></div>
		<Image src={image1} width={100} height={100} />
	</div>
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, earum! Sunt aut consectetur deserunt perspiciatis provident fugiat pariatur assumenda quo similique at inventore tempore, consequuntur praesentium. Animi recusandae saepe architecto?</p>
	<div className="source">		
		<span>Omuk Ali</span>
	</div>
	<span className="close quote">”</span>
        </div>

        </SwiperSlide>
        <SwiperSlide style={{height:"100%",paddingTop:"10vw" ,paddingBottom:"10vw"}}>
        <div className="testimonial" >
	<span className="open quote">“</span>
	<div className="image">
		<div className="clip"></div>
		<Image src={image1} width={100} height={100} />
	</div>
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, earum! Sunt aut consectetur deserunt perspiciatis provident fugiat pariatur assumenda quo similique at inventore tempore, consequuntur praesentium. Animi recusandae saepe architecto?</p>
	<div className="source">		
		<span>Omuk Ali</span>
	</div>
	<span className="close quote">”</span>
        </div>

        </SwiperSlide>
        <SwiperSlide style={{height:"100%",paddingTop:"10vw" ,paddingBottom:"10vw"}}>
        <div className="testimonial" >
	<span className="open quote">“</span>
	<div className="image">
		<div className="clip"></div>
		<Image src={image1} width={100} height={100} />
	</div>
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, earum! Sunt aut consectetur deserunt perspiciatis provident fugiat pariatur assumenda quo similique at inventore tempore, consequuntur praesentium. Animi recusandae saepe architecto?</p>
	<div className="source">		
		<span>Omuk Ali</span>
	</div>
	<span className="close quote">”</span>
        </div>

        </SwiperSlide>
        <SwiperSlide style={{height:"100%",paddingTop:"10vw" ,paddingBottom:"10vw"}}>
        <div className="testimonial" >
	<span className="open quote">“</span>
	<div className="image">
		<div className="clip"></div>
		<Image src={image1} width={100} height={100} />
	</div>
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, earum! Sunt aut consectetur deserunt perspiciatis provident fugiat pariatur assumenda quo similique at inventore tempore, consequuntur praesentium. Animi recusandae saepe architecto?</p>
	<div className="source">		
		<span>Omuk Ali</span>
	</div>
	<span className="close quote">”</span>
        </div>

        </SwiperSlide>
        
        
        
        
        </Swiper>


        
    </div>
  ) 
}

export default ClientReview