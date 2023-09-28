import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function MobileNavigation () {
  const [navbar, setNavbar] = useState(false)
  const categories = useSelector((state) => state.category.categories)

  const handleClick = () => {
    setNavbar(!navbar)
  }

  return (
    <>
      <button
        className='inline-block lg:hidden'
        onClick={handleClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-7 h-7'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>

      <div className={navbar ? 'left-0 top-0 min-h-screen h-screen z-10 fixed bg-white overflow-y-auto overflow-x-hidden pb-8' : undefined}>
        <div className={
          navbar
            ? 'relative flex flex-col text-lg'
            : 'hidden'
        }
        >
          <header className='flex justify-around py-4 items-center bg-white z-10 sticky top-0 left-0 '>
            <h4 className='text-2xl font-medium'>Categorias</h4>
            {/* icon X */}
            <button onClick={handleClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-7 h-w-7'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </header>
          {categories.map((category, index) => (
            <ul key={index} className=''>
              <li className='cursor-pointer border-b border-solid hover:translate-x-2 transition ease-out pl-4'>
                <Link to={`category/${category}`} className='py-2 pr-12 capitalize w-full h-full inline-block'>{category.replace('-', ' ')}</Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}
