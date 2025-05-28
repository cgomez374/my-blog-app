import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add Post</Link>
        <Link to='/login'>Login</Link>
      </ul>
    </nav>
  )
}