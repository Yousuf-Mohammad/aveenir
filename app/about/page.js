import React from 'react'
import About from '@/component/About/About'
// import Contact from '@/component/Contact/Contact'
import "./page.css"
const about = () => {
  return (
    <div>
      <h1 style={{color:"transparent"}}> This is About Page </h1>
      <About />
      <div id='vision&Ex'>  
        {/* <div id='vision'> */}
          {/* <h1> Our Vision</h1>
          <p>Empowering resources through effective utilization in the ICT sector to lead the global market with a focus on productivity and sustainability. Our vision includes:</p>
          <ul>
            <li>Promoting technology adoption to enhance work efficiency.</li>
            <li>Empowering skilled IT professionals in the global IT industry.</li>
            <li>Delivering IT solutions while raising technological awareness among the public.</li>
            <li>Creating new opportunities in the IT sector for Bangladesh’s youth.</li>
            <li>Reducing technology misuse through education and awareness.</li>
            <li>Contributing to the development of aspiring youth through industry-specific training.</li>
          
          </ul>
        </div> */}
        <div id='exceptionality'>
        <h1>our Exceptionality</h1>
        <p>Our commitment is to deliver high-quality services and products with a focus on client satisfaction. This is reflected in our transparent communication with all stakeholders, including clients and employees. Our approach includes:</p>
        <ul>
          <li>Providing realistic solutions tailored to your needs, without over-promising or setting unachievable expectations.</li>
          <li>Offering fully customized IT solutions, leveraging the latest advancements in technology.</li>
          <li>Maintaining a team that is energetic, enthusiastic, realistic, and trustworthy.</li>
          <li>Devoted to achieving our vision with confidence and a client-centric approach.</li>
        </ul>
        
        </div>

      </div>
    </div>
  )
}

export default about