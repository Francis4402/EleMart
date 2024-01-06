import {useLoaderData} from "react-router-dom";

const Description = () => {

    const {name, display, extrafeatures} = useLoaderData();

    return (
        <div className="my-6">
            <div className="bg-white p-4 rounded-lg">
                <h1 className="font-semibold text-xl">Description</h1>
                <h1 className="font-semibold text-xl">{name}</h1>

                <div className="py-2">
                    <p></p>
                </div>

                <div className="py-2">
                    <h1 className="font-semibold text-xl">{display}</h1>
                    <p></p>
                </div>

                <div className="py-2">
                    <h1 className="font-semibold text-xl">{extrafeatures}</h1>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Description;