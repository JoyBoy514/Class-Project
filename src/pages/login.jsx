import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Login() {
  const location=useLocation();
  const navigate=useNavigate();
  const[logindata , setLogindata]=useState({
    username:" ",
    password:" "
  })
  
  function handlechange(e){
    e.preventDefault();
    setLogindata({
      ...logindata,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    
    console.log("login page",logindata)
    alert("Login Successfully")
    navigate("/dashboard",{state:logindata})

  
  const registerdata=location.state
  if(logindata.username==registerdata.name && logindata.password==registerdata.password){
    console.log("if sucess")
    navigate("/dashboard",{state:logindata})
  }
  else
    console.log("Error")
}
  return (
    
    <>
    {/*
    <div className="text-blue-500">HI</div>
    <input type="email" required placeholder="Enter email address" value={email} onChange ={(e)=>setEmail(e.target.value)} />  
    <input type="password" required placeholder="Enter password" value={pass} onChange ={(e)=>setPassword(e.target.value)} />
    <button type="submit" onClick={console.log(email,pass)}>Submit</button>
    <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button>
    */}
  
    <form onSubmit={handleSubmit}>
    <input type="text" required placeholder="Enter Your userame" name="username" onChange ={handlechange} />  
    <input type="password" required placeholder="Enter password" name="password" onChange ={handlechange} />
    <button type="submit" >Submit</button>
    </form> 
    </>
  )
}


export default Login;