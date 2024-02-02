import './navigations.css'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Container, Offcanvas} from 'react-bootstrap'

const Navigations = () => {
  return (
    <Navbar expand="lg" fixed='top' variant='dark'>
      <Container>
        <Navbar.Brand><h2>FitStay</h2></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Offcanvas>
            <Offcanvas.Header></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='me-auto'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About Us</Link>
                <Link to={'/classes'}>Classes</Link>
                <Link to={'/class-details'}>Class Details</Link>
                <Link to={'/trainers'}>Trainers</Link>
                <Link to={'/pricing'}>Pricing</Link>
                <Link to={'gallery'}>Gallery</Link>
                <Link to={'/schedule'}>Schedule</Link>
                <Link to={'/blog'}>Blogs</Link>
                <Link to={'/blog-details'}>Blog Details</Link>
                <Link to={'/shop'}>Shop</Link>

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigations