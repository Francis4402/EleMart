import {useState} from "react";
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";

const image_hosting_key = import.meta.env.VITE_Image_Upload_token;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddProduct = () => {

    const [category, setCategory] = useState('');
    const [, setbrands] = useState('');
    const axiosPublic = useAxiosPublic();
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            const productsdata = {
                name: data.name,
                image: res.data.data.display_url,
                price: res.data.price,
                modelname: data.modelname,
                display: data.display,
                processor: data.processor,
                features: data.features,
                extrafeatures: data.extrafeatures,
                category: data.category,
                brands: data.brands,
            }
            const AddProducts = await axiosPublic.post('/addproduct', productsdata);
            if(AddProducts.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Product added`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    };
    const handleChange = (e) => {
        setCategory(e.target.value);
        setbrands("");
    }
    const handleBrands = e => {
        setbrands(e.target.value);
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content">
                    <div className="grid gap-10">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Add Product</h1>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" {...register('name', {required:true})} placeholder="Name" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Image</span>
                                    </label>
                                    <input type="file" {...register('image', {required: true})} className="file-input file-input-bordered w-full max-w-xs" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Price</span>
                                    </label>
                                    <input type="text" {...register('price', {required: true})} placeholder="Price" className="input input-bordered w-full max-w-xs" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Model Name</span>
                                    </label>
                                    <input type="text" {...register('modelname', {required: true})} placeholder="Model Name" className="input input-bordered w-full max-w-xs" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Display Type</span>
                                    </label>
                                    <input type="text" {...register('display', {required: true})} placeholder="Display Type" className="input input-bordered w-full max-w-xs" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Processor</span>
                                    </label>
                                    <input type="text" {...register('processor', {required: true})} placeholder="Processor Name" className="input input-bordered w-full max-w-xs" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Features</span>
                                    </label>
                                    <input type="text" {...register('features', {required: true})} placeholder="Features" className="input input-bordered w-full max-w-xs" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Extra Features</span>
                                    </label>
                                    <input type="text" {...register('extrafeatures', {required: true})} placeholder="Water Resistant" className="input input-bordered w-full max-w-xs" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select {...register('category', {required: true})} className="p-3 rounded-md bg-base-300" onChange={handleChange}>
                                        <option value="">Select Category</option>
                                        <option value="smartwatch">Smart Watch</option>
                                        <option value="mobiles">Mobiles</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brands</span>
                                    </label>
                                    <select {...register('brands', {required: true})} className="p-3 rounded-md bg-base-300" onChange={handleBrands}>
                                        <option value="">Select brands</option>
                                        {category === "smartwatch" && (
                                            <>
                                                <option value="apple">Apple</option>
                                                <option value="google">Google</option>
                                                <option value="realme">Realme</option>
                                                <option value="huawei">Huawei</option>
                                                <option value="walton">Walton</option>
                                            </>
                                        )}
                                        {
                                            category === "mobiles" && (
                                                <>
                                                    <option value="apple">Apple</option>
                                                    <option value="google">Google</option>
                                                    <option value="realme">Realme</option>
                                                    <option value="huawei">Huawei</option>
                                                    <option value="walton">Walton</option>
                                                </>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;