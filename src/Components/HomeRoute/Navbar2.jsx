import {Fragment, useState} from 'react'
import { Menu, Transition } from '@headlessui/react'
import {FaSearch} from "react-icons/fa";
import UseAuth from "../Hooks/useAuth.jsx";
import useAdmin from "../Hooks/useAdmin.jsx";
import useCart from "../Hooks/useCart.jsx";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";
import Cart from "./Cart.jsx";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar2() {

    const {user, logOut} = UseAuth();
    const [isAdmin] = useAdmin();
    const [carts] = useCart();
    const [open, setOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success('User Logged Out Successfully'))
            .catch(error => toast.error(error))
    }

    return (
        <div className="bg-gray-900">
            <div className="container mx-auto md:px-0 sm:px-5">
                <div className="relative flex h-20 items-center justify-between">

                    <div className="flex flex-1 px-5 items-center">
                        <Link to="/">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="h-14 w-auto"
                                    src="/Ele-Mart.png"
                                    alt="i"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="sm:flex gap-3 items-center py-10 hidden">
                        <input type="text" placeholder="search" className="w-full rounded-lg p-3 shadow" />
                        <div className="btn btn-neutral shadow-lg">
                            <FaSearch size={20} />
                        </div>
                    </div>

                    {
                        !user ? <div className="flex text-white">
                            <Link to={'/login'}>
                                <button className="btn btn-ghost md:text-lg text-md">Login</button>
                            </Link>
                            <Link to={'/register'}>
                                <button className="btn btn-ghost md:text-lg text-md">Register</button>
                            </Link>
                        </div> : <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-8 sm:pr-0">
                            {
                                user ? <label tabIndex={0} className="btn btn-ghost bg-black/20 btn-circle text-white" onClick={() => setOpen(!open)}>
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-8 sm:w-8 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">
                                        {carts.length}
                                    </span>
                                    </div>
                                </label> : ''
                            }

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-5">
                                <div>
                                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />

                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={user?.photoURL}
                                            alt="i"
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-6 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <p
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    {user?.displayName}
                                                </p>
                                            )}
                                        </Menu.Item>
                                        {
                                            user && isAdmin && <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="admindashboard"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Admin DashBoard
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        }
                                        <Menu.Item>
                                            {({ active }) => (
                                                <p
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    <button onClick={handleLogOut}>Logout</button>
                                                </p>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    }
                </div>
            </div>

            <Cart open={open} setOpen={setOpen} />
        </div>
    )
}
