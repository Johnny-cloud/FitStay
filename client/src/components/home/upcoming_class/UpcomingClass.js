import './upcoming_class.css'
import { Link } from 'react-router-dom'

const UpcomingClass = () => {
  return (
    <div className='upcoming-class'>
        <h5>Upcoming Class</h5>
        <h1>We Provide Body Transforming Classes</h1>
        <div className='flex-row-center'>
            <div className='upcoming image-container large-upcoming'>
                <img src='https://images.unsplash.com/photo-1603210185246-b1662978ea37?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                <div className='details'>
                    <h4>Karate</h4>
                    <p><i class="bi bi-clock"></i> Fri: 9:00am-10:00am</p>
                    <Link className='link-btn'>JOIN NOW <i class="bi bi-arrow-right"></i></Link>
                </div>
            </div>

            <div className='upcoming image-container'>
                <img src='https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                <div className='details'>
                    <h4>Power Lifting</h4>
                    <p><i class="bi bi-clock"></i> Fri: 10:00am-11:00am</p>
                    <Link className='link-btn'>JOIN NOW <i class="bi bi-arrow-right"></i></Link>
                </div>
            </div>

            <div className='upcoming image-container'>
                <img src='https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                <div className='details'>
                    <h4>Workout</h4>
                    <p><i class="bi bi-clock"></i> Fri: 11:00am-112:00pm</p>
                    <Link className='link-btn'>JOIN NOW <i class="bi bi-arrow-right"></i></Link>
                </div>
            </div>

            <div className='upcoming image-container'>
                <img src='https://plus.unsplash.com/premium_photo-1669795612621-b07938a4269d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                <div className='details'>
                    <h4>Meditation</h4>
                    <p><i class="bi bi-clock"></i> Fri: 4:00pm-5:00pm</p>
                    <Link className='link-btn'>JOIN NOW <i class="bi bi-arrow-right"></i></Link>
                </div>
            </div>

            <div className='upcoming image-container'>
                <img src='https://images.unsplash.com/photo-1610543123792-135b26601797?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                <div className='details'>
                    <h4>Boxing</h4>
                    <p><i class="bi bi-clock"></i> Fri: 4:00pm-5:00pm</p>
                    <Link className='link-btn'>JOIN NOW <i class="bi bi-arrow-right"></i></Link>
                </div>
            </div>

            <div className='upcoming image-container'>
                <img src='https://plus.unsplash.com/premium_photo-1661776042506-9154882ba689?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                <div className='details'>
                    <h4>Yoga</h4>
                    <p><i class="bi bi-clock"></i> Fri: 4:00pm-5:00pm</p>
                    <Link className='link-btn'>JOIN NOW <i class="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpcomingClass