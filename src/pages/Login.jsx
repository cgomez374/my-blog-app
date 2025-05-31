import LoginForm from "../components/LoginForm"
import { useEffect } from "react"
import { useAuthContext } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Login(){
  const { loggedInStatus, login } = useAuthContext()  

  const navigate = useNavigate()

  useEffect(() => {
    if(loggedInStatus) navigate('/')
  }, [loggedInStatus])

  function handleLogin(username, password){
    login(username, password)
  }

   return (
    <section>
      <h1>Login</h1>
      <LoginForm
        isNewUser={false} 
        handleLogin={handleLogin} 
      />
      <Link to='/register'>new user</Link>
    </section>

  )
}