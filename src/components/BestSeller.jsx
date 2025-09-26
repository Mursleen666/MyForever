import React, { useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
//import { products } from '../assets/assets'
import Title from './Title'
import { useContext } from 'react'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])
    useEffect(()=>{
        const bestProduct = products.filter((items)=>(items.bestSeller))
        setBestSeller(bestProduct.slice(0,5))
    },[products])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={"BEST"} text2={"SELLERS"}></Title>
        <p className='w-3/4 m-auto mb-14 text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi provident blanditiis delectus magni explicabo vel id quidem quam quibusdam aspernatur sunt nostrum, quae, adipisci, iure non fugiat dolor minus fugit.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
              bestSeller.map((item, index)=>(
                <ProductItem key={index} id={item._id}  slug={item.slug} name={item.name} image={item.image} price={item.price} />
              ))
        }
      
      </div>
    </div>
  )
}

export default BestSeller
