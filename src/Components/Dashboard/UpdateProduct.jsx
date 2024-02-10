import {useState} from "react";
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";
import {AwesomeButton} from "react-awesome-button";
import {useLoaderData} from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_Image_Upload_token;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateProduct = () => {

    const [categories, setCategory] = useState('');
    const [, setbrands] = useState('');
    const productData = useLoaderData();
    const axiosPublic = useAxiosPublic();

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const {_id,name,price,regularPrice, modelname,size,displaytype,refreshrate, resolution,brightness,displayfeatures,chipset,cputype,gpu,ram,internalstorage,cardslot,rcamresolution,rcamfeatures,rvideorecording,fcamresolution,fcamfeatures,fcamvideorecording,speaker,audiofeatures,sim,wifi,bluetooth,gps,nfc,audiojack,operatingsystem,sensor,iprating,otherfeatures,batterytype,charging,dimension,weight,materials,colors,warranty,installationspolicy,actype,technology,capacity,coverage,energysavingrating,capacityofcooling,noiselevel,compressortype,condenser,refrigeranttype,others,powertype,powerconsumption,acweight,drivermagnet,impedance,headphonesensitivity,inputjack,driverdiameter,connectivity,headphonesdimensions,headphonesweight,headphonescolor,headphonescablelength,microphoneSize,microphonesensitivity,microphonepickup,droneweight,dronemaxspeed,dronemaxflighttime,dronefov,feature1,feature2,feature3,feature4,description1title,description2title,description3title,description4title,description5title,description6title,description7title,description1,description2,description3,description4,description5,description6,description7} = productData;
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
                price: parseInt(data.price, 10),
                regularPrice: parseInt(data.regularPrice, 10),
                modelname: data.modelname,
                size: data.size,
                displaytype: data.displaytype,
                resolution: data.resolution,
                brightness: data.brightness,
                refreshrate: data.refreshrate,
                displayfeatures: data.displayfeatures,
                chipset: data.chipset,
                cputype: data.cputype,
                gpu: data.gpu,
                ram: data.ram,
                internalstorage: data.internalstorage,
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
                installationspolicy: data.installationspolicy,
                actype: data.actype,
                technology: data.technology,
                capacity: data.capacity,
                coverage: data.coverage,
                energysavingrating: data.energysavingrating,
                capacityofcooling: data.capacityofcooling,
                noiselevel: data.noiselevel,
                compressortype: data.compressortype,
                condenser: data.condenser,
                refrigeranttype: data.refrigeranttype,
                others: data.others,
                powertype: data.powertype,
                powerconsumption: data.powerconsumption,
                acweight: data.acweight,
                drivermagnet: data.drivermagnet,
                impedance: data.impedance,
                headphonesensitivity: data.headphonesensitivity,
                inputjack: data.inputjack,
                driverdiameter: data.driverdiameter,
                connectivity: data.connectivity,
                headphonesdimensions: data.headphonesdimensions,
                headphonesweight: data.headphonesweight,
                headphonescolor: data.headphonescolor,
                headphonescablelength: data.headphonescablelength,
                microphoneSize: data.microphoneSize,
                microphonesensitivity: data.microphonesensitivity,
                microphonepickup: data.microphonepickup,
                droneweight: data.droneweight,
                dronemaxspeed: data.dronemaxspeed,
                dronemaxflighttime: data.dronemaxflighttime,
                dronefov: data.dronefov,
                feature1: data.feature1,
                feature2: data.feature2,
                feature3: data.feature3,
                feature4: data.feature4,
                description1title: data.description1title,
                description2title: data.description2title,
                description3title: data.description3title,
                description4title: data.description4title,
                description5title: data.description5title,
                description6title: data.description6title,
                description7title: data.description7title,
                description1: data.description1,
                description2: data.description2,
                description3: data.description3,
                description4: data.description4,
                description5: data.description5,
                description6: data.description6,
                description7: data.description7,
                categories: data.categories,
                brands: data.brands,
                featured: data.featured,
            }
            await axiosPublic.put(`/addproduct/${_id}`, productsdata)
                .then(res => {
                    if(res.data.modifiedCount > 0){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Product Updated Successfully',
                            icon: 'success',
                            confirmButtonText: 'ok'
                        })
                    }
                })
                .catch(error => console.error(error))
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
                                    <input type="text" defaultValue={name} {...register('name', {required:true})} placeholder="Name" className="input input-bordered w-full max-w-xl" />
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
                                        <select {...register('categories', {required: true})} className="p-3 rounded-md bg-base-300" onChange={handleChange}>
                                            <option value="">Select Category</option>
                                            <option value="smartwatch">Smart Watch</option>
                                            <option value="mobiles">Mobiles</option>
                                            <option value="ac">AC</option>
                                            <option value="geyser">Geyser</option>
                                            <option value="oven">Oven</option>
                                            <option value="airfryer">Air-Fryer</option>
                                            <option value="washingmachine">Washing-Machine</option>
                                            <option value="headphones">Headphones</option>
                                            <option value="drone">Drone</option>
                                            <option value="gameconsole">Game-Console</option>
                                        </select>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Brands</span>
                                        </label>
                                        <select {...register('brands', {required: true})} className="p-3 rounded-md bg-base-300" onChange={handleBrands}>
                                            <option value="">Select brands</option>
                                            {categories === "smartwatch" && (
                                                <>
                                                    <option value="apple">Apple</option>
                                                    <option value="google">Google</option>
                                                    <option value="realme">Realme</option>
                                                    <option value="huawei">Huawei</option>
                                                    <option value="kospet">KOSPET</option>
                                                </>
                                            )}

                                            {
                                                categories === "mobiles" && (
                                                    <>
                                                        <option value="apple">Apple</option>
                                                        <option value="google">Google</option>
                                                        <option value="motorola">Motorola</option>
                                                        <option value="oneplus">OnePlus</option>
                                                        <option value="vivo">Vivo</option>
                                                    </>
                                                )
                                            }

                                            {
                                                categories === 'ac' && (
                                                    <>
                                                        <option value="samsung">Samsung</option>
                                                        <option value="gree">Gree</option>
                                                        <option value="singer">Singer</option>
                                                        <option value="ganeral">General</option>
                                                    </>
                                                )
                                            }

                                            {
                                                categories === 'geyser' && (
                                                    <>
                                                        <option value="midea">Midea</option>
                                                        <option value="tropica">Tropica</option>
                                                    </>
                                                )
                                            }

                                            {
                                                categories === 'oven' && (
                                                    <>
                                                        <option value="walton">Walton</option>
                                                    </>
                                                )
                                            }

                                            {
                                                categories === 'airfryer' && (
                                                    <>
                                                        <option value="xiaomi">Xiaomi</option>
                                                    </>
                                                )
                                            }

                                            {
                                                categories === 'washingmachine' && (
                                                    <>
                                                        <option value="haier">Haier</option>
                                                    </>
                                                )
                                            }

                                            {
                                                categories === 'headphones' && (
                                                    <>
                                                        <option value="apple">Apple</option>
                                                        <option value="gamdias">GAMDIAS</option>
                                                        <option value="razer">RAZER</option>
                                                        <option value="logitech">Logitech</option>
                                                    </>
                                                )
                                            }

                                            {
                                                categories === 'drone' && (
                                                    <>
                                                        <option value="dji">DJI</option>
                                                        <option value="minitoydrone">Mini Toy Drone</option>
                                                    </>
                                                )
                                            }

                                            {
                                                categories === 'gameconsole' && (
                                                    <>
                                                        <option value="xbox">Xbox</option>
                                                        <option value="playstation">PlayStation</option>
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
                                        <input type="number" defaultValue={price} {...register('price', {required: true})} placeholder="Price" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Regular Price</span>
                                        </label>
                                        <input type="number" defaultValue={regularPrice} {...register('regularPrice')} placeholder="Regular Price" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Model Name</span>
                                        </label>
                                        <input type="text" defaultValue={modelname} {...register('modelname', {required: true})} placeholder="Model Name" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Featured</span>
                                        </label>

                                        <select {...register('featured', {required: true})} className="p-3 rounded-md bg-base-300">
                                            <option value="">Select Yes or no</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
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
                                        <input type="text" defaultValue={size} {...register('size')} placeholder="Display Size" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Display Type</span>
                                        </label>
                                        <input type="text" defaultValue={displaytype} {...register('displaytype')} placeholder="Display Type" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>


                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Resolution</span>
                                        </label>
                                        <input type="text" defaultValue={resolution} {...register('resolution')} placeholder="DispayResolution" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Brightness</span>
                                        </label>
                                        <input type="text" defaultValue={brightness} {...register('brightness')} placeholder="Brightness" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>


                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Refresh Rate</span>
                                        </label>
                                        <input type="text" defaultValue={refreshrate} {...register('refreshrate')} placeholder="Refresh Rate" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Features</span>
                                        </label>
                                        <input type="text" defaultValue={displayfeatures} {...register('displayfeatures')} placeholder="Features" className="input input-bordered w-full max-w-xl" />
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
                                        <input type="text" defaultValue={chipset} {...register('chipset')} placeholder="Chipset" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">CPU Type</span>
                                        </label>
                                        <input type="text" defaultValue={cputype} {...register('cputype')} placeholder="Cpu-Type" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">GPU</span>
                                        </label>
                                        <input type="text" defaultValue={gpu} {...register('gpu')} placeholder="GPU" className="input input-bordered w-full max-w-xl" />
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
                                        <input type="text" defaultValue={ram} {...register('ram')} placeholder="RAM" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Internal Storage</span>
                                        </label>
                                        <input type="text" defaultValue={internalstorage} {...register('internalstorage')} placeholder="Internal Storage" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Card Slot</span>
                                        </label>
                                        <input type="text" defaultValue={cardslot} {...register('cardslot')} placeholder="Card-Slot" className="input input-bordered w-full max-w-xl" />
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
                                        <input type="text" defaultValue={rcamresolution} {...register('rcamresolution')} placeholder="Resolution" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">RCam Features</span>
                                        </label>
                                        <input type="text" defaultValue={rcamfeatures} {...register('rcamfeatures')} placeholder="Features" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">RVideo Recording</span>
                                        </label>
                                        <input type="text" defaultValue={rvideorecording} {...register('rvideorecording')} placeholder="Video Recording" className="input input-bordered w-full max-w-xl" />
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
                                        <input type="text" defaultValue={fcamresolution} {...register('fcamresolution')} placeholder="Resolution" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">FCam Features</span>
                                        </label>
                                        <input type="text" defaultValue={fcamfeatures} {...register('fcamfeatures')} placeholder="Features" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">FCam Video Recording</span>
                                        </label>
                                        <input type="text" defaultValue={fcamvideorecording} {...register('fcamvideorecording')} placeholder="Video Recording" className="input input-bordered w-full max-w-xl" />
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
                                        <input type="text" defaultValue={speaker} {...register('speaker')} placeholder="Speaker" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Audio Features</span>
                                        </label>
                                        <input type="text" defaultValue={audiofeatures} {...register('audiofeatures')} placeholder="Audio Features" className="input input-bordered w-full max-w-xl" />
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
                                        <input type="text" defaultValue={sim} {...register('sim')} placeholder="Sim" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Wi-Fi</span>
                                        </label>
                                        <input type="text" defaultValue={wifi} {...register('wifi')} placeholder="Wi-Fi" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Bluetooth</span>
                                        </label>
                                        <input type="text" defaultValue={bluetooth} {...register('bluetooth')} placeholder="Bluetooth" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">GPS</span>
                                        </label>
                                        <input type="text" defaultValue={gps} {...register('gps')} placeholder="GPS" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">NFC</span>
                                        </label>
                                        <input type="text" defaultValue={nfc} {...register('nfc')} placeholder="NFC" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Audio Jack</span>
                                        </label>
                                        <input type="text" defaultValue={audiojack} {...register('audiojack')} placeholder="Audio Jack" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">OS</h1>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Operating System</span>
                                    </label>
                                    <input type="text" defaultValue={operatingsystem} {...register('operatingsystem')} placeholder="Operating System" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Features</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Sensors</span>
                                        </label>
                                        <input type="text" defaultValue={sensor} {...register('sensor')} placeholder="Sensor" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">IP Rating</span>
                                        </label>
                                        <input type="text" defaultValue={iprating} {...register('iprating')} placeholder="IP Rating" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Other Features</span>
                                        </label>
                                        <input type="text" defaultValue={otherfeatures} {...register('otherfeatures')} placeholder="Other Features" className="input input-bordered w-full max-w-xl" />
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
                                        <input type="text" defaultValue={batterytype} {...register('batterytype')} placeholder="Battery type" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Fast Charging</span>
                                        </label>
                                        <input type="text" defaultValue={charging} {...register('charging')} placeholder="Fast Charging" className="input input-bordered w-full max-w-xl" />
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
                                        <input type="text" defaultValue={dimension} {...register('dimension')} placeholder="Dimension" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Weight</span>
                                        </label>
                                        <input type="text" defaultValue={weight} {...register('weight')} placeholder="Weight" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Body Material</span>
                                        </label>
                                        <input type="text" defaultValue={materials} {...register('materials')} placeholder="Body Materials" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Colors</span>
                                        </label>
                                        <input type="text" defaultValue={colors} {...register('colors')} placeholder="Colors" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Warranty Information</h1>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Warranty</span>
                                    </label>
                                    <input type="text" defaultValue={warranty} {...register('warranty')} placeholder="Warranty" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Installation Policy</span>
                                    </label>
                                    <input type="text" defaultValue={installationspolicy} {...register('installationspolicy')} placeholder="Installation Policy" className="input input-bordered w-full max-w-xl" />
                                </div>


                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Basic Information</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Type</span>
                                        </label>
                                        <input type="text" defaultValue={actype} {...register('actype')} placeholder="Type" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Technology</span>
                                        </label>
                                        <input type="text" defaultValue={technology} {...register('technology')} placeholder="Technology" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Capacity</span>
                                        </label>
                                        <input type="text" defaultValue={capacity} {...register('capacity')} placeholder="Capacity" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Coverage</span>
                                        </label>
                                        <input type="text" defaultValue={coverage} {...register('coverage')} placeholder="Coverage" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Energy Saving Rating</span>
                                        </label>
                                        <input type="text" defaultValue={energysavingrating} {...register('energysavingrating')} placeholder="Energy Saving Rating" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Capacity of Cooling(BTU)</span>
                                        </label>
                                        <input type="text" defaultValue={capacityofcooling} {...register('capacityofcooling')} placeholder="Capacity of Cooling" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Noise Level</span>
                                        </label>
                                        <input type="text" defaultValue={noiselevel} {...register('noiselevel')} placeholder="Noise Level" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Compressor Type</span>
                                        </label>
                                        <input type="text" defaultValue={compressortype} {...register('compressortype')} placeholder="Compressor Type" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Condenser Type</span>
                                        </label>
                                        <input type="text" defaultValue={condenser} {...register('condenser')} placeholder="Condenser" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Refrigerant Type</span>
                                        </label>
                                        <input type="text" defaultValue={refrigeranttype} {...register('refrigeranttype')} placeholder="Refrigerant Type" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Others</span>
                                        </label>
                                        <input type="text" defaultValue={others} {...register('others')} placeholder="Others" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Power Type</span>
                                        </label>
                                        <input type="text" defaultValue={powertype} {...register('powertype')} placeholder="Power Type" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Power Consumption</span>
                                        </label>
                                        <input type="text" defaultValue={powerconsumption} {...register('powerconsumption')} placeholder="Power Consumption" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>



                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Key Features</h1>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Feature 1</span>
                                        </label>
                                        <input type="text" defaultValue={feature1} {...register('feature1')} placeholder="Feature 1" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Feature 2</span>
                                        </label>
                                        <input type="text" defaultValue={feature2} {...register('feature2')} placeholder="Feature 2" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Feature 3</span>
                                        </label>
                                        <input type="text" defaultValue={feature3} {...register('feature3')} placeholder="Feature 3" className="input input-bordered w-full max-w-xl" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Feature 4</span>
                                        </label>
                                        <input type="text" defaultValue={feature4} {...register('feature4')} placeholder="Feature 4" className="input input-bordered w-full max-w-xl" />
                                    </div>
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">AC Physical Specification</h1>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">AC Weight</span>
                                    </label>
                                    <input type="text" defaultValue={acweight} {...register('acweight')} placeholder="AC Weight" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Headphones Specification</h1>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Driver Magnet</span>
                                    </label>
                                    <input type="text" defaultValue={drivermagnet} {...register('drivermagnet')}  placeholder="Driver Magnet" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Impedance</span>
                                    </label>
                                    <input type="text" defaultValue={impedance} {...register('impedance')} placeholder="Impedance" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sensitivity</span>
                                    </label>
                                    <input type="text" defaultValue={headphonesensitivity} {...register('headphonesensitivity')} placeholder="Sensitivity" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Input Jack</span>
                                    </label>
                                    <input type="text" defaultValue={inputjack} {...register('inputjack')} placeholder="Input Jack" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Driver Diameter</span>
                                    </label>
                                    <input type="text" defaultValue={driverdiameter} {...register('driverdiameter')} placeholder="Driver Diameter" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Connectivity</span>
                                    </label>
                                    <input type="text" defaultValue={connectivity} {...register('connectivity')} placeholder="Connectivity" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Dimensions</span>
                                    </label>
                                    <input type="text" defaultValue={headphonesdimensions} {...register('headphonesdimensions')} placeholder="Dimensions" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Weight</span>
                                    </label>
                                    <input type="text" defaultValue={headphonesweight} {...register('headphonesweight')} placeholder="Weight" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Color</span>
                                    </label>
                                    <input type="text" defaultValue={headphonescolor} {...register('headphonescolor')} placeholder="Color" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Cable Length</span>
                                    </label>
                                    <input type="text" defaultValue={headphonescablelength} {...register('headphonescablelength')} placeholder="Cable Length" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Microphone</h1>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Microphone Size</span>
                                    </label>
                                    <input type="text" defaultValue={microphoneSize} {...register('microphoneSize')} placeholder="Microphone Size" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sensitivity</span>
                                    </label>
                                    <input type="text" defaultValue={microphonesensitivity} {...register('microphonesensitivity')} placeholder="Sensitivity" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Pick-up Pattern</span>
                                    </label>
                                    <input type="text" defaultValue={microphonepickup} {...register('microphonepickup')} placeholder="Pick-up Pattern" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Aircraft</h1>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Weight</span>
                                    </label>
                                    <input type="text" defaultValue={droneweight} {...register('droneweight')} placeholder="Weight" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Max Speed</span>
                                    </label>
                                    <input type="text" defaultValue={dronemaxspeed} {...register('dronemaxspeed')} placeholder="Max Speed" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Max Flight Time</span>
                                    </label>
                                    <input type="text" defaultValue={dronemaxflighttime} {...register('dronemaxflighttime')} placeholder="Max Flight Time" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Vision System</h1>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">FOV</span>
                                    </label>
                                    <input type="text" defaultValue={dronefov} {...register('dronefov')} placeholder="Fov" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="my-2">
                                    <h1 className="font-semibold bg-gray-900 text-white p-2 rounded-lg">Description</h1>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description1 Title</span>
                                    </label>
                                    <input type="text" defaultValue={description1title} {...register('description1title')} placeholder="Description1 Title" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-1</span>
                                    </label>
                                    <textarea type="text" defaultValue={description1} {...register('description1')} placeholder="Description 1" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description2 Title</span>
                                    </label>
                                    <input type="text" defaultValue={description2title} {...register('description2title')} placeholder="Description2 Title" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-2</span>
                                    </label>
                                    <textarea type="text" defaultValue={description2} {...register('description2')} placeholder="Description 2" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description3 Title</span>
                                    </label>
                                    <input type="text" defaultValue={description3title} {...register('description3title')} placeholder="Description3 Title" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-3</span>
                                    </label>
                                    <textarea type="text" defaultValue={description3} {...register('description3')} placeholder="Description 3" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description4 Title</span>
                                    </label>
                                    <input type="text" defaultValue={description4title} {...register('description4title')} placeholder="Description4 Title" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-4</span>
                                    </label>
                                    <textarea type="text" defaultValue={description4} {...register('description4')} placeholder="Description 4" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description5 Title</span>
                                    </label>
                                    <input type="text" defaultValue={description5title} {...register('description5title')} placeholder="Description5 Title" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-5</span>
                                    </label>
                                    <textarea type="text" defaultValue={description5} {...register('description5')} placeholder="Description 5" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description6 Title</span>
                                    </label>
                                    <input type="text" defaultValue={description6title} {...register('description6title')} placeholder="Description6 Title" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-6</span>
                                    </label>
                                    <textarea type="text" defaultValue={description6} {...register('description6')} placeholder="Description 6" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description7 Title</span>
                                    </label>
                                    <input type="text" defaultValue={description7title} {...register('description7title')} placeholder="Description7 Title" className="input input-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description-7</span>
                                    </label>
                                    <textarea type="text" defaultValue={description7} {...register('description7')} placeholder="Description 7" className="textarea textarea-bordered w-full max-w-xl" />
                                </div>

                                <div className="form-control mt-6">
                                    <AwesomeButton type="primary" className="btn btn-primary">Update</AwesomeButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;