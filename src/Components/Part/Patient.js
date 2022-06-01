import React from 'react';

const Patient = ({ patient, no }) => {
    const { name, date, service, state } = patient;
    return (
        <tr>
            <td>{no}</td>
            <td>{name}</td>
            <td>{date}</td>
            <td>{service}</td>
            <td>{state}</td>
        </tr>
    );
};

export default Patient;