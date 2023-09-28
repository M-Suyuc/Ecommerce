import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { STATUS } from '../../utils/status'
import { ListOfProducts } from '../ListOfProducts/ListOfProducts'
import { useStore } from '../../hooks/useStore'

const ProductsList = () => {
  const allProducts = useSelector((state) => state.product.products)
  const categoriProducts = useSelector((state) => state.category.categoryProducts)
  const categories = useSelector((state) => state.category.categories)
  const status = useSelector((state) => state.category.categoryProductsStatus)
  const error = useSelector((state) => state.product.error)

  const { fetchAllProducts, fetchAllCategories, fetchProductsByCategory } = useStore()

  const [category, setCategory] = useState()

  useEffect(() => {
    fetchAllProducts()
    fetchAllCategories()
  }, [])

  useEffect(() => {
    fetchProductsByCategory({ category })
  }, [category])

  const products = category === undefined ? allProducts : categoriProducts

  const tempProducts = []
  if (products.length > 0) {
    for (const i in products) {
      let randomIndex = Math.floor(Math.random() * products.length)

      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length)
      }
      tempProducts[i] = products[randomIndex]
    }
  }

  return (
    <>
      <div className='shadow-md bg-white mb-6 py-2 px-8 text-zinc-500 text-lg font-semibold border-l-[10px] border-shade-500 capitalize'>{category === undefined ? 'All products' : `${category.replace('-', ' ')}`}</div>
      <div className='md:flex md:gap-2'>

        <aside className='hidden md:block h-screen lg:h-[70vh] bg-white min-w-[180px] overflow-y-auto overflow-x-hidden border border-slate-300'>
          <h4 className='text-lg lg:text-2xl font-bold  border-b border-solid py-3 text-left px-2'>Categorias</h4>
          {categories.map((category, index) => (
            <ul key={index} className=''>
              <li className='cursor-pointer border-b border-solid hover:translate-x-2 transition ease-out '>
                <button
                  onClick={() => setCategory(categories[index])}
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
          <ListOfProducts products={tempProducts} />
        </div>
      </div>
    </>
  )
}
export default ProductsList
