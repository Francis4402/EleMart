import {Link, Outlet} from "react-router-dom";

const Headphones = () => {

    const brands = [
        {
            id: 1,
            title: 'Apple',
        },
        {
            id: 2,
            title: 'GAMDIAS',
        },
        {
            id: 3,
            title: 'RAZER',
        },
        {
            id: 4,
            title: 'Logitech',
        },
    ]

    return (
        <div className="justify-center flex border">
            <div className="container">

                <h1 className="text-2xl font-semibold my-4">Headphones</h1>

                <div className="navbar">
                    <div className="navbar-center">
                        <div className="sm:flex grid grid-cols-3 items-center">
                            <Link to="/headphone">
                                <ul className="menu menu-horizontal px-1 font-semibold">
                                    <li className="bg-gray-200 rounded-lg shadow-lg">
                                        <a>All</a>
                                    </li>
                                </ul>
                            </Link>
                            {
                                brands.map(b => <div key={b?.id}>
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

export default Headphones;