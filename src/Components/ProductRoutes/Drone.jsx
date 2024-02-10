import {Link, Outlet} from "react-router-dom";

const Drone = () => {

    const Brands = [
        {
            id: 1,
            title: 'DJI',
        },
        {
            id: 2,
            title: 'Mini-Toy-Drone',
        }
    ]

    return (
        <div className="justify-center flex border">
            <div className="container">

                <h1 className="text-2xl font-semibold my-4">Drones</h1>

                <div className="navbar">
                    <div className="navbar-center">
                        <div className="sm:flex grid grid-cols-3 items-center">
                            <Link to="/drone">
                                <ul className="menu menu-horizontal px-1 font-semibold">
                                    <li className="bg-gray-200 rounded-lg shadow-lg">
                                        <a>All</a>
                                    </li>
                                </ul>
                            </Link>
                            {
                                Brands.map(b => <div key={b?.id}>
                                    <Link to={`${b.title.toLowerCase()}`}>
                                        <ul className="menu menu-horizontal px-1 font-semibold">
                                            <li className="bg-gray-200 rounded-lg shadow-lg"><a>{b.title}</a></li>
                                        </ul>
                                    </Link>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Drone;