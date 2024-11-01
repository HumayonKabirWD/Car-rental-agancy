import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.svg'
import { footerLinks } from '@/constants'
import Link from 'next/link'


const Fotter = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src={logo} alt='logo' width={118} height={18} className='object-contain'/>
          <p className='text-base text-gray-700'>Car Rent {year} <br /> All right reserved &copy;</p>
        </div>
      </div>
        <div className="footer__links pl-5">
          {footerLinks.map((link,i) =>(
            <div key={i} className="footer__link">
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item,i) =>(
                <Link 
                  key={i} 
                  href={item.url} 
                  className='text-gray-500'>
                    {item.title}
                  </Link>
              ))}
            </div>
          ))}
        </div>
      

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 gap-10">
        <p>&copy; {year} Car Rent All rights reserved</p>
        
          <div className="footer__copyrights-link">
            <Link href="/" className='text-gray-600 hover:text-black'>Privacy policy</Link>
            <Link href="/" className='text-gray-600 hover:text-black'>Terms of use</Link>
          </div>
      </div>
      
    </footer>
  )
}

export default Fotter