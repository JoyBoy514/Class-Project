import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import API from "../components/formschema/api";
function Dashboard(){
    const location=useLocation();
    const [userdata,setUserdata]=useState("");
    //  function displaydata(){
    //    setUserdata(location.state);
    //    console.log(userdata) }
    const[check,setCheck]=useState(0);
    useEffect(()=>{
        setUserdata(location.state);
    console.log(userdata)
    },[])

    const checkpoint=async()=>{
        const response =await API.get("/api/get")
        console.log(response.data);
    }
    return(
        <>
            <button onClick={()=>checkpoint()}>BUTTON</button>
        </>
    )
}
export default Dashboard;