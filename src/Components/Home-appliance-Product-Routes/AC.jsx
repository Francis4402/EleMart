import {Link, Outlet} from "react-router-dom";


const Ac = () => {

    const Brands = [
        {
            id: 1,
            title: 'Samsung',
        },
        {
            id: 2,
            title: 'Gree',
        },
        {
            id: 3,
            title: 'Singer',
        },
        {
            id: 4,
            title: 'General',
        },
    ]

    return (
        <div className="justify-center flex border-t">
            <div className="container">

                <div className="navbar">
                    <div className="navbar-center">
                        <Link to="/home-appliances/ac">
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
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Ac;