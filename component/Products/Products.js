import React from 'react'
import "./Products.css"

import erp from "@/public/erp1.png"
import Image from 'next/image'
// import Product from './Product/Product'
const Products = () => {
  return (
    <div id='products'>
        {/* <Product/> */}
        <h1 id='ourProducts'> Our Products</h1>
        <div id='productsContainer'>
          <div id='product'>
            <h2>ERP Systems</h2>
            <Image src={erp} alt="erp image" id='productImg' width={400} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere delectus animi incidunt neque quibusdam, magnam omnis ullam optio odit.</p>
          </div>
          <div id='product'>
            <h2>ERP Systems</h2>
            <Image src={erp} alt="erp image" id='productImg' width={400} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere delectus animi incidunt neque quibusdam, magnam omnis ullam optio odit.</p>
          </div>
          <div id='product'>
            <h2>ERP Systems</h2>
            <Image src={erp} alt="erp image" id='productImg' width={400} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere delectus animi incidunt neque quibusdam, magnam omnis ullam optio odit.</p>
          </div>
          <div id='product'>
            <h2>ERP Systems</h2>
            <Image src={erp} alt="erp image" id='productImg' width={400} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere delectus animi incidunt neque quibusdam, magnam omnis ullam optio odit.</p>
          </div>
          <div id='product'>
            <h2>ERP Systems</h2>
            <Image src={erp} alt="erp image" id='productImg' width={400} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere delectus animi incidunt neque quibusdam, magnam omnis ullam optio odit.</p>
          </div>
        </div>
    </div>
  )
}

export default Products