import {  useState } from "react"
import { useLocation } from "react-router-dom"

export default function LoginForm({ isNewUser, handleLogin, handleRegister }){
  const [loginFormData, setLoginFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  })

  const successfullyRegistered = useLocation().state?.successfullyRegistered

  function handleLoginFormChange(event){
    setLoginFormData(prevLoginData => {
      return {
        ...prevLoginData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    isNewUser 
    ? handleRegister(loginFormData.firstName + ' ' + loginFormData.lastName, loginFormData.username, loginFormData.password)
    : handleLogin(loginFormData.username, loginFormData.password)
  }
  return (
    <form className="login-reg-form" onSubmit={handleSubmit}>
      {
        successfullyRegistered && <p>successfully Registered, please login!</p>
      }
      {
        isNewUser && 
        <input 
          name="firstName"
          type="text" 
          value={FormData.firstName}
          onChange={handleLoginFormChange}
          placeholder="first name"
        />
      }
      {
        isNewUser &&
        <input 
          name="lastName"
          type="text" 
          value={FormData.lastName}
          onChange={handleLoginFormChange}
          placeholder="last name"
        />
      }
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