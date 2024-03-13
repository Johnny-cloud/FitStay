import './contact.css'
import TopLanding from '../top_landing/TopLanding'

const Contact = () => {
  return (
    <div className='contact'>
      <TopLanding landingTitle={'Contact Us'}/>
      <div className='main-content'>
        <h3>Let's stay in touch</h3>
        <p>We love to hear from you on our customer service, merchandise,
           website or any topics you want to share with us. Your comments and suggestions will be appreciated. 
           Please complete the form below.</p>
        <p><i class="bi bi-telephone-forward"></i> +254 7xx xxx xxx</p>
        <p><i class="bi bi-geo-alt"></i> Nairobi, Kenya</p>
        <p><i class="bi bi-envelope"></i> fitinthegym@gmail.com</p>
        <form>
          <div>
            <label htmlFor='name'>Your name</label>
            <input id='name' type='text' />
          </div>
          <div>
            <label htmlFor='email'>Your email</label>
            <input id='email' type='text' />
          </div>
          <div>
            <label htmlFor='message'>Your message</label>
            <textarea id='message' type='text'></textarea>
          </div>
          <div>
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact