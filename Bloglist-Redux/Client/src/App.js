import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Users from './components/Users'
import { initializeBlogs } from './reducers/blogReducer'
import { loggedUser } from './reducers/userReducer'
import { initializeUsers } from './reducers/usersReducer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogList from './components/BlogList'
import User from './components/User'
import BlogDetails from './components/BlogDetails'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeUsers())
  }, [dispatch])

  useEffect(() => {
    dispatch(loggedUser())
  }, [dispatch])

  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
