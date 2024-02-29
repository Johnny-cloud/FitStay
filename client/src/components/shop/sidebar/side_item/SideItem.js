import './side_item.css'

const SideItem = ({item}) => {
  return (
    <div className='side-item flex-row-center'>
        <div className='details'>
            <h6>{item.name}</h6>
            <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
            <p>${item.price}</p>
        </div>
        <div className='image-container'><img src={item.image} alt='' /></div>
    </div>
  )
}

export default SideItem