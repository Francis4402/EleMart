import {Link} from "react-router-dom";
import useAuth from "../Hooks/useAuth.jsx";
import toast from "react-hot-toast";

const Navbar = () => {

    const {user, logOut} = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(() => toast.success('User Logged Out Successfully'))
            .catch(error => toast.error(error))
    }

    return (
        <div className="justify-center flex bg-[#363062] shadow">
            <div className="container md:px-0 px-5">
                <div className="justify-between flex text-white items-center py-2">
                    <div className="text-xl font-bold">
                        <Link to={'/'}>
                            EleMart
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        {
                            !user ? <div className="flex gap-4">
                                <Link to={'/login'}>
                                    <button className="btn btn-ghost text-lg">SignIn</button>
                                </Link>
                                <Link to={'/register'}>
                                    <button className="btn btn-ghost text-lg">SignUp</button>
                                </Link>
                            </div> : <>
                                <button className="btn btn-ghost text-lg" onClick={handleLogOut}>LogOut</button>
                                <Link to="admindashboard">
                                    <button className="btn btn-ghost text-lg">DashBoard</button>
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;