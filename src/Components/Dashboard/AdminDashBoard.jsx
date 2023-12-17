import {FaArrowRight, FaBars, FaHome} from "react-icons/fa";
import {MdOutlineAddCircle, MdOutlineFeaturedPlayList} from "react-icons/md";
import {GrChapterAdd} from "react-icons/gr";
import {Link} from "react-router-dom";
import {useState} from "react";

const AdminDashBoard = () => {

    const [sidenav, setSidenav] = useState(true);

    const handesideNav = () => {
        setSidenav(!sidenav)
    }

    return (
        <div className="justify-center flex shadow">
            <div className="container">
                <div className="justify-between flex py-4">
                    <div className="p-4 text-black bg-white shadow rounded-xl">
                        <FaBars size={20}/>
                    </div>

                    {

                    }
                    <div className="absolute bg-[#363062] w-64 h-screen left-0 top-0 p-5">
                        <div className="flex justify-between items-center">
                            <h1 className="text-4xl font-semibold text-white">EleMart</h1>
                            <FaArrowRight className="text-gray-500" size={20}/>
                        </div>
                        <div className="my-16">
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashBoard;