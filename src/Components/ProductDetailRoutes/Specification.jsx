import {useLoaderData} from "react-router-dom";

const Specification = () => {

    const {_id, name, image, price, modelname, display, processor, features, extrafeatures} = useLoaderData();

    return (
        <div className="my-6">
            <div className="bg-white p-4 rounded-lg">
                <h1 className="font-semibold text-xl">Specification</h1>

                <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Basic Information</p>

                <div className="px-2 border-b">
                    <p className="text-gray-400">Processor</p>
                    <p className="mb-2">{processor}</p>
                </div>

                <div className="p-2 border-b">
                    <p className="text-gray-400">Display</p>
                    <p className="mb-2">{display}</p>
                </div>

                <div className="p-2 border-b">
                    <p className="text-gray-400">Memory</p>
                    <p className="mb-2"></p>
                </div>

                <div className="p-2 border-b">
                    <p className="text-gray-400">Connectivity</p>
                    <p className="mb-2"></p>
                </div>

                <div className="p-2 border-b">
                    <p className="text-gray-400">Material</p>
                    <p className="mb-2"></p>
                </div>

                <div className="p-2 border-b">
                    <p className="text-gray-400">SpecialFeatures</p>
                    <p className="mb-2"></p>
                </div>

                <div className="p-2 border-b">
                    <p className="text-gray-400">Sensor</p>
                    <p className="mb-2"></p>
                </div>

                <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Exterior</p>

                <div className="p-2 border-b">
                    <p className="text-gray-400">Dimension</p>
                    <p className="mb-2"></p>
                </div>

                <div className="p-2 border-b">
                    <p className="text-gray-400">Weight</p>
                    <p className="mb-2"></p>
                </div>

                <div className="p-2 border-b">
                    <p className="text-gray-400">Color</p>
                    <p className="mb-2"></p>
                </div>

                <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Warranty Information</p>

                <div className="p-2 border-b">
                    <p className="text-gray-400">Warranty</p>
                    <p className="mb-2"></p>
                </div>
            </div>
        </div>
    );
};

export default Specification;