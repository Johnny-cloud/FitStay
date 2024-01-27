import './trainers_and_members.css'

const TrainersAndMembers = () => {
  return (
    <div className='trainers-and-members'>
        <h5>Our Numbers</h5>
        <div className='flex-row-center'>
            <div>
                <div className='details-container'>
                    <h1>20+</h1>
                    <h4>Expert Trainers</h4>
                </div>
                <div className='image-container'>
                    <img src='https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                </div>
            </div>

            <div>
                <div className='details-container'>
                    <h1>10k</h1>
                    <h4>Total Members</h4>
                </div>
                <div className='image-container'>
                    <img src='https://images.unsplash.com/photo-1640622304964-3e2c2c0cd7cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrainersAndMembers