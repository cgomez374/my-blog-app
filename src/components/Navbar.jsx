import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/add'>Add Post</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  )
}