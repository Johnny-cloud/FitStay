import './top_trainers.css'
import { Link } from 'react-router-dom'

const TopTrainers = () => {
    const trainers = [
        {   
            name: "Janie",
            image: "https://images.unsplash.com/photo-1584464457692-54516d705fe0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {   
            name: "Michael",
            image: "https://images.unsplash.com/photo-1583500178964-98351600826a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {   
            name: "Lenny",
            image: "https://images.unsplash.com/photo-1541338784564-51087dabc0de?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]
  return (
    <div className='top-trainers'>
        <h5>Top Trainers</h5>
        <h1>Meet Some of Our Trainers</h1>
        <div className='flex-row-center'>
            {
                trainers.map(trainer => {
                    return (
                        <Link to={'/trainer-details'} className='top-trainer'>
                            <div className='image-container'>
                                <img src={trainer.image} alt=''/>
                            </div>
                            <h4>{trainer.name}</h4>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TopTrainers