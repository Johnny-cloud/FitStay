import './sticky_side.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from '../../app/app_context/AppContext'

const StickySide = ({blogs, setFilteredBlogs}) => {

  const {setBlogToDisplay} = useContext(AppContext)

  const alterFilterCategory = (event) => {
    if(event.target.id === 'all'){
      setFilteredBlogs(blogs)
    } else{
        setFilteredBlogs(blogs.filter(blog => blog.category === event.target.id))
    }
    
  }

  const alterBlogToDisplay = (blog) => {
    setBlogToDisplay(blog)
  }

  return (
    <div className='blog-sticky-side'>
          <div className='filtering-container flex-row-center'>
          <div className='categories'>
            <h3>Categories</h3>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <Link to={'/blog'} onClick={alterFilterCategory} id='all'>All</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to={'/blog'} onClick={alterFilterCategory} id='yoga'>Yoga</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to={'/blog'} onClick={alterFilterCategory} id='fitness'>Fitness</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to={'/blog'} onClick={alterFilterCategory} id='boxing'>Boxing</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to={'/blog'} onClick={alterFilterCategory} id='body building'>Body Building</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to={'/blog'} onClick={alterFilterCategory} id='meditation'>Meditation</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to={'/blog'} onClick={alterFilterCategory} id='crossfit'>Crossfit</Link></li>
            </ul>
          </div>
          <div className='recent-posts'>
            <h3>Recent Posts</h3>
            <ul>
              {blogs.slice(0, 6).map(blog => {
                return(
                  <li>
                    <Link to={'/blog-details'} onClick={() => alterBlogToDisplay(blog)}>
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
              <li><Link to={'/blog'} onClick={alterFilterCategory} id='yoga'>Yoga</Link></li>
              <li><Link to={'/blog'} onClick={alterFilterCategory} id='fitness'>Fitness</Link></li>
              <li><Link to={'/blog'} onClick={alterFilterCategory} id='meditation'>Meditation</Link></li>
              <li><Link to={'/blog'} onClick={alterFilterCategory} id='body building'>Body Building</Link></li>
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