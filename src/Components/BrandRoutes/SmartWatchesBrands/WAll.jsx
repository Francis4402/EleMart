import {FaCartPlus} from "react-icons/fa";
import useCategory from "../../Hooks/useCategory.jsx";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Axiosfiles/useAxiosPublic.jsx";

const WAll = () => {
    const getRandomorder = () => Math.random() - 0.5;
    const [products] = useCategory();
    const smartwatch = products.filter(watchs => watchs.category === 'smartwatch');

    const randomizedSmartwatches = smartwatch.sort(getRandomorder);

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
            <hr/>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4'>
                {
                    randomizedSmartwatches.map(w => <div key={w?.id}>
                        <div className="card w-full h-fit bg-base-100 shadow-xl">
                            <figure><Link to={`/${w?.name}/${w?._id}`}><img src={w.image} width={250} height={100} alt="i" /></Link></figure>
                            <div className="card-body">
                                <Link to={`/${w?.name}/${w?._id}`}><h2 className="card-title hover:underline">{w.name}</h2></Link>
                                <div className="grid gap-2 text-gray-500 my-4">
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
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WAll;