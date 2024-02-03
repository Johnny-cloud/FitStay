import {useState, useEffect, useContext} from 'react'
import TopLanding from '../../top_landing/TopLanding'
import './class_details.css'
import StickySide from './sticky_side/StickySide'
import AppContext from '../../app/app_context/AppContext'

const ClassDetails = () => {

    const [selectedClass, setSelectedClass] = useState({
        image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'yoga',
        day: "Saturday",
        time: "9:00am-10:00am",
    })

    const {classToDisplay} = useContext(AppContext)

    useEffect(() => {
        if(classToDisplay){
            window.scrollTo(0, 0)
            setSelectedClass(classToDisplay)
            console.log(classToDisplay)
        }
    }, [classToDisplay])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

  return (
    <div className='class-details'>
        <TopLanding landingTitle={selectedClass.title} />
        <div className='main-section flex-row-center'>
            <div className='details-container'>
                
                <div className='intro'>
                    <div className='image-container'><img src={selectedClass.image} alt='' /></div>
                    <h2>The Best Fitness Programs!</h2>
                    <p>Be active on most (preferably all) days every week. Accumulate 2½ to 5 hours of moderate intensity physical activity or 1 ¼ to 2 ½ hours of vigorous physical activity, 
                    or an equivalent combination of both moderate and vigorous activities, each week.</p>
                </div>

                <div className='facilities flex-row-center'>
                    <div>
                        <h2>We Provide The Best Facilities</h2>
                        <ul>
                            <li><i class="bi bi-check2-circle"></i> Skilled Trainers</li>
                            <li><i class="bi bi-check2-circle"></i> Trial Classes</li>
                            <li><i class="bi bi-check2-circle"></i> Health Checkups</li>
                            <li><i class="bi bi-check2-circle"></i> Modern Equipments</li>
                        </ul>
                    </div>
                    <div className='image-container'><img src='https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
                </div>

                <div className='things-to-bring'>
                    <h2>Things To Bring</h2>
                    <p>We encourage our members to come with their personal items as we discourage sharing due to our adherance to high
                        standards of personal hygiene.
                    </p>
                    <div >
                        <ul className='items flex-row-center'>
                            <li>
                                <h6><i class="bi bi-check-circle"></i> Water Bottle</h6>
                            </li>
                            <li>
                                <h6><i class="bi bi-check-circle"></i> Sport Shoes</h6>
                            </li>
                            <li>
                                <h6><i class="bi bi-check-circle"></i> Sweat Towel</h6>
                            </li>
                            <li>
                                <h6><i class="bi bi-check-circle"></i> Extra Clothes</h6>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='class-timetable'>
                    <h2>Class Time Table</h2>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <th>Day</th>
                                <th>Time</th>
                                <th>Trainer</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{selectedClass.day}</td>
                                    <td>{selectedClass.time}</td>
                                    <td>{'Trainer'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <StickySide selectedClass={selectedClass}/>

        </div> 
        {/* End Main section */}
    </div>
  )
}

export default ClassDetails