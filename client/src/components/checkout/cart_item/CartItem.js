

const CartItem = ({item}) => {
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
            <div>Qty: {item.quantity}</div>
            <div>Tot: <b>${item.price * item.quantity}</b></div>
        </div>
    </div>
  )
}

export default CartItem