import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import { createNotification } from './notificationReducer'

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    addVote(state, action) {
      const votedBlog = action.payload
      const updatedBlogs = state.map(blog =>
        blog.id !== votedBlog.id ? blog : votedBlog
      )
      return updatedBlogs.sort((a, b) => b.likes - a.likes)
    },
    appendBlog(state, action) {
      state.push(action.payload)
    },
    setBlogs(state, action) {
      return action.payload
    },
    removeBlog(state, action) {
      const id = action.payload
      return state.filter(blog => blog.id !== id )
    }
  }
})

export const { appendBlog, setBlogs, addVote, removeBlog } = blogSlice.actions

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch(setBlogs(blogs.sort((a, b) => b.likes - a.likes)))
  }
}

export const createBlog = blog => {
  return async dispatch => {
    try {
      const createdBlog = await blogService.create(blog)
      dispatch(appendBlog(createdBlog))
      dispatch(createNotification([`a new blog ${createdBlog.title} by ${createdBlog.author} added`, 'success'], 5))
    }
    catch (exception) {
      dispatch(createNotification([
        'Blog could not be created', 'error'], 5))
    }

  }
}

export const voteBlog = blog => {
  return async dispatch => {
    try {
      const upvotedBlog = await blogService.update(blog.id, blog)
      dispatch(addVote(upvotedBlog))
    }
    catch (err) {
      dispatch(createNotification([
        'Blog could not be liked', 'error'], 5))    }
  }
}

export const deleteBlog = blog => {
  return async dispatch => {
    try {
      const id = blog.id
      if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
        await blogService.remove(id)
        dispatch(removeBlog(id))
      }
    }
    catch (err) {
      dispatch(createNotification([
        'Blog could not be deleted', 'error'], 5))    }
  }
}

export const addComment = (id, comment) => {
  return async dispatch => {
    try {
      const updatedBlog = await blogService.createComment(id, comment)
      console.log(updatedBlog)
      dispatch(addVote(updatedBlog))
    }
    catch {
      dispatch(createNotification([
        'Comment could not be added', 'error'], 5
      ))
    }
  }
}

export default blogSlice.reducer