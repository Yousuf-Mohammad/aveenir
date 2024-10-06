import React from 'react'
import "./ProductSlider.css"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from "@/public/erp1.png"
import image2 from "@/public/pos-sytem.webp"
import image3 from "@/public/locationbasedsharingsystem.webp"
import image4 from "@/public/hospital.webp"
import image5 from "@/public/ecommerce.webp"

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
        className="mySwiper productSwiper mx-auto" 
      >
        <SwiperSlide className='productSlider'>
            <Image src={image1} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> ERP SOFTWARE</h1>
            <p className='productPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
        </SwiperSlide>
        <SwiperSlide className='productSlider'>
            <Image src={image2} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> POS SOFTWARE</h1>
            <p className='productPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
        </SwiperSlide>
        <SwiperSlide className='productSlider'>
            <Image src={image3} alt= "product image" className='productImg'  />
            <h1 className='productHeading'>Location based Software</h1>
            <p className='productPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
        </SwiperSlide>
        <SwiperSlide className='productSlider'>
            <Image src={image4} alt= "product image" className='productImg'  />
            <h1 className='productHeading'>Hospital Management</h1>
            <p className='productPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
        </SwiperSlide>
        <SwiperSlide className='productSlider'>
            <Image src={image5} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> E-Commerce Software</h1>
            <p className='productPara'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
        </SwiperSlide>
        
          
      </Swiper>
    </div>
  )
}

export default ProductSlider