import {useLoaderData} from "react-router-dom";

const Description = () => {

    const {name, displaytype, iprating, description1, description2, description3, batterydescriptiontitle,  description4, description5, description6} = useLoaderData();

    return (
        <div className="my-6">
            <div className="bg-white p-4 rounded-lg">
                <h1 className="font-semibold text-xl">Description</h1>
                {
                    description1 === 'N' ? '' : <>
                        <h1 className="font-semibold text-xl">{name}</h1>

                        <div className="py-2">
                            <p>{description1}</p>
                        </div>
                    </>
                }

                {
                    description2 === 'N' ? '' : <div className="py-2">
                        <h1 className="font-semibold text-xl">{displaytype}</h1>
                        <p>{description2}</p>
                    </div>
                }

                {
                    description3 === 'N' ? '' : <div className="py-2">
                        <h1 className="font-semibold text-xl">{iprating}</h1>
                        <p>{description3}</p>
                    </div>
                }

                {
                    description4 === 'N' ? '' : <div className="py-2">
                        <h1 className="font-semibold text-xl">{batterydescriptiontitle}</h1>
                        <p>{description4}</p>
                    </div>
                }

            </div>
        </div>
    );
};

export default Description;