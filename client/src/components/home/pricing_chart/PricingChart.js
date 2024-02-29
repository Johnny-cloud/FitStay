import './pricing_chart.css'
import { Link } from 'react-router-dom'

const PricingChart = () => {

    const pricingPlans = [
        {
            title: "BEGINNERS",
            description: "Even as a beginner, you get access to some of our exclusive services!",
            price: "500",
            months: "3",
            benefits: [
                "Free Hand",
                "Gym Fitness",
                "Weight Loss",
                "Personal Trainer",
                "Cycling"
            ],
        },
        {
            title: "PROFESSIONALS",
            description: "Professionals enjoy more benefits compared to beginners.",
            price: "1000",
            months: "6",
            benefits: [
                "Unlimited  Home Club",
                "Free Fitness Training",
                "Free movement screen",
                "Over 10 group classes",
                "Free sessions with a Club"
            ],
        },
        {
            title: "ADVANCED",
            description: "Professionals enjoy more benefits compared to beginners.",
            price: "2000",
            months: "12",
            benefits: [
                "Unlimited  Home Club",
                "Free Spa Massage",
                "Free movement screen",
                "Over 16 group classes",
                "Free sessions with a Club"
            ],
        },
    ]
  return (
    <div className='pricing-chart'>
        <h5>Membership</h5>
        <h1>Our Membership Plans</h1>
        <div className='flex-row-center'>
            {
                pricingPlans.map(plan => {
                    return(
                        <div className='plan'>
                        <h3>{plan.title}</h3>
                        <p>{plan.description}</p>
                        <p><span className='pricing'>${plan.price}</span>/ For {plan.months} Months</p>
                        <p>
                            <ul>
                                {plan.benefits.map(benefit => <li><i class="bi bi-check2"></i> {benefit}</li>)}
                            </ul>
                        </p>
                        <div className='purchase-btn'>
                            <Link>Purchase Now <i class="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                    )
                })
            }
          
        </div>
    </div>
  )
}

export default PricingChart