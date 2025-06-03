import PostItem from "./PostItem.jsx"

export default function PostList({ filteredList, deletePost }){
  return (
    <ul>
    {
      filteredList.map(post => (
        <PostItem key={post.id} post={post} deletePost={deletePost} />
      ))
    }
    </ul>
  )
}