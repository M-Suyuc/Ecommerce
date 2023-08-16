import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import productsReducer from '../features/productSlice'
import categoryReducer from '../features/categorySlice'
import searchReducer from '../features/searchSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productsReducer,
    category: categoryReducer,
    search: searchReducer,
    singleProduct: productsReducer
  }
})
