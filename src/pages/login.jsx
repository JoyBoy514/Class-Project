import { useState } from "react"
import { Navigate,useNavigate } from "react-router-dom";
function Login() {
  const navigate=useNavigate();
  const[formdata , setformdata]=useState({
    username:" ",
    password:" "
  })
  //const[email,setEmail]=useState("");
  //const[pass,setPassword]=useState("");
  function handlechange(e){
    e.preventDefault();
    setformdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    
    console.log("login page",formdata)
    alert("Login Successfully")
    navigate("/dashboard",{state:formdata})

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