import './about.css'
import TopLanding from '../top_landing/TopLanding'
import WhoWeAre from './who_we_are/WhoWeAre'
import TrainersAndMembers from './trainers_and_members/TrainersAndMembers'
import HistoryAndMission from './history_and_mission/HistoryAndMission'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='about'>
      <TopLanding landingTitle={"About FitStay"} />
      <WhoWeAre />
      <TrainersAndMembers />
      <HistoryAndMission />
    </div>
  )
}

export default About