import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from './Header'


const User = () => {
  const id = useParams().id
  const users = useSelector((state) => state.users)
  if (!users) {
    return null
  }
  const user = users.find(user => user.id === id)

  return (
    <div>
      <Header />
      <h2>{user.name}</h2>
      <h3>added blogs</h3>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
      <ul>
      </ul>
    </div>
  )
}

export default User