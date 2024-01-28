import './trainers.css'
import TopLanding from '../top_landing/TopLanding'

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
  return (
    <div className='trainers'>
      <TopLanding landingTitle={"Our Trainers"} />
      <div className='flex-row-center'>
        {
          trainers.map(trainer => {
            return (
              <div className='trainer'>
                <div className='image-container'>
                  <img src={trainer.image} alt='' />
                </div>
                <div className='details-container'>
                  <h2>{trainer.name}</h2>
                  <h6>{trainer.role}</h6>
                  <p className='description'>Our trainers provide with the best training by following our physicians' guide and your health status</p>
                  <p className='link-icons'><i class="bi bi-facebook"></i> <i class="bi bi-twitter"></i> <i class="bi bi-instagram"></i></p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Trainers