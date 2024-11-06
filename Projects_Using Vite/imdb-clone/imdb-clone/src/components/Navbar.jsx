import React from 'react'
import logo from '../movieLogo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-2'>
        <img className='w-[35px]' src={logo} alt="movieLogo" srcset="" />
        <Link to="/" className='text-blue-500 text-3xl font-bold'>Movies</Link>
        <Link to="/watchlist" className='text-blue-500 text-3xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar