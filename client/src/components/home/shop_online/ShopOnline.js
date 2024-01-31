import './shop_online.css'
import { Link } from 'react-router-dom'

const ShopOnline = () => {

  const shopItems = [
    {
      name: "Gym Equipment",
      price: "80",
      image: "https://images.unsplash.com/photo-1562771242-a02d9090c90c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Nike Sneakers",
      price: "50",
      image: "https://images.unsplash.com/photo-1634624943287-6e1f2d103201?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Exercise Equipment",
      price: "70",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

  ]

  return (
    <div className='shop-online'>
      <h5>Shop Online</h5>
      <h1>Our Online Store</h1>
      <div className='flex-row-center'>
        
        {
          shopItems.map(item => {
            return (
              <div className='online-item image-container'>
                <Link><img src={item.image} alt='' /></Link>
                <p><h4>{item.name}</h4></p>
                <p className='price'>${item.price}.00</p>
                <p><button className='add-to-cart-btn'><i class="bi bi-basket"></i> ADD TO CART</button></p>
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default ShopOnline