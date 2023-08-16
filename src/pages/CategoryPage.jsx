import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS } from '../utils/status'
import { fetchProductOfCategory } from '../features/categorySlice'
import { useParams } from 'react-router-dom'
import { ListOfProducts } from '../componets/ListOfProducts/ListOfProducts'
import { Container } from '../componets/container/Cotainer'

const CategoryPage = () => {
  const dispatch = useDispatch()
  const { category } = useParams()
  const products = useSelector((state) => state.category.categoryProducts)
  const status = useSelector((state) => state.category.categoryProductsStatus)

  useEffect(() => {
    dispatch(fetchProductOfCategory(category))
  }, [category])

  return (
    <Container>
      <div className='shadow-md bg-white mb-6 py-2 px-8 text-zinc-500 text-lg font-semibold border-l-[10px] border-shade-500 capitalize'>{category.replace('-', ' ')}</div>
      {status === STATUS.LOADING && <div className='text-center text-3xl font-bold'>Loading...</div>}
      <ListOfProducts products={products} />
    </Container>
  )
}
export default CategoryPage
