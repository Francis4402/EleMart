import {Link, Outlet} from "react-router-dom";

const SmartWatch = () => {


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
            title: 'Realme',
        },
        {
            id: 4,
            title: 'Huawei',
        },
        {
            id: 5,
            title: 'Kospet'
        }
    ]

    return (
            <div className="justify-center flex border">
                <div className="container">
                    
                    <h1 className="text-2xl font-semibold my-4">Smart Watches</h1>

                    <div className="navbar">
                        <div className="navbar-center">
                            <Link to="/smart-watch">
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
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>

    );
};

export default SmartWatch;