import { createContext, useContext, useState } from "react";
import { users } from "../data/users";

// WANT TO ADD A USER STATE SO WE PROVIDE THE LOGGED IN USERS NAME

// CREATE THE CONTEXT
const AuthContext = createContext()

// CUSTOM HOOK
export const useAuthContext = () => useContext(AuthContext)

// CREATE A PROVIDER COMPONENT
export function AuthProvider({children}){
  const savedLoggedInStatus = JSON.parse(localStorage.getItem('loginInfo'))
  const savedCurrentUser = JSON.parse(localStorage.getItem('loginInfo'))
  const [loggedInStatus, setLoggedInStatus] = useState(
    savedLoggedInStatus ? savedLoggedInStatus.loggedInStatus : false
  )
  const [currentUser, setCurrentUser] = useState(
    savedCurrentUser ? savedCurrentUser.currentUser : null
  )

  function login(username, password){
    users.forEach(user => {
      if(user.username === username && user.password === password){
        setLoggedInStatus(true)
        setCurrentUser(user)
        localStorage.setItem('loginInfo', JSON.stringify({
          loggedInStatus: true,
          currentUser: user
        }))
      }})
  }

  function logout(){
    setLoggedInStatus(false)
    setCurrentUser(null)
    localStorage.setItem('loginInfo', JSON.stringify({
          loggedInStatus: false,
          currentUser: null
        }))

  }

  function registerNewUser(name, username, password){
    const id = users.length + 1
    const exists = users.some(user => user.username === username)
    if(!exists){
      users.push({
        id,
        name,
        username,
        password
      })
      return true
    }
    
    return false
  }

  return (
    <AuthContext.Provider value={{ currentUser, loggedInStatus, login, logout, registerNewUser }}>
      {children}
    </AuthContext.Provider>
  )
}

