import { Link, Outlet } from "react-router-dom";

function Admin() {
    return ( 
        <div>
            <nav>
        <Link to ={"/adminlayout/dashboard"}>dashboard</Link>      
        <Link to ={"/adminlayout/settings"}>settings</Link>      
        <Link to ={"/adminlayout/userdetails"}>admindetails</Link> 
        </nav> 
        <Outlet/> 
        </div>  
         
    )
}
export default Admin ;