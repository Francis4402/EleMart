import useCategory from "../Hooks/useCategory.jsx";
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {FaCartPlus} from "react-icons/fa";

const AllProducts = () => {
    const getRandomorder = () => Math.random() - 0.5;
    const [products] = useCategory();
    const AC = products.filter(h => h.category === 'ac');
    const Geyser = products.filter(h => h.category === 'geyser')
    const Oven = products.filter(h => h.category === 'oven')
    const Airfryer = products.filter(h => h.category === 'airfryer')
    const WashingMachine = products.filter(h => h.category === 'washingmachine')

    const ACRandom = AC.sort(getRandomorder);
    const GeyserRandom = Geyser.sort(getRandomorder);
    const OvenRandom = Oven.sort(getRandomorder);
    const AirfryerRandom = Airfryer.sort(getRandomorder);
    const WashingMachineRandom = WashingMachine.sort(getRandomorder);

    const axiosPublic = useAxiosPublic();
    const handleAddtoCart = () => {
        axiosPublic.post('/cart')
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
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4'>
                {
                    ACRandom.map(w => <div key={w?.id}>
                        <div className="card w-full h-fit bg-base-100 shadow-xl">
                            <figure><Link to={`/${w?.name}/${w?._id}`}><img src={w.image} width={250} height={100} alt="i" /></Link></figure>
                            <div className="card-body">
                                <Link to={`/${w?.name}/${w?._id}`}><h2 className="card-title hover:underline">{w.name}</h2></Link>
                                <div className="grid gap-2 text-gray-500 my-4">
                                    <li>{w.modelname}</li>
                                    <li>{w.feature1}</li>
                                    <li>{w.feature2}</li>
                                    <li>{w.feature3}</li>
                                    <li>{w.feature4}</li>
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

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4'>
                {
                    GeyserRandom.map(w => <div key={w?.id}>
                        <div className="card w-full h-fit bg-base-100 shadow-xl">
                            <figure><Link to={`/${w?.name}/${w?._id}`}><img src={w.image} width={250} height={100} alt="i" /></Link></figure>
                            <div className="card-body">
                                <Link to={`/${w?.name}/${w?._id}`}><h2 className="card-title hover:underline">{w.name}</h2></Link>
                                <div className="grid gap-2 text-gray-500 my-4">
                                    <li>{w.displaytype}</li>
                                    <li>{w.chipset}</li>
                                    <li>{w.sensor}</li>
                                    <li>{w.iprating}</li>
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

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4'>
                {
                    OvenRandom.map(w => <div key={w?.id}>
                        <div className="card w-full h-fit bg-base-100 shadow-xl">
                            <figure><Link to={`/${w?.name}/${w?._id}`}><img src={w.image} width={250} height={100} alt="i" /></Link></figure>
                            <div className="card-body">
                                <Link to={`/${w?.name}/${w?._id}`}><h2 className="card-title hover:underline">{w.name}</h2></Link>
                                <div className="grid gap-2 text-gray-500 my-4">
                                    <li>{w.displaytype}</li>
                                    <li>{w.chipset}</li>
                                    <li>{w.sensor}</li>
                                    <li>{w.iprating}</li>
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

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4'>
                {
                    AirfryerRandom.map(w => <div key={w?.id}>
                        <div className="card w-full h-fit bg-base-100 shadow-xl">
                            <figure><Link to={`/${w?.name}/${w?._id}`}><img src={w.image} width={250} height={100} alt="i" /></Link></figure>
                            <div className="card-body">
                                <Link to={`/${w?.name}/${w?._id}`}><h2 className="card-title hover:underline">{w.name}</h2></Link>
                                <div className="grid gap-2 text-gray-500 my-4">
                                    <li>{w.displaytype}</li>
                                    <li>{w.chipset}</li>
                                    <li>{w.sensor}</li>
                                    <li>{w.iprating}</li>
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

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4'>
                {
                    WashingMachineRandom.map(w => <div key={w?.id}>
                        <div className="card w-full h-fit bg-base-100 shadow-xl">
                            <figure><Link to={`/${w?.name}/${w?._id}`}><img src={w.image} width={250} height={100} alt="i" /></Link></figure>
                            <div className="card-body">
                                <Link to={`/${w?.name}/${w?._id}`}><h2 className="card-title hover:underline">{w.name}</h2></Link>
                                <div className="grid gap-2 text-gray-500 my-4">
                                    <li>{w.displaytype}</li>
                                    <li>{w.chipset}</li>
                                    <li>{w.sensor}</li>
                                    <li>{w.iprating}</li>
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

export default AllProducts;