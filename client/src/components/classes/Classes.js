import './classes.css'
import TopLanding from '../top_landing/TopLanding'
import { Link } from 'react-router-dom'

const Classes = () => {

  const classes = [
    {
      title:  "Running",
      time: "Friday: 4:00pm",
      image: "https://plus.unsplash.com/premium_photo-1663036916637-ac29ab5b65c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:  "Cycling",
      time: "Saturday: 10:00am",
      image: "https://plus.unsplash.com/premium_photo-1683842177289-d71eafe7b130?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:  "Yoga",
      time: "Saturday: 3:00pm",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:  "Body Building",
      time: "Monday: 4:00pm",
      image: "https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:  "Crossfit",
      time: "Tuesday: 3:00pm",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:  "Karate",
      time: "Wednesday: 4:00pm",
      image: "https://plus.unsplash.com/premium_photo-1663126473034-a3367fd5598e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:  "Martial Arts",
      time: "Friday: 3:00pm",
      image: "https://images.unsplash.com/photo-1576149146095-caa19d4de102?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:  "Workout",
      time: "Saturday: 9:00am",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:  "Fitness",
      time: "Friday: 5:00pm",
      image: "https://plus.unsplash.com/premium_photo-1666736570873-36d95bd8ee3f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:  "Power Lifting",
      time: "Wednesday 3:00pm",
      image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:  "Meditation",
      time: "Monday: 5:00pm",
      image: "https://plus.unsplash.com/premium_photo-1671305280727-ce3bb0997c67?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title:  "Boxing",
      time: "Tuesday: 3:00pm",
      image: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  return (
    <div className='classes'>
      <TopLanding landingTitle={"Our Classes"} />
      <div className='flex-row-center'>
        {
          classes.map(item => {
            return(
              <div className='class-item'>
                  <div className='details-container'>
                    <Link className='title'><h2>{item.title}</h2></Link>
                    <p>The Best Fitness Program</p>
                  </div>
                  <Link className='image-container'><img src={item.image} alt='' /></Link>
                  <p className='time-container'>{item.time}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Classes