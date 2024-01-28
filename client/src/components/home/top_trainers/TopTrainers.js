import './top_trainers.css'

const TopTrainers = () => {
    const trainers = [
        {   
            name: "Michael",
            image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {   
            name: "Jane",
            image: "https://images.unsplash.com/photo-1518617840859-acd542e13a99?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {   
            name: "Lenny",
            image: "https://images.unsplash.com/photo-1551984427-6d77a1918093?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]
  return (
    <div className='top-trainers'>
        <h5>Top Trainers</h5>
        <h1>Meet Our Top Trainers</h1>
        <div className='flex-row-center'>
            {
                trainers.map(trainer => {
                    return (
                        <div className='image-container'>
                            <img src={trainer.image} alt=''/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TopTrainers