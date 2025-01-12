'use client';

import React from 'react'
import { use } from 'react';
import { useRouter ,redirect} from 'next/navigation';

const ProductView = ({params,searchParams}) => {
  const {productId}=use(params);
  const {lang}=use(searchParams);
  const router=useRouter();

  const handleOrder=()=>{
    console.log("placing the order");
    router.push('/')
  }

  if(productId>1000 || productId<0){
    redirect('/')
  }
  return (
    <div  className='mx-auto '>
      <h1 className='text-2xl text-center font-bold'>product details page on dynamic page {productId} route</h1>
      <p className='text-xl text-center'>Page displays in {lang} language mode</p>
      <button className='bg-green-300 mx-auto text-white text-md font-semibold p-2 m-2' onClick={handleOrder}>order</button>
    </div>
  )
}

export default ProductView
