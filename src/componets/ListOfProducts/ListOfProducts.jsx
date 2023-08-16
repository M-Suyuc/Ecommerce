import { useNavigate } from 'react-router-dom'

export function ListOfProducts ({ products }) {
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <section className='min-h-screen pb-10'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <article className='h-[240px] lg:h-[250px] border border-solid border-zinc-300 shadow flex flex-col justify-between overflow-hidden gap-4 cursor-pointer relative' key={product.id} onClick={() => handleClick(product.id)}>
            <span className='absolute top-4 left-0 bg-shade-600 p-1 text-slate-100 font-medium text-sm px-2 '>{product.category.replace('-', ' ')}</span>
            <div className='h-[60%] w-full overflow-hidden'>
              <img src={product.images[0]} alt={product.title} className='w-full h-full object-contain' />
            </div>
            <div className='h-[40%] w-full p-1 text-center bg-slate-100'>
              <h5 className='text-sm'><span className='text-blue-600'>Marca:</span> {product.brand}</h5>
              <h4 className='w-full overflow-hidden h-6'>{product.title}</h4>
              <span className='text-shade-600 font-semibold bg-blue-600/5 px-2'>$ {product.price}.00</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
