import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/logo.svg'
import CoustomBtn from './CoustomBtn'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <div className="max-w-5xl mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className='flex items-center justify-center'>
          <Image src={logo} width={118} height={18} className='object-contain' alt='logo'/>
        </Link>
        <CoustomBtn
          title='Sign In'
          containerStyle='text-primary-blue rounded-full bg-white min-w-[130px]'
          btnType="button"
        />
      </div>
    </header>
  )
}

export default Navbar