import PostItem from "./PostItem.jsx"

export default function PostList({ postData }){
  return (
    <section className="post-list-container">
      <h2>Post list component</h2>
      <ul>
        {
          postData.map(post => (
            <PostItem  key={post.id} post={post} />
          ))
        }
      </ul>
    
    </section>
  )
}