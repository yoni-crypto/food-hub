import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" style={{width:"50px"}}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illum perferendis eligendi maxime in excepturi blanditiis vel nihil voluptatibus ut sequi a consequuntur, voluptates provident voluptatum quia, autem ipsum veritatis.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.telegram_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+251-9-22-10-52-34</li>
                    <li>yonidisu111@gmail.com</li>
                </ul>
            </div>
        </div>
    <hr />
    <p className='footer-copyright'>Copyright 2024 &copy; Foodhub.com - All rights Reserved.</p>
    </div>
  )
}

export default Footer
