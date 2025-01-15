'use client';

import React, { useState } from 'react'

const Loginlayout = ({children}) => {

    const [input,setInput]=useState("");
    const handleInputChange=(e)=>{
        setInput(e.target.value);
    }
  return ( 
      <div
        className='bg-green-200 w-full m-2 p-4'
      >
        <header className="w-full m-1 p-4 text-3xl text-black bg-blue-200 text-center">
          <form>
            <input type="text" value={input}  onChange={handleInputChange}/>
          </form>
        </header>
        {children}
        <footer className="w-full m-1 p-4 text-2xl text-black bg-red-200 text-center">
          template footer
        </footer>
      </div>
  )
}

export default Loginlayout
