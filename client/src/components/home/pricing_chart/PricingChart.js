import './pricing_chart.css'
import { Link } from 'react-router-dom'

const PricingChart = () => {
  return (
    <div className='pricing-chart'>
        <h5>Pricing Chart</h5>
        <h1>Our Membership Plans</h1>
        <div className='flex-row-center'>
            <div className='plan'>
                <h3>Beginners</h3>
                <p>Even as a beginner, you get access to some of our exclusive services!</p>
                <p><span className='pricing'>$500</span>/ For 3 Months</p>
                <p>
                    <ul>
                        <li><i class="bi bi-check2"></i> Free Hand</li>
                        <li><i class="bi bi-check2"></i> Gym Fitness</li>
                        <li><i class="bi bi-check2"></i> Weight Loss</li>
                        <li><i class="bi bi-check2"></i> Personal Trainer</li>
                        <li><i class="bi bi-check2"></i> Cycling</li>
                    </ul>
                </p>
                <div className='purchase-btn'>
                    <Link>Purchase Now <i class="bi bi-arrow-right"></i></Link>
                </div>
            </div>

            <div className='plan'>
                <h3>Professionals</h3>
                <p>Professionals enjoy more benefits compared to beginners.</p>
                <p><span className='pricing'>$1000</span>/ For 6 Months</p>
                <p>
                    <ul>
                        <li><i class="bi bi-check2"></i> Unlimited  Home Club</li>
                        <li><i class="bi bi-check2"></i> Free Fitness Training</li>
                        <li><i class="bi bi-check2"></i> Free movement screen</li>
                        <li><i class="bi bi-check2"></i> Over 10 group classes</li>
                        <li><i class="bi bi-check2"></i> Free sessions with a Club</li>
                    </ul>
                </p>
                <div className='purchase-btn'>
                    <Link>Purchase Now <i class="bi bi-arrow-right"></i></Link>
                </div>
            </div>

            <div className='plan'>
                <h3>Advanced</h3>
                <p>Advanced members enjoy all the benefits there is to offer.</p>
                <p><span className='pricing'>$2000</span>/ For 12 Months</p>
                <p>
                    <ul>
                        <li><i class="bi bi-check2"></i> Unlimited  Home Club</li>
                        <li><i class="bi bi-check2"></i> Free Spa masssage</li>
                        <li><i class="bi bi-check2"></i> Free movement screen</li>
                        <li><i class="bi bi-check2"></i> Over 15 group classes</li>
                        <li><i class="bi bi-check2"></i> Free sessions with a Club</li>
                    </ul>
                </p>
                <div className='purchase-btn'>
                    <Link>Purchase Now <i class="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingChart