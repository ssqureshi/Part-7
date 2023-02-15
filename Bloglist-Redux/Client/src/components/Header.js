import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logoutUser } from '../reducers/userReducer'
import Notification from './Notfication'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const padding = {
    paddingRight: 10
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Blog App</Navbar.Brand>
          <Nav className='me-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Blogs</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/users'>
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={padding}>
              {user.name} logged in
            </Navbar.Text>
          </Navbar.Collapse>
          <Button variant="danger" onClick={() => dispatch(logoutUser())} id="logout">
                Logout
          </Button>
        </Container>
      </Navbar>
      <Notification />
    </div>
  )
}

export default Header