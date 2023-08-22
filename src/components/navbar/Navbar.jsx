import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'Solutions',
      url: '/solutions'
    },
    {
      id: 3,
      title: 'Industry Focus',
      url: '/industry-focus'
    },
    {
      id: 4,
      title: 'About Us',
      url: '/about-us'
    },
    {
      id: 5,
      title: 'Careers',
      url: '/careers'
    },
    {
      id: 6,
      title: 'Insights',
      url: '/insights'
    },
    {
      id: 7,
      title: 'Contact Us',
      url: '/contact-us'
    },
  ]

  return (
    <header className='flex bg-transparent w-full absolute top-0 z-40 py-3 flex-row justify-between items-center px-5'>
      <Link href='/'>
        <Image src='/godrejLogoWhite.png' alt='godrej logo' width='125' height='45' />
      </Link>
      
      <Link className='sm:hidden' href='/'>
          <Icon path={mdiMenu} color='white' size={1} />
      </Link>
      
      <nav className='hidden sm:flex'>
        {links.map((link)=>{
           
          return <Link href={link.url} className='mr-3' key={link.id} >{link.title}</Link>

        })}
          </nav>
    </header>
  )
}

export default Navbar