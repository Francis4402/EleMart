import {FaCartPlus} from "react-icons/fa";
import useCategory from "../../Hooks/useCategory.jsx";

const WHuawei = () => {

    const [products] = useCategory();
    const huaweiwatch = products.filter(b => b.brands === 'huawei');

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4'>
                {
                    huaweiwatch.map(w => <div key={w?.id}>
                        <div className="card w-full h-fit bg-base-100 shadow-xl">
                            <figure><img src={w.image} width={250} height={100} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{w.name}</h2>
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

export default WHuawei;