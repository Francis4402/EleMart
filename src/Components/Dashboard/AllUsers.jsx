import Swal from "sweetalert2";
import UseAxiosPublic from "../Axiosfiles/useAxiosPublic";
import useUsers from "../Hooks/useUsers";
import UseAxiosSecure from "../Axiosfiles/useAxiosSecure";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {

    const [allusers, refetch] = useUsers();
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();

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
                    axiosPublic.delete(`/users/${id}`)
                        .then(res => {
                            if(res.data.deletedCount > 0){
                                refetch();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Product Remove.",
                                    icon: "success"
                                });
                            }
                        })
                }
            })
    }

    const handleMakerAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
          console.log(res.data)
          if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is an admin now!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
    }
    

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    
                    {
                        allusers.map(u => <tr key={u.name}>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={u.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
            
                            </div>
                            </td>
                            <td>
                                <div className="font-bold">{u.name}</div>
                            </td>
                            <td>
                                {
                                    u.role === 'admin' ? 'Admin' : <button onClick={() => handleMakerAdmin(u)} className="btn btn-ghost btn-md bg-orange-500 text-white"><FaUsers /></button>
                                }
                            </td>
                            <td>
                                <button onClick={() => handleDelete(u?._id)} className="btn btn-neutral btn-xs">Delete</button>
                            </td>
                
                        </tr>)
                    }
                
                </tbody>
                                
            </table>
        </div>
    );
};

export default AllUsers;