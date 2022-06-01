import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Utility/Loading';
import Doctor from './Doctor';

const Hospital = () => {
    const [loading, setLoading] = useState(true)
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        const getDoctors = async () => {
            const { data } = await axios.get('http://localhost:5000/doctors')
            setDoctors(data)
            setLoading(false)
        }
        getDoctors()
    }, [])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-3xl text-center my-4">Meet our best Doctors</h1>
            <div className="w-5/6 lg:w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Hospital;