import './product_details.css'
import TopLanding from '../../top_landing/TopLanding'
import shopProducts from '../shopProducts'
import ShopItem from '../shop_item/ShopItem'
import AppContext from '../../app/app_context/AppContext'
import { useContext, useEffect } from 'react'
import ProductSection from './product_section/ProductSection'

const ProductDetails = () => {
  const {selectedItem} = useContext(AppContext)

  useEffect(() => {
    window.scrollTo(0, 40)
  }, [selectedItem])


  return (
    <div className='product-details'>
      <TopLanding landingTitle={'Gym Equipment'} />
      <div className='main-content'>
        <ProductSection product={selectedItem} />
        <div>
          <h5>RELATED PRODUCTS</h5>
          <div className='flex-row-center'>
            {
              shopProducts.slice(6,9).map(item => <ShopItem item={item} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails