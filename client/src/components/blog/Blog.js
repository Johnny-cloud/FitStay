import './blog.css'
import TopLanding from '../top_landing/TopLanding'
import {Link} from 'react-router-dom'
import StickySide from './sticky_side/StickySide'
import blogs from './blogsList'
import AppContext from '../app/app_context/AppContext'
import { useContext, useEffect, useState } from 'react'

const Blog = () => {
  
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(6)
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)

  const {setBlogToDisplay} = useContext(AppContext)

  const alterBlogToDisplay = (blog) => {
    setBlogToDisplay(blog)
  }

  const changePage = (event) => {
    setStart(event.target.id - 6)
    setEnd(event.target.id)
  }

  useEffect(() => {
    setStart(0)
    setEnd(6)
  }, [filteredBlogs])

  useEffect(() => {
    window.scrollTo(0, 20)
  }, [start, end, filteredBlogs])


  return (
    <div className='blogs-section'>
      <TopLanding landingTitle={'Our Blogs'}/>
      <div className='main-container flex-row-center'>
        <div>
          <div className='blogs-container flex-row-center'>

            {
              filteredBlogs.slice(start, end).map(blog => {
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
          {
              filteredBlogs.length > 6 ? (
                <div className='page-btns flex-row-center'>
                  <button onClick={changePage} id={6}>1</button>
                  <button onClick={changePage} id={12}>2</button> 
                </div>
              ) : (
                <div></div>
              )
            }
          
        </div>
        

      <StickySide blogs={blogs} setFilteredBlogs={setFilteredBlogs}/>
      </div>
    </div>
  )
}

export default Blog