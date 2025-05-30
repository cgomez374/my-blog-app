import { useEffect } from "react"
import PostItem from "./PostItem.jsx"

export default function PostList({ postData, deletePost, filter, setFilter }){
  const categories = [...new Set(postData.map(post => post.category))]

  useEffect(() => {
    !categories.includes(filter) ? setFilter("all") : ""
  }, [postData, categories])

  const filteredList = postData.filter(post => {
    if(filter !== 'all') return filter.toLowerCase() === post.category.toLowerCase()
    return true
  })

  function handleSelectChange(e){
    setFilter(e.target.value)
  }

  return (
    <section className="post-list-container">
      <h2>Post list component</h2>
      <select name="categories" value={filter} onChange={handleSelectChange}>
        <option value="all">all</option>
        {
          categories.map((category, idx) => (
            <option key={idx} value={category}>{category}</option>
          ))
        }
      </select>
      <ul>
        {
          filteredList.map(post => (
            <PostItem key={post.id} post={post} deletePost={deletePost} />
          ))
        }
      </ul>
    </section>
  )
}