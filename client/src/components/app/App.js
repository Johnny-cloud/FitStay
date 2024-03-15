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
import ClassDetails from '../classes/class_details/ClassDetails'
import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import TrainerDetails from '../trainers/trainer_details/TrainerDetails'
import Shop from '../shop/Shop'
import ProductDetails from '../shop/product_details/ProductDetails'
import Cart from '../cart/Cart'
import Checkout from '../checkout/Checkout'

import AppContext from './app_context/AppContext'
import { useEffect, useState } from 'react'

const App = () => {
  const [filterCategory, setFilterCategory] = useState('all')
  const [blogToDisplay, setBlogToDisplay] = useState(null)
  const [classToDisplay, setClassToDisplay] = useState(null)
  const [selectedTrainer, setSelectedTrainer] = useState(null)
  const [selectedItem, setSelectedItem] = useState({
    name: "Sleeveless Shirt",
    price: 100,
    image: "https://images.unsplash.com/photo-1525171254930-643fc658b64e?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},)
  const [cart, setCart] = useState([])


  useEffect(() => {
    if(JSON.parse(localStorage.getItem("cart"))){
      setCart(JSON.parse(localStorage.getItem("cart")))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const contextValues = {filterCategory, setFilterCategory, blogToDisplay, setBlogToDisplay, 
    classToDisplay, setClassToDisplay, selectedTrainer, setSelectedTrainer, selectedItem, setSelectedItem,
    cart, setCart
  }

  return (
    <div className='app'>
      <AppContext.Provider value={contextValues}>
        <Navigations />
        <div className='main-content-container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/classes' element={<Classes />} />
            <Route exact path='/trainers' element={<Trainers />} />
            <Route exact path='/pricing' element={<Pricing />} />
            <Route exact path='/gallery' element={<Gallery />} />
            <Route exact path='/schedule' element={<Schedule />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/trainer-details' element={<TrainerDetails />} />
            <Route exact path='/blog-details' element={<BlogDetails />}/>
            <Route exact path='/class-details' element={<ClassDetails />} />
            <Route exact path='/shop' element={<Shop />}/>
            <Route exact path='/product-details' element={<ProductDetails />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
          </Routes>
          
        </div>
        <Footer />
      </AppContext.Provider>
    </div>
  )
}

export default App