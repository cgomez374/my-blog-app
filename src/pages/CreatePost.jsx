// import { Postfo }

import PostForm from "../components/PostForm";

export default function CreatePost({ addPost }){
  return (
    <section className="post-form-container">
      <h1>Create Post</h1>
      <PostForm action='create' addPost={addPost}  />
    </section>
  ) 
}