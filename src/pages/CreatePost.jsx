// import { Postfo }

import PostForm from "../components/PostForm";

export default function CreatePost({ addPost }){
  return (
    <section>
      <h1>Create Post Page</h1>
      <PostForm action='create' addPost={addPost}  />
    </section>
  ) 
}