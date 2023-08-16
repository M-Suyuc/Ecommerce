import { Link } from 'react-router-dom'
import { Container } from '../componets/container/Cotainer'
import ProductsList from '../componets/ProductsList/ProductsList'
import imgHero from '../assets/hero4.webp'

const Home = () => {
  return (
    <Container>
      <section className='m-auto bg-slate-200 w-full min-h-[90vh] overflow-hidden  flex items-center  rounded-0 lg:rounded-lg md:px-10 pb-10 lg:pb-0 relative bg-cover  bg-[left_calc(-500px)_top_calc(0px)] sm:bg-left-top bg-no-repeat' style={{ backgroundImage: `url(${imgHero})` }}>
        <div className='w-[100%] md:w-[60%] lg:w-[55%] px-8 lg:px-0 backdrop-blur-[5px] sm:backdrop-blur-none py-10 bg-slate-500/20 sm:bg-transparent'>
          <h1 className='text-3xl md:text-4xl lg:text-4xl uppercase font-bold mb-4 text-shade-500'>
            Explore our incredible selection of products!
          </h1>
          <p className='mb-8 text-lg md:text-lg  md:text-zinc-700 w-[90%]'>
            In our store, you will find a wide variety of high-quality products at competitive prices. From cutting-edge electronics to elegant fashion and home goods, we have everything you need!
          </p>
          <Link
            to='/category/smartphones'
            className='bg-blue-600 rounded-md px-8 py-3 font-medium text-white hover:bg-blue-500'
          >
            Buy Now
          </Link>
        </div>
      </section>
      <main className='py-16  md:py-4 px-6 lg:px-0'>
        <ProductsList />
      </main>
    </Container>
  )
}

export default Home
