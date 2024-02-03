import './blogs.css'
import {Link} from 'react-router-dom'
import AppContext from '../../app/app_context/AppContext'
import { useContext } from 'react'

const Blogs = () => {

    const {setBlogToDisplay} = useContext(AppContext)

    const changeBlogDisplayed = (blog) => {
        setBlogToDisplay(blog)
    }

    const blogs = [
        { 
            author: "Jenny",
            title: "Yoga For The Family",
            category: "yoga",
            image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        { 
            author: "Grace",
            title: "Boxing Right During Boxing",
            category: "boxing",
            image: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        { 
            author: "Franklin",
            title: "Body Building After Festivities",
            category: "body building",
            image: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ]
  return (
    <div className='blogs'>
        <h5>News & Blogs</h5>
        <h1>Our Latest Blogs</h1>
        <p>Check out our blogs for the latest news on fitness!</p>
        <div className='flex-row-center'>

            {
                blogs.map(blog => {
                    return(
                        <Link onClick={() => changeBlogDisplayed(blog)} to={'/blog-details'} className='blog image-container'>
                            <img src={blog.image} alt='' />
                            <div className='details'>
                                <h6>{blog.category}</h6>
                                <h4>{blog.title}.</h4>
                            </div>
                        </Link>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Blogs