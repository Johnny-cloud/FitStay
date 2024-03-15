import './card_info.css'

const CardInfo = () => {
  return (
    <div className='billing-card'>
        <h5>CARD DETAILS</h5>
        <form>
            <div>
                <label htmlFor='card-number'>Card number</label>
                <input type='text' id='card-number' />
            </div>
            <div>
                <label htmlFor='name-on-card'>Name on card</label>
                <input type='text' id='name-on-card' />
            </div>
            <div>
                <label htmlFor='expiration-date'>Expiration date</label>
                <input type='text' id='expiration-date' />
            </div>
        </form>
    </div>
  )
}

export default CardInfo