import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function SearchForm () {
  const navigate = useNavigate()
  const categories = useSelector((state) => state.category.categories)
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search === '') {
      return null
    }
    navigate(`search/${search}`)
    setSearch('')
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    setSearch(newQuery)
  }

  return (
    <div className='w-full px-6 lg:px-0'>
      <form onSubmit={handleSubmit} className='relative rounded-lg border border-gray-300 overflow-hidden w-full'>
        <input placeholder='laptop, phone, bag, watch...' className='inline-block outline-none pl-2 pr-24 lg:pr-72 py-[.40rem] w-full' onChange={handleChange} value={search} />
        <button className='absolute top-0 right-0 flex items-center px-2 bg-blue-600 h-full'>
          <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-search' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#fff' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <circle cx='10' cy='10' r='7' />
            <line x1='21' y1='21' x2='15' y2='15' />
          </svg>
        </button>
      </form>
      {/* --------------------------Categorias debajo del formulario-------------- */}
      <div className='hidden lg:flex gap-5 mt-2'>
        {categories.slice(0, 6).map((category, index) => (
          <ul key={index} className='flex flex-row'>
            <li className='cursor-pointer'>
              <Link to={`category/${category}`} className='capitalize text-shade-500 font-light'>{category.replace('-', ' ')}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}
