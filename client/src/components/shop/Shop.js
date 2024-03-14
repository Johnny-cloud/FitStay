import './shop.css'
import TopLanding from '../top_landing/TopLanding'
import shopProducts from './shopProducts'
import ShopItem from './shop_item/ShopItem'
import Sidebar from './sidebar/Sidebar'
import { useEffect, useState } from 'react'

const Shop = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(8)
  const [filteredProducts, setFilteredProducts] = useState(shopProducts)

  const changePageDisplay = (event) => {
    setStart(event.target.id - 8)
    setEnd(event.target.id)

  }

  useEffect(() => {
    window.scrollTo(0, 50)
    setStart(0)
    setEnd(8)
  }, [filteredProducts])

  useEffect(() => {
    window.scrollTo(0, 50)
  }, [start, end])

  return (
    <div className='shop'>
      <TopLanding landingTitle={'Shop'} />
      <div className='main-content flex-row-center'>
        <div className='contents-section'>
          <div>
            <span className='results'>Showing {start + 1} - {end} of {shopProducts.length } of results</span>
          </div>
          <div className='flex-row-center'>
            {
              filteredProducts.slice(start, end).map(item => <ShopItem item={item}/>)
            }
          </div>
          {
            filteredProducts.length > 8 ? (
              <div className='page-btns'>
                <button onClick={changePageDisplay} id={8}>1</button>
                <button onClick={changePageDisplay} id={18}>2</button>
              </div>
            ) : (
              <div></div>
            )
          }
         
        </div>
          <Sidebar shopProducts={shopProducts} setFilteredProducts={setFilteredProducts} />
      </div>
      
    </div>
  )
}

export default Shop