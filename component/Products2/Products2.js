import React from 'react'
import "./Products2.css"

import Image from 'next/image'

import image1 from "@/public/erp1.png"
import image2 from "@/public/pos-sytem.webp"
import image3 from "@/public/locationbasedsharingsystem.webp"
import image4 from "@/public/hospital.webp"
import image5 from "@/public/ecommerce.jpg"
import image6 from "@/public/school-management-system.webp"

const Products2 = () => {
  return (
    <div className='mx-auto'>
    <h1 id='heading' >Our Products</h1>
    <div id='productGrid'>
        <div id='productContainer'>
        <Image src={image1} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> ERP SOFTWARE</h1>
            <p className='productPara'>Enterprise Resource Planning (ERP) software is a comprehensive solution designed to streamline and integrate core business processes across an organization.</p>
        </div>
        <div id='productContainer'>
        <Image src={image2} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> ERP SOFTWARE</h1>
            <p className='productPara'>Enterprise Resource Planning (ERP) software is a comprehensive solution designed to streamline and integrate core business processes across an organization.</p>
        </div>
        <div id='productContainer'>
        <Image src={image3} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> ERP SOFTWARE</h1>
            <p className='productPara'>Enterprise Resource Planning (ERP) software is a comprehensive solution designed to streamline and integrate core business processes across an organization.</p>
        </div>
        <div id='productContainer'>
        <Image src={image4} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> ERP SOFTWARE</h1>
            <p className='productPara'>Enterprise Resource Planning (ERP) software is a comprehensive solution designed to streamline and integrate core business processes across an organization.</p>
        </div>
        <div id='productContainer'>
        <Image src={image5} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> ERP SOFTWARE</h1>
            <p className='productPara'>Enterprise Resource Planning (ERP) software is a comprehensive solution designed to streamline and integrate core business processes across an organization.</p>
        </div>
        <div id='productContainer'>
        <Image src={image6} alt= "product image" className='productImg'  />
            <h1 className='productHeading'> ERP SOFTWARE</h1>
            <p className='productPara'>Enterprise Resource Planning (ERP) software is a comprehensive solution designed to streamline and integrate core business processes across an organization.</p>
        </div>
    </div>
    </div>
  )
}

export default Products2