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
  // need to create function to add post to state

  return (
    <Router>
      <h1>Blog App</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={ <PostList postData={postData} /> } />
        <Route path='/post/:id' element={ <PostDetails /> } />
        <Route path='/add' element={ <CreatePost setpostData={setpostData}  /> } />
        <Route path='/edit/:id' element={ <EditPost /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}

export default App
