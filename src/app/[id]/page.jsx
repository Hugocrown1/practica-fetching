import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const getProduct = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  if(!response.ok) throw new Error('No se pudo adquirir el dato')

  return response.json()
}



const page = async ({params: {id}}) => {

  const {title, thumbnail, description, price, stock, brand, rating, discountPercentage, category} = await getProduct(id)
  
  
  
  return (
    <section className='p-4'>
      <Link href={'/'} className='bg-blue-600 p-2 rounded-md'>Regresar</Link>

      <h1 className='text-5xl text-center mb-4 '>{title}</h1>
      
        <div className='flex flex-row space-x-2'>
          <img className='rounded-md'  src={thumbnail}/>
          <div className='flex flex-col'>
            <p className='text-2xl'>{description}</p>
            <p>Precio: $ <span>{price}</span></p>
            <p>Descuento: {discountPercentage} %</p>
            <p>Inventario: {stock}</p>
            <p>Marca: {brand}</p>
            <p>Categoria: {category}</p>
            <p>Calificación: {rating}/5</p>
          </div>

        </div>
     
      
    </section>
  )
}

export default page