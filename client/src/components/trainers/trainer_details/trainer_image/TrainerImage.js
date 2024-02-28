import './trainer_image.css'
import {useState, useEffect, useContext} from 'react'
import AppContext from '../../../app/app_context/AppContext'

const TrainerImage = () => {
    const {selectedTrainer} = useContext(AppContext)

    const [trainer, setTrainer] = useState({
            name: "Shaun",
            role: "Cycling Instructor",
            image: "https://images.unsplash.com/photo-1605235456159-6a14813ff187?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    })

    useEffect(() => {

        if(selectedTrainer){
            window.scrollTo(0, 0)
            setTrainer(selectedTrainer)
        }
    }, [selectedTrainer])

  return (
    <div className={'trainer-image'}>
        <div className='image-container'><img src={trainer.image} alt='' /></div>
        <h3>{trainer.name}</h3>
        <p>{trainer.role}</p>
        <p><i class="bi bi-facebook"></i> <i class="bi bi-whatsapp"></i> <i class="bi bi-twitter"></i> <i class="bi bi-instagram"></i></p>
    </div>
  )
}

export default TrainerImage