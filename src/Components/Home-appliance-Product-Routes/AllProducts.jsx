import useCategory from "../Hooks/useCategory.jsx";
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {FaCartPlus} from "react-icons/fa";

const AllProducts = () => {
    const getRandomorder = () => Math.random() - 0.5;
    const [products] = useCategory();
    const AllProducts = products.filter((h) =>
        ['ac', 'geyser', 'oven', 'airfryer', 'washingmachine'].includes(h.categories)
    );

    const dataRandom = AllProducts.sort(getRandomorder);

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

    return (
        <div>
            {
                dataRandom === '' ? <h1 className="text-2xl font-semibold min-h-screen w-full justify-center grid">There is no data</h1> :
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4'>
            {
                dataRandom.map(w => <div key={w?.id}>
                    <div className="card w-full h-fit bg-base-100 shadow-xl">
                        <figure><Link to={`/${w?.name}/${w?._id}`}><img src={w.image} width={250} height={100} alt="i" /></Link></figure>
                        <div className="card-body">
                            <Link to={`/${w?.name}/${w?._id}`}><h2 className="card-title hover:underline">{w.name}</h2></Link>
                            <div className="grid gap-2 text-gray-500 my-4">
                                <li>{w.modelname}</li>
                                {w.feature1 === 'N' ? '' : <li>{w.feature1}</li>}
                                {w.feature2 === 'N' ? '' : <li>{w.feature2}</li>}
                                {w.feature3 === 'N' ? '' : <li>{w.feature3}</li>}
                                {w.feature4 === 'N' ? '' : <li>{w.feature4}</li>}
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

            }
        </div>
    );
};

export default AllProducts;