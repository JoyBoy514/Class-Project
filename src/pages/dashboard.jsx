import { useState } from "react";
import { useLocation } from "react-router-dom"

function Dashboard(){
    const location=useLocation();
    const [userdata,setUserdata]=useState("");
    function displaydata(){
        setUserdata(location.state);
        console.log(Userdata)
    }
    return(
        <>
            <button onclick={displaydata}>BUTTON</button>
        </>
    )
}
export default Dashboard;