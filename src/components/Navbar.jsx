import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar(){
  const { loggedInStatus, logout } = useAuthContext()
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        { 
          loggedInStatus && <li><Link to='/add'>Add Post</Link></li>
        }
        <li>
        {
          !loggedInStatus 
          ? <Link to='/login'>Login</Link>
          : <Link onClick={logout} to='/login'>Logout</Link>
        }
        </li>
      </ul>
    </nav>
  )
}