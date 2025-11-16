import { Navigate } from "react-router-dom";

export default function ProtectRoute({ children }) {
  const token = localStorage.getItem("token");
  const tokenStatus = token ? true : false;
  if (tokenStatus) 
    return children;
  else 
    return <Navigate to="/login" />;
}





