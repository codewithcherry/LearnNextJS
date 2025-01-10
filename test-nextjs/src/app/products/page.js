import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
    <div className='text-xl text-center font-semibold m-4 p-5'>
      <ul>ALL Products
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
        <li>Product 5</li>
        <li>Product 6</li>
        <Link href={'/products/7?lang=en'}>product 7</Link>
      </ul>      
    </div>
  )
}

export default Products
