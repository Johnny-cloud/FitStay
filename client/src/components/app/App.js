import './app.css'
import {Routes, Route} from 'react-router-dom'

import Home from '../home/Home'
import About from '../about/About'
import Classes from '../classes/Classes'
import Trainers from '../trainers/Trainers'
import Pricing from '../pricing/Pricing'
import Gallery from '../gallery/Gallery'
import Schedule from '../schedule/Schedule'
import Navigations from '../navigations/Navigations'
import Blog from '../blog/Blog'
import BlogDetails from '../blog/blog_details/BlogDetails'

import AppContext from './app_context/AppContext'

const App = () => {
  return (
    <div className='app'>
      <AppContext.Provider value={{}}>
        <Navigations />
        <div className='main-content'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/classes' element={<Classes />} />
            <Route exact path='/trainers' element={<Trainers />} />
            <Route exact path='/pricing' element={<Pricing />} />
            <Route exact path='/gallery' element={<Gallery />} />
            <Route exact path='/schedule' element={<Schedule />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/blog-details' element={<BlogDetails />}/>
          </Routes>
          
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App