import UseAxiosPublic from '../Axiosfiles/useAxiosPublic'
import {useForm} from "react-hook-form";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {useState} from "react";
import useAuth from "../Hooks/useAuth.jsx";
import {Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Axiosfiles/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_Image_Upload_token;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, updateUserProfile} = useAuth();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name)
                    .then(() => {
                        const userInfo  ={
                            name: data.name,
                            email: data.email,
                            password: data.password,
                            image: res.data.data.display_url
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if(res.data.insertedId){
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Profile Created',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.error(error))
            })
    };

  return (
    <div>
        <div className="hero h-[700px] bg-base-100">
                <div className="hero-content flex-col p-2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign-Up</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                        <div className="card-body">

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register("name", {required: true})} type="text" placeholder="name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upload Profile Image</span>
                                    </label>
                                    <input {...register('image', {required: true})} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", {required: true})} name="email" type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="flex gap-6">
                                        <div className="grid">
                                            <input type={showPassword ? "text" : "password"}  {...register("password", {
                                                required: true, minLength: 6, maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*+-])(?=.*[0-9])(?=.*[a-z])/
                                            })} name="password" placeholder="password" className="input input-bordered" />
                                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 required</p>}
                                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less required</p>}
                                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must be less, one number and one special character</p>}
                                        </div>


                                    <span onClick={() => setShowPassword(!showPassword)} className='btn'>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-outline">Register</button>
                                </div>
                            </form>

                            <div>

                                <div className="flex gap-2 items-center">
                                    <p>Already have account</p>
                                    <Link className="btn btn-link text-base-content" to='/login'>Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SignUp