import './billing_info.css'

const BillingInfo = () => {
  return (
    <div className='billing-card'>
        <h5>BILLING DETAILS</h5>
        <form>
            <div>
                <label htmlFor='first-name'>First name</label>
                <input type='text' id='first-name' />
            </div>
            <div>
                <label htmlFor='last-name'>Last name</label>
                <input type='text' id='last-name' />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' />
            </div>
            <div>
                <label htmlFor='state'>State</label>
                <input type='text' id='state' />
            </div>
            <div>
                <label htmlFor='country-code'>Country code</label>
                <input type='text' id='country-code' />
            </div>
        </form>
    </div>
  )
}

export default BillingInfo