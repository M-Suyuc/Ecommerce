import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../utils/status'
import { BASE_URL } from '../utils/apiURL'

const initialState = {
  categories: [],
  categoryStatus: STATUS.IDLE,
  categoryProducts: [],
  categoryProductsStatus: STATUS.IDLE
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state, action) => {
        state.categoryStatus = STATUS.LOADING
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categories = action.payload
        state.categoryStatus = STATUS.SUCCEEDED
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.error = action.error.message
        state.categoryStatus = STATUS.FAILED
      })

      .addCase(fetchProductOfCategory.pending, (state) => {
        state.categoryProductsStatus = STATUS.LOADING
      })
      .addCase(fetchProductOfCategory.fulfilled, (state, action) => {
        state.categoryProductsStatus = STATUS.SUCCEEDED
        state.categoryProducts = action.payload
      })
      .addCase(fetchProductOfCategory.rejected, (state, action) => {
        state.categoryProductsStatus = STATUS.FAILED
        state.error = action.error.message
      })
  }
})

export const fetchCategory = createAsyncThunk('categoriesed/fetch', async () => {
  const response = await fetch(`${BASE_URL}products/categories`)
  const data = await response.json()
  return data
})

export const fetchProductOfCategory = createAsyncThunk('category-products/fetch', async (nameCategoria) => {
  const response = await fetch(`${BASE_URL}products/category/${nameCategoria}`)
  const data = await response.json()
  return data.products
})

export default categorySlice.reducer
