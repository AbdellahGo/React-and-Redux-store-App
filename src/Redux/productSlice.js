import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllProducts = createAsyncThunk('product/getAllProducts', async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res = await axios.get('https://dummyjson.com/products?limit=80')
        return res.data.products
    } catch(error) {
        return rejectWithValue(error.message)
    }
})


export const getProduct = createAsyncThunk('product/getProduct', async (productId, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res = await axios.get(`https://dummyjson.com/products/${productId}`)
        return res.data
    } catch(error) {
        return rejectWithValue(error.message)
    }
})


export const getProductByCategory = createAsyncThunk('product/getProductByCategory', async (Category , thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res = await axios.get(`https://dummyjson.com/products/category/${Category}`)
        return res.data.products
    } catch(error) {
        return rejectWithValue(error.message)
    }
})

export const getProductByName = createAsyncThunk('product/getProductByName', async (productName , thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res = await axios.get(`https://dummyjson.com/products/search?q=${productName}`)
        return res.data.products
    } catch(error) {
        return rejectWithValue(error.message)
    }
})





const productSlice = createSlice({
    name: 'product',
    initialState: {
        productList: [],
        productInfo: {},
        pending: false,
        error: ''
    },

    extraReducers: {
        // getAllProducts
        [getAllProducts.pending]: (state) => {
            state.pending = true
            state.error = ''
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.pending = false
            state.productList = action.payload
        },
        [getAllProducts.rejected]: (state, action) => {
            state.pending = false
            state.error = action.payload
        },
        // getProduct
        [getProduct.fulfilled]: (state, action) => {
            state.productInfo = action.payload
        },
        [getProduct.rejected]: (state, action) => {
            state.error = action.payload
        },
        // getProductByCategory
        [getProductByCategory.pending]: (state) => {
            state.pending = true
            state.error = ''
        },
        [getProductByCategory.fulfilled]: (state, action) => {
            state.pending = false
            state.productList = action.payload
        },
        [getProductByCategory.rejected]: (state, action) => {
            state.pending = false
            state.error = action.payload
            state.productList = []
        },
        // getProductByName
        [getProductByName.pending]: (state) => {
            state.pending = true
            state.error = ''
        },
        [getProductByName.fulfilled]: (state, action) => {
            state.pending = false
            state.productList = action.payload
        },
        [getProductByName.rejected]: (state, action) => {
            state.pending = false
            state.error = action.payload
            state.productList = []
        },
    }
})


export default productSlice.reducer