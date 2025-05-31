import {  useState } from "react"

export default function LoginForm({ handleLogin }){
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: ''
  })

  function handleLoginFormChange(event){
    setLoginFormData(prevLoginData => {
      return {
        ...prevLoginData,
        [event.target.name]: event.target.value
      }
    })
  }
  return (
    <form onSubmit={(e) => handleLogin(e, loginFormData.username, loginFormData.password)}>
      <input
        name="username" 
        type="text" 
        value={loginFormData.username}
        onChange={handleLoginFormChange}
        placeholder="username" 
      />
      <input
        name="password" 
        type="password" 
        value={loginFormData.password}
        onChange={handleLoginFormChange}
        placeholder="password" 
      />
      <button type="submit">submit</button>
    </form>
  )
}