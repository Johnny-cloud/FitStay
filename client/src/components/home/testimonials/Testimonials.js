import './testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <h5>Testimonials</h5>
      <h1>Our Members Talk</h1>
      <div className='flex-row-center'>
        <div className='image-container'>
          <img src='https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
        </div>
        <div className='testimony-container'>
          <div className='testimony'>
            <h3><img src='' alt='' />Kim</h3>
            <p>"I am happy to say if it were not for FitStay, I would not have achieved my health goals"</p>
            <p>"Thank you so much FitStay!"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials