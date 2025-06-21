import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";

export default function Navbar(){
  const { loggedInStatus, logout, currentUser } = useAuthContext()
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close nav if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => setMenuOpen(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  
  function handleLogout(){
    logout()
    handleLinkClick()
  }

  return (
    <nav ref={navRef}>
      <button className="hamburger" onClick={toggleMenu}>☰</button>
      <ul className={menuOpen ? 'show' : ''}>
        <li><Link to='/' onClick={handleLinkClick}>Home</Link></li>
        { 
          loggedInStatus 
          && (
            <>
              <li><Link to='/add' onClick={handleLinkClick}>Add Post</Link></li>
              <li><Link to='/my-posts' onClick={handleLinkClick}>My Posts</Link></li>
            </>
          )
        }
        <li>
        {
          !loggedInStatus 
          ? <Link to='/login' onClick={handleLinkClick}>Login</Link>
          : <Link onClick={handleLogout} to='/login'>Logout</Link>
        }
        </li>
      </ul>
      {
        currentUser && <p>hello, {currentUser.name}!</p>
      }
    </nav>
  )
}