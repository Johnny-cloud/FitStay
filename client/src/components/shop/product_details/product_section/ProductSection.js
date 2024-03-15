import { useContext, useState } from 'react'
import './product_section.css'
import AppContext from '../../../app/app_context/AppContext'
import {Link} from 'react-router-dom'

const ProductSection = ({product}) => {
    const {cart, setCart} = useContext(AppContext)
    const [quantity, setQuantity] = useState(product.quantity)

    /* Set item quantity to the state quantity ***/
        product.quantity = quantity
    /* ***********/

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if(quantity < 2){
            setQuantity(1)
        } else{
            setQuantity(quantity - 1)
        }
    }

    const addToCart = () => {
        let itemIsInCart = cart.find(item => item.name === product.name)
        if(itemIsInCart){
            alert("Item is in cart")
        } else{
         setCart([...cart, product])   
        }
        
    }

  return (
    <div className='product-details-product-section'>
        <div className='image-container'><img src={product.image} alt='' /></div>
        <div className='details'>
            <h4>{product.name}</h4>
            <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
            <p className='price'><b>${product.price}</b></p>
            <p>
                <h5>Description</h5>
                <ul>
                    <li><i class="bi bi-check-circle"></i> High quality</li>
                    <li><i class="bi bi-check-circle"></i> Durable</li>
                    <li><i class="bi bi-check-circle"></i> Custom made</li>
                    <li><i class="bi bi-check-circle"></i> Available in all sizes</li>
                </ul>
            </p>
            <div className='btns-container'>
                <button onClick={decreaseQuantity} className='qty-btn'>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity} className='qty-btn'>+</button>
                <Link to={'/cart'}><button className='add-to-cart-btn' onClick={addToCart}>ADD TO CART</button></Link>
            </div>
        </div>
    </div>
  )
}

export default ProductSection