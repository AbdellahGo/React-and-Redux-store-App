import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='footer-content'>
                    <div className='info'>
                        <div>
                            <h3>About</h3>
                            <a>About Us</a>
                            <a>Contact Us</a>
                            <a>FAQ Page</a>
                        </div>
                        <div>
                            <h3>Media</h3>
                            <a href='https://www.facebook.com/profile.php?id=100053501469803'><i className="fa-brands fa-facebook-f"></i> facebook</a>
                            <a href='https://github.com/AbdellahGo'><i className="fa-brands fa-github"></i> github</a>
                            <a><i className="fa-brands fa-tiktok"></i> tiktok</a>
                        </div>
                        <div>
                            <h3>Contact</h3>
                            <p>Raffaele,6,20121 Milano</p>
                            <p>Monday to Friday: 9am to 8am</p>
                            <p>vaelod@gmail.com</p>
                        </div>
                    </div>
                    <div className='copywriter'>
                        <p>&copy; 2023 Abdullah. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer