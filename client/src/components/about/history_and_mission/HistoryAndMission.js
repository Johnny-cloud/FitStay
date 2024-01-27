import './history_and_mission.css'

const HistoryAndMission = () => {
  return (
    <div className='history-and-mission'>
        <h5>History & Mission</h5>
        <div className='flex-row-center'>
          <div className='details'>
            <h1><i class="bi bi-bullseye"></i></h1>
            <h1>Our History</h1>
            <p>FitStay began in the year 2012 with only 50 members.</p>
            <p>Ever since, FitStay has grown to more than 20K members thankfully to the word of mouth with good news from our members.</p>
          </div>
          <div className='image-container'>
            <img src='https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
          </div>
        </div>

        <div className='div-2 flex-row-center'>
          <div className='details'>
            <h1><i class="bi bi-flag-fill"></i></h1>
            <h1>Our Mission</h1>
            <p>The mission of FitStay is to ensure that people achive their health and fitness goals.</p>
          </div>
          <div className='image-container'>
            <img src='https://plus.unsplash.com/premium_photo-1663133954692-55edaa5df98d?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
          </div>
        </div>
    </div>
  )
}

export default HistoryAndMission