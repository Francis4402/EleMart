import {Link, Outlet} from "react-router-dom";

const GameConsole = () => {

    const brands = [
        {
            id: 1,
            title: 'Xbox',
        },
        {
            id: 2,
            title: 'PlayStation',
        }
    ]

    return (
        <div className="justify-center flex border">
            <div className="container">

                <h1 className="text-2xl font-semibold my-4">Gaming Console</h1>

                <div className="navbar">
                    <div className="navbar-center">
                        <Link to="/game-console">
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

export default GameConsole;