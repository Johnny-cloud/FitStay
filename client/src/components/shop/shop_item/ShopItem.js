import './shop_item.css'
import { Link } from 'react-router-dom'
import AppContext from '../../app/app_context/AppContext'
import { useContext } from 'react'

const ShopItem = ({item}) => {

  /* Set default item quantity**/
    item.quantity = 1
  /* ****/

  const {cart, setCart} = useContext(AppContext)

  const {setSelectedItem} = useContext(AppContext)

  const addToCart = ()  => {
    let itemIsInCart = cart.find(product => item.name === product.name)
        if(itemIsInCart){
            alert("Item is in cart")
        } else{
         setCart([...cart, item])   
        }
  }

  return (
    <div className='shop-item image-container'>
      <Link onClick={() => setSelectedItem(item)} to={'/product-details'}><img src={item.image} alt='' /></Link>
      <p><h4>{item.name}</h4></p>
      <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
      <p className='price'>${item.price}.00</p>
      <p><Link onClick={addToCart} to={'/cart'}><button className='add-to-cart-btn'><i class="bi bi-basket"></i> ADD TO CART</button></Link></p>
    </div>
  )
}

export default ShopItem