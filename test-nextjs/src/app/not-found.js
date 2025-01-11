'use client';

import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {

  const router=useRouter();

  const handleHome=()=>{
    router.push('/')
  }
  return (
    <div>
      <h2>Page not found. try again later.</h2>
      <button onClick={handleHome}>Go to Home</button>
    </div>
  )
}

export default NotFound
