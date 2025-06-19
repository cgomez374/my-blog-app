import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// DATA
import posts from './data/posts'
// CONTEXT
import { AuthProvider } from './context/AuthContext'
// PAGES
import HomePage from './pages/HomePage'
import UsersPostList from './pages/UsersPostList'
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import RegisterNewUser from './pages/RegisterNewUser'
// COMPONENTS
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  useEffect(() => {
    !JSON.parse(localStorage.getItem('posts')) 
    ? localStorage.setItem('posts', JSON.stringify(posts))
    : ''
  }, [])

  function getPostData(){
    return JSON.parse(localStorage.getItem('posts')) || posts
  }

  function updatePostLocalStorage(posts){
      localStorage.setItem('posts', JSON.stringify(posts))
  }
  const [postData, setpostData] = useState([
    ...getPostData()
  ])
  const [filter, setFilter] = useState('all')

  
  function addPost(post, author){
    const id = crypto.randomUUID();
    setpostData(prevPosts => {
      const updatedPostList = [...prevPosts, {
        ...post, 
        id,
        author
      }]
      updatePostLocalStorage(updatedPostList)
      return updatedPostList
    })
  }

  function updatePost(id, formData){
    const updatedPost = {
      ...formData,
      id
    }
    setpostData(prevPostData => {
      const updatedPostList = prevPostData.map(post => post.id === id ? updatedPost : post)
      updatePostLocalStorage(updatedPostList)
      return updatedPostList
    })
  }

  function deletePost(id){
    setpostData(prevPostData => {
      const updatedPostList = prevPostData.filter(post => 
        post.id !== id)
      updatePostLocalStorage(updatedPostList)
      return updatedPostList
    })
  }
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ 
            <HomePage 
              postData={postData} 
              deletePost={deletePost}
              filter={filter} 
              setFilter={setFilter}
            /> 
            } 
          />
          <Route element={<ProtectedRoute />} >
            <Route path='/post/:id' element={ <PostDetails deletePost={deletePost} /> } />
            <Route path='/add' element={ <CreatePost addPost={addPost}  /> } />
            <Route path='/edit/:id' element={ <EditPost updatePost={updatePost} /> } />
            <Route path='/my-posts' element={<UsersPostList posts={postData} deletePost={deletePost} />} />
          </Route>
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <RegisterNewUser /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
