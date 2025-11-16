import { useNavigate } from "react-router-dom"

export default function DashboardPAge(){

     const navigate = useNavigate()

     const handleLogout = () => {
          localStorage.removeItem("token")
          navigate("/login")
     }

    return <div>
         <div className="heading text-center h1">
              Dashboard Page

              <button onClick = {handleLogout}>logout</button>
         </div>
    </div>
}