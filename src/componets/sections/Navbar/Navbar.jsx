import { Link } from 'react-router-dom'
import { Container } from '../../container/Cotainer'
import { MobileNavigation } from './MobileNavigation'
import { SearchForm } from './SearchForm'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const products = useSelector((state) => state.cart.productList)

  const longProducts = products.reduce((acumulador, currentvalue) => {
    acumulador += currentvalue.quantity
    return acumulador
  }, 0)

  return (
    <header className=''>
      <Container>
        <nav className='py-3 md:py-4 px-6 lg:px-0 '>
          <div className='flex justify-between items-start'>
            <div className='flex items-end gap-[2px] grow lg:grow-0'>
              {/* menu de caltegotrias en mobile */}
              <MobileNavigation />
              {/* ------- */}
              <Link to='/' className='flex-grow inline-flex justify-center'>
                <div className=''>
                  <h1 className='text-xl lg:text-2xl font-bold bg-blue-600 text-white py-1 px-4 rounded-tl-2xl rounded-br-2xl'>MARLOS'TORE</h1>
                </div>
              </Link>
            </div>
            <div className='hidden lg:flex grow px-8'>
              <SearchForm />
            </div>

            <div className='inline-block py-[.40rem] relative'>
              <span className='absolute top-[-.30rem] right-[-1.3rem] bg-red-700 w-6 h-6 rounded-[100%] text-white font-medium text-sm inline-grid place-items-center'>{longProducts}</span>
              <Link to='/cart'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path d='M7.00488 7.99951V5.99951C7.00488 3.23809 9.24346 0.999512 12.0049 0.999512C14.7663 0.999512 17.0049 3.23809 17.0049 5.99951V7.99951H20.0049C20.5572 7.99951 21.0049 8.44723 21.0049 8.99951V20.9995C21.0049 21.5518 20.5572 21.9995 20.0049 21.9995H4.00488C3.4526 21.9995 3.00488 21.5518 3.00488 20.9995V8.99951C3.00488 8.44723 3.4526 7.99951 4.00488 7.99951H7.00488ZM7.00488 9.99951H5.00488V19.9995H19.0049V9.99951H17.0049V11.9995H15.0049V9.99951H9.00488V11.9995H7.00488V9.99951ZM9.00488 7.99951H15.0049V5.99951C15.0049 4.34266 13.6617 2.99951 12.0049 2.99951C10.348 2.99951 9.00488 4.34266 9.00488 5.99951V7.99951Z' fill='#000' /></svg>
              </Link>
            </div>
          </div>
        </nav>

        <div className='lg:hidden'>
          <SearchForm />
        </div>
      </Container>
    </header>
  )
}

export default Navbar
