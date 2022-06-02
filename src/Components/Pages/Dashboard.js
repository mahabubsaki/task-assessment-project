import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Utility/CustomLink';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-info text-base-content">
                    <li><CustomLink to="/dashboard">Hospital Dashboard</CustomLink></li>
                    <li><CustomLink to="/dashboard/doctors">Doctors Overview</CustomLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;