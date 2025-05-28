import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// PAGES
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
// COMPONENTS
import Navbar from './components/Navbar'
import PostList from './components/PostList'

function App() {
  return (
    <Router>
      <h1>Blog App</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={ <PostList /> } />
        <Route path='/post/:id' element={ <PostDetails /> } />
        <Route path='/add' element={ <CreatePost /> } />
        <Route path='/edit/:id' element={ <EditPost /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}

export default App
