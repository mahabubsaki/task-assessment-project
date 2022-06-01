import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Utility/Loading';
import Patient from './Patient';

const Doctors = () => {
    const [loading, setLoading] = useState(true)
    const [patients, setPatients] = useState([])
    useEffect(() => {
        const getPatients = async () => {
            const { data } = await axios.get('https://calm-beach-60014.herokuapp.com/patients')
            setPatients(data)
            setLoading(false)
        }
        getPatients()
    }, [])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-center text-2xl text-red-500 my-4">Patients Appointed to Meditech : {patients.length} </h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Appointed On</th>
                            <th>Appointed For</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => <Patient
                            no={index + 1}
                            key={patient._id}
                            patient={patient}
                        ></Patient>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Doctors;