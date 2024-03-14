import './cart.css'
import TopLanding from '../top_landing/TopLanding'
import CartItem from './cart_item/CartItem'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../app/app_context/AppContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cart} = useContext(AppContext)
  const [totals, seTotals] = useState(cart.reduce((total, item) => total + (item.price * item.quantity), 0))

  const updateTotals = () => {
    seTotals(cart.reduce((total, item) => total + (item.price * item.quantity), 0))
  }

  useEffect(() => {
    updateTotals()
  }, [])

  return (
    <div className='cart'>
      <TopLanding landingTitle={'Cart'} />
      <div className='main-content flex-row-center'>
        <div>
          {
            cart.map(item => <CartItem updateTotals={updateTotals} item={item} />)
          }
        </div>
        
        <div className='cart-totals'>
          <h4>CART TOTALS</h4>
          <p><h4>Totals: ${totals}</h4></p>
          <div>
            <Link to={'/checkout'}>Proceed to Checkout <i class="bi bi-bag-check"></i></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart