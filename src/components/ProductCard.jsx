'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'


const ProductCard = ({product}) => {
  const router = useRouter()

  
  return (
    <div className='m-2' >
      <p>{product.title}</p> 
      <Image alt='product image' width={300} height={200} style={{width: 300, height: 200} } src={product.thumbnail}></Image> 
      <button onClick={() => router.push('/' + product.id)} className='bg-white text-black w-fit p-2 rounded-md'>Ver mas</button>

      
      </div>
  )
}

export default ProductCard