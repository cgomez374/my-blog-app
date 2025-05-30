import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function PostForm({ action, addPost, updatePost, post }){
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: post ? post.title : '',
    content: post ? post.content : '',
    author: post ? post.author : '',
    category: post ? post.category : ''
  })

  function handleChange(e){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }})
  }

  function handleSubmit(e){
    e.preventDefault()
    action === 'create' ? addPost(formData) : updatePost(post.id, formData)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        placeholder="title" 
        value={formData.title}
        onChange={handleChange}
      />
      <textarea 
        type="text" 
        name="content" 
        placeholder="content"
        value={formData.content}
        onChange={handleChange}
      >
      </textarea>
      <input 
        type="text" 
        name="author" 
        placeholder="author" 
        value={formData.author}
        onChange={handleChange}
      />
      <input 
        type="text" 
        name="category" 
        placeholder="category" 
        value={formData.category}
        onChange={handleChange}
      />
      <button 
        type="submit" 
      >
        submit
      </button>
    </form>
  )
}