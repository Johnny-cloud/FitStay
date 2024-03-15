import './trainers.css'
import TopLanding from '../top_landing/TopLanding'
import Trainer from './trainer/Trainer'
import { useEffect } from 'react'

const Trainers = () => {
  const trainers = [
    {
      name: "Stefan",
      role: "Workout Trainer",
      image: "https://images.unsplash.com/photo-1611841315886-a8ad8d02f179?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
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
    {
      name: "Mandy",
      role: "Meditation Instructor",
      image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Shaun",
      role: "Cycling Instructor",
      image: "https://images.unsplash.com/photo-1605235456159-6a14813ff187?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 30)
  }, [])
  return (
    <div className='trainers'>
      <TopLanding landingTitle={"Our Trainers"} />
      <div className='flex-row-center'>
        {
          trainers.map(trainer => <Trainer trainer={trainer}/>)
        }
      </div>
    </div>
  )
}

export default Trainers