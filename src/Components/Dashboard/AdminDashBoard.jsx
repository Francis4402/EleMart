import {FaArrowRight, FaBars, FaHome} from "react-icons/fa";
import {MdOutlineAddCircle, MdOutlineFeaturedPlayList} from "react-icons/md";
import {GrChapterAdd} from "react-icons/gr";
import {Link, Outlet} from "react-router-dom";
import {useState} from "react";
import {FaPeopleGroup} from "react-icons/fa6";
import {IoLogOut} from "react-icons/io5";
import useProfileData from "../Hooks/useProfileData.jsx";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth.jsx";
const AdminDashBoard = () => {
    const {logOut} = useAuth();
    const [sidenav, setSidenav] = useState(true);
    const [users] = useProfileData();
    const handesideNav = () => {
        setSidenav(!sidenav)
    }

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success('User Logged Out Successfully'))
            .catch(error => toast.error(error))
    }

    return (
        <div>
            <div className="flex">
                <div className="bg-[#363062] w-[400px] min-h-screen left-0 top-0 p-5">
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl font-semibold text-white">EleMart</h1>
                        <FaArrowRight className="text-gray-500" size={20}/>
                    </div>
                    <div className="mt-10">
                        {
                            users.map(u => <div key={u.id} className="flex items-center gap-4">
                                <div className="justify-center flex">
                                    <img className="w-24 h-24 rounded-full" src={u?.image} alt={"i"} />
                                </div>
                                <div>
                                    <h1 className={"font-semibold text-white"}>{u?.name}</h1>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className="my-10">
                        <h4 className="text-gray-300 mb-2">MENU</h4>
                        <hr/>
                        <div className="text-white grid gap-5 mt-8">
                            <Link to="/">
                                <div className="flex items-center gap-6 hover:bg-blue-950 duration-200 ease-in-out delay-100 p-3 rounded">
                                    <FaHome size={30}/>
                                    <h1>Home</h1>
                                </div>
                            </Link>

                            <Link to="addproducts">
                                <div className="flex items-center gap-6 hover:bg-blue-950 duration-200 ease-in-out delay-100 p-3 rounded">
                                    <MdOutlineAddCircle size={30}/>
                                    <h1>Add Products</h1>
                                </div>
                            </Link>

                            <Link to="updateproducts">
                                <div className="flex items-center gap-6 hover:bg-blue-950 duration-200 ease-in-out delay-100 p-3 rounded">
                                    <GrChapterAdd size={30} />
                                    <h1>Update Products</h1>
                                </div>
                            </Link>

                            <Link to="featuredproducts">
                                <div className="flex items-center gap-6 hover:bg-blue-950 duration-200 ease-in-out delay-100 p-3 rounded">
                                    <MdOutlineFeaturedPlayList size={30} />
                                    <h1>Featured Products</h1>
                                </div>
                            </Link>

                            <Link to="allusers">
                                <div className="flex items-center gap-6 hover:bg-blue-950 duration-200 ease-in-out delay-100 p-3 rounded">
                                    <FaPeopleGroup size={30}/>
                                    <h1>All-Users</h1>
                                </div>
                            </Link>


                            <button onClick={handleLogOut} className="flex items-center gap-6 hover:bg-blue-950 duration-200 ease-in-out delay-100 p-3 rounded">
                                <IoLogOut size={30}/>
                                <h1>LogOut</h1>
                            </button>

                        </div>
                    </div>
                </div>

                <div className="w-full grid">
                    <div className="w-full shadow border h-fit">
                        <div className="justify-between p-4 flex items-center">
                            <div className="flex gap-3 items-center">
                                <FaHome size={20} />
                                <h1 className="font-semibold">Admin DashBoard</h1>
                            </div>
                            <div className="btn btn-outline">
                                <FaBars size={20} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminDashBoard;