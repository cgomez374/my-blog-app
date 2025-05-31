import LoginForm from "../components/LoginForm"
import { useEffect } from "react"
import { useAuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login(){
  const { loggedInStatus, login } = useAuthContext()  

  const navigate = useNavigate()

  useEffect(() => {
    if(loggedInStatus) navigate('/')
  }, [loggedInStatus])

  function handleLogin(e, username, password){
    e.preventDefault()
    login(username, password)
  }

   return (
    <section>
      <h1>Login</h1>
      <LoginForm handleLogin={handleLogin} />
    </section>

  )
}