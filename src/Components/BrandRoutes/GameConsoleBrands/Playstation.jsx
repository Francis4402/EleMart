import React from 'react';
import useAxiosPublic from "../../Axiosfiles/useAxiosPublic.jsx";
import useCategory from "../../Hooks/useCategory.jsx";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {FaCartPlus} from "react-icons/fa";

const Playstation = () => {

    const axiosPublic = useAxiosPublic();
    const [products] = useCategory();

    const data = products.filter(data => data.category === 'gameconsole' && data.brands === 'playstation');

    const handleAddtoCart = (playstationid) => {

        const { name, image, price, modelname } = products.find(product => product._id === playstationid);

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

    return (
        <div>
            <hr/>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4'>
                {
                    data.map(w => <div key={w?.id}>
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
                                </div>
                                <hr/>
                                <div className="text-center text-xl font-semibold text-red-600 my-4">
                                    <h2>{w.price} tk</h2>
                                </div>
                                <button onClick={() => {handleAddtoCart(w?._id)}} className="btn btn-neutral"><FaCartPlus/>Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Playstation;