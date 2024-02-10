import useAxiosPublic from "../../Axiosfiles/useAxiosPublic.jsx";
import useCategory from "../../Hooks/useCategory.jsx";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {FaTrash} from "react-icons/fa";
import {MdOutlineSystemUpdateAlt} from "react-icons/md";
import useAdmin from "../../Hooks/useAdmin.jsx";


const OWalton = () => {
    const [isAdmin] = useAdmin();
    const axiosPublic = useAxiosPublic();
    const [products,refetch] = useCategory();

    const data = products.filter(data => data.categories === 'oven' && data.brands === 'walton');


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
                                }).then(() => {});
                            }
                        })
                }
            })
    }

    return (
        <div>
            {
                data.length === 0 ? <h1 className="text-2xl font-semibold min-h-screen w-full justify-center items-center flex">There is no data</h1> :
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-4 sm:px-0 px-5'>
                        {
                            data.map(w => <div key={w?._id}>
                                <div className="card w-full h-fit bg-white shadow-xl">
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
    );
};

export default OWalton;