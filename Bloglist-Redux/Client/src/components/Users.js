import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'
import Table from 'react-bootstrap/Table'

const Users = () => {
  const users = useSelector((state) => state.users)
  const padding = {
    paddingRight: 30
  }

  if (users) {
    return (
      <>
        <div>
          <Header />
        </div>
        <div>
          <h2 style={{ marginTop: 10 }}>Users</h2>
          <Table style={{ marginTop: 20 }} striped bordered>
            <thead>
              <tr>
                <th></th>
                <th>blogs created</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td style={padding}><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                  <td>{user.blogs.length}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    )
  }
}

export default Users
