import {Link, Outlet} from "react-router-dom";

const Mobiles = () => {

    const brands = [
        {
            id: 1,
            title: 'Apple',
        },
        {
            id: 2,
            title: 'Google',
        },
        {
            id: 3,
            title: 'Motorola',
        },
        {
            id: 4,
            title: 'OnePlus',
        },
        {
            id: 5,
            title: 'Vivo'
        }
    ]

    return (
        <div className="justify-center flex">
            <div className="container">

                <h1 className="text-2xl font-semibold my-4">Smart Phones</h1>

                <div className="navbar">
                    <div className="navbar-center">
                        {
                            brands.length > 1 && (
                                <Link to="/mobile-phones">
                                    <ul className="menu menu-horizontal px-1 font-semibold">
                                        <li className="bg-gray-200 rounded-lg">
                                            <a>All</a>
                                        </li>
                                    </ul>
                                </Link>
                            )
                        }

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
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Mobiles;