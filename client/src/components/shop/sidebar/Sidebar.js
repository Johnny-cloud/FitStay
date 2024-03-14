import './sidebar.css'
import shopProducts from '../shopProducts'
import SideItem from './side_item/SideItem'

const Sidebar = ({shopProducts, setFilteredProducts}) => {

    const updateFilteredProducts = (event) => {
        if(event.target.id === 'all'){
            setFilteredProducts(shopProducts)
        } else{
            setFilteredProducts(shopProducts.filter(item => item.category === event.target.id))
        }
        
    }
  return (
    <div className='sidebar'>
        <div>
            <h3>Product Categories</h3>
            <ul>
                <li onClick={updateFilteredProducts} id='all'><i class="bi bi-chevron-right"></i> All</li>
                <li onClick={updateFilteredProducts} id='dumbell'><i class="bi bi-chevron-right"></i> Dumbell</li>
                <li onClick={updateFilteredProducts} id='shoes'><i class="bi bi-chevron-right"></i> Shoes</li>
                <li onClick={updateFilteredProducts} id='rope'><i class="bi bi-chevron-right"></i> Rope</li>
                <li onClick={updateFilteredProducts} id='towel'><i class="bi bi-chevron-right"></i> Towel</li>
                <li onClick={updateFilteredProducts} id='bottle'><i class="bi bi-chevron-right"></i> Bottle</li>
                <li onClick={updateFilteredProducts} id='bag'><i class="bi bi-chevron-right"></i> Bag</li>
            </ul>
        </div>
        <div>
            <h3>Products</h3>
            <ul>
                {
                    shopProducts.slice(6, 12).map(item => <li onClick={updateFilteredProducts}><SideItem item={item} /></li>)
                }
            </ul>
        </div>
    </div>
  )
}

export default Sidebar