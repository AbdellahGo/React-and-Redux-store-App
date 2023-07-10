import React, { useRef } from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCategory, getProductByName } from '../../Redux/productSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const { error } = useSelector(state => state.products)
    const inputValue = useRef(null)
    const dispatch = useDispatch()

    const handelSubmit = (ev) => {
        ev.preventDefault()
        const value = inputValue.current.value
        dispatch(getProductByName(value))
        inputValue.current.value = ''
        setTimeout(() => navigate('/'), 1000)
    }
    const handelChange = (ev) => {
        dispatch(getProductByCategory(ev.target.value))
        setTimeout(() => navigate('/'), 1000)
    }


    return (
        <header>
            {error ? (
                <div className='error'>
                    {error}
                </div>
            ) : null}
            <div className='container'>
                <div className='header-content'>
                    <h1>AXflash Store</h1>
                    <div className='select-search'>
                        <select onChange={handelChange}>
                            <option value='smartphones'>smartphones</option>
                            <option value='laptops'>laptops</option>
                            <option value='fragrances'>fragrances</option>
                            <option value='skincare'>skincare</option>
                            <option value='groceries'>groceries</option>
                            <option value='home-decoration'>home-decoration</option>
                            <option value='furniture'>furniture</option>
                            <option value='tops'>tops</option>
                            <option value='womens-dresses'>womens-dresses</option>
                            <option value='womens-shoes'>womens-shoes</option>
                            <option value='mens-shirts'>mens-shirts</option>
                            <option value='mens-shoes'>mens-shoes</option>
                            <option value='mens-watches'>mens-watches</option>
                            <option value='womens-watches'>womens-watches</option>
                            <option value='womens-bags'>womens-bags</option>
                            <option value='womens-jewellery'>womens-jewellery</option>
                            <option value='sunglasses'>sunglasses</option>
                            <option value='automotive'>automotive</option>
                            <option value='motorcycle'>motorcycle</option>
                            <option value='lighting'>lighting</option>
                        </select>
                        <form onSubmit={handelSubmit}>
                            <input ref={inputValue} type='text' placeholder='search for your product ' />
                            <button type='submit' ><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div className='media'>
                        <a href='https://www.facebook.com/profile.php?id=100053501469803'><i className="fa-brands fa-facebook-f"></i></a>
                        <a href='https://github.com/AbdellahGo'><i className="fa-brands fa-github"></i></a>
                        <a><i className="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
