import './pricing.css'
import TopLanding from '../top_landing/TopLanding'
import {Link} from 'react-router-dom'

const Pricing = () => {

  const pricingPlans = [
    {
      title: "BASIC",
      price: "50",
      benefits: [
        "Free Hand",
        "Gym Fitness",
        "Weight Loss",
        "Personal Trainer",
        "Cycling",
      ],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "STARTER",
      price: "100",
      benefits: [
        "Unlimited Access to Home Club",
        "Free Fitness Training",
        "Free training session with a Club",
        "Over 16 free group fitness classes",
        "Free functional movement screen",
      ],
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "PREMIUM",
      price: "200",
      benefits: [
        "Unlimited Access to Home Club",
        "Free Fitness Training",
        "Free training session with a Club",
        "Over 16 free group fitness classes",
        "Free functional movement screen",
      ],
      image: "https://plus.unsplash.com/premium_photo-1664109999820-acb7b0db64a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]

  return (
    <div className='pricing'>
      <TopLanding landingTitle={'Our Pricing Plans'}/>
      <div className='intro-section'>
        <h5>Our Pricing</h5>
        <h1>Our Pricing Plans</h1>
        <p><i>At FitStay, we offer different pricing packages for different levels of training.</i></p>
      </div>
      <div className='flex-row-center'>

        {
          pricingPlans.map(plan => {
            return (
                <div className='pricing-plan'>
                <div className='image-container'><img src={plan.image} alt='' />
                  <div className='pricing-type'>{plan.title}</div>
                </div>
                
                <div className='details'>
                  <p><span className='price'>${plan.price}</span> per month</p>
                  <ul>
                    {
                      plan.benefits.map(benefit => <li><i class="bi bi-check2-circle"></i> {benefit}</li>)
                    }
                  </ul>
                  <div className='purchase-btn-container'><Link to={'/contact'} className='purchase-btn'>PURCHASE NOW <i class="bi bi-arrow-right"></i></Link></div>
                </div>
              </div>
            )
          })
        }
       
      </div>
    </div>
  )
}

export default Pricing