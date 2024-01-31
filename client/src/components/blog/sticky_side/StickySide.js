import './sticky_side.css'
import { Link } from 'react-router-dom'

const StickySide = ({blogs}) => {
  return (
    <div className='sticky-side'>
          <div className='filtering-container flex-row-center'>
            <div>Search Item</div>
          <div className='categories'>
            <h3>Categories</h3>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <Link>Yoga</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link>Fitness</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link>Boxing</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link>Body Building</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link>Meditation</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link>Crossfit</Link></li>
            </ul>
          </div>
          <div className='recent-posts'>
            <h3>Recent Posts</h3>
            <ul>
              {blogs.slice(0, 6).map(blog => {
                return(
                  <li>
                    <Link>
                      <img src={blog.image} alt='' />
                      <div className='details-container'>
                        <p>JAN 23, 2024</p>
                        <h6>{blog.title}</h6>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className='popular-tags'>
            <h3>Popular Tags</h3>
            <ul>
              <li><Link>Yoga</Link></li>
              <li><Link>Fitness</Link></li>
              <li><Link>Meditation</Link></li>
              <li><Link>Body Building</Link></li>
            </ul>
          </div>

          <div className='advert image-container'>
            <img src='https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
          </div>
        </div>
    </div>
  )
}

export default StickySide