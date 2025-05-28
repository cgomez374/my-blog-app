import posts from "../data/posts.js"

export default function PostList(){
  return (
    <section className="post-list-container">
      <h2>Post list component</h2>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>
              <h3>{ post.title }</h3>
              <p>{ post.date }</p>
              <p>{ post.author }</p>
              <p>{ post.content.substring(0, 30) + "..." }</p>
            </li>
          ))
        }
      </ul>
    
    </section>
  )
}