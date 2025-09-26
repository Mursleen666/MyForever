import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
   const [latestProduct, setLatestProduct] = useState([])

   useEffect(()=>{
    setLatestProduct(products.slice(0,10));
   },[products])

  return (
    <div className=' my-10'>
      <div className='py-8 text-3xl text-center'>
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className='m-auto mb-14 w-3/4 text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati voluptates tempora deserunt recusandae quia, sit dolores possimus consequatur asperiores aspernatur nostrum fugit blanditiis soluta porro consequuntur dolorem amet velit.</p>
      </div>
      <div className=' text-black grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProduct.map((item,index)=>(
                <ProductItem key={index} id={item._id}  slug={item.slug} image={item.image} name={item.name} price={item.price} />
            ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
