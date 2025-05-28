import { useLocation } from "react-router-dom"

export default function PostDetails(){
  const location = useLocation()

  if (!location.state) return null

  const { title, content, author, date } = location.state

  return (
    <section>
      <h2>{ title }</h2>
      <h4>by {author}</h4>
      <h4>posted: { date }</h4> 
      <p>{ content }</p>
    </section>
  )
}