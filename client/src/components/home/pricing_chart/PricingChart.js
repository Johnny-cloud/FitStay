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
                <p>Even as a beginner, one can still get access to some of our exclusive services!</p>
                <p><span className='pricing'>$50</span>/ For 3 Months</p>
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
                <p>Even as a beginner, one can still get access to some of our exclusive services!</p>
                <p><span className='pricing'>$50</span>/ For 3 Months</p>
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
                <h3>Advanced</h3>
                <p>Even as a beginner, one can still get access to some of our exclusive services!</p>
                <p><span className='pricing'>$50</span>/ For 3 Months</p>
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
        </div>
    </div>
  )
}

export default PricingChart