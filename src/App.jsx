import {BrowserRouter, Routes , Route} from "react-router-dom"
import Login from './pages/login'
import Project from '../src/pages/project'
import Task from '../src/pages/task'
import Calendar from './pages/calendar'
import Client from './pages/client'
import Settings from './pages/settings'
import Dashboard from './pages/dashboard'
import Team from './pages/team'
import Register from './pages/register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/task" element={<Task/>}/>
        <Route path="/client" element={<Client/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/register" element={<Register/>}/>


      </Routes>
    </BrowserRouter>
  )
}


export default App;
