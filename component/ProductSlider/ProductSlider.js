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
            <p className='productPara'>Enterprise Resource Planning (ERP) software is a comprehensive solution designed to streamline and integrate core business processes across an organization. By unifying functions such as finance, supply chain, human resources, and operations, ERP systems provide real-time data, enhance decision-making, and improve efficiency. Ideal for businesses of all sizes, ERP software helps automate workflows, reduce operational costs, and ensure seamless collaboration between departments, driving overall business growth and productivity.</p>
        </SwiperSlide>
        <SwiperSlide className='productSlider'>
            <Image src={image2} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> POS SOFTWARE</h1>
            <p className='productPara'>Point of Sale (POS) software is a powerful tool that streamlines sales transactions and manages essential business operations. Designed for retail and hospitality industries, POS systems enable businesses to process payments, track inventory, and manage customer data in real-time. With features like sales reporting, employee management, and integration with accounting systems, POS software enhances efficiency, improves customer service, and provides valuable insights to help businesses grow and make informed decisions.</p>
        </SwiperSlide>
        <SwiperSlide className='productSlider'>
            <Image src={image3} alt= "product image" className='productImg'  />
            <h1 className='productHeading'>Location based Software</h1>
            <p className='productPara'>Location-based software leverages geographic data to deliver tailored services and solutions based on a user`&apos`s or asset`&apos`s real-time location. Ideal for industries like logistics, retail, and transportation, this software enhances tracking, navigation, and customer engagement. It enables businesses to optimize delivery routes, monitor fleet movements, and deliver personalized marketing based on proximity. By providing actionable insights, location-based software improves operational efficiency and drives data-driven decision-making for enhanced business outcomes.</p>
        </SwiperSlide>
        <SwiperSlide className='productSlider'>
            <Image src={image4} alt= "product image" className='productImg'  />
            <h1 className='productHeading'>Hospital Management</h1>
            <p className='productPara'>Hospital Management Software is a comprehensive solution designed to streamline and automate the administrative, clinical, and financial operations of healthcare facilities. It integrates patient records, appointment scheduling, billing, inventory management, and more into a single platform. This software enhances patient care by improving data accuracy, reducing paperwork, and optimizing resource allocation. Ideal for hospitals and clinics, it helps improve efficiency, ensure regulatory compliance, and deliver better healthcare outcomes through seamless coordination.</p>
        </SwiperSlide>
        <SwiperSlide className='productSlider'>
            <Image src={image5} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> E-Commerce Software</h1>
            <p className='productPara'>E-commerce software is a powerful platform designed to help businesses manage their online stores and transactions seamlessly. It enables companies to build and customize websites, manage product catalogs, process payments, and handle inventory. With features like order tracking, customer management, and marketing tools, e-commerce software enhances the shopping experience, improves operational efficiency, and drives sales. Ideal for businesses of all sizes, it supports scalable growth and offers robust analytics for informed decision-making.</p>
        </SwiperSlide>
        
          
      </Swiper>
    </div>
  )
}

export default ProductSlider