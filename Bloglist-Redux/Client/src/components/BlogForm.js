import Button from 'react-bootstrap/Button'
import { useField } from '../hooks'
import Form from 'react-bootstrap/Form'

const BlogForm = ({ createBlog }) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const handleNewBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: title.value,
      author: author.value,
      url: url.value
    })

  }
  return (
    <div style={{ width:'25%' }}>
      <Form onSubmit={handleNewBlog}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            {...title}
            id="title"
            placeholder='Title'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>author:</Form.Label>
          <Form.Control
            {...author}
            id="author"
            placeholder='Author'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Url:</Form.Label>
          <Form.Control
            {...url}
            id="url"
            placeholder='URL'
          />
        </Form.Group>
        <Button style={{ marginTop: 20 }} variant="primary"type="submit" id="create">create</Button>
      </Form>
    </div>
  )
}
export default BlogForm