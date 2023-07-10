import React, { useEffect } from 'react'
import ProductsList from '../productsList/ProductsLists'
import ProductInfo from '../productInfo/productInfo'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../Redux/productSlice'

const ProductsContainer = () => {
    const dispatch = useDispatch()
    const { pending, productList, productInfo } = useSelector( state => state.products)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    return (
        <div className='products-container'>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<ProductsList  pending={pending} dispatch={dispatch} productList={productList} />} />
                    <Route path='/Product' element={<ProductInfo productInfo={productInfo} />} />
                </Routes>
            </div>
        </div>
    )
}

export default ProductsContainer