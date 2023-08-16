import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../utils/status'
import { BASE_URL } from '../utils/apiURL'

const initialState = {
  searchProduct: [],
  searchProductStatus: STATUS.IDLE
}

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchProduct.pending, (state, action) => {
        state.searchProductStatus = STATUS.LOADING
      })
      .addCase(fetchSearchProduct.fulfilled, (state, action) => {
        state.searchProduct = action.payload
        state.searchProductStatus = STATUS.SUCCEEDED
      })
      .addCase(fetchSearchProduct.rejected, (state, action) => {
        state.error = action.error.message
        state.searchProductStatus = STATUS.FAILED
      })
  }
})

export const fetchSearchProduct = createAsyncThunk('searchProduct/fetch', async (productSearch) => {
  const response = await fetch(`${BASE_URL}products/search?q=${productSearch}`)
  const data = await response.json()
  return data.products
})

export default SearchSlice.reducer
