import { useEffect } from "react"
import PostList from "../components/PostList.jsx"

export default function HomePage({ postData, deletePost, filter, setFilter }){
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
      <div className="banner">
        <h1>yapper - the yap app!</h1>
      </div>
      <select name="categories" value={filter} onChange={handleSelectChange}>
        <option value="all">all</option>
        {
          categories.map((category, idx) => (
            <option key={idx} value={category}>{category}</option>
          ))
        }
      </select>
      {
        <PostList filteredList={filteredList} deletePost={deletePost} />
      }
    </section>
  )
}