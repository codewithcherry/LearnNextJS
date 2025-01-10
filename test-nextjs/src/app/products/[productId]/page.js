'use client';

import React from 'react'
import { use } from 'react';

const ProductView = ({params,searchParams}) => {
  const {productId}=use(params);
  const {lang}=use(searchParams);
  return (
    <div >
      <h1 className='text-2xl text-center font-bold'>product details page on dynamic page {productId} route</h1>
      <p className='text-xl text-center'>Page displays in {lang} language mode</p>
    </div>
  )
}

export default ProductView
