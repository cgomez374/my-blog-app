import { Link } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

export default function PostItem({ post, deletePost }){
  const { currentUser } = useAuthContext()
  const isCurrentUserTheAuthor = ( currentUser && currentUser.name) === post.author
  return (
    <li>
      <h3>{ post.title }</h3>
      <p>date: { post.publishingDate }</p>
      <p>author: { post.author }</p>
      <p className="post-item-content">{ post.content.substring(0, 120) + '...' }</p>
      <div className="post-options-links">
        <Link 
          to={ `/post/${post.id}` }
          state={ post }
        >
          view
        </Link>
        {
          isCurrentUserTheAuthor && 
          <Link 
            to={ `/edit/${post.id}` }
            state={ post }
          >
            edit
          </Link>
        }
        {
          isCurrentUserTheAuthor &&
          <button onClick={() => deletePost(post.id)}>
            delete
          </button>
        }
      </div>
    </li>
  )
}