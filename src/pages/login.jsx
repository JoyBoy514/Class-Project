import { useState } from "react"
function Login() {
  const[email,setEmail]=useState("");
  const[pass,setPassword]=useState("");
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("Printing in the print function")
    console.log(email,pass)
  }
  return (
    
    <>
    {/*
    <input type="email" required placeholder="Enter email address" value={email} onChange ={(e)=>setEmail(e.target.value)} />  
    <input type="password" required placeholder="Enter password" value={pass} onChange ={(e)=>setPassword(e.target.value)} />
    <button type="submit" onClick={console.log(email,pass)}>Submit</button>
    <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button>
    */}
    <form onSubmit={handleSubmit}>
    <input type="email" required placeholder="Enter email address" value={email} onChange ={(e)=>setEmail(e.target.value)} />  
    <input type="password" required placeholder="Enter password" value={pass} onChange ={(e)=>setPassword(e.target.value)} />
    <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button>
    </form> 
    </>
  )
}


export default Login;