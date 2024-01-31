import './blog.css'
import TopLanding from '../top_landing/TopLanding'
import {Link} from 'react-router-dom'
import StickySide from './sticky_side/StickySide'
import blogs from './blogsList'

const Blog = () => {
  const blogsList = [...blogs]
  return (
    <div className='blogs-section'>
      <TopLanding landingTitle={'Our Blogs'}/>
      <div className='main-container flex-row-center'>
        <div className='blogs-container flex-row-center'>

          {
            blogsList.slice(0, 6).map(blog => {
              return(
                <div className='blog'>
                  <div className='image-container'><img src={blog.image} alt='' /></div>
                  <p><h4>By {blog.author}</h4></p>
                  <h1>{blog.title}</h1>
                  <p>Get the latest news on health and body fitness from our blogs. 
                    Our authors have researched thoroughly and written the most comprehensive contents.</p>
                  <div className='read-more-btn-container'>
                    <Link className='read-more-btn'>READ MORE <i class="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              )
            })
          }
        </div>

      <StickySide blogs={blogsList} />
      </div>
    </div>
  )
}

export default Blog