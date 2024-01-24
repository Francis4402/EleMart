import {Link, Outlet} from "react-router-dom";

const WashingMachine = () => {

    const Brands = [
        {
            id: 1,
            title: 'Haier',
        },
    ]

    return (
        <div className="justify-center flex border-t">
            <div className="container">

                <div className="navbar">
                    <div className="navbar-center">
                        <Link to="/home-appliances/washing-machine">
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

export default WashingMachine;