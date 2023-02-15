import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import Blog from './Blog'
import BlogForm from './BlogForm'
import Header from './Header'
import LoginForm from './LoginForm'
import Togglable from './Togglable'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'

const BlogList = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blogs)
  const blogFormRef = useRef()
  const user = useSelector((state) => state.user)

  const handleNewBlog = async (newBlog) => {
    blogFormRef.current.toggleVisibility()
    dispatch(createBlog(newBlog))
  }

  return (
    <div>
      {user === null ? (
        <LoginForm />
      ) : (
        <div>
          <Header />
          <h2 style={{ marginTop: 10 }}>Create a new Blog</h2>
          <Togglable buttonLabel="new blog" ref={blogFormRef}>
            <BlogForm createBlog={handleNewBlog} />
          </Togglable>
          <h2 style={{ marginTop: 20 }}>Blogs</h2>
          <ListGroup style={{ marginTop: 20 }}>
            {blogs.map((blog) => (
              <ListGroupItem key={blog.id}><Blog blog={blog} blogs={blogs} user={user} /></ListGroupItem>
            ))}
          </ListGroup>
        </div>
      )}
    </div>
  )
}

export default BlogList