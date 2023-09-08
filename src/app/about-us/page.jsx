'use client'
import Announcement from '@/sections/announcement/Announcement'
import Copyright from '@/sections/copyright/Copyright'
import Footer from '@/sections/footer/Footer'
import Navbar from '@/sections/navbar/Navbar'
import React from 'react'
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

export const metadata = {
  title: 'Godrej Infotech - About Us',
  description: 'Godrej Infotech Private Limited',
}

const AboutUs = () => {
  return (
    <>
        <Cursor isGelly={true} />
        <Announcement/>
        <Navbar/>
            <div className='w-screen min-h-3/5 p-5'>
                About Us
            </div>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default AboutUs