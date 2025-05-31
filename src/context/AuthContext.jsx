import { createContext, useContext, useState } from "react";
import { users } from "../data/users";

// WANT TO ADD A USER STATE SO WE PROVIDE THE LOGGED IN USERS NAME

// CREATE THE CONTEXT
const AuthContext = createContext()

// CUSTOM HOOK
export const useAuthContext = () => useContext(AuthContext)

// CREATE A PROVIDER COMPONENT
export function AuthProvider({children}){
  const [loggedInStatus, setLoggedInStatus] = useState(false)

  function login(username, password){
    users.forEach(user => 
      user.username === username && user.password === password 
      ? setLoggedInStatus(true)
      : ''
    )
  }

  function logout(){
    setLoggedInStatus(false)
  }

  return (
    <AuthContext.Provider value={{ loggedInStatus, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

