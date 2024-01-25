import {createRoot} from 'react-dom'
import App from './components/app/App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

let root  = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)