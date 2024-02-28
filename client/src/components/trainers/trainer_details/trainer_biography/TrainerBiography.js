import './trainer_biography.css'

const TrainerBiography = () => {

  return (
    <div className='trainer-biography'>
        <div>
            <h2>Biography</h2>
            <p>I am deeply passionate about helping people get fit and stay motivated on their fitness journey.” 
                “I am a certified personal trainer specializing in developing simple and effective training routines 
                for busy clients who can't spend an hour at the gym several times per week</p>
        </div>
        <div>
            <h2>Qualifications</h2>
            <p>
                <ul>
                    <li><i class="bi bi-check-circle"></i> Diploma in Instructing Exercise and Fitness</li>
                    <li><i class="bi bi-check-circle"></i> Certificate in Fitness Instructing – Gym</li>
                    <li><i class="bi bi-check-circle"></i> Diploma in Fitness Instructing and Personal Training</li>
                </ul>
            </p>
        </div>
        <div>
            <h2>Skills</h2>
            <p>
                <ul>
                    <li><i class="bi bi-check-circle"></i> Boxing</li>
                    <li><i class="bi bi-check-circle"></i> Fitness</li>
                    <li><i class="bi bi-check-circle"></i> GYM</li>
                </ul>
            </p>
        </div>
        <div>
            <h2>Book An Appointment</h2>
            <form>
                
                <label htmlFor='name'>Your Name</label>
                <input id='name' type='text' />
                <label htmlFor='email'>Your Email</label>
                <input id='email' type='email'/>
                <label htmlFor='phone'>Your Phone Number</label>
                <input id='phone' type='text'/>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default TrainerBiography