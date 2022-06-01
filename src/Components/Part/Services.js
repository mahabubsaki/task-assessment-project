import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Utility/Loading';
import Service from './Service';
import ServiceModal from './ServiceModal';

const Services = () => {
    const [loading, setLoading] = useState(true)
    const [serviceModal, setServiceModal] = useState(null)
    const [services, setServices] = useState([])
    useEffect(() => {
        const getServices = async () => {
            const { data } = await axios.get('http://localhost:5000/services')
            setServices(data)
            setLoading(false)
        }
        getServices()
    }, [])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div id='services' className="w-full my-3">
            <h1 className="text-3xl text-center text-red-500 mb-4">Our Services</h1>
            <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setServiceModal={setServiceModal}
                    ></Service>)
                }
            </div>
            {serviceModal && <ServiceModal
                serviceModal={serviceModal}
                setServiceModal={setServiceModal}
            ></ServiceModal>}
        </div>
    );
};

export default Services;