import { Link } from 'react-router-dom'
import './side_item.css'
import { useContext } from 'react'
import AppContext from '../../../app/app_context/AppContext'

const SideItem = ({item}) => {
  const {setSelectedItem} = useContext(AppContext)

  return (
    <Link to={'/product-details'} onClick={() => setSelectedItem(item)} className='side-item flex-row-center'>
        <div className='details'>
            <h6>{item.name}</h6>
            <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
            <p>${item.price}</p>
        </div>
        <div className='image-container'><img src={item.image} alt='' /></div>
    </Link>
  )
}

export default SideItem