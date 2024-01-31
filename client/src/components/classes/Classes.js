import './classes.css'
import TopLanding from '../top_landing/TopLanding'
import { Link } from 'react-router-dom'
import classList from './classList'

const Classes = () => {
  const classes = [...classList]
  
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