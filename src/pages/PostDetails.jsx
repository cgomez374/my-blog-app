import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

export default function PostDetails({ deletePost }){
  const location = useLocation()
  const navigate = useNavigate()
  const { loggedInStatus, currentUser } = useAuthContext()


  if (!location.state) return null

  const { id, title, content, author, publishingDate } = location.state

  const isCurrentUserTheAuthor = ( currentUser && currentUser.name) === author

  
  function handleClick(){
    deletePost(id)
    navigate('/')
  }

  return (
    <section className="post-details">
      <h1>{ title }</h1>
      <h4>by {author}</h4>
      <h4>posted: { publishingDate }</h4> 
      <p className="content">{ content }</p>
      {
        (loggedInStatus && isCurrentUserTheAuthor) && 
        <div className="post-options-links">
          <Link 
            to={ `/edit/${id}` }
            state={ location.state }
          >
            edit
          </Link>
          <button onClick={handleClick}>
            delete
          </button>
        </div>
      }
    </section>
  )
}