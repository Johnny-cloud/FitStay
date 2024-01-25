import './weekly_schedule.css'

const WeeklySchedule = () => {
  return (
    <div className='weekly-schedule'>
        <h5>Timetable</h5>
        <h1>Weekly Class Schedules</h1>
        <div className='table-container'>
            <table striped bordered responsive>
                <thead>
                    <th></th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                </thead>
                <tbody>
                    <tr>
                        <td>9:00am</td>
                        <td className='pink'>BODY BUILDING</td>
                        <td></td>
                        <td className='gold'>CYCLING</td>
                        <td className='green'>FITNESS</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>9:00am</td>
                        <td></td>
                        <td className='red'>KARATE</td>
                        <td></td>
                        <td></td>
                        <td className='purple'>BOXING</td>
                    </tr>
                    <tr>
                        <td>9:00am</td>
                        <td></td>
                        <td></td>
                        <td className='orange'>MEDITATION</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>9:00am</td>
                        <td className='blue'>RUNNING</td>
                        <td></td>
                        <td className='blue'>RUNNING</td>
                        <td></td>
                        <td className='blue'>RUNNING</td>
                    </tr>
                    <tr>
                        <td>9:00am</td>
                        <td></td>
                        <td className='orange'>MEDITATION</td>
                        <td></td>
                        <td></td>
                        <td className='green'>FITNESS</td>
                    </tr>
                    <tr>
                        <td>9:00am</td>
                        <td></td>
                        <td className='purple'>BOXING</td>
                        <td></td>
                        <td className='orange'>MEDITATION</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default WeeklySchedule