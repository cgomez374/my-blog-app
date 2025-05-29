import { useLocation } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function EditPost({ updatePost }){
  const location = useLocation()

  if(!location.state) return null
  
  return (
    <section>
      <h1>Edit Post Page</h1>
      <PostForm 
        action='edit' 
        updatePost={updatePost} 
        post={location.state.post}
      />
    </section>
  )
}