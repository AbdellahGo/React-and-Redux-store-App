import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <div className='home-content'>
                    <img src='Images/home_x4.jpg' alt='img'/>
                    <div className='text'>
                        <h2>Your one-stop shop for everything</h2>
                        <p>Find the lowest prices on all your favorite products at our online store. We offer a wide variety of products, including clothes, electronics, home goods, and more. Plus, we always have attractive discounts and promotions available</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home