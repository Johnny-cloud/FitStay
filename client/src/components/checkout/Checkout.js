import './checkout.css'
import TopLanding from '../top_landing/TopLanding'
import AppContext from '../app/app_context/AppContext'
import { useContext } from 'react'
import CartItem from './cart_item/CartItem'
import BillingInfo from './billing_info/BillingInfo'
import CardInfo from './card_info/CardInfo'

const Checkout = () => {
    const {cart} = useContext(AppContext);
    const totals = cart.reduce((total, item) => total + (item.quantity * item.price), 0)
  return (
    <div className='checkout'>
        <TopLanding landingTitle={'Chekout'} />
        <div className='main-content flex-row-center'>
          <div>
            
            <div className='order-history'>
              <h5>YOUR ORDER</h5>
              <div >
                {
                  cart.map(item => <CartItem item={item} />)
                }
              </div>
              <div className='totals'>
                <div>Totals</div>
                <div><b>${totals}</b></div>
              </div>
            </div>
          </div>
          
          <div>
              <BillingInfo />
              <CardInfo />
              <button className='order-btn'>PLACE ORDER</button>
            </div>
        </div>
    </div>
  )
}

export default Checkout