import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

const Navbar = () => {
  const LinksData = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Login',
      link: '/login'
    },
    {
      title: 'Register',
      link: '/register'
    }
  ]

  return (
    <div className='w-full h-[9vh] flex flex-row justify-between items-center border-b-2 border-primary fixed top-0 bg-white z-50 px-4'>
      <div className='h-full flex items-center'>
        Logo
      </div>
      <div className='h-full flex items-center text-xl font-bold gap-10'>
        <ul className='flex flex-row gap-10'>
          {LinksData.map((data, index) => (
            <li key={index} className='list-none'>
              <NavLink to={data.link}>
                {data.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
