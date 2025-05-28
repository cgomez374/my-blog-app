export default function PostForm(){
  return (
    <form action="">
      <input type="text" name="title" placeholder="title" />
      <textarea type="text" name="content" placeholder="content"></textarea>
      <input type="text" name="author" placeholder="author" />
      <input type="text" name="category" placeholder="category" />
      <button type="submit" >submit</button>
    </form>
  )
}