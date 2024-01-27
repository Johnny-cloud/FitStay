import './shop_online.css'

const ShopOnline = () => {

  const shopItems = [
    {
      name: "Gym Equipment",
      price: "80",
      image: "https://images.unsplash.com/photo-1592588253470-9eb67341e66e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Nike Sneakers",
      price: "50",
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Exercise Equipment",
      price: "70",
      image: "https://images.unsplash.com/photo-1591027480007-a42f6ef886c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <img src={item.image} alt='' />
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