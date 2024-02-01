import './blog.css'
import TopLanding from '../top_landing/TopLanding'
import {Link} from 'react-router-dom'
import StickySide from './sticky_side/StickySide'
import blogs from './blogsList'
import AppContext from '../app/app_context/AppContext'
import { useContext, useEffect, useState } from 'react'

const Blog = () => {
  
  const [blogList, setBlogList] = useState([...blogs])

  const {filterCategory, setBlogToDisplay} = useContext(AppContext)

  const alterBlogToDisplay = (blog) => {
    setBlogToDisplay(blog)
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    window.scrollTo(0,0)
    if(filterCategory === 'all'){
      setBlogList([...blogs])

    } else{
      setBlogList(blogs.filter(blog => blog.category === filterCategory))
    }
  }, [filterCategory])

  return (
    <div className='blogs-section'>
      <TopLanding landingTitle={'Our Blogs'}/>
      <div className='main-container flex-row-center'>
        <div className='blogs-container flex-row-center'>

          {
            blogList.slice(0, 6).map(blog => {
              return(
                <div className='blog'>
                  <Link to={'/blog-details'} onClick={() => alterBlogToDisplay(blog)} className='image-container'><img src={blog.image} alt='' /></Link>
                  <p><h4>By {blog.author}</h4></p>
                  <h1>{blog.title}</h1>
                  <p>Get the latest news on health and body fitness from our blogs. 
                    Our authors have researched thoroughly and written the most comprehensive contents.</p>
                  <div className='read-more-btn-container'>
                    <Link to={'/blog-details'} onClick={() => alterBlogToDisplay(blog)} className='read-more-btn'>READ MORE <i class="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              )
            })
          }
        </div>

      <StickySide blogs={blogList} />
      </div>
    </div>
  )
}

export default Blog