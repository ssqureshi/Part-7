import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useField } from '../hooks'
import { voteBlog, deleteBlog, addComment } from '../reducers/blogReducer'
import Header from './Header'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const BlogDetails = () => {
  const id = useParams().id
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const comment = useField('text')


  if (!blogs) {
    return null
  }
  const blog = blogs.find(blog => blog.id === id)

  if (blog) {

    const handleComment = (event) => {
      event.preventDefault()
      const comm = {
        comment: comment.value
      }
      dispatch(addComment(blog.id, comm))
    }

    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <h2 style={{ marginTop: 10 }}>{blog.title}</h2>
          <a href={blog.url}>{blog.url}</a>
          <br />
          {blog.likes} <Button variant="info" onClick={() => dispatch(voteBlog(blog))} id="like">like</Button>
          <br />
        added by {blog.author}
          <br />
          { blog.user.id === user.id && <Button variant="danger" onClick={() => {
            navigate('/')
            dispatch(deleteBlog(blog))
          }} id="remove">remove
          </Button>}
          <h3>Comments</h3>
          <Form style={{ width:'25%' }} onSubmit={handleComment}>
            <Form.Control {...comment} id='comment' placeholder='Comment'/>
            <Button style={{ marginTop: 10, marginBottom: 10 }} type="submit" id="addComment">add comment</Button>
          </Form>
          {blog.comments ? blog.comments.map(comment => {
            return (
              <li key={comment}>{comment}</li> )
          }) : null }
        </div>
      </div>
    )
  }

}

export default BlogDetails