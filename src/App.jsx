import { Outlet, RouterProvider, createHashRouter } from 'react-router-dom'
import Footer from './componets/sections/Footer/Footer'
import Navbar from './componets/sections/Navbar/Navbar'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import CartPage from './pages/CartPage'
import ProductSinglePage from './pages/ProductSinglePage'
import SearchProduct from './pages/SearchPage'

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/category/:category',
        element: <CategoryPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/product/:id',
        element: <ProductSinglePage />
      },
      {
        path: '/search/:search',
        element: <SearchProduct />
      }
    ]
  }
])

function App () {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
