import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav className='w-full h-[80px] flex justify-evenly items-center bg-blue-200 text-red-500'>
        <ul className='w-full h-[80px] flex justify-evenly items-center'>
          <Link to={'/home'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
        </ul>
      </nav>

      <Outlet/>
    </div>
  )
}

export default App
