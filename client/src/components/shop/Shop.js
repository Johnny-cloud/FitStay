import './shop.css'
import TopLanding from '../top_landing/TopLanding'
import shopProducts from './shopProducts'
import ShopItem from './shop_item/ShopItem'
import Sidebar from './sidebar/Sidebar'

const Shop = () => {
  const products = shopProducts
  return (
    <div className='shop'>
      <TopLanding landingTitle={'Shop'} />
      <div className='main-content flex-row-center'>
        <div className='contents-section'>
          <div className='flex-row-center'>
            {
              products.slice(0, 8).map(item => <ShopItem item={item}/>)
            }
          </div>
        </div>
          <Sidebar />
      </div>
      
    </div>
  )
}

export default Shop