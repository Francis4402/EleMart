import {Link, Outlet, useLoaderData} from "react-router-dom";
import {FaHome, FaMinus, FaPlus} from "react-icons/fa";
import {useState} from "react";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import Swal from "sweetalert2";
const ProductDetails = () => {

    const {_id, name, image, price, modelname, displaytype, chipset, sensor, iprating, feature1, feature2, feature3, feature4} = useLoaderData();

    const [number, setNumber] = useState(1);

    const axiosPublic = useAxiosPublic();
    const handleDecrease = () => {
        if (number > 1) {
            setNumber(number - 1);
        }
    };

    const handleIncrease = () => {
        setNumber(number + 1);
    };

    const handleAddtoCart = () => {
        const payload = {
            name: name,
            image: image,
            price: price,
            modelname: modelname,
            display: displaytype,
            processor: chipset,
            sensor: sensor,
            quantity: number,
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

    return (
        <div>
            <div className="justify-center flex">
                <div className="container md:px-0 px-5">
                    <div className="text-gray-500 flex gap-2 items-center my-4">
                        <Link to={'/'}><FaHome size={20} /></Link>
                        /
                        <p>{modelname}</p>
                    </div>
                    <div className="justify-center flex my-16">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            <div className="flex justify-center">
                                <img src={image} alt="i"/>
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold">{name}</h1>
                                <div>
                                    <button className="my-4 bg-gray-200 px-3 py-2 rounded-full">Price: <span className="font-semibold">{price}</span> tk</button>
                                </div>
                                <h1 className="text-xl font-semibold my-4">Key Features</h1>
                                <ul className="grid gap-2">
                                    <li>{modelname}</li>
                                    {
                                        displaytype === 'N' ? <li>{feature1}</li> : <li>{displaytype}</li>
                                    }
                                    {
                                        chipset === 'N' ? <li>{feature2}</li> : <li>{chipset}</li>
                                    }
                                    {
                                        sensor === 'N' ? <li>{feature3}</li> : <li>{sensor}</li>
                                    }
                                    {
                                        iprating === 'N' ? <li>{feature4}</li> : <li>{iprating}</li>
                                    }

                                </ul>
                                <div className="my-4">
                                    <h1 className="text-lg font-semibold">Payment Options</h1>

                                    <div className="grid lg:grid-cols-2 lg:gap-6">
                                        <div className="bg-white flex items-center border my-4 gap-4 rounded">

                                            <div className="bg-gray-100 w-16 h-28 justify-center flex">
                                                <input type="checkbox" />
                                            </div>

                                            <div className="grid">
                                                <h1 className="text-xl font-semibold">{price} tk</h1>
                                                <p className="text-xs">Cash Discount Price</p>
                                                <p className="text-gray-400 text-xs">Online / Cash Payment</p>
                                            </div>
                                        </div>

                                        <div className="bg-white flex items-center border my-4 gap-4 rounded">

                                            <div className="bg-gray-100 w-16 h-28 justify-center flex">
                                                <input type="checkbox" />
                                            </div>

                                            <div className="grid">
                                                <h1 className="text-xl font-semibold">{price} tk</h1>
                                                <p className="text-xs">Cash Discount Price</p>
                                                <p className="text-gray-400 text-xs">Online / Cash Payment</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="justify-start flex items-center gap-10 my-4">
                                        <div className="grid grid-cols-3 border rounded-lg items-center bg-white">
                                            <button onClick={handleDecrease} className="p-2 flex justify-center">
                                                <FaMinus/>
                                            </button>
                                            <form>
                                                <p className="px-4 py-2 border flex justify-center">{number}</p>
                                            </form>
                                            <button onClick={handleIncrease} className="p-2 flex justify-center">
                                                <FaPlus/>
                                            </button>
                                        </div>
                                        <div>
                                            <AwesomeButton onPress={() => handleAddtoCart(_id)} type="primary">Buy Now</AwesomeButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="justify-center flex">
                <div className="container">
                    <ul className="flex flex-wrap gap-5 md:px-0 px-2">
                        <Link to={`/${name}/${_id}`}><li className="px-6 py-3 font-semibold rounded-lg bg-white hover:bg-orange-400 hover:text-white duration-200 cursor-default">Specification</li></Link>
                        <Link to={'description'}><li className="px-6 py-3 font-semibold rounded-lg bg-white hover:bg-orange-400 hover:text-white duration-200 cursor-default">Description</li></Link>
                        <Link to={'questions'}><li className="px-6 py-3 font-semibold rounded-lg bg-white hover:bg-orange-400 hover:text-white duration-200 cursor-default">Questions</li></Link>
                        <Link to={'reviews'}><li className="px-6 py-3 font-semibold rounded-lg bg-white hover:bg-orange-400 hover:text-white duration-200 cursor-default">Reviews</li></Link>
                    </ul>
                    <div className="my-4">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetails;