import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { afterLogin } from "../../Router/afterLogin"

export default function LoginPage(){

    const navigate = useNavigate()

    const handleLogin = () => {
       
       localStorage.setItem("token","Sxytvltis1238edddf882225858")
       navigate('/dashboard')
    }

    useEffect(()=>{
          afterLogin(navigate)
      
     },[])

    return <div>
         <div className="heading text-center h1">
              Login Page
              <button onClick = {handleLogin} className="btn btn-primary"> Login </button>
         </div>
    </div>
}