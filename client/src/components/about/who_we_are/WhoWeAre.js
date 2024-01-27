import './who_we_are.css'
import { Link } from 'react-router-dom'

const WhoWeAre = () => {
  return (
    <div className='who-we-are'>
       <div className='flex-row-center'>
            <div className='image-container'>
                <img src='https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
            </div>

            <div>
                <h5>who we are</h5>
                <h1>Your Health And Fitness Are Our Priority</h1>
                <p>At FitStay, our highly skilled trainors work with our clients to help them achieve their health and body type goals.</p>
                <p>Through our rigorous programs, our clients have been more than satisfied with the results they get.</p>
                <p>What our clients love the most about our programs include:
                    <ul>
                        <li><i class="bi bi-check2-circle"></i> Fkexible schedules</li>
                        <li><i class="bi bi-check2-circle"></i> Friendly trainors</li>
                        <li><i class="bi bi-check2-circle"></i> Pushed to your full potential</li>
                    </ul>
                </p>
                <div className='contact-link'>
                    <Link className='contact-us-btn'>Contact Us <i class="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default WhoWeAre