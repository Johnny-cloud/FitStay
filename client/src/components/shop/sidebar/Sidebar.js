import './sidebar.css'
import shopProducts from '../shopProducts'
import SideItem from './side_item/SideItem'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div>
            <h3>Product Categories</h3>
            <ul>
                <li><i class="bi bi-chevron-right"></i> All</li>
                <li><i class="bi bi-chevron-right"></i> Dumbell</li>
                <li><i class="bi bi-chevron-right"></i> Shoe</li>
                <li><i class="bi bi-chevron-right"></i> Rope</li>
                <li><i class="bi bi-chevron-right"></i> Towel</li>
                <li><i class="bi bi-chevron-right"></i> Bottle</li>
                <li><i class="bi bi-chevron-right"></i> Bag</li>
            </ul>
        </div>
        <div>
            <h3>Products</h3>
            <ul>
                {
                    shopProducts.slice(6, 12).map(item => <li><SideItem item={item} /></li>)
                }
            </ul>
        </div>
    </div>
  )
}

export default Sidebar