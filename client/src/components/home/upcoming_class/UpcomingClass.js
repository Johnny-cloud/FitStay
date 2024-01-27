import './upcoming_class.css'
import { Link } from 'react-router-dom'

const UpcomingClass = () => {
    let classes = [
        {
            image: "https://images.unsplash.com/photo-1608583252022-09323426b8b6?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Karate",
            time: "Fri: 9:00am-10:00am"
        },

        {
            image: "https://images.unsplash.com/photo-1646656130630-07af3a262a9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Power Lifting",
            time: "Tue: 4:00pm-5:00pm"
        },

        {
            image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Workout",
            time: "Mon: 9:00am-10:00am"
        },

        {
            image: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Meditation",
            time: "Sat: 4:00pm-5:00pm"
        },

        {
            image: "https://images.unsplash.com/photo-1546711076-85a7923432ab?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Boxing",
            time: "Thu: 5:00pm-6:00pm"
        },

        {
            image: "https://images.unsplash.com/photo-1583873743670-6d60e445a7e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Yoga",
            time: "Fri: 5:00pm-6:00pm"
        },
    ]
  return (
    <div className='upcoming-class'>
        <h5>Upcoming Class</h5>
        <h1>We Provide Body Transforming Classes</h1>
        <div className='flex-row-center'>

            {classes.map(elem => {
                return (
                    <div className='upcoming image-container large-upcoming'>
                        <img src={elem.image} alt=''/>
                        <div className='details'>
                            <h4>{elem.title}</h4>
                            <p><i class="bi bi-clock"></i> {elem.time}</p>
                            <Link className='link-btn'>JOIN NOW <i class="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default UpcomingClass