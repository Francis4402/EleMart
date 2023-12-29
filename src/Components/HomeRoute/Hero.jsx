import {FaSearch} from "react-icons/fa";
import { LuMicrowave } from "react-icons/lu";
import { IoWatchOutline, IoGameControllerOutline, IoPrintOutline   } from "react-icons/io5";
import { GiDeliveryDrone, GiPowerGenerator } from "react-icons/gi";
import { PiBatteryChargingVertical, PiTelevisionSimpleThin, PiHeadphones } from "react-icons/pi";
import { CiMobile3 } from "react-icons/ci";
import { RxCamera } from "react-icons/rx";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Hero = () => {

    const logoIcons = [
        {
            name: "Home-Appliances",
            icon: <LuMicrowave size={80}/>
        },
        {
            name: "Smart-Watch",
            icon: <IoWatchOutline size={80}/>
        },
        {
            name: "Mobile-Phones",
            icon: <CiMobile3 size={80}/>
        },
        {
            name: "Headphone",
            icon: <PiHeadphones size={80}/>
        },
        {
            name: "Drone",
            icon: <GiDeliveryDrone size={80}/>
        },
        {
            name: "Portable-Power-Station",
            icon: <GiPowerGenerator size={80}/>
        },
        {
            name: "Battery",
            icon: <PiBatteryChargingVertical size={80}/>
        },
        {
            name: "TV",
            icon: <PiTelevisionSimpleThin size={80}/>
        },
        {
            name: "Game-Console",
            icon: <IoGameControllerOutline size={80}/>
        },
        {
            name: "Action-Camera",
            icon: <RxCamera size={80}/>
        },
        {
            name: "Printer",
            icon: <IoPrintOutline size={80}/>
        }
    ]

    return (
        <div>
            <div className="flex gap-3 items-center py-10">
                <input type="text" placeholder="search" className="w-full rounded-lg p-3 shadow" />
                <div className="btn btn-neutral shadow-lg">
                    <FaSearch size={20} />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
                {
                    logoIcons.map(icons => <div key={icons.name}>
                        <Link to={`/${icons.name.toLowerCase()}`}>
                            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} transition={{type: "spring", damping: 14, stiffness: 500}} className="bg-white hover:bg-gray-200 p-10 rounded-xl shadow">
                                <p className="flex justify-center">{icons.icon}</p>
                                <p className="text-center">{icons.name}</p>
                            </motion.button>
                        </Link>
                    </div>)
                }
            </div>

            <div className="justify-center grid text-center py-24">
                <h3 className="text-2xl font-semibold">Featured Products</h3>
                <p>Check && Get Your Desired Product!</p>
            </div>
        </div>
    );
};

export default Hero;