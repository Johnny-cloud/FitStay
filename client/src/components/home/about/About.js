import './about.css'

const About = () => {
  return (
    <div className='home-about flex-row-center'>
        <div className='image-container'>
            <img src='https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
        </div>
        <div>
            <h5>FitStay Intro</h5>
            <div>
                <h1>Get And Stay Fit With Our Rigorous Programs!</h1>
                <p>Through our rigorous and thorough programs, we enable our members get the shape of the body they want. </p>
                <p>After setting a goal for the kind of body they wish to achieve, we enroll our clients to the right classes
                    where they work with our highly skillled trainers. </p>
            </div>
            <div>
                <h3>Modern Equipments</h3>
                <p>We provide the latest equipments as requested by our trainers.</p>
            </div>
            <div>
                <h3>Health Wellness</h3>
                <p>Our trainers ensure that our clients stay healthy and meet their wellness goals.</p>
            </div>
        </div>
    </div>
  )
}

export default About