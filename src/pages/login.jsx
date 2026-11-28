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
  
    <form onSubmit={handleSubmit}
      className="min-h-screen flex flex-col items-center justify-center gap-5 bg-cyan-100 p-6">
      
        <label>Email</label>
    <input type="email" required placeholder="Enter email address" name="email" onChange ={handlechange}
    className="h-14 w-full max-w-md rounded-xl border-2 border-blue-200 bg-white px-5 text-lg text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-200" />  
    
        <label>Password</label>
    <input type="password" required placeholder="Enter password" name="password" onChange ={handlechange}
    className="h-14 w-full max-w-md rounded-xl border-2 border-blue-200 bg-white px-5 text-lg text-slate-700 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-200" />
    
    <button type="submit" 
    className="h-14 w-full max-w-md rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-300 hover:bg-blue-700"
    >Submit</button>

    </form> 
    </>
  )
}


export default Login;