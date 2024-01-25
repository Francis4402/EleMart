import useCategory from "../../Hooks/useCategory.jsx";
import useAxiosPublic from "../../Axiosfiles/useAxiosPublic.jsx";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {FaCartPlus, FaTrash} from "react-icons/fa";
import {MdOutlineSystemUpdateAlt} from "react-icons/md";
import React from "react";

const HeadphonesAll = () => {
    const getRandomorder = () => Math.random() - 0.5;
    const [products,refetch] = useCategory();

    const data = products.filter(phone => phone.categories === 'headphones')

    const randomizeddata = data.sort(getRandomorder);

    const axiosPublic = useAxiosPublic();
    const handleAddtoCart = (productId) => {

        const { name, image, price, modelname } = products.find(product => product._id === productId);

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

    return (
        <div>
            <hr/>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4'>
                {
                    randomizeddata.map(w => <div key={w?.id}>
                        <div className="card w-full h-fit bg-base-100 shadow-xl">
                            <figure><Link to={`/${w?.name}/${w?._id}`}><img src={w.image} width={250} height={100} alt="i" /></Link></figure>
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
    );
};

export default HeadphonesAll;