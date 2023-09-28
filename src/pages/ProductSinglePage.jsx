import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { STATUS } from '../utils/status'
import { Container } from '../componets/container/Cotainer'
import { addCart } from '../features/cartSlice'
import { useStore } from '../hooks/useStore'

const ProductSinglePage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const singleProduct = useSelector((state) => state.singleProduct.singleProduct)
  const status = useSelector((state) => state.singleProduct.singleProductStatus)
  const error = useSelector((state) => state.singleProduct.error)

  const [qty, setQty] = useState(1)

  const { images, title, description, brand, price, rating, category } = singleProduct
  const [showMessage, setShowMessage] = useState(false)
  const { fetchOnlyProduct } = useStore()

  const Increment = () => {
    setQty((prevQty) => {
      const tempQty = prevQty + 1
      return tempQty
    })
  }

  const Decrement = () => {
    setQty((prevQty) => {
      let tempQty = prevQty - 1
      if (tempQty < 1) tempQty = 1
      return tempQty
    })
  }

  const handleAddCart = (singleProduct) => {
    setQty(1)
    const totalPrice = qty * singleProduct.price
    dispatch(addCart({ ...singleProduct, quantity: qty, totalPrice }))
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 600)
  }

  useEffect(() => {
    fetchOnlyProduct({ id })
  }, [id])

  function Message () {
    return (
      <div className='absolute w-full h-full grid place-items-center backdrop-blur-[10px]'>
        <h1 className='text-center text-2xl bg-shade-600 py-3 px-6 text-white font-medium'>Added to cart ✅</h1>
      </div>
    )
  }

  return (
    <Container>
      {/* <h1>{JSON.stringify(singleProduct, null, 2)}</h1> */}
      {status === STATUS.LOADING && <div className='text-center text-3xl font-bold'>Loading...</div>}
      {status === STATUS.FAILED && <div>{error}</div>}
      {showMessage && <Message />}

      <div className='min-h-[90vh]  bg-slate-50 grid md:grid-cols-2 overflow-hidden place-content-center pb-10 md:pb-0 md:gap-x-8 gap-y-0 px-8 lg:px-0'>
        <section className='h-[100%] w-full overflow-hidden'>
          <figure>
            <img src={images ? images[0] : ''} alt='' className='object-contain w-full aspect-[3/2] bottom-0' />
          </figure>
        </section>
        <section className='text-shade-500 pr-2 mt-8 md:mt-0'>
          <h4 className='text-3xl font-bold text-shade-500 mb-4'>{title}</h4>
          <p className='mb-2'>{description}</p>
          <div className='mb-2 flex gap-4'>
            <span className='text-shade-500 font-medium'>Rating <span className='text-slate-500 font-normal'>{rating}</span></span>|
            <span className='text-shade-500 font-medium'>Brand <span className='text-slate-500 font-normal'>{brand}</span></span>|
            <span className='text-shade-  font-medium'>Categoty <span className='text-slate-500 font-normal'>{category}</span></span>
          </div>
          <span className='mb-2 inline-block text-2xl font-bold text-shade-500'>$ {price}.00</span>
          <div>
            <div className='mb-4 flex gap-3 items-center'>
              <button className='font-semibold px-3 py-1 border border-slate-300 hover:bg-gray-300' onClick={Decrement}>-</button>
              <span className='font-semibold px-2'>{qty}</span>
              <button className='font-semibold px-3 py-1 border border-slate-300 hover:bg-gray-300' onClick={Increment}>+</button>
            </div>
            <div className='flex gap-4'>
              <button onClick={() => handleAddCart(singleProduct)} className='bg-shade-500 rounded-sm px-6 py-2 font-medium text-white hover:bg-white hover:bg-shade-500/90 border border-shade-500'>Add to Cart</button>
              <Link to='/' className='bg-white rounded-sm px-6 py-2 font-medium text-shade-500 border border-shade-500 hover:bg-shade-500/10'>Buy Now</Link>
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default ProductSinglePage
