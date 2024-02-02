import { Link } from 'react-router-dom'
import './sticky_side.css'
import classList from '../../classList'

const StickySide = () => {
  return (
    <div>
        <div className='sticky-side'>
            <div className='class-info'>
                <h4>Class Info</h4>
                <div>
                    <p>Class Name: <b>Course</b></p>
                    <p>Class Duration: <b>60 mins</b></p>
                    <p>Class Intensity: <b>Moderate</b></p>
                    <p>Class Price: <b className='price'>$70</b> / month</p>
                </div>
                
                <div>
                    <Link className='join-link'>JOIN NOW <i class="bi bi-arrow-right"></i></Link>
                </div>
                
            </div>

            <div className='other-classes'>
                <h4>Other Classes</h4>
                {
                    classList.slice(0, 6).map(otherClass => {
                        return(
                            <p className='other-class flex-row-center'>
                                <img src={otherClass.image} alt='' />
                                <div className='details'>
                                    <h6>{otherClass.title}</h6>
                                    <p></p>
                                </div>
                            </p>
                        )
                    })
                }
            </div>
        </div>
    </div>
    
  )
}

export default StickySide