import './schedule.css'
import TopLanding from '../top_landing/TopLanding'
import WeeklySchedule from '../home/weekly_schedule/WeeklySchedule'

const Schedule = () => {
  return (
    <div className='schedule'>
      <TopLanding landingTitle={'Our Schedule'} />
      <div className='weekly-schedule'><WeeklySchedule /></div>
    </div>
  )
}

export default Schedule