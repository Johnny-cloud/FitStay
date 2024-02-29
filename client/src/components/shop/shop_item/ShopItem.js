import './shop_item.css'
import { Link } from 'react-router-dom'

const ShopItem = ({item}) => {
  return (
    <div className='shop-item image-container'>
      <Link><img src={item.image} alt='' /></Link>
      <p><h4>{item.name}</h4></p>
      <p className='price'>${item.price}.00</p>
      <p><button className='add-to-cart-btn'><i class="bi bi-basket"></i> ADD TO CART</button></p>
    </div>
  )
}

export default ShopItem