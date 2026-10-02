import React from 'react'

const Header = () => {
  return (
    <div className=' relative flex items-end bg-black w-full py-4 px-5  '>
      <h1 className='text-2xl  text-white font-bold' >Hello <br/> <span className='text-3xl text-white font-semibold'>Abhijeet</span> </h1>
      <button className='bg-red-500 text-lg text-white px-5 py-2 rounded-xl font-medium absolute bottom-2 right-5'>Logout</button>
      
    </div>
  )
}

export default Header
