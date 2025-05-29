import { Link } from "react-router-dom"

export default function PostItem({ post }){
  return (
    <li>
      <h3>{ post.title }</h3>
      <p>{ post.date }</p>
      <p>{ post.author }</p>
      <p>{ post.content.substring(0, 30) + "..." }</p>
      <div className="post-options-links">
        <Link 
          to={ `/post/${post.id}` }
          state={ post }
        >
          view
        </Link>
        <Link 
          to={ `/edit/${post.id}` }
          state={{ post }}
        >
          edit
        </Link>
      </div>
    </li>
  )
}