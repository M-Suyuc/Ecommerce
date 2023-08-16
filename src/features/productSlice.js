import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/apiURL'
import { STATUS } from '../utils/status'

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  singleProduct: [],
  singleProductStatus: STATUS.IDLE,
  error: null
}

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsStatus = STATUS.LOADING
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCEEDED
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAILED
        // state.error = action.error.message;
      })

    //   ---------------------------------------

      .addCase(fetchSingleProduct.pending, (state) => {
        state.singleProductStatus = STATUS.LOADING
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload
        state.singleProductStatus = STATUS.SUCCEEDED
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.singleProductStatus = STATUS.FAILED
        state.error = action.error.message
      })
  }
})

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch(`${BASE_URL}products`)
  const data = await response.json()
  return data.products
}
)

export const fetchSingleProduct = createAsyncThunk('singleProduct/singleProduct', async (id) => {
  const response = await fetch(`${BASE_URL}products/${id}`)
  const data = await response.json()
  return data
}
)

export default productsSlice.reducer
