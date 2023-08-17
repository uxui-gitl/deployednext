'use client'
import ACT from '@/components/ACT/ACT'
import Announcement from '@/components/announcement/Announcement'
import ClientLogos from '@/components/clientLogos/ClientLogos'
import Copyright from '@/components/copyright/Copyright'
import Footer from '@/components/footer/Footer'
import InfotechWeekly from '@/components/infotechWeekly/InfotechWeekly'
import Intro from '@/components/intro/Intro'
import Projects from '@/components/projects/Projects'
import Review from '@/components/review/Review'
import Robot from '@/components/robot/Robot'
import RobotDetails from '@/components/robotDetails/RobotDetails'
import Subscribe from '@/components/subscribe/Subscribe'
import Testimonial from '@/components/testimonial/Testimonial'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Announcement/> 
      <Intro/>
      <ClientLogos/>
      <ACT/>
      <Robot/>
      <Projects/>
      <Testimonial/>
      <Review/>
      <InfotechWeekly/>
      <Subscribe/>
      <Footer/>
      <Copyright/>
    </main>
  )
}
