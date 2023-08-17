import Announcement from '@/components/announcement/Announcement'
import ClientLogos from '@/components/clientLogos/ClientLogos'
import Copyright from '@/components/copyright/Copyright'
import Footer from '@/components/footer/Footer'
import InfotechWeekly from '@/components/infotechWeekly/InfotechWeekly'
import Subscribe from '@/components/subscribe/Subscribe'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Announcement/> 
      <ClientLogos/>
      <InfotechWeekly/>
      <Subscribe/>
      <Footer/>
      <Copyright/>
    </main>
  )
}
