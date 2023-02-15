import { useSelector } from 'react-redux'
import Alert from 'react-bootstrap/Alert'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  if (!notification) {
    return
  }
  return (
    <div className='notification' style={{ marginTop: 20 }} >
      <Alert variant={notification[1] === 'error' ? 'danger' : 'success'} >{notification[0]}</Alert>
    </div>
  )
}
export default Notification