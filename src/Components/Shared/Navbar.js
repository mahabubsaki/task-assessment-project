import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { signOut } from 'firebase/auth';
import { RiMenu3Line } from 'react-icons/ri'
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../Utility/CustomLink';
import auth from '../../firebase.init';
import Loading from '../Utility/Loading';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { pathname } = useLocation()
    const [user, loading] = useAuthState(auth)
    const handleSignout = () => {
        Swal.fire({
            text: 'Are you sure you want to sign out?',
            icon: 'question',
            title: "SignOut",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then(result => {
            if (result.isConfirmed) {
                signOut(auth)
            }
        })
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div class="navbar bg-primary">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 md:hidden">
                        <li><CustomLink to="/">Home</CustomLink></li>
                        {!user && <>
                            <li><CustomLink to="/login">Login</CustomLink></li>
                            <li><CustomLink to="/register">Register</CustomLink></li>
                        </>}
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><button className='btn btn-accent'>Sign Out</button></li>
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl"><img src={logo} alt="logo" className='w-10 mr-2' />Meditech</Link>
            </div>
            <div class="navbar-center hidden md:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><CustomLink to="/">Home</CustomLink></li>
                    {
                        !user && <>
                            <li><CustomLink to="/login">Login</CustomLink></li>
                            <li><CustomLink to="/register">Register</CustomLink></li>
                        </>
                    }
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    {user && <>
                        <li><button className='btn btn-warning' onClick={handleSignout}>Sign Out</button></li>
                    </>}
                </ul>
            </div>
            {
                pathname.includes('/dashboard') &&
                <div className="navbar-end lg:hidden">
                    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button"><RiMenu3Line className='text-xl'></RiMenu3Line></label>
                </div>
            }
        </div>
    );
};

export default Navbar;