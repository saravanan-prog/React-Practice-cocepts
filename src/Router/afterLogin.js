export function afterLogin(navigate) {
 
  const token = localStorage.getItem("token");
  const tokenStatus = token ? true : false;
  if (tokenStatus) 
        navigate("/dashboard");
   else
      navigate('/login')
}