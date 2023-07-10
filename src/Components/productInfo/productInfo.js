import React from 'react'
import './ProductInfo.css'
import { Link } from 'react-router-dom'
const ProductInfo = ({ productInfo }) => {
  const finalePrice = productInfo.price - (productInfo.price * (productInfo.discountPercentage / 100))
  const ratingNum = productInfo.rating
  const ratingIcon = []
  for (let i = 0; i < Math.round(ratingNum); i++) {
    ratingIcon.push(<i className="fa-solid fa-star-half-stroke"></i>)
    console.log(ratingIcon);
  }
  return (
    <div className='product'>
      {
        Object.keys(productInfo).length !== 0 ? (
          <React.Fragment>
            <div className='product-image'>
              <img src={productInfo.images[0]} />
            </div>
            <div className='product-info'>
              <p className='category'>{productInfo.category}</p>
              <h3>{productInfo.title}</h3>
              <div className='rating'>
                {ratingIcon.map((item, i) => <i key={i} className="fa-solid fa-star"></i>)}
              </div>
              <p className='stock'>Availability: <span>{productInfo.stock}</span></p>
              <p className='description'>{productInfo.description}</p>
              <div className='price'>
                <p className='after'>${finalePrice.toFixed(2)}</p>
                <p className='before'>${productInfo.price}</p>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <div className='no-product'>
            <p>No products were found</p>
            <Link to='/'>back to home</Link>
          </div>
        )
      }
    </div >
  )
}

export default ProductInfo


