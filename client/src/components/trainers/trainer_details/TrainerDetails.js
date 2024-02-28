import './trainer_details.css'
import TopLanding from '../../top_landing/TopLanding'
import TrainerImage from './trainer_image/TrainerImage'
import TrainerBiography from './trainer_biography/TrainerBiography'
import Trainer from '../trainer/Trainer'
import { useEffect } from 'react'

const TrainerDetails = () => {

  const otherTrainers = [
      {
          name: "Jean",
          role: "Fitness Trainer",
          image: "https://images.unsplash.com/photo-1581122584612-713f89daa8eb?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Claudy",
          role: "Yoga Instructor",
          image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Michael",
          role: "Karate Coach",
          image: "https://images.unsplash.com/photo-1588989810740-c4c8b90239b2?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='trainer-details'>
        <TopLanding landingTitle={'Our Trainer'} />
        <div className='main-content'>
          <div className='flex-row-center'>
            <div><TrainerImage /></div>
            <TrainerBiography />
          </div>
          <div>
            <h2>Other Trainer Members</h2>
            <div className='flex-row-center'>
              {
                otherTrainers.map(trainer => <Trainer trainer={trainer} />)
              }
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default TrainerDetails