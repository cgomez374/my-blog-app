import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar(){
  const { loggedInStatus, logout, currentUser } = useAuthContext()
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        { 
          loggedInStatus 
          && (
            <>
              <li><Link to='/add'>Add Post</Link></li>
              <li><Link to='/my-posts'>My Posts</Link></li>
            </>
          )
        }
        <li>
        {
          !loggedInStatus 
          ? <Link to='/login'>Login</Link>
          : <Link onClick={logout} to='/login'>Logout</Link>
        }
        </li>
      </ul>
      {
        currentUser && <p>hello, {currentUser.name}!</p>
      }
    </nav>
  )
}