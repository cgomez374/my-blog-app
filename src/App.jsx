import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// DATA
import posts from './data/posts'
// PAGES
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
// COMPONENTS
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import { useState } from 'react'

function App() {
  const [postData, setpostData] = useState([...posts])
  
  function addPost(post){
    setpostData(prevPosts => [...prevPosts, {...post, id: prevPosts.length + 1}])
  }

  function updatePost(id, formData){
    const updatedPost = {
      ...formData,
      id
    }
    setpostData(prevPostData => {
      return prevPostData.map(post => post.id === id ? updatedPost : post)
    })
  }

  function deletePost(id){
    console.log('hello from app', id)
    setpostData(prevPostData => 
      prevPostData.filter(post => 
        post.id != id ? post : '' ))
  }

  return (
    <Router>
      <Navbar />
      <h1>Blog App</h1>
      <Routes>
        <Route path='/' element={ <PostList postData={postData} deletePost={deletePost} /> } />
        <Route path='/post/:id' element={ <PostDetails deletePost={deletePost} /> } />
        <Route path='/add' element={ <CreatePost addPost={addPost}  /> } />
        <Route path='/edit/:id' element={ <EditPost updatePost={updatePost} /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}

export default App
