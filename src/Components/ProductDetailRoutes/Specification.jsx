import {useLoaderData} from "react-router-dom";

const Specification = () => {

    const {size, displaytype, chipset, resolution, brightness, displayfeatures, cputype, gpu, ram, internalstorage, cardslot, rcamresolution, rcamfeatures, rvideorecording, fcamresolution, fcamfeatures, fcamvideorecording, speaker, audiofeatures, sim, wifi, bluetooth, gps, nfc, audiojack, operatingsystem, sensor, iprating, otherfeatures, batterytype, charging, dimension, weight, materials, colors, warranty} = useLoaderData();

    return (
        <div className="my-6">
            <div className="bg-white p-4 rounded-lg">
                <h1 className="font-semibold text-xl">Specification</h1>

                <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Display</p>

                {
                    size === 'N' ? '' : <div className="p-2 border-b">
                            <p className="text-gray-400">Size</p>
                            <p className="mb-2">{size}</p>
                        </div>
                }

                {
                    displaytype === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Display</p>
                        <p className="mb-2">{displaytype}</p>
                    </div>
                }

                {
                    resolution === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Resolution</p>
                        <p className="mb-2">{resolution}</p>
                    </div>
                }

                {
                    brightness === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Brightness</p>
                        <p className="mb-2">{brightness}</p>
                    </div>
                }

                {
                    displayfeatures === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Features</p>
                        <p className="mb-2">{displayfeatures}</p>
                    </div>
                }


                {
                    chipset === 'N' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Processor</p>
                }

                {
                    chipset === 'N' ? '' : <div className="px-2 border-b">
                        <p className="text-gray-400">Chipset</p>
                        <p className="mb-2">{chipset}</p>
                    </div>
                }

                {
                    cputype === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Cpu Type</p>
                        <p className="mb-2">{cputype}</p>
                    </div>
                }

                {
                    gpu === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">GPU</p>
                        <p className="mb-2">{gpu}</p>
                    </div>
                }

                {
                    ram === 'N' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Memory</p>
                }

                {
                    ram === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">RAM</p>
                        <p className="mb-2">{ram}</p>
                    </div>
                }

                {
                    internalstorage === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Internal Storage</p>
                        <p className="mb-2">{internalstorage}</p>
                    </div>
                }

                {
                    cardslot === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Card Slot</p>
                        <p className="mb-2">{cardslot}</p>
                    </div>
                }

                {
                    rcamresolution === 'N' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Rear Camera</p>
                }

                {
                    rcamresolution === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Resolution</p>
                        <p className="mb-2">{rcamresolution}</p>
                    </div>
                }

                {
                    rcamfeatures === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Features</p>
                        <p className="mb-2">{rcamfeatures}</p>
                    </div>
                }

                {
                    rvideorecording === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Video Recording</p>
                        <p className="mb-2">{rvideorecording}</p>
                    </div>
                }

                {
                    fcamresolution === 'N' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Front Camera</p>
                }

                {
                    fcamresolution === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Resolution</p>
                        <p className="mb-2">{fcamresolution}</p>
                    </div>
                }

                {
                    fcamfeatures === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Features</p>
                        <p className="mb-2">{fcamfeatures}</p>
                    </div>
                }

                {
                    fcamvideorecording === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Video Recording</p>
                        <p className="mb-2">{fcamvideorecording}</p>
                    </div>
                }

                {
                    speaker === 'N' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Audio</p>
                }

                {
                    speaker === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Speaker</p>
                        <p className="mb-2">{speaker}</p>
                    </div>
                }

                {
                    audiofeatures === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Audio Features</p>
                        <p className="mb-2">{audiofeatures}</p>
                    </div>
                }

                {
                    sim === 'N' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Network & Connectivity</p>
                }

                {
                    sim === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">SIM</p>
                        <p className="mb-2">{sim}</p>
                    </div>
                }

                {
                    wifi === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Wi-Fi</p>
                        <p className="mb-2">{wifi}</p>
                    </div>
                }

                {
                    bluetooth === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Bluetooth</p>
                        <p className="mb-2">{bluetooth}</p>
                    </div>
                }

                {
                    gps === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">GPS</p>
                        <p className="mb-2">{gps}</p>
                    </div>
                }

                {
                    nfc === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">NFC</p>
                        <p className="mb-2">{nfc}</p>
                    </div>
                }

                {
                    audiojack === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Audio Jack</p>
                        <p className="mb-2">{audiojack}</p>
                    </div>
                }

                {
                    operatingsystem === 'N' ? '' : <>
                        <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">OS</p>
                        <div className="p-2 border-b">
                            <p className="text-gray-400">Operating System</p>
                            <p className="mb-2">{operatingsystem}</p>
                        </div>
                    </>
                }

                <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Features</p>

                {
                    sensor === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Sensor</p>
                        <p className="mb-2">{sensor}</p>
                    </div>
                }

                {
                    iprating === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">IP Rating</p>
                        <p className="mb-2">{iprating}</p>
                    </div>
                }

                {
                    otherfeatures === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Other Features</p>
                        <p className="mb-2">{otherfeatures}</p>
                    </div>
                }

                {
                    batterytype === 'N' ? '' : <>
                        <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Battery</p>

                        <div className="p-2 border-b">
                            <p className="text-gray-400">Battery Type</p>
                            <p className="mb-2">{batterytype}</p>
                        </div>
                    </>
                }

                {
                    charging === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Fast Charging</p>
                        <p className="mb-2">{charging}</p>
                    </div>
                }


                <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Physical Specification</p>

                {
                    dimension === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Dimension</p>
                        <p className="mb-2">{dimension}</p>
                    </div>
                }

                {
                    weight === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Weight</p>
                        <p className="mb-2">{weight}</p>
                    </div>
                }

                {
                    materials === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Body Material</p>
                        <p className="mb-2">{materials}</p>
                    </div>
                }

                {
                    colors === 'N' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Colors</p>
                        <p className="mb-2">{colors}</p>
                    </div>
                }


                <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Warranty Information</p>

                <div className="p-2 border-b">
                    <p className="text-gray-400">Warranty</p>
                    <p className="mb-2">{warranty}</p>
                </div>

            </div>
        </div>
    );
};

export default Specification;