import {useLoaderData} from "react-router-dom";

const Description = () => {

    const {description1title, description2title, description3title, description4title, description5title, description6title, description7title, batterydescriptiontitle, description1, description2, description3, description4, description5, description6, description7} = useLoaderData();

    return (
        <div className="my-6">
            <div className="bg-white p-4 rounded-lg">
                <h1 className="font-semibold text-xl">Description</h1>

                {
                    description1 === '' ? '' : <>
                        <h1 className="font-semibold text-xl">{description1title}</h1>

                        <div className="py-2">
                            <p>{description1}</p>
                        </div>
                    </>
                }

                {
                    description2 === '' ? '' : <div className="py-2">
                        <h1 className="font-semibold text-xl">{description2title}</h1>
                        <p>{description2}</p>
                    </div>
                }

                {
                    description3 === '' ? '' : <div className="py-2">
                        <h1 className="font-semibold text-xl">{description3title}</h1>
                        <p>{description3}</p>
                    </div>
                }

                {
                    description4 === '' ? '' : <div className="py-2">
                        <h1 className="font-semibold text-xl">{description4title}</h1>
                        <p>{description4}</p>
                    </div>
                }

                {
                    description5 === '' ? '' : <div className="py-2">
                        <h1 className="font-semibold text-xl">{description5title}</h1>
                        <p>{description5}</p>
                    </div>
                }

                {
                    description6 === '' ? '' : <div className="py-2">
                        <h1 className="font-semibold text-xl">{description6title}</h1>
                        <p>{description6}</p>
                    </div>
                }

                {
                    description7 === '' ? '' : <div className="py-2">
                        <h1 className="font-semibold text-xl">{description7title}</h1>
                        <p>{description7}</p>
                    </div>
                }

            </div>
        </div>
    );
};

export default Description;