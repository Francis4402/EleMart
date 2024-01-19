import {Link, Outlet} from "react-router-dom";

const Oven = () => {

    const Brands = [
        {
            id: 1,
            title: 'Walton',
        },
    ]

    return (
        <div className="justify-center flex border-t">
            <div className="container">

                <div className="navbar">
                    <div className="navbar-center">
                        {
                            Brands.length > 1 && (
                                <Link to="/home-appliances/ac">
                                    <ul className="menu menu-horizontal px-1 font-semibold">
                                        <li className="bg-gray-200 rounded-lg">
                                            <a>All</a>
                                        </li>
                                    </ul>
                                </Link>
                            )
                        }
                        {
                            Brands.map(b => <div key={b?.id}>
                                <Link to={`${b.title.toLowerCase()}`}>
                                    <ul className="menu menu-horizontal px-1 font-semibold">
                                        <li className="bg-gray-200 rounded-lg"><a>{b.title}</a></li>
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

export default Oven;