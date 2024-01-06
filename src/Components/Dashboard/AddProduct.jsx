import {useState} from "react";
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

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
                price: data.price,
                modelname: data.modelname,
                size: data.size,
                displaytype: data.displaytype,
                resolution: data.resolution,
                brightness: data.brightness,
                displayfeatures: data.displayfeatures,
                chipset: data.chipset,
                cputype: data.cputype,
                gpu: data.gpu,
                ram: data.ram,
                cardslot: data.cardslot,
                rcamresolution: data.rcamresolution,
                rcamfeatures: data.rcamfeatures,
                rvideorecording: data.rvideorecording,
                fcamresolution: data.fcamresolution,
                fcamfeatures: data.fcamfeatures,
                fcamvideorecording: data.fcamvideorecording,
                speaker: data.speaker,
                audiofeatures: data.audiofeatures,
                sim: data.sim,
                wifi: data.wifi,
                bluetooth: data.bluetooth,
                gps: data.gps,
                nfc: data.nfc,
                audiojack: data.audiojack,
                operatingsystem: data.operatingsystem,
                sensor: data.sensor,
                iprating: data.iprating,
                otherfeatures: data.otherfeatures,
                batterytype: data.batterytype,
                charging: data.charging,
                dimension: data.dimension,
                weight: data.weight,
                materials: data.materials,
                colors: data.colors,
                warranty: data.warranty,
                description1: data.description1,
                description2: data.description2,
                description3: data.description3,
                description4: data.description4,
                description5: data.description5,
                description6: data.description6,
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
                        <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" {...register('name', {required:true})} placeholder="Name" className="input input-bordered w-full max-w-xl" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Image</span>
                                    </label>
                                    <input type="file" {...register('image', {required: true})} className="file-input file-input-bordered w-full max-w-xl" />
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
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
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Price</span>
                                        </label>
                                        <input type="text" {...register('price', {required: true})} placeholder="Price" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Model Name</span>
                                        </label>
                                        <input type="text" {...register('modelname', {required: true})} placeholder="Model Name" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Display Details</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Size</span>
                                        </label>
                                        <input type="text" {...register('size', {required: true})} placeholder="Display Size" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Display Type</span>
                                        </label>
                                        <input type="text" {...register('displaytype', {required: true})} placeholder="Display Type" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>


                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Resolution</span>
                                        </label>
                                        <input type="text" {...register('resolution', {required: true})} placeholder="DispayResolution" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Brightness</span>
                                        </label>
                                        <input type="text" {...register('brightness', {required: true})} placeholder="Brightness" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>


                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Features</span>
                                        </label>
                                        <input type="text" {...register('displayfeatures', {required: true})} placeholder="Features" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Processor</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Chipset</span>
                                        </label>
                                        <input type="text" {...register('chipset', {required: true})} placeholder="Chipset" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">CPU Type</span>
                                        </label>
                                        <input type="text" {...register('cputype', {required: true})} placeholder="Cpu-Type" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">GPU</span>
                                        </label>
                                        <input type="text" {...register('gpu', {required: true})} placeholder="GPU" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Memory</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">RAM</span>
                                        </label>
                                        <input type="text" {...register('ram', {required: true})} placeholder="RAM" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Internal Storage</span>
                                        </label>
                                        <input type="text" {...register('internalstorage', {required: true})} placeholder="Internal Storage" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Card Slot</span>
                                        </label>
                                        <input type="text" {...register('cardslot', {required: true})} placeholder="Card-Slot" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Rear Camera</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">RCam Resolution</span>
                                        </label>
                                        <input type="text" {...register('rcamresolution', {required: true})} placeholder="Resolution" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">RCam Features</span>
                                        </label>
                                        <input type="text" {...register('rcamfeatures', {required: true})} placeholder="Speaker" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">RVideo Recording</span>
                                        </label>
                                        <input type="text" {...register('rvideorecording', {required: true})} placeholder="Video Recording" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Front Camera</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">FCam Resolution</span>
                                        </label>
                                        <input type="text" {...register('fcamresolution', {required: true})} placeholder="Resolution" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">FCam Features</span>
                                        </label>
                                        <input type="text" {...register('fcamfeatures', {required: true})} placeholder="Features" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">FCam Video Recording</span>
                                        </label>
                                        <input type="text" {...register('fcamvideorecording', {required: true})} placeholder="Video Recording" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Audio</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Speaker</span>
                                        </label>
                                        <input type="text" {...register('speaker', {required: true})} placeholder="Speaker" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Audio Features</span>
                                        </label>
                                        <input type="text" {...register('audiofeatures', {required: true})} placeholder="Audio Features" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>


                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Network & Connectivity</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">SIM</span>
                                        </label>
                                        <input type="text" {...register('sim', {required: true})} placeholder="Sim" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Wi-Fi</span>
                                        </label>
                                        <input type="text" {...register('wifi', {required: true})} placeholder="Wi-Fi" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Bluetooth</span>
                                        </label>
                                        <input type="text" {...register('bluetooth', {required: true})} placeholder="Bluetooth" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">GPS</span>
                                        </label>
                                        <input type="text" {...register('gps', {required: true})} placeholder="GPS" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">NFC</span>
                                        </label>
                                        <input type="text" {...register('nfc', {required: true})} placeholder="NFC" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Audio Jack</span>
                                        </label>
                                        <input type="text" {...register('audiojack', {required: true})} placeholder="Audio Jack" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">OS</h1>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Operating System</span>
                                    </label>
                                    <input type="text" {...register('operatingsystem', {required: true})} placeholder="Operating System" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Features</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Sensors</span>
                                        </label>
                                        <input type="text" {...register('sensor', {required: true})} placeholder="Sensor" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">IP Rating</span>
                                        </label>
                                        <input type="text" {...register('iprating', {required: true})} placeholder="IP Rating" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Other Features</span>
                                        </label>
                                        <input type="text" {...register('otherfeatures', {required: true})} placeholder="Other Features" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Battery</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Battery Type</span>
                                        </label>
                                        <input type="text" {...register('batterytype', {required: true})} placeholder="Battery type" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Fast Charging</span>
                                        </label>
                                        <input type="text" {...register('charging', {required: true})} placeholder="Fast Charging" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Physical Specification</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Dimension</span>
                                        </label>
                                        <input type="text" {...register('dimension', {required: true})} placeholder="Dimension" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Weight</span>
                                        </label>
                                        <input type="text" {...register('weight', {required: true})} placeholder="Weight" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Body Material</span>
                                        </label>
                                        <input type="text" {...register('materials', {required: true})} placeholder="Body Materials" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Colors</span>
                                        </label>
                                        <input type="text" {...register('colors', {required: true})} placeholder="Colors" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Warranty Information</h1>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Warranty</span>
                                    </label>
                                    <input type="text" {...register('warranty', {required: true})} placeholder="Warranty" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Description</h1>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-1</span>
                                    </label>
                                    <textarea type="text" {...register('description1', {required: true})} placeholder="Description 1" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-2</span>
                                    </label>
                                    <textarea type="text" {...register('description2', {required: true})} placeholder="Description 2" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-3</span>
                                    </label>
                                    <textarea type="text" {...register('description3', {required: true})} placeholder="Description 3" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-4</span>
                                    </label>
                                    <textarea type="text" {...register('description4', {required: true})} placeholder="Description 4" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-5</span>
                                    </label>
                                    <textarea type="text" {...register('description5', {required: true})} placeholder="Description 5" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-6</span>
                                    </label>
                                    <textarea type="text" {...register('description6', {required: true})} placeholder="Description 6" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control mt-6">
                                    <AwesomeButton type="primary" className="btn btn-primary">Add Product</AwesomeButton>
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