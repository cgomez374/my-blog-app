import { Link } from "react-router-dom"

export default function PostItem({ post, deletePost }){
  return (
    <li>
      <h3>{ post.title }</h3>
      <p>date: { post.date }</p>
      <p>author: { post.author }</p>
      <p>{ post.content.substring(0, 50) + "..." }</p>
      <div className="post-options-links">
        <Link 
          to={ `/post/${post.id}` }
          state={ post }
        >
          view
        </Link>
        <Link 
          to={ `/edit/${post.id}` }
          state={ post }
        >
          edit
        </Link>
        <button onClick={() => deletePost(post.id)}>
          delete
        </button>
      </div>
    </li>
  )
}