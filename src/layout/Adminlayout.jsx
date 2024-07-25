import Leftbar from '@/components/Admin/Leftbar'
import Topbar from '@/components/Admin/Topbar'
import Footer from '@/components/Web/Footer'
import Navbar from '@/components/Web/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Adminlayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-col overflow-y-auto'>
    <Leftbar/>
    <div className='h-screen w-1/4 flex justify-center items-center flex-col'>
<Topbar/>
<Outlet/>
    </div>
    </div>
  )
}

export default Adminlayout
