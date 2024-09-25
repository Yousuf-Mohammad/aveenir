import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div>
        <div id='contactContainer'>
            <div id='message'>
                <form id='form' onSubmit={(e)=>{
                    e.preventDefault();
                    alert("Thank you for your message")
                }}>
                    <h1>Let's Talk</h1>
                    <input className='input ' type="text" placeholder='Your Name' />
                    <input  className='input 'type="email" placeholder='Your Email Address' />
                    <textarea className='input ' placeholder='Your Thoughts'></textarea>
                    <input id='submit' type="submit" />
                </form>
            </div>
            <div id='address'>
            
            </div>

        </div>
    </div>
  )
}

export default Contact