import useCategory from "../Hooks/useCategory.jsx";
import {Link} from "react-router-dom";

const SmartWatch = () => {

    const [products] = useCategory();
    const smartwatch = products.filter(watchs => watchs.category === 'smartwatch');

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
            title: 'Walton'
        }
    ]

    return (
        <div className="justify-center flex">
            <div className="container">
                <div className="navbar">
                    <div className="navbar-center">
                        {
                            brands.map(b => <div key={b?.id}>
                                <Link to={`${b.title.toLowerCase()}`}>
                                    <ul className="menu menu-horizontal px-1 font-semibold">
                                        <li className="bg-gray-200 rounded-lg"><a>{b.title}</a></li>
                                    </ul>
                                </Link>
                            </div>)
                        }
                    </div>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                    {
                        smartwatch.map(w => <div key={w?.id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={w.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{w.name}</h2>
                                    <p>{w.description}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SmartWatch;