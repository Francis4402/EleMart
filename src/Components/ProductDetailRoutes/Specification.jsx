import {useLoaderData} from "react-router-dom";

const Specification = () => {

    const {size, displaytype, chipset, resolution, brightness, displayfeatures, cputype, gpu, ram, internalstorage, cardslot, rcamresolution, rcamfeatures, rvideorecording, fcamresolution, fcamfeatures, fcamvideorecording, speaker, audiofeatures, sim, wifi, bluetooth, gps, nfc, audiojack, operatingsystem, sensor, iprating, otherfeatures, batterytype, charging, dimension, weight, materials, colors, actype, technology, capacity, coverage, energysavingrating, capacityofcooling, noiselevel, compressortype, condenser, refrigeranttype, others, powertype, powerconsumption, acweight, drivermagnet, impedance, headphonesensitivity, inputjack, driverdiameter, connectivity, headphonesdimensions, headphonesweight, headphonescolor, headphonescablelength, microphoneSize, microphonesensitivity, microphonepickup, warranty, installationspolicy} = useLoaderData();

    return (
        <div className="my-6">
            <div className="bg-white p-4 rounded-lg">
                <h1 className="font-semibold text-xl">Specification</h1>

                {
                    displaytype === '' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Display</p>
                }

                {
                    size === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Size</p>
                        <p className="mb-2">{size}</p>
                    </div>
                }

                {
                    displaytype === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Display</p>
                        <p className="mb-2">{displaytype}</p>
                    </div>
                }

                {
                    resolution === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Resolution</p>
                        <p className="mb-2">{resolution}</p>
                    </div>
                }

                {
                    brightness === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Brightness</p>
                        <p className="mb-2">{brightness}</p>
                    </div>
                }

                {
                    displayfeatures === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Features</p>
                        <p className="mb-2">{displayfeatures}</p>
                    </div>
                }


                {
                    chipset === '' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Processor</p>
                }

                {
                    chipset === '' ? '' : <div className="px-2 border-b">
                        <p className="text-gray-400">Chipset</p>
                        <p className="mb-2">{chipset}</p>
                    </div>
                }

                {
                    cputype === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Cpu Type</p>
                        <p className="mb-2">{cputype}</p>
                    </div>
                }

                {
                    gpu === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">GPU</p>
                        <p className="mb-2">{gpu}</p>
                    </div>
                }

                {
                    ram === '' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Memory</p>
                }

                {
                    ram === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">RAM</p>
                        <p className="mb-2">{ram}</p>
                    </div>
                }

                {
                    internalstorage === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Internal Storage</p>
                        <p className="mb-2">{internalstorage}</p>
                    </div>
                }

                {
                    cardslot === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Card Slot</p>
                        <p className="mb-2">{cardslot}</p>
                    </div>
                }

                {
                    rcamresolution === '' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Rear Camera</p>
                }

                {
                    rcamresolution === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Resolution</p>
                        <p className="mb-2">{rcamresolution}</p>
                    </div>
                }

                {
                    rcamfeatures === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Features</p>
                        <p className="mb-2">{rcamfeatures}</p>
                    </div>
                }

                {
                    rvideorecording === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Video Recording</p>
                        <p className="mb-2">{rvideorecording}</p>
                    </div>
                }

                {
                    fcamresolution === '' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Front Camera</p>
                }

                {
                    fcamresolution === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Resolution</p>
                        <p className="mb-2">{fcamresolution}</p>
                    </div>
                }

                {
                    fcamfeatures === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Features</p>
                        <p className="mb-2">{fcamfeatures}</p>
                    </div>
                }

                {
                    fcamvideorecording === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Video Recording</p>
                        <p className="mb-2">{fcamvideorecording}</p>
                    </div>
                }

                {
                    speaker === '' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Audio</p>
                }

                {
                    speaker === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Speaker</p>
                        <p className="mb-2">{speaker}</p>
                    </div>
                }

                {
                    audiofeatures === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Audio Features</p>
                        <p className="mb-2">{audiofeatures}</p>
                    </div>
                }

                {
                    sim === '' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Network & Connectivity</p>
                }

                {
                    sim === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">SIM</p>
                        <p className="mb-2">{sim}</p>
                    </div>
                }

                {
                    wifi === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Wi-Fi</p>
                        <p className="mb-2">{wifi}</p>
                    </div>
                }

                {
                    bluetooth === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Bluetooth</p>
                        <p className="mb-2">{bluetooth}</p>
                    </div>
                }

                {
                    gps === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">GPS</p>
                        <p className="mb-2">{gps}</p>
                    </div>
                }

                {
                    nfc === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">NFC</p>
                        <p className="mb-2">{nfc}</p>
                    </div>
                }

                {
                    audiojack === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Audio Jack</p>
                        <p className="mb-2">{audiojack}</p>
                    </div>
                }

                {
                    operatingsystem === '' ? '' : <>
                        <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">OS</p>
                        <div className="p-2 border-b">
                            <p className="text-gray-400">Operating System</p>
                            <p className="mb-2">{operatingsystem}</p>
                        </div>
                    </>
                }

                {
                    otherfeatures === '' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Features</p>
                }


                {
                    sensor === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Sensor</p>
                        <p className="mb-2">{sensor}</p>
                    </div>
                }

                {
                    iprating === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">IP Rating</p>
                        <p className="mb-2">{iprating}</p>
                    </div>
                }

                {
                    otherfeatures === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Other Features</p>
                        <p className="mb-2">{otherfeatures}</p>
                    </div>
                }

                {
                    batterytype === '' ? '' : <>
                        <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Battery</p>

                        <div className="p-2 border-b">
                            <p className="text-gray-400">Battery Type</p>
                            <p className="mb-2">{batterytype}</p>
                        </div>
                    </>
                }

                {
                    charging === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Fast Charging</p>
                        <p className="mb-2">{charging}</p>
                    </div>
                }

                {
                    dimension === '' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Physical Specification</p>
                }


                {
                    dimension === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Dimension</p>
                        <p className="mb-2">{dimension}</p>
                    </div>
                }

                {
                    weight === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Weight</p>
                        <p className="mb-2">{weight}</p>
                    </div>
                }

                {
                    materials === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Body Material</p>
                        <p className="mb-2">{materials}</p>
                    </div>
                }

                {
                    colors === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Colors</p>
                        <p className="mb-2">{colors}</p>
                    </div>
                }

                {
                    actype === '' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Basic Information</p>
                }

                {
                    actype === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">AcType</p>
                        <p className="mb-2">{actype}</p>
                    </div>
                }

                {
                    technology === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Technology</p>
                        <p className="mb-2">{technology}</p>
                    </div>
                }

                {
                    capacity === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Capacity</p>
                        <p className="mb-2">{capacity}</p>
                    </div>
                }

                {
                    coverage === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Coverage</p>
                        <p className="mb-2">{coverage}</p>
                    </div>
                }

                {
                    energysavingrating === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">EnergySavingRating</p>
                        <p className="mb-2">{energysavingrating}</p>
                    </div>
                }

                {
                    capacityofcooling === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Capacity Of Cooling</p>
                        <p className="mb-2">{capacityofcooling}</p>
                    </div>
                }

                {
                    noiselevel === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Noise Level</p>
                        <p className="mb-2">{noiselevel}</p>
                    </div>
                }

                {
                    compressortype === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Compressor Type</p>
                        <p className="mb-2">{compressortype}</p>
                    </div>
                }

                {
                    condenser === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Condenser</p>
                        <p className="mb-2">{condenser}</p>
                    </div>
                }

                {
                    refrigeranttype === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Refrigerant Type</p>
                        <p className="mb-2">{refrigeranttype}</p>
                    </div>
                }

                {
                    others === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Others</p>
                        <p className="mb-2">{others}</p>
                    </div>
                }

                {
                    powertype === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Power Type</p>
                        <p className="mb-2">{powertype}</p>
                    </div>
                }

                {
                    powerconsumption === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Power Consumption</p>
                        <p className="mb-2">{powerconsumption}</p>
                    </div>
                }

                {
                    acweight === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">AC Weight</p>
                        <p className="mb-2">{acweight}</p>
                    </div>
                }

                {
                    drivermagnet === '' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Headphones Information</p>
                }

                {
                    drivermagnet === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">DriverMagnet</p>
                        <p className="mb-2">{drivermagnet}</p>
                    </div>
                }

                {
                    impedance === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Impedance</p>
                        <p className="mb-2">{impedance}</p>
                    </div>
                }

                {
                    headphonesensitivity === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Headphone Sensitivity</p>
                        <p className="mb-2">{headphonesensitivity}</p>
                    </div>
                }

                {
                    inputjack === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Input Jack</p>
                        <p className="mb-2">{inputjack}</p>
                    </div>
                }

                {
                    driverdiameter === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Driver Diameter</p>
                        <p className="mb-2">{driverdiameter}</p>
                    </div>
                }

                {
                    connectivity === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Connectivity</p>
                        <p className="mb-2">{connectivity}</p>
                    </div>
                }

                {
                    headphonesdimensions === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Headphones Dimensions</p>
                        <p className="mb-2">{headphonesdimensions}</p>
                    </div>
                }

                {
                    headphonesweight === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Headphones Weight</p>
                        <p className="mb-2">{headphonesweight}</p>
                    </div>
                }

                {
                    headphonescolor === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Headphones Color</p>
                        <p className="mb-2">{headphonescolor}</p>
                    </div>
                }

                {
                    headphonescablelength === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Headphones Cable Length</p>
                        <p className="mb-2">{headphonescablelength}</p>
                    </div>
                }

                {
                    microphoneSize === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Microphone Size</p>
                        <p className="mb-2">{microphoneSize}</p>
                    </div>
                }

                {
                    microphonesensitivity === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Microphone Sensitivity</p>
                        <p className="mb-2">{microphonesensitivity}</p>
                    </div>
                }

                {
                    microphonepickup === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Microphone Pickup</p>
                        <p className="mb-2">{microphonepickup}</p>
                    </div>
                }

                {
                    warranty === '' ? '' : <p className="font-semibold my-4 bg-gray-100 p-2 rounded-lg text-blue-700">Warranty Information</p>
                }

                {
                    warranty === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Warranty</p>
                        <p className="mb-2">{warranty}</p>
                    </div>
                }

                {
                    installationspolicy === '' ? '' : <div className="p-2 border-b">
                        <p className="text-gray-400">Installation Policy</p>
                        <p className="mb-2">{installationspolicy}</p>
                    </div>
                }

            </div>
        </div>
    );
};

export default Specification;