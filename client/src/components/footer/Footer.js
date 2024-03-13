import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='info-container'>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/shop'}>Shop</Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contacts</h4>
          <ul>
            <li><i class="bi bi-headset"></i> +254 7xx xxx xxx</li>
            <li><i class="bi bi-envelope"></i> fitinthegym@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4>Working Hours</h4>
          <ul>
            <li><i class="bi bi-clock"></i> 9:00am - 10:00am</li>
            <li><i class="bi bi-clock"></i> 4:00pm - 5:00pm</li>
            <li><i class="bi bi-clock"></i> 5:00pm - 6:00pm</li>
            <li><i class="bi bi-clock"></i> 8:00am - 9:00am</li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <ul>
            <li><i class="bi bi-facebook"></i> Facebook</li>
            <li><i class="bi bi-instagram"></i> Instagram</li>
            <li><i class="bi bi-whatsapp"></i> Whatsapp</li>
          </ul>
        </div>
      </div>
      <h4>FitStay &copy; 2024</h4>
    </div>
  )
}

export default Footer