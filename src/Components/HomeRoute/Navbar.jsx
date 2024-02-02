import {Link} from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";
import Cart from "./Cart";
import { useState } from "react";


const Navbar = () => {

    const {user, logOut} = UseAuth();
    const [isAdmin] = useAdmin();
    const [carts] = useCart();
    const [open, setOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success('User Logged Out Successfully'))
            .catch(error => toast.error(error))
    }

    return (
        <div className="justify-center flex  shadow w-full">
            <div className="container md:px-0 px-5">
                <div className="justify-between flex text-white items-center py-2 z-20">
                    <div className="text-xl font-bold">
                        <Link to={'/'}>
                            EleMart
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        
                        <div>
                            {
                                user ? <label tabIndex={0} className="btn btn-ghost bg-black/20 btn-circle" onClick={() => setOpen(!open)}>
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-8 sm:w-8 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">
                                        {carts.length}
                                    </span>
                                    </div>
                                </label> : ''
                            }
                        </div>
                      
                        {
                            !user ? <div className="flex gap-4">
                                <Link to={'/login'}>
                                    <button className="btn btn-ghost text-lg">SignIn</button>
                                </Link>
                                <Link to={'/register'}>
                                    <button className="btn btn-ghost text-lg">SignUp</button>
                                </Link>
                            </div> : <>
                                <div className="dropdown dropdown-end text-black">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} alt='i' />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <p className="md:text-base text-xs">{user?.displayName}</p>
                                        </li>
                                        {
                                            user && isAdmin && <Link to='admindashboard'><li><p>AdminDashBoard</p></li></Link>
                                        }
                                        <label htmlFor="my-drawer" className="drawer-button md:hidden"><li><p>Products</p></li></label>
                                        <li><button onClick={handleLogOut}>Logout</button></li>
                                    </ul>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <Cart open={open} setOpen={setOpen} />
            </div>
        </div>
    );
};

export default Navbar;