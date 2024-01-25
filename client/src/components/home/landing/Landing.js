import './landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing'>
        <div className='intro'>
            <p>GET THAT ENERGY UP!</p>
            <h1>STAY FIT WITH OUR PROGRAMS</h1>
            <div>
                <Link to={'/classes'} className='link-btn'>OUR CLASSES <i class="bi bi-arrow-right"></i></Link>
            </div>
        </div>
    </div>
  )
}

export default Landing