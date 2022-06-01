import React from 'react';

const Service = ({ service, setServiceModal }) => {
    const { serviceName, cost, image, description } = service
    return (
        <div className="shadow-lg rounded-lg border p-4 flex flex-col justify-between">
            <div>
                <h1 className="text-2xl text-center mb-4 font-bold">{serviceName}</h1>
                <div className="relative">
                    <img src={image} alt="service" className="w-3/4 sm:w-full h-32 block mx-auto rounded-lg" />
                </div>
                <h1 className="my-4 text-xl font-bold">Price : ${cost}</h1>
                <p className="text-center">{description}</p>
            </div>
            <label onClick={() => setServiceModal(service)} for="my-modal-3" class="btn btn-success">Appoint Now</label>
        </div>
    );
};

export default Service;