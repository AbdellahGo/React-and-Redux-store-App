import React from 'react'
import './ProductsLists.css'
import { Link, useNavigate } from 'react-router-dom'
import { getProduct } from '../../Redux/productSlice';

const ProductsList = ({ productList, dispatch, pending }) => {
    const navigate = useNavigate()

    const getProductInfo = (id) => {
        dispatch(getProduct(id))
        setTimeout(() => navigate('/Product'), 1000)
    }
    const allProducts = productList.map((product) => {
        const finalePrice = product.price - (product.price * (product.discountPercentage / 100))
        return (
            <div className='product-item' key={product.id}>
                <p>{product.category}</p>
                <h3 className="title">{product.title}</h3>
                <img src={product.images[0]} alt="Product Image" />
                <p className='before'>${product.price}</p>
                <div>
                    <p className='after'>${finalePrice.toFixed(2)}</p>
                    <a onClick={() => getProductInfo(product.id)}>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>
            </div>
        )
    })

    return (
        <div className='products'>
            {pending
                ? <div className='pending'></div>
                : (allProducts.length === 0 ? <p className='no-product'>No product were found</p> : (
                    <div className='products-list'>
                        {allProducts}
                    </div>
                )
                )
            }
        </div>
    )
}

export default ProductsList















{/* <div className='product-item'>
                <p>smartphones</p>
                <h3 className="title">iPhone X</h3>
                <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product Image" />
                <p className='before'>$916</p>
                <div>
                    <p className='after'>$899</p>
                    <Link to='Product'>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </div>
            </div>
            <div className='product-item'>
                <p>smartphones</p>
                <h3 className="title">iPhone X</h3>
                <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product Image" />
                <p className='before'>$916</p>
                <div>
                    <p className='after'>$899</p>
                    <Link to='Product'>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </div>
            </div>
            <div className='product-item'>
                <p>smartphones</p>
                <h3 className="title">iPhone X</h3>
                <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product Image" />
                <p className='before'>$916</p>
                <div>
                    <p className='after'>$899</p>
                    <Link to='Product'>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </div>
            </div>
            <div className='product-item'>
                <p>smartphones</p>
                <h3 className="title">iPhone X</h3>
                <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt="Product Image" />
                <div>
                    <p className='alone'>$899</p>
                    <Link to='Product'>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </div>
            </div> */}