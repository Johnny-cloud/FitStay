import { useContext, useEffect, useState } from 'react'
import './cart_item.css'
import AppContext from '../../app/app_context/AppContext'

const CartItem = ({item, updateTotals}) => {
    const {cart, setCart} = useContext(AppContext)
    const [qty, setQty] = useState(item.quantity)

    /***** Set item quantity to state quantity  dynamically*/
        item.quantity = qty
    /**** */

    const removeFromCart = () => {
        setCart(cart.filter(cart => cart.name !== item.name))
    }

    const addQty = () => {
        setQty(qty + 1)
    }

    const reduceQty = () => {
        if(qty < 2){
            setQty(1)
        } else{
            setQty(qty - 1)
        }
        
    }

    useEffect(() => {
        // Update totals after the quantity is updated
        updateTotals()
        
    }, [qty])
  return (
    <div className='cart-item'>
        <div>
            <div>
              <img src={item.image} alt=''/>
                {item.name}  
            </div>
            <div>${item.price}</div>
        </div>
        <div>
            <div className='qty-container'>Qty: <button onClick={reduceQty}>-</button>{qty}<button onClick={addQty}>+</button></div>
            <div>Tot: <b>${item.price * item.quantity}</b></div>
            <div><button onClick={removeFromCart} className='del-btn'>Remove<i class="bi bi-trash"></i></button></div>
        </div>
    </div>
  )
}

export default CartItem