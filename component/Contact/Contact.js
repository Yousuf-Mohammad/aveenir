'use client'
import React from 'react'
import "./Contact.css";
import 'remixicon/fonts/remixicon.css'
import Link from 'next/link';

// import Map from "@/component/Map/Map"    
const Contact = () => {
  return (
    <div>
        <div id='contactContainer'>
            <div id='message'>
                <form id='form' onSubmit={(e)=>{
                    e.preventDefault();
                    alert("Thank you for your message")
                }}>
                    <h1>Let&apos;s Talk</h1>
                    <input className='input ' type="text" placeholder='Your Name' />
                    <input  className='input 'type="email" placeholder='Your Email Address' />
                    <textarea className='input ' placeholder='Your Thoughts'></textarea>
                    <input id='submit' type="submit" />
                </form>
            </div>
            <div id='address'>
            <div id='mapContainer'>
                <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(aveenir)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                
                {/* <a href="https://www.gps.ie/">gps trackers
                </a> */}
            </iframe>
            </div>

            
            <h3> <i className="ri-map-pin-fill icon"> </i>84/1, Malek Tower, Road-3, Shopnodhara Housing Ltd.Bosila Road, Mohammadpur</h3>
            <h3><Link href="mailto:aveenirIT@gmail.com"> <i className="ri-mail-send-line icon"></i>aveenirIT@gmail.com</Link></h3>
            <h3><i className="ri-time-fill icon"></i>   Sunday-Thursday(10am-7pm)</h3>
            <h3><i className="ri-phone-fill icon"></i> +880 1955325537</h3>
            </div>
            

        </div>
    </div>
  )
}

export default Contact