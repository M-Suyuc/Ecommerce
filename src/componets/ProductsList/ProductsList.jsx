import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS } from '../../utils/status'
import { ListOfProducts } from '../ListOfProducts/ListOfProducts'
import { fetchCategory, fetchProductOfCategory } from '../../features/categorySlice'
import { fetchProducts } from '../../features/productSlice'

const ProductsList = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.product.products)
  const categoriProducts = useSelector((state) => state.category.categoryProducts)
  const categories = useSelector((state) => state.category.categories)
  const status = useSelector((state) => state.category.categoryProductsStatus)
  const error = useSelector((state) => state.product.error)
  const [nameCategoria, setNameCategoria] = useState(undefined)

  useEffect(() => {
    dispatch(fetchProducts()) // obtiene todos los productos sin importar la categoria (los productos mostrados)
    // console.log('fetchProducts')
  }, [])

  useEffect(() => {
    dispatch(fetchProductOfCategory(nameCategoria)) // obtiene todos los productos por las categoria
    // console.log('fetchProductOfCategory')
  }, [nameCategoria])

  useEffect(() => {
    dispatch(fetchCategory()) // obtiene todas las categorias
    // console.log('fetchCategory')
  }, [])

  const products = nameCategoria === undefined ? allProducts : categoriProducts

  return (
    < >
      <div id='contenido' className='shadow-md bg-white mb-6 py-2 px-8 text-zinc-500 text-lg font-semibold border-l-[10px] border-shade-500 capitalize'>{nameCategoria === undefined ? 'All products' : `${nameCategoria.replace('-', ' ')}`}</div>
      <div className='md:flex md:gap-2'>

        <aside className='hidden md:block h-screen lg:h-[70vh] bg-white min-w-[180px] overflow-y-auto overflow-x-hidden border border-slate-300'>
          <h4 className='text-lg lg:text-2xl font-bold  border-b border-solid py-3 text-left px-2'>Categorias</h4>
          {categories.map((category, index) => (
            <ul key={index} className=''>
              <li className='cursor-pointer border-b border-solid hover:translate-x-2 transition ease-out '>
                <button
                  onClick={() => setNameCategoria(categories[index])}
                  className='py-2  capitalize w-full h-full inline-block text-left px-2'
                >{category.replace('-', ' ')}
                </button>
              </li>
            </ul>
          ))}
        </aside>

        <div>
          {status === STATUS.LOADING && <div className='text-center text-4xl font-bold'>Loading...</div>}
          {status === STATUS.FAILED && <div>{error}</div>}
          <ListOfProducts products={products} />
        </div>
      </div>
    </>
  )
}
export default ProductsList
