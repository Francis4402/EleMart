import {FaTrash} from "react-icons/fa";
import { LuMicrowave } from "react-icons/lu";
import { IoWatchOutline, IoGameControllerOutline  } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { CiMobile3 } from "react-icons/ci";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import useCategory from "../Hooks/useCategory.jsx";
import Swal from "sweetalert2";
import {MdOutlineSystemUpdateAlt} from "react-icons/md";
import useAdmin from "../Hooks/useAdmin.jsx";




const Hero = () => {

    const [isAdmin] = useAdmin();
    const axiosPublic = useAxiosPublic();
    const [products,refetch] = useCategory();


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to remove this product",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        })
            .then(res => {
                if(res.isConfirmed){
                    axiosPublic.delete(`/addproduct/${id}`)
                        .then(res => {
                            if(res.data.deletedCount > 0){
                                refetch().then(() => {});
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Product Remove.",
                                    icon: "success"
                                }).then(() => {});
                            }
                        })
                }
            })
    }

    const logoIcons = [
        {
            name: "Home-Appliances",
            icon: <LuMicrowave size={80}/>
        },
        {
            name: "Smart-Watch",
            icon: <IoWatchOutline size={80}/>
        },
        {
            name: "Mobile-Phones",
            icon: <CiMobile3 size={80}/>
        },
        {
            name: "Headphone",
            icon: <PiHeadphones size={80}/>
        },
        {
            name: "Game-Console",
            icon: <IoGameControllerOutline size={80}/>
        },
    ]

    return (
        <div className="justify-center flex">
            <div className="container md:px-0 px-5">
                <div className="flex flex-wrap justify-center gap-5 py-10">
                    {
                        logoIcons.map(icons => <div key={icons.name}>
                            <Link to={`/${icons.name.toLowerCase()}`}>
                                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", damping: 14, stiffness: 500}} className="bg-white hover:bg-gray-200 p-10 rounded-xl shadow text-black">
                                    <p className="flex justify-center">{icons.icon}</p>
                                    <p className="text-center">{icons.name}</p>
                                </motion.button>
                            </Link>
                        </div>)
                    }
                </div>

                <div className="justify-center grid text-center py-14 text-black">
                    <h3 className="text-2xl font-semibold">All Products</h3>
                    <p>Check && Get Your Desired Product!</p>
                </div>

                <div>
                    {
                        products.length === 0 ? <h1 className="text-2xl font-semibold min-h-screen w-full justify-center items-center flex">There is no data</h1> :
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4 sm:px-0 px-5'>
                                {
                                    products.map(w => <div key={w?._id}>
                                        <div className="card w-full h-fit bg-white shadow-xl">
                                            <figure>
                                                <Link to={`/${w?.name}/${w?._id}`}><img src={w.image} width={250} height={100} alt="i" /></Link>
                                            </figure>

                                            <div className="card-body">
                                                <Link to={`/${w?.name}/${w?._id}`}><h2 className="card-title hover:underline">{w.name}</h2></Link>
                                                <div className="grid gap-2 text-gray-500 my-4">
                                                    {w.modelname === '' ? '' : <li>{w.modelname}</li>}
                                                    {w.feature1 === '' ? '' : <li>{w.feature1}</li>}
                                                    {w.feature2 === '' ? '' : <li>{w.feature2}</li>}
                                                    {w.feature3 === '' ? '' : <li>{w.feature3}</li>}
                                                    {w.feature4 === '' ? '' : <li>{w.feature4}</li>}
                                                    {w.displaytype === '' ? '' : <li>{w.displaytype}</li>}
                                                    {w.chipset === '' ? '' : <li>{w.chipset}</li>}
                                                    {w.sensor === '' ? '' : <li>{w.sensor}</li>}
                                                    {w.iprating === '' ? '' : <li>{w.iprating}</li>}
                                                </div>
                                                <hr/>
                                                <div className="justify-center text-xl font-semibold text-red-600 my-4 flex gap-3">
                                                    <div>Price:</div>
                                                    <div>{w.price === 0 ? <h2>To be Announced</h2> : <h2>${w?.price}</h2>}</div>
                                                </div>

                                                {
                                                    !isAdmin ? '' : <div className="flex justify-between">
                                                        <Link to={`/admindashboard/updateproducts/${w?._id}`}><button className="btn btn-neutral"><MdOutlineSystemUpdateAlt/>Update</button></Link>
                                                        <button onClick={() => handleDelete(w?._id)} className="btn btn-neutral"><FaTrash/>Delete</button>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Hero;