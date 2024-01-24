import {Link, Outlet} from "react-router-dom";

const HomeAppliances = () => {

    const Products = [
        {
            id: 1,
            title: 'AC',
        },
        {
            id: 2,
            title: 'Geyser',
        },
        {
            id: 3,
            title: 'Oven',
        },
        {
            id: 4,
            title: 'Air-Fryer',
        },
    ]

    return (
        <div className="justify-center flex border">
            <div className="container">

                <h1 className="text-2xl font-semibold my-4">Home-Appliances</h1>

                <div className="navbar">
                    <div className="navbar-center">
                        <Link to="/home-appliances">
                            <ul className="menu menu-horizontal px-1 font-semibold">
                                <li className="bg-gray-200 rounded-lg shadow-lg">
                                    <a>All</a>
                                </li>
                            </ul>
                        </Link>
                        {
                            Products.map(b => <div key={b?.id}>
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

export default HomeAppliances;