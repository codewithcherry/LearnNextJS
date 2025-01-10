import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <h2>Page not found. try again later.</h2>
      <Link href={'/'}>Go to home</Link>
    </div>
  )
}

export default NotFound
