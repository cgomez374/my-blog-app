import PostList from "../components/PostList";
import { useAuthContext } from "../context/AuthContext";

export default function UsersPostList({ posts, deletePost }){
  const { currentUser } = useAuthContext()
  const filteredList = posts.filter(post => post.author === currentUser.name)
  return (
    <section className="post-list-container">
      <h1>my posts</h1>
      <PostList filteredList={filteredList} deletePost={deletePost} />
    </section>
  )
}