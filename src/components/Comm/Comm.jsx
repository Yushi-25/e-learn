import React from 'react'
import './Comm.css'
import { assets } from '../../assets/assets'

const Comm = () => {
  return (
    <div className='contact'>
      <div className="heading">
        <h1>Contact Us</h1>
        <span>Get in Touch</span>
        </div>
      <div className="info">
        <p>
            We'd love if you reach out to us. Even if it's just to say "Hey!". Don't hesitate! Drop me a line and we'll get back to you asap
        </p>
      </div>
     
      <div className="form">
        <form>
            <label>Name</label>
            <input type="text" placeholder='Your Name'required/>
            <label>E-mail</label>
            <input type="text" placeholder='Your E-mail' required/>
            <label>Message</label>
            <input type="text" placeholder='Message for us'required/>
        </form>
      </div>
     
    </div>
  )
}

export default Comm
