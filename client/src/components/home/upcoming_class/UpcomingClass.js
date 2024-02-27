import './upcoming_class.css'
import { Link } from 'react-router-dom'
import AppContext from '../../app/app_context/AppContext'
import { useContext } from 'react'

const UpcomingClass = () => {

    const {setClassToDisplay} = useContext(AppContext)

    const changeClassToDisplay = (classItem) => {
        setClassToDisplay(classItem)
    }

    let classes = [
        {
            image: "https://plus.unsplash.com/premium_photo-1667941272664-9146446e1b7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Karate",
            day: "Friday",
            time: "9:00am-10:00am"
        },

        {
            image: "https://images.unsplash.com/photo-1526403646408-57b94dc15399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Power Lifting",
            time: "4:00pm-5:00pm",
            day: "Friday",
        },

        {
            image: "https://plus.unsplash.com/premium_photo-1664109999695-71dd1df7ae3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Workout",
            time: "10:00am-11:00am",
            day: "Friday",
        },

        {
            image: "https://images.unsplash.com/photo-1611800065908-233b597db552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Meditation",
            time: "4:00pm-5:00pm",
            day: "Saturday",
        },

        {
            image: "https://plus.unsplash.com/premium_photo-1672791841826-1967b0ad200d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Boxing",
            time: "5:00pm-6:00pm",
            day: "Saturday",
        },

        {
            image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Yoga",
            time: "5:00pm-6:00pm",
            day: "Friday",
        },
    ]
  return (
    <div className='upcoming-class'>
        <h5>Upcoming Class</h5>
        <h1>Our Upcoming Classes</h1>
        <div className='flex-row-center'>

            {classes.map(elem => {
                return (
                    <div className='upcoming image-container large-upcoming'>
                        <Link to={'/class-details'} onClick={() => changeClassToDisplay(elem)} className='image-container'><img src={elem.image} alt=''/></Link>
                        <div className='details'>
                            <Link to={'/class-details'} onClick={() => changeClassToDisplay(elem)}><h4>{elem.title}</h4></Link>
                            <p><i class="bi bi-clock"></i> {elem.time}</p>
                            <Link to={'/contact'} className='link-btn'>JOIN NOW <i class="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default UpcomingClass