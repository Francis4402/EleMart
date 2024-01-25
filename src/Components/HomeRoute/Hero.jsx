import {FaCartPlus, FaSearch, FaTrash} from "react-icons/fa";
import { LuMicrowave } from "react-icons/lu";
import { IoWatchOutline, IoGameControllerOutline  } from "react-icons/io5";
import { GiDeliveryDrone } from "react-icons/gi";
import { PiHeadphones } from "react-icons/pi";
import { CiMobile3 } from "react-icons/ci";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import useCategory from "../Hooks/useCategory.jsx";
import Swal from "sweetalert2";
import {MdOutlineSystemUpdateAlt} from "react-icons/md";
import React from "react";

const Hero = () => {

    const axiosPublic = useAxiosPublic();
    const [products,refetch] = useCategory();

    const data = products.filter(data => data.featured !== 'no');

    const totalSavings = data.reduce((accumulator, product) => {
        return accumulator + (product?.price - product?.priceDiscount);
    }, 0);
    const handleAddtoCart = (xboxid) => {

        const { name, image, price, modelname } = products.find(product => product._id === xboxid);

        const payload = {
            name: name,
            image: image,
            price: price,
            modelname: modelname,
        };
        axiosPublic.post('/cart', payload)
            .then((res) => {
                if(res.data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added to Cart',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }

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
                                refetch();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Product Remove.",
                                    icon: "success"
                                });
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
            name: "Drone",
            icon: <GiDeliveryDrone size={80}/>
        },
        {
            name: "Game-Console",
            icon: <IoGameControllerOutline size={80}/>
        },
    ]

    return (
        <div>
            <div className="flex gap-3 items-center py-10">
                <input type="text" placeholder="search" className="w-full rounded-lg p-3 shadow" />
                <div className="btn btn-neutral shadow-lg">
                    <FaSearch size={20} />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
                {
                    logoIcons.map(icons => <div key={icons.name}>
                        <Link to={`/${icons.name.toLowerCase()}`}>
                            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", damping: 14, stiffness: 500}} className="bg-white hover:bg-gray-200 p-10 rounded-xl shadow">
                                <p className="flex justify-center">{icons.icon}</p>
                                <p className="text-center">{icons.name}</p>
                            </motion.button>
                        </Link>
                    </div>)
                }
            </div>

            <div className="justify-center grid text-center py-24">
                <h3 className="text-2xl font-semibold">Featured Products</h3>
                <p>Check && Get Your Desired Product!</p>
            </div>

            <div>
                <hr/>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4'>
                    {
                        data.map(w => <div key={w?.id}>
                            <div className="card w-full h-fit bg-base-100 shadow-xl">
                                <figure><Link to={`/${w?.name}/${w?._id}`}><img src={w.image} width={250} height={100} alt="i" /></Link></figure>
                                <p className="absolute mt-5 px-5 py-1 bg-blue-900 text-white rounded-md">Save: {totalSavings} tk</p>
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
                                    <div className="text-center text-xl font-semibold text-red-600 my-4">
                                        <h2>{w.price} tk</h2>
                                    </div>
                                    <button onClick={() => {handleAddtoCart(w?._id)}} className="btn btn-neutral"><FaCartPlus/>Buy Now</button>
                                    <div className="flex justify-between">
                                        <Link to={`/admindashboard/updateproducts/${w?._id}`}><button className="btn btn-neutral"><MdOutlineSystemUpdateAlt/>Update</button></Link>
                                        <button onClick={() => handleDelete(w?._id)} className="btn btn-neutral"><FaTrash/>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Hero;