import { Facebook, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[9vh] flex flex-row justify-between items-center border-t-2 border-primary fixed bottom-0 bg-white px-4'>
      <div className='h-full flex items-center text-xl font-bold'>
        © ai 2024
      </div>
      <div className='h-full flex items-center text-xl font-bold'>
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
          <Facebook className='h-6 w-6'/>
        </a>
        <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='mx-2'>
          <Twitter className='h-6 w-6'/>
        </a>
      </div>
    </div>
  )
}

export default Footer
