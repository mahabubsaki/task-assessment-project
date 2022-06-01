import React from 'react';

const Doctor = ({ doctor }) => {
    const { doctorName, speciality, image } = doctor
    return (
        <div className="rounded-lg bg-success hover:bg-warning duration-500 cursor-pointer p-4 mx-2">
            <h1 className="text-center font-bold text-xl">Dr. {doctorName}</h1>
            <div className="my-4">
                <img src={image} alt="" className="w-full h-48 rounded-lg" />
            </div>
            <p className="font-semibold">Speciality : {speciality}</p>
        </div>
    );
};

export default Doctor;