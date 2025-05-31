import { Link, useLocation, useNavigate } from "react-router-dom"

export default function PostDetails({ deletePost }){
  const location = useLocation()
  const navigate = useNavigate()


  if (!location.state) return null

  const { id, title, content, author, date } = location.state
  
  function handleClick(){
    deletePost(id)
    navigate('/')
  }

  return (
    <section className="post-details">
      <h1>{ title }</h1>
      <h4>by {author}</h4>
      <h4>posted: { date }</h4> 
      <p className="content">{ content }</p>
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
    </section>
  )
}