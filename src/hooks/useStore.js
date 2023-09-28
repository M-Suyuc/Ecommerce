import { DeleteProduct, clearCart, getCartTotal, toggleCartQty } from '../features/cartSlice'
import { fetchCategory, fetchProductOfCategory } from '../features/categorySlice'
import { fetchProducts, fetchSingleProduct } from '../features/productSlice'
import { useDispatch } from 'react-redux'
import { fetchSearchProduct } from '../features/searchSlice'

export function useStore () {
  const dispatch = useDispatch()

  const fetchAllProducts = () => dispatch(fetchProducts())

  const fetchProductsByCategory = ({ category }) => dispatch(fetchProductOfCategory(category))
  const fetchAllCategories = () => dispatch(fetchCategory())

  const getTotalCart = () => dispatch(getCartTotal())
  const clearProductsCart = () => dispatch(clearCart())

  const deleteProduct = ({ id }) => dispatch(DeleteProduct(id))
  const toggleProductQty = ({ id, option }) => dispatch(toggleCartQty({ id, option }))

  const fetchOnlyProduct = ({ id }) => dispatch(fetchSingleProduct(id))

  const fetchSearchProducts = ({ search }) => dispatch(fetchSearchProduct(search))

  return {
    fetchAllProducts,
    fetchProductsByCategory,
    fetchAllCategories,
    getTotalCart,
    clearProductsCart,
    deleteProduct,
    toggleProductQty,
    fetchOnlyProduct,
    fetchSearchProducts
  }
}
