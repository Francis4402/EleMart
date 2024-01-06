import useCategory from "../../Hooks/useCategory.jsx";
import {FaCartPlus} from "react-icons/fa";
import {Link} from "react-router-dom";

const WApple = () => {

    const [products] = useCategory();
    const applewatch = products.filter(b => b.category === 'smartwatch' && b.brands === 'apple');

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4'>
                {
                    applewatch.map(w => <div key={w?.id}>
                        <div className="card w-full h-fit bg-base-100 shadow-xl">
                            <figure><Link to={`/${w?.name}/${w?._id}`}><img src={w.image} width={250} height={100} alt="i" /></Link></figure>
                            <div className="card-body">
                                <Link to={`/${w?.name}/${w?._id}`}><h2 className="card-title hover:underline">{w.name}</h2></Link>
                                <div className="grid gap-2 text-gray-500 my-4">
                                    <li>{w.display}</li>
                                    <li>{w.processor}</li>
                                    <li>{w.features}</li>
                                    <li>{w.extrafeatures}</li>
                                </div>
                                <hr/>
                                <div className="text-center text-xl font-semibold text-red-600 my-4">
                                    <h2>{w.price} tk</h2>
                                </div>

                                <button className="btn btn-neutral"><FaCartPlus/>Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WApple;