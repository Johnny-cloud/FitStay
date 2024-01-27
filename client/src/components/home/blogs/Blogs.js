import './blogs.css'

const Blogs = () => {
    const blogs = [
        {
            name: "Yoga",
            description: "Staying in shape with yoga",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Karate",
            description: "Karate for everyone in 2024",
            image: "https://images.unsplash.com/photo-1598300606161-4019d0dfec28?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Fitness",
            description: "Meet our fitness trainer Jennifer",
            image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                        <div className='blog image-container'>
                            <img src={blog.image} alt='' />
                            <div className='details'>
                                <h6>{blog.name}</h6>
                                <h4>{blog.description}.</h4>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Blogs