import React from 'react'
import "./ProductSlider.css"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from "@/public/erp1.png"

// Import Swiper styles
import 'swiper/css';
// 6
import {
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay,
  } from "swiper/modules";
const ProductSlider = () => {
  return (
    <div>
      <h1 id='ourProducts'>Our Products</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        // slidesPerView={4}
        spaceBetween={1}
      
        // freeMode={true}
        loop={true}
        loopFillGroupWithBlank={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='productSlider'>
            <Image src={image1} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> ERP SOFTWARE</h1>
            <p className='productPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
        </SwiperSlide>
        <SwiperSlide className='productSlider'>
            <Image src={image1} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> ERP SOFTWARE</h1>
            <p className='productPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
        </SwiperSlide>
        <SwiperSlide className='productSlider'>
            <Image src={image1} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> ERP SOFTWARE</h1>
            <p className='productPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
        </SwiperSlide>
        <SwiperSlide className='productSlider'>
            <Image src={image1} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> ERP SOFTWARE</h1>
            <p className='productPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
        </SwiperSlide>
       
          
      </Swiper>
    </div>
  )
}

export default ProductSlider