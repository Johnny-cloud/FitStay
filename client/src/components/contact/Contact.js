import './contact.css'
import TopLanding from '../top_landing/TopLanding'

const Contact = () => {
  return (
    <div className='contact'>
      <TopLanding landingTitle={'Contact Us'}/>
      <div className='main-content'>
        <h3>Let's stay in touch</h3>
        <form>
          <label htmlFor='name'>Your name</label>
          <input id='name' type='text' />
          <label htmlFor='email'>Your email</label>
          <input id='email' type='text' />
          <label htmlFor='message'>Your message</label>
          <textarea id='message' type='text'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact