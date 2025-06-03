import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function ProtectedRoute(){
  const { loggedInStatus  } = useAuthContext()

  return loggedInStatus ? <Outlet /> : <Navigate to="/login" />

}