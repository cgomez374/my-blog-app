import { useLocation } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function EditPost({ updatePost }){
  const location = useLocation()

  if(!location.state) return null
  
  return (
    <section className="post-form-container">
      <h1>Edit Post</h1>
      <PostForm 
        action='edit' 
        updatePost={updatePost} 
        post={location.state}
      />
    </section>
  )
}