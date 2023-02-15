import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { useField } from '../hooks'
import Form from 'react-bootstrap/Form'
import { logUser } from '../reducers/userReducer'
import Notification from './Notfication'
import Navbar from 'react-bootstrap/Navbar'

const LoginForm = () => {
  const username = useField('text')
  const password = useField('password')
  const dispatch = useDispatch()
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Blog App</Navbar.Brand>
      </Navbar>
      <h1>Log in to the app</h1>
      <Notification />
      <div style={{ width:'25%' }}>
        <Form onSubmit={(event) => {
          event.preventDefault()
          dispatch(logUser(username.value, password.value))
        }}>
          <Form.Group>
            <Form.Label>username:</Form.Label>
            <Form.Control
              {...username}
              id="username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>password:</Form.Label>
            <Form.Control
              {...password}
              id="password"
            />
          </Form.Group>
          <Button style={{ marginTop: 20 }}type="submit" id="login-button">login</Button>
        </Form>
      </div>
    </>
  )
}

export default LoginForm