import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Utility/CustomLink';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-info text-base-content">
                    <li><CustomLink to="/dashboard">Hospital Dashboard</CustomLink></li>
                    <li><CustomLink to="/dashboard/doctors">Doctors Overview</CustomLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;