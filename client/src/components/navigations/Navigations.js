import './navigations.css'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Container, Offcanvas} from 'react-bootstrap'
import { useState } from 'react'

const Navigations = () => {

  const [expanded, setExpanded] = useState(false)

  const hideNavbar = () => {
    setExpanded(false)
  }
  return (
    <Navbar expand="lg" sticky='top' variant='dark' expanded={expanded}>
      <Container>
        <Navbar.Brand><h2>FitStay</h2></Navbar.Brand>
        <Navbar.Toggle onClick={() => expanded ? setExpanded(false) : setExpanded('expanded')} />
        <Navbar.Collapse>
          <Navbar.Offcanvas>
            <Offcanvas.Header onClick={hideNavbar}><i class="bi bi-x-circle"></i></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='me-auto'>
                <Link onClick={hideNavbar} to={'/'}>Home</Link>
                <Link onClick={hideNavbar} to={'/about'}>About</Link>
                <Link onClick={hideNavbar} to={'/classes'}>Classes</Link>
                <Link onClick={hideNavbar} to={'/trainers'}>Trainers</Link>
                <Link onClick={hideNavbar} to={'/pricing'}>Pricing</Link>
                <Link onClick={hideNavbar} to={'gallery'}>Gallery</Link>
                <Link onClick={hideNavbar} to={'/schedule'}>Schedule</Link>
                <Link onClick={hideNavbar} to={'/blog'}>Blogs</Link>
                <Link onClick={hideNavbar} to={'/contact'}>Contact</Link>
                <Link onClick={hideNavbar} to={'/shop'}>Shop</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigations