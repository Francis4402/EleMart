import {Outlet} from "react-router-dom";
import Navbar2 from "../HomeRoute/Navbar2.jsx";


const App = () => {
  return (
    <div className="bg-[#F5F5F5]">
        <Navbar2/>
        <Outlet/>
    </div>
  )
}

export default App