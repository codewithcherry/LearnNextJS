import React from 'react'

const Loginlayout = ({children}) => {
  return ( 
      <div
        className='bg-green-200 w-full m-2 p-4'
      >
        <header className="w-full m-1 p-4 text-3xl text-black bg-blue-200 text-center">
          Login Header
        </header>
        {children}
        <footer className="w-full m-1 p-4 text-2xl text-black bg-red-200 text-center">
          Login Footer
        </footer>
      </div>
  )
}

export default Loginlayout
