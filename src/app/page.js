import ProductCard from '@/components/ProductCard'
import { fetchInfo } from '@/libs/getProducts'

export default async function Home() {

  

  const data =  await fetchInfo()
  return (<div className='grid grid-cols-3'>
    {data.products.map((product) =>  (<ProductCard product={product}/>))}
  </div>)
}
