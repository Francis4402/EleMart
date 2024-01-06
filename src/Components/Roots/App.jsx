import {Outlet} from "react-router-dom";
import Navbar from "../HomeRoute/Navbar.jsx";


const App = () => {
  return (
    <div className="bg-[#F5F5F5]">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default App