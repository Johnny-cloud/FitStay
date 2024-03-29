import './trainer.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from '../../app/app_context/AppContext'

const Trainer = ({trainer}) => {

    const {setSelectedTrainer} = useContext(AppContext)

    const setTrainerToDisplay = () => {
      setSelectedTrainer(trainer)
    }

    return (
        <div className='trainer'>
          <div className='image-container'>
            <Link onClick={setTrainerToDisplay} to='/trainer-details'><img src={trainer.image} alt='' /></Link>
          </div>
          <div className='details-container'>
            <Link onClick={setTrainerToDisplay} to={'/trainer-details'}><h2>{trainer.name}</h2></Link>
            <h6>{trainer.role}</h6>
            <p className='description'>Our trainers provide with the best training by following our physicians' guide and your health status</p>
            <p className='link-icons'><i class="bi bi-facebook"></i> <i class="bi bi-twitter"></i> <i class="bi bi-instagram"></i></p>
          </div>
        </div>
      )
}

export default Trainer