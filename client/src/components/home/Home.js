import './home.css'
import Landing from './landing/Landing'
import About from './about/About'
import UpcomingClass from './upcoming_class/UpcomingClass'
import WhyUs from './why_us/WhyUs'
import TopTrainers from './top_trainers/TopTrainers'
import WeeklySchedule from './weekly_schedule/WeeklySchedule'
import PricingChart from './pricing_chart/PricingChart'
import ShopOnline from './shop_online/ShopOnline'
import Testimonials from './testimonials/Testimonials'
import Blogs from './blogs/Blogs'
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='home'>
      <Landing />
      <About />
      <UpcomingClass />
      <WhyUs />
      <TopTrainers />
      <WeeklySchedule />
      <PricingChart />
      <ShopOnline />
      <Testimonials />
      <Blogs />
    </div>
  )
}

export default Home