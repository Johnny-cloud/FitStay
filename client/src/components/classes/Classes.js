import './classes.css'
import TopLanding from '../top_landing/TopLanding'
import { Link } from 'react-router-dom'
import classList from './classList'
import AppContext from '../app/app_context/AppContext'
import { useContext, useEffect } from 'react'

const Classes = () => {
  const classes = [...classList]

  const {setClassToDisplay} = useContext(AppContext)

  const changeClassToDisplay = (classItem) => {
    setClassToDisplay(classItem)
  }

  useEffect(() => {
    window.scrollTo(0, 30)
  }, [])
  
  return (
    <div className='classes'>
      <TopLanding landingTitle={"Our Classes"} />
      <div className='flex-row-center'>
        {
          classes.map(item => {
            return(
              <div className='class-item'>
                  <div className='details-container'>
                    <Link to={'/class-details'} onClick={() => changeClassToDisplay(item)} className='title'><h2>{item.title}</h2></Link>
                    <p>The Best Fitness Program</p>
                  </div>
                  <Link to={'/class-details'} onClick={() => changeClassToDisplay(item)} className='image-container'><img src={item.image} alt='' /></Link>
                  <p className='time-container'>{item.day + ' ' + item.time}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Classes