import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {Autoplay} from 'swiper/modules';
import "./Stripe.css"
const Stripe = () => {
  return (
    <div>
    <div id="stripeContainer1">
        <div id="stripe">
        <Swiper
        slidesPerView={2}
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
        <SwiperSlide><h1 id='stripeText'>VFX&Animation</h1></SwiperSlide>
        <SwiperSlide><h1 id='stripeText'>Photography&Videography</h1></SwiperSlide>
        <SwiperSlide><h1 id='stripeText'>Software Development</h1></SwiperSlide>
        <SwiperSlide><h1 id='stripeText'>Mobile App Development</h1></SwiperSlide>
        <SwiperSlide><h1 id='stripeText'>Web Development</h1></SwiperSlide>
        <SwiperSlide><h1 id='stripeText'>Digital Marketing</h1></SwiperSlide>
      </Swiper>
        </div>
    </div>
    <div id="stripeContainer2">
    <Swiper
        slidesPerView={2}
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
        <SwiperSlide><h1 id="stripeText">VFX&Animation</h1></SwiperSlide>
        <SwiperSlide><h1 id="stripeText">Photography & Videography</h1></SwiperSlide>
        <SwiperSlide><h1 id="stripeText">Software Development</h1></SwiperSlide>
        <SwiperSlide><h1 id="stripeText">Mobile App Development</h1></SwiperSlide>
        <SwiperSlide><h1 id="stripeText">Web Development</h1></SwiperSlide>
        <SwiperSlide><h1 id="stripeText">Digital Marketing</h1></SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}

export default Stripe