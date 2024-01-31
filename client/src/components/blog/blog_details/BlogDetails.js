import './blog_details.css'
import TopLanding from '../../top_landing/TopLanding'
import StickySide from '../sticky_side/StickySide'
import blogsList from '../blogsList'

const BlogDetails = () => {
    
  return (
    <div className='blog-details-section'>
        <TopLanding landingTitle={'Try Out Our Meditation for Health Boost Today!'} />
        <div className='blog-details-main flex-row-center'>
            <div className='blog-details'>
                <div className='blog'>
                    <div className='image-container'><img src='https://images.unsplash.com/photo-1696446700088-3e800f748407?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></div>
                    <div className='details-section'>
                        <h6>By Admin</h6>
                        <p>Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, 
                            reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.</p>
                    </div>
                    
                </div>
                <div className='exercise-benefits'>
                    <h2>Why Regular Physical Exercise Is Important</h2>

                    <p>Some benefits of physical activity on brain health happen right after a session of moderate-to-vigorous physical activity. Benefits include improved thinking or cognition for children 6 to 13 years of age and reduced short-term feelings of anxiety for adults. Regular physical activity can help keep your thinking, learning, and judgment skills sharp as you age. 
                        It can also reduce your risk of depression and anxiety and help you sleep better.</p>

                    <p className='quote'>"The hardest thing about exercise is to start doing it. Once you are doing exercise regularly, 
                    the hardest thing is to stop it."
                    <br />
                    <h4>- Erin Gray</h4>
                    </p>

                    <p>Both eating patterns and physical activity routines play a critical role in weight management. You gain weight when you consume more calories through eating and drinking than 
                        the amount of calories you burn, including those burned during physical activity.</p>

                    <div className='images-container flex-row-center'>
                        <div className='image-container'><img src='https://plus.unsplash.com/premium_photo-1680294964703-3421e5d6debf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/></div>
                        <div className='image-container'><img src='https://images.unsplash.com/photo-1518609571773-39b7d303a87b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/></div>
                    </div>
                    
                    <h2>Exercise To Stay Healthy</h2>
                    <p>Adults who sit less and do any amount of moderate-to-vigorous physical activity gain some health benefits. 
                        Only a few lifestyle choices have as large an impact on your health as physical activity.</p>
                    <div className='tags-section flex-row-center'>
                        <div className='tags flex-row-center'>
                            <div><h4>Tags:</h4></div>
                            <div className='tag-bordered'>Health</div>
                            <div className='tag-bordered'>Wellness</div>
                            <div className='tag-bordered'>Fitness</div>
                        </div>

                        <div className='socials flex-row-center'>
                            <div><h4>Share:</h4></div>
                            <div className='social'><i class="bi bi-facebook"></i></div>
                            <div className='social'><i class="bi bi-whatsapp"></i></div>
                            <div className='social'><i class="bi bi-instagram"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <StickySide blogs={blogsList} />
        </div>
    </div>
  )
}

export default BlogDetails