import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// DATA
import posts from './data/posts'
// CONTEXT
import { AuthProvider, useAuthContext } from './context/AuthContext'
// PAGES
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import RegisterNewUser from './pages/RegisterNewUser'
// COMPONENTS
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import { useState } from 'react'

function App() {
  const [postData, setpostData] = useState([...posts])
  const [filter, setFilter] = useState('all')
  
  function addPost(post, author){
    setpostData(prevPosts => 
      [...prevPosts, {
        ...post, 
        id: prevPosts.length + 1,
        author
      }])
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
    setpostData(prevPostData => 
      prevPostData.filter(post => 
        post.id !== id))
  }
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ 
            <PostList 
              postData={postData} 
              deletePost={deletePost}
              filter={filter} 
              setFilter={setFilter}
            /> 
            } 
          />
          <Route path='/post/:id' element={ <PostDetails deletePost={deletePost} /> } />
          <Route path='/add' element={ <CreatePost addPost={addPost}  /> } />
          <Route path='/edit/:id' element={ <EditPost updatePost={updatePost} /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <RegisterNewUser /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
