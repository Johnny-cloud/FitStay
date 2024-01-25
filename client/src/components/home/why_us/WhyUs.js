import './why_us.css'

const WhyUs = () => {
  return (
    <div className='why-us flex-row-center'>
        <div className='image-container'>
            <img src='https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </div>
        <div>
            <h5>Why Choose Us</h5>
            <h1>Why Become One Of Us</h1>
            <p>Our members are more than happy to be part of us and none of them has ever regretted the decision to be part of us.</p>
            <p>Benefits enjoyed by our members include:
                <ul>
                    <li><i class="bi bi-check-circle"></i> Personal Training</li>
                    <li><i class="bi bi-check-circle"></i> Security</li>
                    <li><i class="bi bi-check-circle"></i> Privacy</li>
                    <li><i class="bi bi-check-circle"></i> Regular health checkups</li>
                </ul>
            </p>
            <h2>Our Numbers</h2>
            <div className='our-numbers flex-row-center'>
                <div>
                    <h1>10+</h1>
                    <p>Expert Trainers</p>
                </div>
                <div>
                    <h1>400+</h1>
                    <p>Trained Students</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs