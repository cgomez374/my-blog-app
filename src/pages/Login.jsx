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
    <section className="login-page">
      <h1>Login</h1>
      <Link to='/register'>register as new user</Link>
      <LoginForm
        isNewUser={false} 
        handleLogin={handleLogin} 
      />
    </section>

  )
}