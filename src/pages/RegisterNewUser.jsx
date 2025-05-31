import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

export default function RegisterNewUser(){
  const [registrationError, setRegistrationError] = useState(false)
  const navigate = useNavigate()
  const { registerNewUser } = useAuthContext()

  function handleRegister(name, username, password){
    !registerNewUser(name, username, password) 
      ? setRegistrationError(true) 
      : navigate('/login', { state: { successfullyRegistered: true } })
  }
  return (
    <section>
      <h1>Register New User</h1>
      {
        registrationError && <p>error! please try again!</p>
      }
      <LoginForm 
        isNewUser={true} 
        handleRegister={handleRegister}
      />
    </section>
  )
}